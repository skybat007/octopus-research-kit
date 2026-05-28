# Source Map

## 1. Repository Snapshot

| Item | Value |
|---|---|
| Project identifier | `openclaw` |
| remote | `https://github.com/openclaw/openclaw.git` |
| branch/tag/commit | `main@989e53c20d395d3c8bf47efc21fdb9d56e7227b0` |
| Primary languages | TypeScript plus companion-app languages |
| Build tools | pnpm workspace, package scripts, platform app build systems |
| source-inventory | `references/source-inventory.json` generated |

## 2. Top-Level Directories

| Path | Purpose | Core |
|---|---|---|
| `src/cli/**` | CLI command layer for gateway, agents, plugins, channels, nodes, and models | yes |
| `src/gateway/**` | Gateway control plane: HTTP/WS server, protocol, methods, auth, channels, runtime state | yes |
| `src/agents/**` | Agent runtime shell, sessions, workspace, skills, model selection, and delivery | yes |
| `src/plugins/**` | Plugin loader, registry, runtime registration, API builder, and hooks | yes |
| `src/plugin-sdk/**` | Public plugin SDK and entry helpers | yes |
| `src/channels/**` | Channel core and SDK-facing channel seams | yes |
| `extensions/**` | Bundled plugins for providers, channels, tools, hooks, and services | yes |
| `packages/**` | Shared packages and contracts | yes |
| `ui/**` | Control UI | partial |
| `apps/**` | Companion apps | partial |
| `docs/**` | Repository documentation and concept references | yes |
| `qa/**`, `test/**` | QA and tests | partial |

## 2.1 Structured Source Inventory

| Item | Value |
|---|---|
| File count | See `references/source-inventory.json` |
| Primary languages | See `references/source-inventory.json` |
| Build files | See `references/source-inventory.json#buildFiles` |
| Entry candidates | See `references/source-inventory.json#entryCandidates` |
| Tests/examples/docs | See `references/source-inventory.json#testFiles` / `exampleFiles` / `docsFiles` |

The inventory is a deterministic source index and does not replace architecture conclusions.

## 3. Core Modules

| Module | Responsibility | Key files | Dependency direction |
|---|---|---|---|
| CLI/Gateway startup | Launches Node process, entry file, gateway CLI, lazy server, and server implementation | `openclaw.mjs`, `src/entry.ts`, `src/cli/gateway-cli/run.ts`, `src/gateway/server.ts`, `src/gateway/server.impl.ts` | CLI -> Gateway |
| Gateway runtime state | Creates HTTP server, WebSocket server, runtime state, upgrades, clients, and event surfaces | `src/gateway/server-runtime-state.ts`, `src/gateway/server-ws-runtime.ts` | Gateway core |
| WS connection handling | Challenge, handshake, auth, version/origin checks, hello-ok, ping, cleanup | `src/gateway/server/ws-connection.ts`, `src/gateway/server/ws-connection/message-handler.ts` | Gateway -> protocol/auth |
| Agent RPC | Accepts agent requests, validates trust, schedules async agent command | `src/gateway/server-methods/agent.ts` | Gateway -> agents |
| Agent command | Prepares session, model, skills, delivery, and invokes embedded Pi agent | `src/agents/agent-command.ts`, `src/agents/command/attempt-execution.ts` | Agents -> Pi runtime |
| Plugin loader/API | Discovers manifests, validates enablement, registers runtime capabilities and APIs | `src/plugins/loader.ts`, `src/plugins/api-builder.ts` | Plugins -> Gateway/Agent |
| Plugin SDK | Canonical plugin author entry and public API | `src/plugin-sdk/plugin-entry.ts` | Plugin authors -> runtime |
| Bundled plugins | Provider/channel/tool examples | `extensions/anthropic/**`, `extensions/irc/**` | Plugins -> capability registry |

## 4. External Entries

| Entry type | Location | Notes |
|---|---|---|
| Launcher | `openclaw.mjs` | Node version check and source checkout startup |
| Main entry | `src/entry.ts` | Process title, warnings, environment, profile/container setup |
| Gateway CLI | `src/cli/gateway-cli/run.ts` | Config, port/bind/auth/tailscale, lazy server import |
| Gateway server | `src/gateway/server.impl.ts` | Runtime state, plugin bootstrap, sidecars, channels, services |
| WebSocket client | `src/gateway/server/ws-connection/**` | Control-plane handshake and message handling |
| Agent RPC | `src/gateway/server-methods/agent.ts` | Network-to-agent entry |
| Plugin manifests | `extensions/*/openclaw.plugin.json` | Capability and control-plane declarations |

## 5. Example and Test Entries

| Path | Covered scenario | Reading value |
|---|---|---|
| `extensions/anthropic/**` | Provider plugin | Shows manifest/runtime provider capability |
| `extensions/irc/**` | Channel plugin | Shows channel config, security, status, outbound contract |
| `src/plugins/**` tests | Plugin loader/runtime behavior | Useful for extension-system validation |
| `src/gateway/**` tests | Gateway protocol and server behavior | Useful for handshake and method validation |

## 6. Suggested Reading Order

1. `README.md` and `docs/concepts/architecture.md`
2. `openclaw.mjs`, `src/entry.ts`, `src/cli/gateway-cli/run.ts`
3. `src/gateway/server.impl.ts` and `src/gateway/server-runtime-state.ts`
4. `src/gateway/server/ws-connection/**`
5. `src/gateway/server-methods/agent.ts`
6. `src/agents/agent-command.ts` and `src/agents/command/attempt-execution.ts`
7. `docs/plugins/architecture.md`, `docs/plugins/manifest.md`
8. `src/plugins/loader.ts`, `src/plugins/api-builder.ts`, `src/plugin-sdk/plugin-entry.ts`
9. Representative plugins such as `extensions/anthropic/**` and `extensions/irc/**`

## 7. Initial Judgment

### 7.1 Confirmed Facts

- Gateway is a long-lived control plane, not just a transport layer. [C-004]
- Agent execution is scheduled asynchronously after an accepted ack. [C-008]
- Plugin ownership is declared in manifests before runtime loading. [C-010][C-011]

### 7.2 Inferences

- The architecture pattern is capability ownership plus product-context shell around agent core. [INF-001][INF-003]

### 7.3 Pending

- Dynamic plugin inspection and live Gateway frame capture remain open.
