# Comparison

## 1. Comparison Boundary

This file is not a full comparative evaluation. It is based only on this Hermes Agent research pass and the completed OpenClaw research, and records dimensions that can be reused for a future same-scope comparison. Current conclusions are architecture observations, not a feature or quality ranking.

## 2. Comparison Dimensions

| Dimension | Hermes Agent Observation | Question for Comparison |
|---|---|---|
| Product entries | CLI, TUI, Gateway, ACP, and cron are all important; entries ultimately return to `AIAgent` | Does the peer project have one unified runtime or separate logic per entry? |
| Agent core | `AIAgent` facade + `agent_init` + `conversation_loop` | Is core decoupled from channels, UI, and platform adapters? |
| Tool system | `ToolRegistry` + `model_tools` + toolsets | Is tool schema/filter/dispatch unified? |
| Plugin system | General plugins, providers, memory, and platforms are layered | Is plugin design generic hooks or domain-specific contracts? |
| Multi-platform messaging | Gateway adapter + `MessageEvent` + session key | Are platform differences isolated at adapter boundaries? |
| Session identity | `SessionSource`/`SessionContext` build deterministic session keys | Are group/thread/user/platform boundaries clear? |
| Model provider | `ProviderProfile` describes provider behavior | Do provider differences pollute the main loop? |
| Memory system | Built-in memory + one external Memory Provider | Does memory participate in prompt, prefetch, tool schema, and turn sync? |
| TUI | Node/Ink frontend + Python JSON-RPC gateway | Does UI reuse Agent core and expose a clear transport protocol? |
| Scheduled tasks | Cron job storage + scheduler + Agent run + delivery | Do background jobs reuse the same Agent/tool/profile system? |
| Security/operations | Exact pins, profile isolation, stdout protocol hygiene, prompt-injection scan | Are runtime boundaries handled systematically? |

## 3. Initial Hermes vs OpenClaw Observations

| Topic | Hermes Agent | OpenClaw |
|---|---|---|
| Main form | Local AI Agent CLI/TUI/Gateway and multi-platform personal assistant | Local-first personal AI Assistant / Gateway control plane |
| Core entry | `AIAgent` + `run_conversation` | Gateway control plane + Agent runtime |
| Extension idea | Many layered registries/profiles/providers/plugins | Manifest/control-plane first, with stronger capability ownership emphasis |
| Message channels | Gateway adapter supports many platforms; built-in if/elif and plugin registry coexist | Channel/plugin contract emphasizes capability and ownership more |
| Tool surface | ToolRegistry and toolsets are very clear | Plugin capability model is broader; tools are one capability type |
| Complexity distribution | Large boundary files: `gateway/run.py`, `hermes_cli/main.py` | Complex Gateway, plugin loader, protocol/control-plane boundaries |

## 4. Hermes' Relative Strengths

More prominent areas:

- Python Agent loop, tool registry, Provider Profile, and Memory Provider are easy to study in sequence.
- The idea that CLI/TUI/Gateway/ACP/cron share Agent core is intuitive.
- Toolset control over model-visible tools is systematic.
- TUI gateway contains many concrete engineering details around stdout/JSON-RPC hygiene, long-running handlers, and signal logs. [H-013]
- Cron handling of profile, toolset, prompt injection, and delivery reflects real needs in local Agent background jobs. [H-016]

Areas needing caution:

- Gateway and CLI main files are large, so boundary-layer comprehension cost is high.
- Plugin entries are numerous; readers need to map general plugins, providers, memory, and platforms first.
- More platform support means a larger test and configuration matrix.

## 5. Optional Future Comparison Targets

Recommended next comparison targets:

- LangGraph: compare graph/state-machine orchestration with conversation loop.
- OpenHands: compare software-engineering agent tool/sandbox/task execution model.
- Dify: compare platform Agent workflows and plugin/tool ecosystem.
- Home Assistant Assist: compare local multi-device/multi-integration control plane.
- Botpress or Rasa: compare channel adapters and session management in conversation platforms.
