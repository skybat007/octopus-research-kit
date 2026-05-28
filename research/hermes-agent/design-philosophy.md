# Design Philosophy

## 1. Many Entries, Shared Core

Hermes Agent's clearest design idea is that there can be many entries, but ideally only one Agent core. Official README/docs show CLI, TUI, Gateway, ACP, cron, and related capabilities. Local source shows they return to `AIAgent` and `run_conversation`: entry layers adapt input/output, while runtime handles model, tools, memory, context, and persistence. [H-003][H-004][H-013][H-015][H-016][EXT-HA-001]

Value:

- User experience can vary while runtime capability remains consistent.
- Tools, memory, providers, and hooks do not need to be implemented separately per entry.
- CLI/TUI/Gateway behavior differences are easier to locate at the entry layer.

Cost:

- `AIAgent` has many initialization parameters, so entry facts keep converging into the core object.
- Shared core requires high stability for sessions, profiles, toolsets, and system prompt.

## 2. Stable System Prompt First

`conversation_loop` explicitly builds and restores the cached system prompt and injects plugin/memory/context into the current user message instead of freely modifying the system prompt. [H-004]

Design implications:

- Prompt caching is an important runtime optimization and an architecture constraint.
- Changing system prompt/tool schema mid-run amplifies cache invalidation and behavior inconsistency risk.
- Extension points should have clear injection positions instead of rewriting the core prompt arbitrarily.

## 3. Registry-Driven Tools Instead of Scattered Dispatch

Official Toolsets docs describe tool capability control as selecting tool bundles by platform/session/task. In source, this design lands in `ToolRegistry`, `model_tools`, and `toolsets.py`: built-in tools and plugin tools ultimately enter registry, then schema generation, toolset filtering, and dispatch are unified. [H-005][H-006][EXT-HA-002]

Design implications:

- Tool schema, availability, dispatch, and error wrapping have one path.
- Plugin tools can be consumed by the same toolset, UI, and model-call pipeline.
- Generation counter + cache can reduce schema construction cost.

Cost:

- Tool module imports have side effects, so import timing needs constraints.
- Registry must handle override, alias, availability, and cache consistency.

## 4. Extension Points Layered by Problem Domain

Hermes does not put every capability into one plugin interface. It splits them into:

- General plugins: tools, hooks, commands, context engines, gateway platforms, and more. [H-008]
- Provider Profile: model provider differences. [H-011]
- Memory Provider: long-term memory systems. [H-012]
- Gateway Platform: messaging platform adapters. [H-010]

Value:

- Each extension point can use a contract that fits its domain.
- Provider and Memory do not need to be simulated through fragile generic hooks.
- Gateway Platform can own a complete adapter lifecycle.

Cost:

- New readers need an extension-point map first.
- Plugin conflicts, load order, enablement policy, and trust boundaries need stronger documentation support.

## 5. Session Identity Is Infrastructure for Multi-Platform Agents

Gateway's `SessionSource`, `SessionContext`, and session-key construction show that Hermes treats session identity as first-class. Platform, chat, thread, user, shared multi-user state, and related facts all enter session construction. [H-009]

Design implications:

- Multi-platform systems cannot route only by a crude "user id" or "chat id."
- Group chats, threads, DMs, shared sessions, and platform source all need to be part of the identity model.
- Session keys need to be stable, explainable, and persistable.

## 6. Profile Isolation and Operability

CLI pre-parses profile before the full parser and sets `HERMES_HOME`. Cron jobs also support profile context, temporarily switching Hermes home and environment variables during execution, then restoring them. [H-003][H-016]

Design implications:

- Local-first agents naturally face multiple configs, identities, model keys, and work directories.
- Profile should take effect as early as possible to avoid modules reading the wrong config.
- Scheduled and background flows need special attention to environment-variable isolation.

## 7. Fail-Open Plugin Hooks

General plugin hooks tend to fail open, so an individual plugin exception does not directly interrupt the main flow. [H-008]

Value:

- Plugin ecosystem failures are less likely to take down core conversation.
- Friendlier to project/user plugins installed by users.

Risk:

- If plugin failures are only swallowed, observability suffers.
- Safety hooks need separate fail-open/fail-closed policy; one rule does not fit all.

## 8. Real-World Tradeoffs Behind Large Entry Files

`gateway/run.py` and `hermes_cli/main.py` are both very large. They carry real-world compatibility, platform differences, configuration, upgrades, error recovery, and user-experience logic.

The lesson is not "large files are good," but what they reveal:

- Multi-entry Agent complexity first accumulates at boundaries.
- Platform adapters, auth, sessions, streaming delivery, and agent scheduling are hard to isolate completely.
- When a project rapidly supports many platforms, tests and docs must continuously control boundary complexity.

## 9. Summary

Hermes Agent's core ideas can be summarized as:

- Diverse entries, unified runtime.
- Tool registration through registry; commands as data.
- Provider/Memory/Platform contracts by problem domain.
- Stable system prompt first.
- Multi-platform messaging starts with an identity model.
- Plugin failures are isolated, but observability must remain.
