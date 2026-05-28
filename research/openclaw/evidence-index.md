# Evidence Index

## 1. Version Information

This file is the Evidence Log for key OpenClaw research conclusions.

| Item | Value |
|---|---|
| Code source | `https://github.com/openclaw/openclaw.git` |
| Project identifier | `openclaw` |
| branch/tag/commit | branch `main`, commit `989e53c20d395d3c8bf47efc21fdb9d56e7227b0` |
| Research date | 2026-05-25 |

## 2. Evidence Index

| Conclusion ID | Conclusion | Evidence type | Location | Confidence | Notes |
|---|---|---|---|---|---|
| <a id="C-001"></a>C-001 | OpenClaw positions itself as a personal AI assistant where Gateway is the control plane and multi-channel support is a core product surface | repository doc fact | `README.md:21-27`, `README.md:146-155` | high | Product positioning and highlights |
| <a id="C-002"></a>C-002 | Package version is `2026.5.19`, the bin entry is `openclaw.mjs`, and the workspace includes `ui`, `packages/*`, and `extensions/*` | source fact | `package.json:2-18`, `pnpm-workspace.yaml:1-5` | high | Pinned snapshot |
| <a id="C-003"></a>C-003 | Core should stay plugin-agnostic; plugins integrate through SDK, manifest, runtime helpers, documented barrels, and registry surfaces | repository doc fact | `AGENTS.md:26-45` | high | Repository architecture constraint |
| <a id="C-004"></a>C-004 | Gateway is the single long-lived control plane for WebSocket API, events, nodes, protocol, pairing, security, and channel coordination | repository doc fact | `docs/concepts/architecture.md:8-31`, `docs/concepts/architecture.md:55-96`, `docs/concepts/architecture.md:97-148` | high | Concept docs |
| <a id="C-005"></a>C-005 | CLI/Gateway startup flows through launcher, entry, gateway CLI, lazy server, and server implementation | source fact | `openclaw.mjs:11-46`, `openclaw.mjs:183-225`, `src/entry.ts:71-153`, `src/cli/gateway-cli/run.ts:503-817`, `src/gateway/server.ts:13-29`, `src/gateway/server.impl.ts:531-740` | high | Static startup chain |
| <a id="C-006"></a>C-006 | Gateway creates HTTP/WS runtime, sends a challenge after connection, requires the first frame to be connect, and returns hello-ok on success | source fact | `src/gateway/server-runtime-state.ts:223-268`, `src/gateway/server-runtime-state.ts:275-358`, `src/gateway/server/ws-connection.ts:202-318`, `src/gateway/server/ws-connection/message-handler.ts:488-560`, `src/gateway/server/ws-connection/message-handler.ts:1696-1756` | high | Handshake code |
| <a id="C-007"></a>C-007 | Agent runtime is an OpenClaw session/workspace/tool/channel shell around Pi agent core; the loop includes intake, context, model, tool, stream, and persistence | repository doc fact | `docs/concepts/agent.md:8-16`, `docs/concepts/agent.md:25-75`, `docs/concepts/agent-loop.md:9-44`, `docs/concepts/agent-loop.md:59-115` | high | Agent concept docs |
| <a id="C-008"></a>C-008 | Gateway `agent` RPC acknowledges first, schedules `agentCommandFromIngress` asynchronously, and network entries declare trust explicitly | source fact | `src/gateway/server-methods/agent.ts:475-583`, `src/gateway/server-methods/agent.ts:1440-1507`, `src/gateway/server-methods/agent.ts:1592-1666`, `src/agents/agent-command.ts:1593-1643`, `src/agents/command/attempt-execution.ts:630-691` | high | Agent run code path |
| <a id="C-009"></a>C-009 | Sessions, DM isolation, multi-agent workspace/state/auth/session-store ownership are explicit architecture concepts | repository doc fact | `docs/concepts/session.md:10-22`, `docs/concepts/session.md:23-54`, `docs/concepts/session.md:90-97`, `docs/concepts/multi-agent.md:9-19`, `docs/concepts/multi-agent.md:42-63`, `docs/concepts/multi-agent.md:121-129` | high | Session and multi-agent docs |
| <a id="C-010"></a>C-010 | The plugin system uses a capability model with four layers: manifest/discovery, enablement/validation, runtime loading, and surface consumption | repository doc fact | `docs/plugins/architecture.md:32-51`, `docs/plugins/architecture.md:114-146`, `docs/plugins/architecture.md:148-168`, `docs/plugins/manifest.md:28-54`, `docs/plugins/manifest.md:146-170` | high | Plugin docs |
| <a id="C-011"></a>C-011 | `loadOpenClawPlugins` implements discovery, manifest registry, registration planning, runtime registration, rollback, and activation | source fact | `src/plugins/loader.ts:1509-1588`, `src/plugins/loader.ts:1672-1715`, `src/plugins/loader.ts:1760-1904`, `src/plugins/loader.ts:2314-2471`, `src/plugins/loader.ts:2499-2533` | high | Loader code |
| <a id="C-012"></a>C-012 | `OpenClawPluginApi` registration covers tools, hooks, HTTP, channels, gateway, providers, media, sessions, memory, and related capabilities | source fact | `src/plugins/api-builder.ts:19-85`, `src/plugins/api-builder.ts:177-260` | high | API builder |
| <a id="C-013"></a>C-013 | Anthropic provider plugin declares providers, CLI backends, auth, and contracts in manifest, then registers runtime backend/provider/media capability | source fact | `extensions/anthropic/openclaw.plugin.json:1-112`, `extensions/anthropic/index.ts:1-10`, `extensions/anthropic/register.runtime.ts:665-667` | high | Provider plugin sample |
| <a id="C-014"></a>C-014 | IRC channel plugin covers setup, config, security, status, and outbound behavior through manifest, entry, and channel plugin code | source fact | `extensions/irc/openclaw.plugin.json:1-26`, `extensions/irc/index.ts:1-20`, `extensions/irc/src/channel.ts:170-235`, `extensions/irc/src/channel.ts:236-366` | high | Channel plugin sample |
| <a id="C-015"></a>C-015 | VISION emphasizes security, safe defaults, plugin-first design, memory slots, terminal-first operation, and TypeScript hackability | repository doc fact | `VISION.md:15-31`, `VISION.md:41-57`, `VISION.md:59-76`, `VISION.md:92-105` | high | Project direction |
| <a id="C-016"></a>C-016 | README security model says main-session tools run on the host by default, while group/channel use should prefer sandboxing | repository doc fact | `README.md:132-144`, `README.md:157-162` | high | Security default |
| <a id="C-017"></a>C-017 | Plugin hook types cover model, prompt, tool, message, session, gateway, cron, and related lifecycle events | source/doc fact | `src/plugins/hook-types.ts:68-106`, `docs/concepts/agent-loop.md:89-115` | high | Hook list |

## 3. Inference Chains

| Inference ID | Depends on evidence | Reasoning | Pending validation |
|---|---|---|---|
| <a id="INF-001"></a>INF-001 | C-003, C-010, C-011, C-012 | Plugin-agnostic core plus manifest/control-plane design plus runtime registry APIs suggest OpenClaw's extension idea is capability ownership, not only simple hooks | Run a real plugin inspect command to observe runtime registry output |
| <a id="INF-002"></a>INF-002 | C-004, C-006, C-008 | Gateway manages WS clients, method registry, agent ack/final flow, and dedupe, so it is both unified control plane and runtime coordinator | Start Gateway and observe actual WS frames |
| <a id="INF-003"></a>INF-003 | C-007, C-008, C-009 | The OpenClaw shell owns session/workspace/skills/delivery while Pi core owns the model/tool loop, showing a split between product context and agent core | Deep dive Pi runtime event structure |
| <a id="INF-004"></a>INF-004 | C-014 | Channel plugins include config, status, security, outbound, and gateway start behavior, so the channel abstraction is a full contract rather than a send-only function | Compare additional channel plugins |

## 4. Pending

- Verify consistency across all bundled channels.
- Observe plugin reload/config reload boundaries in a live Gateway.
- Deep dive provider runtime, model fallback, and auth-profile rotation.
- Inspect how control UI and companion apps consume Gateway protocol.

## 5. External Evidence

| Conclusion ID | Conclusion | Evidence type | Credibility | Source | Source verified | Confidence | Notes |
|---|---|---|---|---|---|---|---|
| <a id="EXT-OC-001"></a>EXT-OC-001 | Official docs define Gateway as a long-lived control plane for messaging surfaces, control clients, nodes, HTTP, and WebSocket surfaces | official fact | A | https://docs.openclaw.ai/architecture | yes | high | Corresponds to C-004, C-005, C-006 |
| <a id="EXT-OC-002"></a>EXT-OC-002 | Official docs divide Agent runtime into OpenClaw-owned layer and Pi agent core | official fact | A | https://docs.openclaw.ai/concepts/agent | partial | high | Corresponds to C-007, C-008, INF-003 |
| <a id="EXT-OC-003"></a>EXT-OC-003 | Official docs emphasize the plugin capability model and layers for manifest/discovery, enablement, runtime loading, and surface consumption | official fact | A | https://docs.openclaw.ai/plugins/architecture | yes | high | Corresponds to C-010, C-011, C-012 |
| <a id="EXT-OC-004"></a>EXT-OC-004 | Official docs describe sessions and multi-agent isolation across DM/group/cron/webhook and agent workspace/state/auth profile | official fact | A | https://docs.openclaw.ai/concepts/session, https://docs.openclaw.ai/concepts/multi-agent | partial | medium | Corresponds to C-008, C-009 |
