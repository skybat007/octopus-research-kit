# Research Brief

Status: draft
Last Updated: 2026-05-25

## 1. Research Target

| Item | Value |
|---|---|
| Name | OpenClaw |
| Code source | `https://github.com/openclaw/openclaw.git` plus local source snapshot |
| Project identifier | `openclaw` |
| Version/tag/commit | branch `main`, commit `989e53c20d395d3c8bf47efc21fdb9d56e7227b0` |
| Official docs | https://docs.openclaw.ai |
| External reference scope | Official docs, GitHub repository, local repository docs |
| Research date | 2026-05-25 |

## 2. Background and Motivation

OpenClaw is a local-first personal AI assistant and Gateway project. It combines multi-channel messaging, device nodes, agent runtime, tools, model providers, plugins, and session management. The research goal is to understand the architecture patterns that make it a multi-surface assistant rather than only a chat bot or agent loop.

## 3. Research Goals

- OBJ-001: Understand Gateway as the long-lived control plane.
- OBJ-002: Trace the agent run path from Gateway ingress to agent execution and delivery.
- OBJ-003: Understand the plugin capability model and how manifest, registry, and runtime loading interact.
- OBJ-004: Extract reusable design ideas for multi-channel agent products.

## 4. Core Research Questions

| ID | Question | Priority | Expected output |
|---|---|---|---|
| RQ-OC-001 | What is Gateway responsible for, and where are its control-plane boundaries? | P0 | architecture.md, source-map.md |
| RQ-OC-002 | How does an agent command travel from ingress to runtime execution and delivery? | P0 | runtime-flows.md |
| RQ-OC-003 | How does the plugin capability model separate core ownership from plugin ownership? | P0 | extension-points.md |
| RQ-OC-004 | How are sessions and multi-agent routing modeled? | P1 | key-abstractions.md |
| RQ-OC-005 | Which OpenClaw designs are worth learning from or adapting elsewhere? | P1 | adoption-notes.md |

## 5. Scope

### 5.1 In Scope

- Gateway startup and WebSocket handshake
- Gateway `agent` RPC and agent command scheduling
- Agent runtime shell and Pi agent core boundary
- Plugin manifest, loader, registry, API builder, and hook model
- Session and multi-agent ownership model
- Representative provider and channel plugin examples

### 5.2 Out of Scope

- Exhaustive review of every bundled channel
- Mobile app UI implementation details
- Full provider fallback/auth-profile rotation
- Live Gateway runtime verification
- Performance benchmarking or security audit

### 5.3 Pending

- Run live Gateway and capture actual WS frames.
- Inspect plugin runtime output with a real inspect command.
- Compare OpenClaw with another agent gateway or automation platform.

## 6. Use Cases

- Learn local-first Gateway design for personal AI assistants.
- Compare multi-channel agent gateway architecture.
- Extract plugin capability ownership patterns.
- Evaluate session/multi-agent isolation as a reusable product pattern.

## 7. How Results Support Learning and Adoption

This research helps identify which parts of OpenClaw's architecture are reusable in other systems: long-lived control plane, explicit trust at network ingress, manifest-first plugin ownership, runtime shell around an agent core, and first-class session routing.

## 8. Expected Deliverables

| Deliverable | File | Description |
|---|---|---|
| External research | external-research.md | Official docs and external claims to verify |
| Research questions | research-questions.md | Source-verification questions derived from docs and goals |
| Source map | source-map.md | Repository structure, entries, modules, and reading order |
| Source inventory | references/source-inventory.json | Deterministic local source inventory |
| Architecture | architecture.md | Gateway, agent runtime, plugin, session, and channel boundaries |
| Visual architecture | visual/architecture.html, visual/architecture.visual.js | Evidence-backed architecture views |
| Evidence viewer | visual/evidence.html, visual/evidence.visual.js | Clickable evidence explanations |
| Key abstractions | key-abstractions.md | Core objects, lifecycle, and relationships |
| Extension points | extension-points.md | Plugin/capability registration and execution model |
| Runtime flows | runtime-flows.md | Startup, WS handshake, agent run, and plugin load |
| Design philosophy | design-philosophy.md | Design principles and tradeoffs |
| Adoption notes | adoption-notes.md | Reusable and non-copyable design lessons |
| Evidence index | evidence-index.md | Evidence log for conclusions |
| Research review | research-review.md | Quality gate and residual risk |

## 9. Acceptance Criteria

| ID | Criterion | Verification |
|---|---|---|
| AC-001 | Version and source snapshot are pinned | Check this file and evidence-index.md |
| AC-002 | Key architecture claims are backed by source or repository docs | Check evidence-index.md |
| AC-003 | At least one agent runtime path is traced | Check runtime-flows.md |
| AC-004 | Plugin model and session model are covered | Check extension-points.md and key-abstractions.md |
| AC-005 | Adoption notes distinguish reusable ideas from context-dependent ideas | Check adoption-notes.md |
