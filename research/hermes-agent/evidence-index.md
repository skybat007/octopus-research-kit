# Evidence Index

## 1. Version Information

This file is the evidence log that keeps key conclusions tied to evidence.

| Item | Value |
|---|---|
| Code source | `https://github.com/NousResearch/hermes-agent.git` |
| Project identifier | `hermes-agent` |
| branch/tag/commit | branch `main`, commit `cae7537359c0ba8fceedc0a6423a4d9f30972100` |
| Research date | 2026-05-25 |

## 2. Evidence Index

| Conclusion ID | Conclusion | Evidence type | Location | Confidence | Notes |
|---|---|---|---|---|---|
| <a id="H-001"></a>H-001 | Hermes Agent positions itself as a self-improving AI agent with capabilities including TUI, Messaging Gateway, learning loop, cron, delegation, multiple backends, and research batch | doc fact | `README.md:15`, `README.md:19-27`, `README.md:66-78`, `README.md:103-119`, `README.md:123-143` | high | README product positioning and entries |
| <a id="H-002"></a>H-002 | Package is `hermes-agent` `0.14.0`, Python `>=3.11`, console scripts include `hermes`, `hermes-agent`, `hermes-acp`, and dependencies use exact-pin/optional-extras strategy | source fact | `pyproject.toml:5-12`, `pyproject.toml:13-33`, `pyproject.toml:69-207`, `pyproject.toml:209-212`, `pyproject.toml:226-227` | high | Package and dependency strategy |
| <a id="H-003"></a>H-003 | CLI wrapper enters `hermes_cli.main.main`; main supports profile override, startup discovery, and default chat command | source fact | `hermes:1-11`, `hermes_cli/main.py:183-235`, `hermes_cli/main.py:10758-10799`, `hermes_cli/main.py:10928-10953` | high | CLI entry |
| <a id="H-004"></a>H-004 | `AIAgent` is the Agent facade; initialization delegates to `agent_init`, main loop delegates to `conversation_loop`; the loop covers prompt caching, context compression, streaming, tool calls, session/memory/skill finalization | source fact | `run_agent.py:326-331`, `run_agent.py:349-470`, `run_agent.py:4053-4078`, `agent/agent_init.py:907-927`, `agent/agent_init.py:966-1179`, `agent/agent_init.py:1414-1505`, `agent/conversation_loop.py:1-15`, `agent/conversation_loop.py:232-317`, `agent/conversation_loop.py:451-570`, `agent/conversation_loop.py:760-878`, `agent/conversation_loop.py:1097-1145`, `agent/conversation_loop.py:3195-3428`, `agent/conversation_loop.py:3889-4165` | high | Agent core |
| <a id="H-005"></a>H-005 | `ToolRegistry` is the tool registration and dispatch center; built-in tools self-register via import; registry has generation counter, availability checks, override, and async dispatch | source fact | `tools/registry.py:1-15`, `tools/registry.py:57-74`, `tools/registry.py:151-168`, `tools/registry.py:234-306`, `tools/registry.py:337-416` | high | Tool registration |
| <a id="H-006"></a>H-006 | `model_tools.py` turns registry into model tool schema, filters by toolset/disabled toolset, and handles hooks, approvals, dispatch, and error wrapping in `handle_function_call` | source fact | `model_tools.py:1-21`, `model_tools.py:243-326`, `model_tools.py:329-390`, `model_tools.py:741-899` | high | Tool orchestration |
| <a id="H-007"></a>H-007 | `toolsets.py` defines core tool sets and toolsets; command registry uses `CommandDef` for CLI/Gateway/Slack/plugin commands | source fact | `toolsets.py:29-73`, `toolsets.py:78-240`, `toolsets.py:767-825`, `hermes_cli/commands.py:1-8`, `hermes_cli/commands.py:45-130`, `hermes_cli/commands.py:228-326`, `hermes_cli/commands.py:1030-1089` | high | Toolsets and commands |
| <a id="H-008"></a>H-008 | General plugin system supports bundled/user/project/entrypoint sources; `PluginContext` can register tools, CLI/slash commands, hooks, context engines, provider-like capabilities, gateway platforms, and read-only skills; hook execution fails open | source fact | `hermes_cli/plugins.py:1-31`, `plugins.py:128-168`, `plugins.py:180-267`, `plugins.py:287-528`, `plugins.py:531-760`, `plugins.py:820-948`, `plugins.py:1170-1234`, `plugins.py:1296-1409`, `plugins.py:1428-1588` | high | Plugin control plane |
| <a id="H-009"></a>H-009 | Gateway uses `GatewayRunner`, `MessageEvent`, `BasePlatformAdapter`, `SessionSource`, and `SessionContext` to process multi-platform messages, session keys, cached/fresh AIAgent, and duplicate delivery protection | source fact | `gateway/run.py:1542-1590`, `gateway/run.py:3652-3725`, `gateway/run.py:6504-6605`, `gateway/run.py:7574-7615`, `gateway/run.py:7630-7668`, `gateway/run.py:7991-8007`, `gateway/run.py:15490-15538`, `gateway/run.py:16337-16403`, `gateway/run.py:16801-16808`, `gateway/run.py:17634-17668`, `gateway/platforms/base.py:999-1103`, `gateway/platforms/base.py:1141-1156`, `gateway/platforms/base.py:1370-1485`, `gateway/session.py:71-179`, `gateway/session.py:579-691`, `gateway/session.py:1313-1348` | high | Gateway runtime surface |
| <a id="H-010"></a>H-010 | Gateway platform registry lets plugin platforms take priority over built-in if/elif adapter creation; `ADDING_A_PLATFORM` recommends the plugin path | source fact | `gateway/platform_registry.py:1-10`, `platform_registry.py:38-187`, `platform_registry.py:208-240`, `gateway/run.py:5960-6125`, `gateway/platforms/ADDING_A_PLATFORM.md:1-15`, `ADDING_A_PLATFORM.md:17-43`, `ADDING_A_PLATFORM.md:71-115` | high | Platform extension |
| <a id="H-011"></a>H-011 | Provider Profile describes provider behavior; provider lazy discovery supports bundled/user/legacy and user-overrides-bundled, with downstream wiring to auth/models/doctor/config/runtime/transport/run_agent | source fact | `providers/base.py:1-9`, `providers/base.py:38-129`, `providers/__init__.py:1-29`, `providers/__init__.py:53-88`, `providers/__init__.py:140-190`, `providers/README.md:29-53` | high | Model provider |
| <a id="H-012"></a>H-012 | Memory Provider has system prompt, prefetch, sync_turn, tool schemas, and tool-call interfaces; MemoryManager allows only one external provider and isolates failures | source fact | `agent/memory_provider.py:1-31`, `memory_provider.py:42-137`, `agent/memory_manager.py:244-340`, `plugins/memory/__init__.py:1-20`, `plugins/memory/__init__.py:67-181` | high | Memory system |
| <a id="H-013"></a>H-013 | TUI gateway connects Node/Ink TUI to Python Agent via stdio JSON-RPC; stdout is protocol-only, slow handlers use a thread pool, and method registry covers session/prompt/approval/slash/tools/cron/skills/shell/browser | source fact | `tui_gateway/entry.py:1-23`, `entry.py:187-240`, `tui_gateway/server.py:37-75`, `server.py:137-180`, `server.py:364-464`, `server.py:2000`, `server.py:2233-2856`, `server.py:3140-3388`, `server.py:3869-3894`, `server.py:5658-6738` | high | TUI bridge |
| <a id="H-014"></a>H-014 | `cmd_chat` handles resume/continue, first-run setup, TUI branch, startup env flags, and eventually calls `cli.main(**kwargs)` | source fact | `hermes_cli/main.py:1624-1807` | high | CLI chat |
| <a id="H-015"></a>H-015 | ACP adapter reserves stdout for JSON-RPC, loads env, supports check/setup/setup-browser, discovers MCP tools at startup, and runs `HermesACPAgent` | source fact | `acp_adapter/entry.py:1-14`, `entry.py:75-109`, `entry.py:111-181`, `entry.py:184-260` | high | ACP entry |
| <a id="H-016"></a>H-016 | Cron jobs live under Hermes home; scheduler is called by gateway background every 60 seconds and uses file lock, profile context, toolset resolution, prompt-injection scan, and output/delivery mechanisms | source fact | `cron/jobs.py:1-6`, `cron/jobs.py:37-47`, `cron/jobs.py:137-159`, `cron/jobs.py:187-240`, `cron/scheduler.py:1-9`, `scheduler.py:47-88`, `scheduler.py:90-132`, `scheduler.py:150-240` | high | Cron |

## 3. Inference Chains

| Inference ID | Depends on Evidence | Reasoning | Pending Validation |
|---|---|---|---|
| <a id="INF-001"></a>INF-001 | H-003, H-004, H-013, H-015, H-016 | Many entries eventually construct or call `AIAgent`, so Hermes' core architecture is entry adapters converging on one Agent runtime | Run a minimal CLI/TUI/Gateway/ACP turn to confirm live behavior |
| <a id="INF-002"></a>INF-002 | H-005, H-006, H-007, H-008 | Built-in and plugin tools enter ToolRegistry, then model_tools/toolsets expose and execute them, so the tool system is registry-first | Dynamically install a plugin tool and observe schema/dispatch |
| <a id="INF-003"></a>INF-003 | H-008, H-010, H-011, H-012 | General plugins, providers, memory, and platforms have different contracts, so Hermes tends to layer extension by problem domain instead of using a single hook model | Sample provider, memory, and platform plugins for consistency |
| <a id="INF-004"></a>INF-004 | H-009, H-016 | Gateway and cron both handle profile/session/delivery/toolset, so background and messaging entries share many runtime boundaries | Start gateway cron tick and observe real delivery plus silent marker |

## 4. Pending

- Full session persistence details in `cli.py` interactive loop.
- How TUI frontend `ui-tui` consumes `message.delta` and activity events.
- Gateway cached `AIAgent` invalidation policy.
- Real availability and failure isolation behavior across memory providers.
- Consistency of configuration validation between platform plugins and built-in adapters.

## 5. External Evidence Additions

| Conclusion ID | Conclusion | Evidence type | Credibility Level | Source | Source verified | Confidence | Notes |
|---|---|---|---|---|---|---|---|
| <a id="EXT-HA-001"></a>EXT-HA-001 | Official README/docs position Hermes as a multi-entry self-improving agent covering CLI/TUI/Gateway/cron/skills/memory/providers | official fact | A | https://github.com/NousResearch/hermes-agent, https://hermes-agent.nousresearch.com/docs/developer-guide/architecture | yes | high | Corresponds to `H-001`, `H-003`, `H-004`, `H-013`-`H-016` |
| <a id="EXT-HA-002"></a>EXT-HA-002 | Official Toolsets docs describe toolsets as bundles that control tool capability by platform/session/task | official fact | A | https://hermes-agent.nousresearch.com/docs/reference/toolsets-reference | yes | high | Corresponds to `H-005`, `H-006`, `H-007` |
| <a id="EXT-HA-003"></a>EXT-HA-003 | Official Plugins docs say plugins can register tools, hooks, slash commands, platform/provider integrations, and more | official fact | A | https://hermes-agent.nousresearch.com/docs/user-guide/features/plugins | yes | high | Corresponds to `H-008`, `H-010`, `H-011`, `H-012` |
| <a id="EXT-HA-004"></a>EXT-HA-004 | Official Messaging Gateway docs emphasize messaging sessions, allowlist/pairing, security defaults, and delivery | official fact | A | https://hermes-agent.nousresearch.com/docs/user-guide/messaging | partly | medium | Gateway structure verified; platform security details pending sampling |
| <a id="EXT-HA-005"></a>EXT-HA-005 | Official Memory Providers docs say built-in memory is always enabled but only one external provider can be active at a time | official fact | A | https://hermes-agent.nousresearch.com/docs/user-guide/features/memory-providers | yes | high | Corresponds to `H-012` |
