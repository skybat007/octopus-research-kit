# Extension Points

## 1. Extension Point Overview

Hermes extension points are not a single plugin layer. They are several entries aimed at different problem domains:

| Extension Point | Entry | Main Use |
|---|---|---|
| Built-in tool | `tools/*.py` + `tools.registry.register` | Built-in tools |
| Plugin tool | `PluginContext.register_tool` | User/project/package plugin tools |
| Toolset | `toolsets.py` + plugin toolsets | Organize tool capability by scenario |
| Slash/CLI command | `hermes_cli/commands.py`, `PluginContext.register_slash_command` | Command-surface extension |
| Hook | `PluginContext.register_hook` | Lifecycle extension for LLM, tools, sessions, gateway, and more |
| Provider Profile | `providers/*`, `plugins/model-providers/*` | Model provider differences |
| Memory Provider | `plugins/memory/*` | External long-term memory |
| Gateway Platform | `gateway/platform_registry.py` | New messaging platforms |
| Context Engine | `PluginContext.register_context_engine` | Context compression/injection strategy |
| ACP/MCP/Browser/Image/Web providers | plugin/provider registration APIs | Specialized capability backends |

## 2. Tool Extension

Built-in tool path:

1. Put a new tool module under `tools/`.
2. Call `registry.register(...)` during module import.
3. `discover_builtin_tools()` imports the tool module and triggers registration. [H-005]
4. `model_tools.get_tool_definitions()` reads schema from registry and applies toolset/disabled-toolset filtering. [H-006]
5. After the model emits a tool call, `model_tools.handle_function_call()` dispatches through registry. [H-006]

Plugin tool path:

1. Plugin is discovered and loaded by `discover_plugins()`.
2. Plugin `register(ctx)` calls `ctx.register_tool(...)`.
3. `PluginContext` delegates internally to `tools.registry.register`. [H-008]
4. Subsequent schema/filter/dispatch steps share the same path as built-in tools.

Learning points:

- Tool extension is not only "can register." After registration, a tool must enter the same cache, filtering, display, and execution path.
- Toolsets make tool exposure configurable instead of exposing every tool to the model.

## 3. Hook Extension

`VALID_HOOKS` covers:

- Before/after tools: `pre_tool_call`, `post_tool_call`, `transform_tool_result`
- Before/after LLM/API: `pre_llm_call`, `post_llm_call`, `pre_api_request`, `post_api_response`
- Session lifecycle: session start/end, turn start/end, and related points
- Gateway dispatch, approval, and other entry boundaries. [H-008]

Execution characteristics:

- `invoke_hook` fails open on individual plugin errors to keep the main flow from being taken down by extension failures. [H-008]
- `pre_tool_call` supports block results, so it can be used for approval or safety policy. [H-008]
- `conversation_loop` calls hooks before/after model calls, before/after tool calls, during context injection, and in related positions. [H-004][H-008]

Risks:

- A broad hook surface makes runtime behavior implicit and needs strong constraints plus observable logs.
- Hooks that modify prompt/context/tool result can affect prompt caching and debugging.

## 4. Provider Profile

Provider Profile describes model-provider behavior without copying a separate Agent loop for every provider. [H-011]

Registration/discovery:

- Provider Profiles can come from bundled or user plugin directories.
- `providers.__init__` performs lazy discovery and supports user override of bundled providers. [H-011]
- `register_provider` registers names/aliases; `get_provider` and `list_providers` trigger discovery. [H-011]

Extensible behavior:

- Message preparation
- Extra body
- API kwargs extras
- Runtime provider metadata
- Downstream wiring for auth/models/doctor/config/transport is described in `providers/README.md`. [H-011]

## 5. Memory Provider

Memory Provider is a dedicated extension channel, not just a normal plugin hook. [H-012]

Lifecycle:

1. `plugins/memory` discovers providers from bundled and user directories.
2. `agent_init` activates one external provider based on `memory.provider`.
3. Provider can contribute system prompt, prefetch, sync_turn, tool schemas, and tool-call handlers.
4. `MemoryManager` orchestrates it with built-in memory and isolates provider failures. [H-012]

Design boundary:

- Only one external memory provider is allowed, reducing the risk of multiple long-term memory systems overwriting or duplicating injection.
- Memory tool schemas enter toolset gating and dedup logic; they are not added unconditionally. [H-012]

## 6. Gateway Platform Plugin

Gateway Platform extension adds new messaging platforms. [H-010]

Path:

1. Plugin calls `register_gateway_platform`.
2. Platform information enters `gateway/platform_registry.py`.
3. `GatewayRunner._create_adapter` queries the plugin platform registry first.
4. If not found, it falls back to built-in if/elif platform adapters. [H-009][H-010]

Platform entries can describe:

- Adapter factory
- Env/config requirements
- Cron/notification target
- Standalone hooks
- Config validation [H-010]

`ADDING_A_PLATFORM.md` recommends adding new platforms through the plugin path and lists required methods plus key patterns for built-in adapters. [H-010]

## 7. Command Extension

Command extension has two layers:

- Static commands: `CommandDef` registry in `hermes_cli/commands.py`.
- Plugin commands: `PluginContext.register_cli_subcommand` and `register_slash_command`. [H-007][H-008]

Consumers:

- CLI interactive commands.
- Gateway known commands.
- Slack native slash commands.
- TUI `slash.exec` and completion. [H-007][H-013]

Design point:

- Commands as data structures can be shared by different entries, avoiding separate command tables for CLI/Gateway/TUI.

## 8. Context Engine Extension

`agent_init` supports a plugin context engine or built-in compressor. It injects context-engine tool schemas into tool schema while still applying gating/dedup. [H-004][H-008]

Design points:

- Context compression is a runtime capability and may also be model-visible, so it must integrate with the tool schema path.
- `conversation_loop` performs context compression during preflight and injects context before model calls. [H-004]

## 9. Extension Tradeoffs

Worth learning:

- Split extension points by problem domain: Provider, Memory, and Platform are not forced into one generic plugin interface.
- All tools eventually enter one Registry, reducing execution-path branching.
- Plugin hooks fail open, reducing system-level impact from extension failures.
- Platform plugins take priority over built-in if/elif paths, so new platforms can be added without modifying core paths.

Use caution:

- Too many extension points raise comprehension cost.
- Hook permission boundaries, load order, and conflict handling need clear documentation.
- Gateway platform adapter contract is thick, so adding a platform is not trivial.
