# Extension Points

## 1. Extension Point Overview

| Extension point | Type | Purpose | Source location | Adoption value |
|---|---|---|---|---|
| Plugin manifest | Manifest/control plane | Declares plugin identity, capabilities, config, auth/contracts, and ownership before runtime loading | `docs/plugins/manifest.md`, `extensions/*/openclaw.plugin.json` | Strong pattern for observable capability ownership |
| Plugin loader | Loader/registry | Discovers, validates, plans, loads, activates, and rolls back plugin runtime registration | `src/plugins/loader.ts` | Shows how to separate discovery, enablement, and runtime registration |
| OpenClawPluginApi | Public runtime API | Lets plugins register tools, hooks, HTTP, channels, providers, sessions, memory, and gateway features | `src/plugins/api-builder.ts` | Useful model for capability-specific registration surfaces |
| Hooks | Lifecycle hooks | Extend model, prompt, tools, messages, sessions, gateway, cron, and related lifecycle events | `src/plugins/hook-types.ts` | Avoids one generic hook bag by naming lifecycle surfaces |
| Provider plugin | Provider capability | Registers model/provider/media backends from manifest and runtime code | `extensions/anthropic/**` | Demonstrates provider ownership through manifest plus runtime code |
| Channel plugin | Channel capability | Encapsulates setup, config, security, status, outbound, and channel runtime behavior | `extensions/irc/**` | Shows a channel contract that is richer than a send function |

## 2. Registration

| Extension point | Registration method | Registration entry | Configuration source | Evidence |
|---|---|---|---|---|
| Plugin manifest | Manifest discovery and registry | `loadOpenClawPlugins` | `openclaw.plugin.json` | C-010, C-011 |
| Runtime capability | Runtime module calls plugin API | Plugin runtime entry | Manifest plus runtime module | C-011, C-012 |
| Provider plugin | Manifest declares provider surfaces; runtime registers backends/providers | Anthropic plugin entry/runtime | `extensions/anthropic/openclaw.plugin.json` | C-013 |
| Channel plugin | Manifest declares channel; runtime channel implementation provides behavior | IRC plugin entry/channel | `extensions/irc/openclaw.plugin.json`, `extensions/irc/src/channel.ts` | C-014 |

## 3. Discovery and Loading

| Extension point | Discovery method | Load timing | Lifecycle | Evidence |
|---|---|---|---|---|
| Plugin manifest | Filesystem/manifest registry | Gateway startup or plugin bootstrap | discovery -> registry -> enablement -> plan | C-010, C-011 |
| Runtime registration | Dynamic runtime loading | After validation and registration plan | register -> consume -> rollback/deactivate if needed | C-011 |
| Hook surface | API builder registration | Plugin runtime registration | lifecycle hooks consumed by runtime surfaces | C-012, C-017 |

## 4. Execution and Isolation

| Extension point | Caller | Execution boundary | Isolation method | Failure handling | Evidence |
|---|---|---|---|---|---|
| Tool/provider/channel capability | Gateway or agent runtime | Capability-specific registry/API | Manifest ownership and runtime registration boundaries | Loader rollback and registration planning paths | C-011, C-012 |
| Channel plugin | Channel runtime/Gateway delivery | Channel contract includes config/security/status/outbound | Channel-owned implementation behind plugin contract | Plugin/runtime error handling | C-014 |
| Hooks | Runtime lifecycle | Typed lifecycle hook surfaces | Hook type boundaries | Depends on hook runner behavior | C-017 |

## 5. Stability Judgment

| Extension point | Public API | Documented | Tested | Stability judgment |
|---|---|---|---|---|
| Plugin manifest | yes | yes | partial | high |
| Plugin API builder | yes | partial | partial | medium-high |
| Hooks | yes | partial | partial | medium |
| Provider plugin contract | yes | partial | partial | medium |
| Channel plugin contract | yes | partial | partial | medium |

## 6. Learning Takeaways

- Declare capability ownership before runtime loading. [C-010]
- Keep core plugin-agnostic and consume capabilities through registries/API surfaces. [C-003][C-012]
- Treat channels as full contracts with setup, security, status, and outbound behavior. [C-014]
- Use typed lifecycle hooks instead of one undifferentiated extension point. [C-017]

## 7. Pending

- Validate consistency across Telegram/Slack/OpenAI/Memory plugins.
- Observe plugin reload and config reload behavior in a live Gateway.
