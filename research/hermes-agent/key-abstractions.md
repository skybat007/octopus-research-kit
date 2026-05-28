# Key Abstractions

## 1. `AIAgent`

Location: `run_agent.py`

`AIAgent` is Hermes' Agent runtime facade. Its docstring says it is responsible for conversation, tool execution, and response handling. Constructor parameters cover context required by many entries: provider/model/toolsets/callbacks/platform/session and more. [H-004]

Lifecycle:

1. Constructor delegates complex initialization to `agent.agent_init.init_agent`.
2. `run_conversation()` delegates to `agent.conversation_loop.run_conversation`.
3. `chat()` is a simplified interface returning the final response from `run_conversation`.

Design implications:

- `AIAgent` is not a CLI-only object; it is the shared runtime unit for many entries.
- Many state facts are normalized during init, reducing duplicated config/tool handling in each entry.
- The facade is still large, showing backward-compatibility and parameter-convergence pressure.

## 2. `run_conversation`

Location: `agent/conversation_loop.py`

`run_conversation` is the main loop abstraction. The file header says it covers model calls, tool dispatch, retries, fallback, compression, hooks, memory/skill nudges, and related logic. [H-004]

Key responsibilities:

- Maintain turn state, iteration, tool-call state, and accumulated response.
- Build a stable system prompt before model calls and inject memory/context/plugin context. [H-004]
- Prefer streaming, with non-streaming fallback. [H-004]
- Parse and execute tool calls, handling JSON repair, validation, guardrails, concurrent execution, and error results. [H-004][H-006]
- Save trajectory, session, memory sync, and skill review at the end. [H-004]

Design implications:

- The main loop is the heart of the Agent framework; entry layers should mostly adapt transport/UI/platform.
- Hermes treats stable prompt caching as a hard constraint, avoiding mid-run system prompt/toolset changes that would break cache behavior.

## 3. `ToolRegistry`

Location: `tools/registry.py`

`ToolRegistry` is the central abstraction for tool registration and dispatch. Built-in tools self-register through module import; plugin tools enter the same registry through `PluginContext.register_tool`. [H-005][H-008]

Key mechanisms:

- `discover_builtin_tools()` imports tool modules and triggers registration. [H-005]
- Registry stores definitions, handlers, check functions, and a generation counter. [H-005]
- `register()` supports override semantics and bumps generation on changes. [H-005]
- `get_definitions()` can filter tool schema by availability checks. [H-005]
- `dispatch()` executes handlers and handles async bridge plus error wrapping. [H-005]

Design implications:

- Once tool entry is unified, built-in and plugin tools reuse the same schema/dispatch pipeline.
- The generation counter works with `model_tools` caching to avoid rebuilding tool schema every turn. [H-006]

## 4. Toolset

Location: `toolsets.py`

Toolset is a "tool capability package" abstraction defining which tools are enabled by default and which are enabled by platform/scenario. `model_tools.get_tool_definitions` combines toolsets, disabled toolsets, and registry generation to produce final model tool schema. [H-006][H-007]

Key points:

- `_HERMES_CORE_TOOLS` is the core tool set. [H-007]
- `TOOLSETS` defines capability packages such as shell, file, web, memory, and gateway. [H-007]
- `validate_toolset()` accepts built-in toolsets, plugin toolsets, and registry aliases. [H-007]
- Plugin toolsets enter the same display and filtering path. [H-008]

## 5. `CommandDef`

Location: `hermes_cli/commands.py`

`CommandDef` is the unified registration structure for slash/native commands. CLI, Gateway, Slack native commands, and plugin commands derive behavior from the central registry. [H-007][H-008]

Design implications:

- Commands are not hard-coded separately across entries. They are first registered as data structures, then consumed by different entries.
- Gateway known commands and plugin commands merge into one recognizable command set. [H-007]

## 6. `PluginManager` / `PluginContext`

Location: `hermes_cli/plugins.py`

The general plugin system discovers, loads, and invokes plugins. `PluginContext` is the plugin registration entry, supporting tools, hooks, CLI subcommands, slash commands, context engines, gateway platforms, provider-like capabilities, and read-only skills. [H-008]

Key mechanisms:

- Plugin sources include bundled, user, project, and pip entrypoints. [H-008]
- `VALID_HOOKS` covers tool, LLM/API, session, gateway dispatch, approval, and related lifecycle points. [H-008]
- Plugins are opt-in by default; some backend/platform plugins can auto-load. [H-008]
- `invoke_hook` fails open for individual plugin failures so extensions do not take down the main flow. [H-008]

## 7. `ProviderProfile`

Location: `providers/base.py`

`ProviderProfile` describes model-provider behavior while `AIAgent` still owns client construction and streaming. It centralizes provider differences into overridable methods such as message preparation, extra body, and API kwargs. [H-011]

Design implications:

- Provider plugins do not need to copy the Agent loop.
- Provider behavior is profile data plus a small number of hooks, instead of provider-specific `if/else` scattered through the main loop.

## 8. `MemoryProvider` / `MemoryManager`

Locations: `agent/memory_provider.py`, `agent/memory_manager.py`

`MemoryProvider` abstracts external long-term memory providers. It includes interfaces for availability, initialize, system prompt, prefetch, sync turn, tool schemas, and tool calls. [H-012]

`MemoryManager` manages built-in memory plus at most one external provider and isolates provider failures at the provider boundary. [H-012]

Design implications:

- Memory is not simple file IO; it participates in prompt, prefetch, tool schema, and turn sync.
- Allowing one external provider reduces conflict complexity among multiple long-term memory systems.

## 9. `MessageEvent` / `BasePlatformAdapter`

Location: `gateway/platforms/base.py`

Gateway platform adapters normalize Telegram/Slack/Discord/Email/SMS differences into `MessageEvent`, and `BasePlatformAdapter` provides send, streaming draft, active session, pending message, TTS, and related capabilities. [H-009]

Design implications:

- Platform differences should stop at the adapter boundary and not enter Agent core.
- Supporting streaming delivery requires a thicker adapter contract than plain `send(text)`.

## 10. `SessionSource` / `SessionContext` / `SessionStore`

Location: `gateway/session.py`

`SessionSource` represents source facts such as platform, chat, thread, user, and shared multi-user state. `SessionContext` is the Agent session context built by gateway. `SessionStore` uses SQLite by default and falls back to JSONL for session mappings. [H-009]

Design implications:

- Multi-platform agents must solve session identity before message processing.
- Hermes builds deterministic session keys, which fits cross-platform, group, thread, and user-level isolation.
