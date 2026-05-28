# Source Map

## 1. Snapshot Information

| Item | Value |
|---|---|
| Project identifier | `hermes-agent` |
| branch | `main` |
| commit | `cae7537359c0ba8fceedc0a6423a4d9f30972100` |
| remote | `https://github.com/NousResearch/hermes-agent.git` |
| Workspace state | Untracked `.idea/` and `tinker-atropos/` existed; this pass did not modify the target repository |
| source-inventory | `references/source-inventory.json`, 3636 files |

## 2. Entry Files

| Entry | File | Notes |
|---|---|---|
| `hermes` wrapper | `hermes` | Local script importing `hermes_cli.main.main` to run CLI |
| Python console script | `pyproject.toml` | Three entries: `hermes`, `hermes-agent`, `hermes-acp` |
| CLI main | `hermes_cli/main.py` | argparse command tree, profile override, startup discovery, chat/gateway/acp/setup commands |
| Chat CLI | `cli.py` | Traditional interactive CLI; `cmd_chat` eventually imports and calls it |
| Agent runtime | `run_agent.py` | `AIAgent` facade class, delegating to `agent/*` |
| Conversation loop | `agent/conversation_loop.py` | Core model call, tool call, context compression, hooks, persistence loop |
| Gateway | `gateway/run.py` | Multi-platform message entry and delivery runtime |
| TUI gateway | `tui_gateway/entry.py`, `tui_gateway/server.py` | JSON-RPC bridge between TUI frontend and Python agent core |
| ACP adapter | `acp_adapter/entry.py` | ACP stdio server entry |
| Cron | `cron/jobs.py`, `cron/scheduler.py` | Scheduled-task storage, parsing, and execution |

## 3. Main Directories

| Directory | Responsibility |
|---|---|
| `agent/` | Agent initialization, main loop, memory provider, context, LSP/transport/secrets runtime support |
| `tools/` | Built-in tools, registry, execution environments, MCP tools, browser/file/shell tool implementations |
| `hermes_cli/` | CLI commands, config, profiles, plugin discovery, slash command, doctor/setup/update |
| `gateway/` | Gateway runner, platform adapters, session model, platform registry, platform config |
| `gateway/platforms/` | Platform adapter base and built-in Telegram/Slack/Discord/WhatsApp/Signal implementations |
| `plugins/` | Bundled plugins, memory plugins, model provider plugins |
| `providers/` | Provider Profile base, discovery, and registration logic |
| `cron/` | Cron job model, scheduler, delivery |
| `tui_gateway/` | TUI bridge server, transport, render, slash worker |
| `ui-tui/` | Ink/Node TUI frontend |
| `acp_adapter/` | Agent Client Protocol adapter |
| `skills/`, `optional-skills/` | Hermes skill resources |
| `tests/` | Unit/integration tests covering tools, gateway, plugins, TUI, cron, and more |
| `docs/` | User docs and architecture/tool/security/MCP/Memory/Skills docs |

## 4. Core File Size

| File | Lines | Observation |
|---|---:|---|
| `gateway/run.py` | 18270 | Gateway aggregates extensive platform, session, agent scheduling, and delivery logic |
| `hermes_cli/main.py` | 13817 | CLI command tree and startup flow are highly concentrated |
| `run_agent.py` | 4309 | Agent facade is still large, but the core loop has moved into `agent/conversation_loop.py` |
| `gateway/platforms/base.py` | 3923 | Platform message model and adapter contract are centralized here |
| `hermes_cli/commands.py` | 1819 | Slash/native command registry |
| `hermes_cli/plugins.py` | 1593 | General plugin discovery, registration, and hook execution |
| `gateway/session.py` | 1348 | Session identity, context, store |
| `model_tools.py` | 923 | Tool schema generation and tool-call dispatch |
| `toolsets.py` | 866 | Toolset definitions and filtering |

## 5. Suggested Reading Order

1. `README.md` and `pyproject.toml`: confirm product positioning, capability table, entries, and dependency strategy. [H-001][H-002]
2. `hermes_cli/main.py`: inspect `main()`, `_apply_profile_override()`, `cmd_chat()`, and `_prepare_agent_startup()` to understand how CLI enters runtime. [H-003][H-014]
3. `run_agent.py`: inspect `AIAgent` construction, `run_conversation()`, and `chat()` to understand the Agent facade. [H-004]
4. `agent/agent_init.py` and `agent/conversation_loop.py`: understand initialization, system prompt, context compression, tool definitions, hooks, memory, and result finalization. [H-004]
5. `tools/registry.py`, `model_tools.py`, `toolsets.py`: understand tool registration, schema generation, toolset gating, and dispatch. [H-005][H-006][H-007]
6. `hermes_cli/plugins.py`, `providers/*`, `plugins/memory/*`, `gateway/platform_registry.py`: understand extension-point layering. [H-008][H-010][H-011][H-012]
7. `gateway/run.py`, `gateway/session.py`, `gateway/platforms/base.py`: understand how external messages enter Agent, how sessions are determined, and how responses are delivered. [H-009]
8. `tui_gateway/entry.py`, `tui_gateway/server.py`, `cron/*`, `acp_adapter/*`: understand how non-CLI entries connect to the same core. [H-013][H-015][H-016]

## 6. Directories Worth Deeper Follow-Up

- `tests/gateway*`, `tests/test_*plugin*`, `tests/test_*cron*`: useful for validating static inferences.
- `ui-tui/src`: frontend state machine and event consumption were not expanded.
- `plugins/model-providers/*`: real differences between Provider Profiles.
- `gateway/platforms/*`: platform adapter consistency and special boundaries.
- `tools/environments/*`: runtime constraints for tool execution sandbox, shell, and browser.
