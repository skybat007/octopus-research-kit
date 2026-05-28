# Research Questions

## 1. Question List

| ID | Question | Source | Why It Matters | Source Directions to Verify | Status |
|---|---|---|---|---|---|
| RQ-OC-001 | Is OpenClaw's Gateway really a long-running control plane? | EXT-OC-001 | Determines whether the architectural center is Gateway or agent loop | CLI launcher, Gateway server, WS runtime | Verified |
| RQ-OC-002 | How do the OpenClaw-owned agent runtime layer and Pi core divide responsibilities? | EXT-OC-002 | Clarifies the boundary between product context and the model/tool loop | Agent RPC, agent-command, attempt-execution, agent-loop docs | Partly verified |
| RQ-OC-003 | Is Plugin a capability-ownership model or just a hook list? | EXT-OC-003 | Determines the core abstraction of the extension mechanism | plugin manifest, loader, api-builder, hook-types | Verified |
| RQ-OC-004 | Are sessions, DM isolation, and multi-agent first-class isolation models? | EXT-OC-004 | Determines state boundaries for multi-channel and multi-agent operation | session docs, multi-agent docs, agent ingress | Partly verified |
| RQ-OC-005 | Can channel/provider plugins represent a full capability contract? | EXT-OC-003 | Determines whether sample plugins support the extension-point conclusions | `extensions/anthropic`, `extensions/irc` | Sample verified |

## 2. Detailed Questions

### RQ-OC-001: Is Gateway Really a Long-Running Control Plane?

External source:

- https://docs.openclaw.ai/architecture

Source verification needed:

- Whether Gateway startup consistently enters the server runtime.
- Whether WS clients, nodes, and agent RPC are all managed by Gateway.

Verification result:

- Verified. `openclaw.mjs`, `src/entry.ts`, `src/cli/gateway-cli/run.ts`, and Gateway server/runtime evidence support this conclusion.

Source evidence:

- `C-004`, `C-005`, `C-006`

### RQ-OC-002: What Is the Agent Runtime Boundary?

External source:

- https://docs.openclaw.ai/concepts/agent

Source verification needed:

- How Gateway agent RPC enters `agentCommandFromIngress`.
- Whether OpenClaw session/workspace/delivery wraps Pi core.

Verification result:

- Partly verified. The entry path is verified, but Pi core's internal event structure has not been fully expanded.

Source evidence:

- `C-007`, `C-008`, `INF-003`

### RQ-OC-003: Is Plugin Capability Ownership or Plain Hooking?

External source:

- https://docs.openclaw.ai/plugins/architecture

Source verification needed:

- Whether manifest/discovery, validation, runtime loading, and registry consumption exist.
- Whether the Plugin API registers providers, channels, tools, hooks, HTTP surfaces, sessions, memory, and related capabilities.

Verification result:

- Verified.

Source evidence:

- `C-010`, `C-011`, `C-012`, `C-017`, `INF-001`

### RQ-OC-004: Are Session and Multi-Agent First-Class Isolation Models?

External sources:

- https://docs.openclaw.ai/concepts/session
- https://docs.openclaw.ai/concepts/multi-agent

Source verification needed:

- How different message sources route to sessions.
- How agent workspace, agentDir, auth profile, and session store are isolated.

Verification result:

- Partly verified. This pass has repository-doc and agent-ingress evidence, but no live Gateway multi-agent/channel-binding run yet.

Source evidence:

- `C-008`, `C-009`

## 3. External Claim Verification Status

| External Claim | Related Question | Verification Status | Evidence |
|---|---|---|---|
| Gateway is a long-running control plane | RQ-OC-001 | Verified | `C-004`-`C-006` |
| Agent runtime = OpenClaw shell + Pi core | RQ-OC-002 | Partly verified | `C-007`, `C-008`, `INF-003` |
| Capability registration is the plugin direction | RQ-OC-003 | Verified | `C-010`-`C-012` |
| Session/multi-agent is an isolation model | RQ-OC-004 | Partly verified | `C-008`, `C-009` |

## 4. Still to Confirm

- Live behavior of multi-agent channel binding.
- Actual runtime output from `openclaw plugins inspect <id>`.
- One real end-to-end example from channel inbound to session/delivery.
