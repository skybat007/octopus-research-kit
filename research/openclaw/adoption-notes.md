# Adoption Notes

Status: draft
Last Updated: 2026-05-25

## 1. Applicable Context

OpenClaw is useful for studying the system design of AI Gateways, personal assistants, plugin governance, multi-channel message ingress, and multi-agent runtimes. These notes only record why the design is worth understanding and where it may be reusable; they do not turn the observations into implementation tasks.

## 2. Ideas Worth Learning Directly

### 2.1 Gateway Control Plane

OpenClaw unifies many entries, channels, tools, agent runs, sessions, events, and device nodes under one Gateway control plane. Its learning value is that OpenClaw does not treat the Gateway as a plain API server; it treats it as a long-running coordination layer.

- It shows why multi-channel ingress needs a unified protocol, session model, and event model.
- It shows how agent execution, tool calls, device nodes, and delivery can share one control plane.
- It helps separate "many product entry points" from "a clear runtime control plane."

Prerequisite: the target system actually has multiple entries, execution contexts, or delivery targets. A single-entry application may not need this level of control-plane complexity.

### 2.2 Manifest + Registry

OpenClaw plugins declare capability ownership in the manifest first, then register runtime capabilities later. [C-010][C-011] This reflects a metadata-before-runtime governance style.

Learning points:

- A manifest is not just a description file; it is the control-plane entry for plugin identity, configuration schema, capability ownership, and activation hints.
- Before runtime capability registration, the system can already perform configuration validation, capability planning, and owner-map construction.
- As plugin count grows, "who owns this capability" should be expressed up front instead of inferred after runtime execution.

### 2.3 Explicit Ingress Trust

Network entries must explicitly pass trust parameters such as `senderIsOwner` and `allowModelOverride`. [C-008] This is an ingress-boundary-first security design.

Learning points:

- Local CLI and network entries should not share the same trust defaults.
- Authorization should happen as early as possible at the entry layer, not deep inside the runtime based on guessed source strings.
- Passing security parameters as part of the runtime request makes the path easier to audit and test.

### 2.4 Per-Agent Workspace, State, and Session

OpenClaw defines an agent as a workspace plus `agentDir`, auth profiles, and session store. [C-009] This helps clarify isolation boundaries in multi-agent systems.

Learning points:

- The Gateway can be shared, but each agent's workspace, auth profile, and session store should have clear ownership.
- Multi-agent does not mean "several prompts"; it means combined boundaries for state, permissions, sessions, and delivery targets.
- A default main agent can reduce onboarding cost, but it should not hide the isolation model needed for later expansion.

## 3. Ideas to Borrow With Context

### 3.1 Full Channel Plugin Contract

OpenClaw's channel contract covers configuration, setup, inbound normalization, outbound send, directory, security policy, and reload lifecycle. This is worth learning from, but it should not be copied without a multi-channel product goal.

Prerequisites:

- The system has many channels with meaningful inbound/outbound differences.
- It needs unified identity, directory, delivery, and security policy.
- Channel configuration must be observable, reloadable, and diagnosable.

### 3.2 Hook System

OpenClaw has a rich hook system, but its documentation also says capability registration is the intended native-plugin direction. [C-010] Study it by separating stable capability contracts from lifecycle extension points.

Uncertainty: too many hook points can turn a system into an implicit business bus. Hooks need matching timeout, priority, failure policy, and observability design.

### 3.3 Plugin Metadata Snapshot

A metadata snapshot can reduce repeated discovery, but it is only worth the added complexity when there are enough plugins, providers, or channels. Simpler systems can start with a manifest registry and introduce snapshots after startup or hot-path bottlenecks appear.

## 4. Ideas Not to Copy Blindly

### 4.1 Supporting Many Channels From Day One

OpenClaw's broad channel coverage is driven by its product goal. If the target system does not clearly need many channels, do not read "many supported channels" as a necessary sign of advanced architecture. The more reusable ideas are the channel contract and delivery boundary.

### 4.2 A Very Broad Plugin API Too Early

`OpenClawPluginApi` is powerful, but broad. [C-012] Early-stage systems should expose only the necessary registration surfaces to avoid forming an API compatibility burden too soon.

### 4.3 Shared DM Defaults in the Main Session

OpenClaw documents that shared DMs are suitable for single-user use, while multi-user messaging requires DM isolation. [C-009] This should be read together with OpenClaw's local-first, single-user premise. Do not generalize the shared-DM default to inherently multi-user systems.

## 5. Follow-Up Questions

| Question | Why It Needs Evaluation | Suggested Validation |
|---|---|---|
| What are the real boundaries of plugin reload/config change? | Static source shows intent, but not runtime consistency. | Run a plugin inspect plus reload/config-change example. |
| Is there one observable chain from channel inbound to outbound delivery? | Multi-channel systems often hide implicit delivery state. | Trace Telegram or Slack end to end. |
| How much does the metadata snapshot improve startup or hot paths? | Snapshot adds mental overhead, and value depends on plugin count. | Compare startup and inspect output with and without discovery cache. |
| How does DM isolation feel in a multi-user channel configuration? | README calls out multi-user risk, but default behavior should be verified. | Trace session-key generation with a group-channel example. |

## 6. Risks and Misreadings

- Do not treat OpenClaw's number of channels as the main value. The main value is the unified control plane, session/delivery model, and plugin capability ownership.
- Do not generalize local-first security defaults to enterprise multi-tenant systems. OpenClaw itself requires explicit isolation and sandboxing for multi-user or group entries. [C-016]
- Do not equate hook richness with extension maturity. More stable extension boundaries come from capability contracts and manifest metadata.
- Do not draw conclusions from README alone. The agent runtime, Gateway RPC, plugin loader, and session manager source paths need to be read together.
