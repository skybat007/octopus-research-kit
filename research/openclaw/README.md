# OpenClaw Technical Research

Status: draft
Last Updated: 2026-05-25

## Research Summary

OpenClaw is a local-first personal AI Assistant / Gateway project. It unifies multi-channel messaging, device nodes, agent runtime, tools, model providers, plugins, and session management under a long-lived Gateway control plane. Its real product identity is not the Gateway alone, but a personal assistant that can act across the user's devices and communication channels. [C-001][C-004]

This research is pinned to the local `openclaw` snapshot on branch `main`, commit `989e53c20d395d3c8bf47efc21fdb9d56e7227b0`. This first architecture-level pass focuses on Gateway, agent runtime, plugin/capability model, channels, sessions/multi-agent routing, and reusable design ideas. It does not cover every specific channel, mobile app, or provider implementation detail.

## File Navigation

| File | Description |
|---|---|
| research-brief.md | Research goals, scope, questions, and deliverables |
| external-research.md | Official references, collaboration references, external claims, and source-verification relationships |
| research-questions.md | Source-verification questions generated from external references |
| source-map.md | Repository structure, entries, modules, and reading order |
| dashboard.html | Browser reading entry for Markdown, visual diagrams, and supporting materials |
| docs.html | UTF-8 document reader that avoids browser encoding issues with raw Markdown |
| architecture.md | Technical architecture, module boundaries, and dependency direction |
| visual/architecture.html | HTML visual structure diagram for Gateway, Agent Runtime, Plugin Capability, and state boundaries |
| visual/architecture.visual.js | Visual graph data connected to Markdown conclusions and evidence links |
| visual/evidence.html | Clickable evidence explanation page with architecture context and source/doc snippets |
| visual/evidence.visual.js | Evidence explanation data extracted from evidence-index.md and architecture.visual.js |
| key-abstractions.md | Core abstractions, interfaces, data structures, and lifecycles |
| extension-points.md | Extension mechanisms such as plugins, hooks, registries, and providers |
| runtime-flows.md | Main runtime flows and key state changes |
| design-philosophy.md | Design philosophy and key tradeoffs |
| comparison.md | Comparison placeholder and future comparison targets |
| adoption-notes.md | Adoption and learning notes |
| evidence-index.md | Evidence index |
| research-review.md | Research review |

## Current Conclusions

- OpenClaw's official docs and local source point to the same core idea: the most valuable design is not "many chat channels," but the unification of multi-channel ingress, agent execution, sessions, tools, device nodes, and plugins into a Gateway control plane. [C-004][EXT-OC-001]
- The plugin system uses a "manifest before runtime" control-plane design: `openclaw.plugin.json` establishes identity, capability ownership, configuration validation, and startup planning before runtime code is loaded to register capabilities. [C-010][C-011]
- The agent runtime is an OpenClaw-owned session/workspace/delivery shell around Pi agent core. It supports both CLI and Gateway RPC entries. Network entries must explicitly declare `senderIsOwner` and `allowModelOverride`, which is a useful trust-boundary pattern. [C-007][C-008]
- Session isolation and multi-agent routing are first-class product architecture concepts, not afterthoughts. DMs, groups, cron, webhooks, agent workspaces, and auth profiles all have explicit ownership. [C-009]
- The highest-value ideas for future study are capability ownership up front, owner-agnostic core design, hot paths carrying resolved facts, explicit external-entry trust, and treating plugin extension as "who owns this capability" rather than only "can this hook be inserted." [C-003][C-010]

## Pending Questions

- The implementation quality of every bundled plugin and channel has not been reviewed one by one.
- OpenClaw local tests and Gateway startup have not been run; this pass uses static source and repository-doc analysis.
- Official external references have been cross-checked, but independent third-party practice articles are not yet used as conclusion evidence.
- The comparison target is still open. Recommended next targets include Home Assistant, LangGraph, Dify, Botpress, or a similar Agent Gateway project.
