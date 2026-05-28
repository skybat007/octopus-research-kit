# Runtime Flows

## 1. CLI Chat Startup Path

```mermaid
sequenceDiagram
  participant User
  participant Main as hermes_cli.main
  participant CLI as cli.py
  participant Agent as AIAgent
  participant ConvLoop as conversation_loop
  participant Tools as model_tools/registry
  participant Provider as Provider client

  User->>Main: hermes chat / default command
  Main->>Main: profile override + startup discovery
  Main->>Main: cmd_chat first-run/setup/env/tool options
  Main->>CLI: cli.main(**kwargs)
  CLI->>Agent: construct AIAgent
  Agent->>Agent: agent_init.init_agent
  Agent->>ConvLoop: run_conversation
  ConvLoop->>Provider: streaming API call
  Provider-->>ConvLoop: text/tool calls
  ConvLoop->>Tools: execute tool calls
  Tools-->>ConvLoop: tool results
  ConvLoop-->>CLI: final result/session state
```

Key state:

- `main()` builds the parser and defaults to chat command. [H-003]
- `_apply_profile_override()` pre-parses profile before the full parser and sets `HERMES_HOME`. [H-003]
- `_prepare_agent_startup()` performs startup discovery for agent-running commands, including plugins, MCP tools, and shell hooks. [H-003]
- `cmd_chat()` handles continue/resume, first-run setup, TUI branch, yolo/ignore rules/env pins, then imports and runs `cli.main`. [H-014]
- `AIAgent` construction delegates to `agent_init`; `run_conversation()` delegates to `conversation_loop`. [H-004]

## 2. Agent Turn Main Loop

```mermaid
flowchart TD
  Start["run_conversation"] --> Runtime["create runtime/session/log/task context"]
  Runtime --> Prompt["stable system prompt restore/build"]
  Prompt --> Compress["preflight context compression"]
  Compress --> Hook1["pre_llm_call hook/context injection"]
  Hook1 --> Messages["build API messages"]
  Messages --> Cache["prompt caching sanitization"]
  Cache --> API["streaming model call, fallback non-streaming"]
  API --> HasTool{"tool calls?"}
  HasTool -- yes --> ToolPrep["validate/repair/guardrail"]
  ToolPrep --> ToolExec["_execute_tool_calls -> model_tools"]
  ToolExec --> Messages
  HasTool -- no --> Done["completion / trajectory / session persistence"]
  Done --> Background["skill review / memory sync"]
```

Key state:

- The loop starts by establishing DB session, runtime main, logging, and task id isolation. [H-004]
- System prompt is built once and restored later to avoid breaking prompt caching. [H-004]
- Preflight context compression runs before model calls. [H-004]
- Plugin/memory context is injected into the current user message, while stable system prompt is prepended as a separate system message. [H-004]
- Streaming API is the preferred path; non-streaming is fallback. [H-004]
- At max iterations, the loop requests a final summary without tools. [H-004]
- Finalization includes completion determination, trajectory save, cleanup, session persistence, skill review, and memory sync. [H-004]

## 3. Tool Call Execution Path

```mermaid
sequenceDiagram
  participant ToolMod as tools/*.py
  participant Registry as ToolRegistry
  participant ModelTools as model_tools
  participant ConvLoop as conversation_loop
  participant LLM

  ToolMod->>Registry: register(definition, handler, check_fn)
  ModelTools->>Registry: get_definitions()
  ModelTools->>ModelTools: apply toolsets / disabled toolsets / cache
  ConvLoop->>LLM: send tool schemas
  LLM-->>ConvLoop: tool call
  ConvLoop->>ConvLoop: validate args / JSON repair / guardrail
  ConvLoop->>ModelTools: handle_function_call(name, args)
  ModelTools->>ModelTools: pre_tool_call hooks / ACP approvals
  ModelTools->>Registry: dispatch(name, args)
  Registry-->>ModelTools: handler result
  ModelTools->>ModelTools: post hooks / transform result
  ModelTools-->>ConvLoop: tool result message
```

Key state:

- `discover_builtin_tools()` triggers self-registration through imports. [H-005]
- Registry generation counter participates in the `get_tool_definitions` cache key. [H-005][H-006]
- `model_tools` applies toolset filtering and disabled subtraction first; plugin tools use the same path. [H-006]
- `handle_function_call` handles argument correction, pre_tool_call hook, ACP edit approval, registry dispatch, post hooks, and error wrapping. [H-006]
- The outer `conversation_loop` handles tool-call JSON repair, retry, guardrails, and `_execute_tool_calls`. [H-004]

## 4. Gateway Inbound Message Path

```mermaid
sequenceDiagram
  participant Platform
  participant Adapter as BasePlatformAdapter
  participant Runner as GatewayRunner
  participant Session as gateway.session
  participant Agent as AIAgent
  participant ConvLoop as run_conversation
  participant Delivery

  Platform->>Adapter: inbound message/event
  Adapter->>Runner: MessageEvent
  Runner->>Runner: pre_gateway_dispatch hook
  Runner->>Runner: auth / pairing / control command guards
  Runner->>Session: build SessionSource/SessionContext/session key
  Runner->>Runner: pending sentinel to avoid duplicate agent
  Runner->>Agent: cached or fresh AIAgent
  Agent->>ConvLoop: run_conversation(history/task id)
  ConvLoop-->>Runner: streaming/final output
  Runner->>Delivery: avoid duplicate final delivery if stream already sent
  Delivery->>Adapter: platform send/update
```

Key state:

- `GatewayRunner` manages platform adapters and checks the plugin platform registry first in `_create_adapter`. [H-009][H-010]
- `_handle_message` invokes `pre_gateway_dispatch` hook first, then auth/pairing logic. [H-009]
- Gateway uses a pending sentinel to claim a session and avoid duplicate agent starts for the same session. [H-009]
- `_run_agent` runs in a thread pool, supports interrupt, and passes platform/user/session/gateway_session_key/session_db/fallback_model into `AIAgent`. [H-009]
- Gateway reuses cached `AIAgent` by config signature or creates a fresh one. [H-009]
- If streaming has already delivered, final delivery avoids sending again. [H-009]

## 5. TUI RPC Path

```mermaid
flowchart LR
  UI["ui-tui"] --> STDIN["stdio JSON-RPC"]
  STDIN --> Entry["tui_gateway.entry"]
  Entry --> Server["tui_gateway.server dispatch"]
  Server --> Method["method registry"]
  Method --> Prompt["prompt.submit"]
  Prompt --> Agent["AIAgent"]
  Agent --> Event["message.delta / events"]
  Event --> STDOUT["stdout JSON-RPC only"]
  STDOUT --> UI
```

Key state:

- `entry.py` removes CWD shadowing risk from `sys.path`, installs signal/exit logging, and reserves stdout for JSON-RPC. [H-013]
- Startup discovers MCP tools when needed, then sends `gateway.ready`. [H-013]
- `server.py` moves long-running handlers to a thread pool so requests such as `approval.respond` and `session.interrupt` do not block on stdin. [H-013]
- RPC methods are registered with `@method(...)` and include session, prompt, approval, slash, tools, cron, skills, shell, browser, and more. [H-013]
- The `prompt.submit` path imports `AIAgent` and emits events such as `message.delta`. [H-013]

## 6. Cron Execution Path

```mermaid
flowchart TD
  Job["jobs.json"] --> Scheduler["cron.scheduler.tick"]
  Scheduler --> Lock["file lock .tick.lock"]
  Lock --> Due["get_due_jobs"]
  Due --> Profile["optional job profile context"]
  Profile --> Prompt["build job prompt + injection scan"]
  Prompt --> Agent["AIAgent with cron toolsets"]
  Agent --> Output["save output markdown"]
  Output --> Delivery["home target delivery or silent marker"]
```

Key state:

- Cron jobs live in `~/.hermes/cron/jobs.json`; output is saved under `~/.hermes/cron/output/{job_id}/{timestamp}.md`. [H-016]
- Jobs file writes use an in-process lock, and directories/files are owner-only. [H-016]
- Scheduler `tick()` is called by the gateway background thread every 60 seconds and uses a file lock to avoid multi-process overlap. [H-016]
- Cron toolsets first check per-job `enabled_toolsets`, then platform `cron` tools config, and fall back to defaults on failure. [H-016]
- Scheduled tasks support profile context, so a job can run under a specific Hermes profile while isolating temporary environment-variable changes. [H-016]
- Prompt injection scanner checks the assembled prompt, including skill content. [H-016]
