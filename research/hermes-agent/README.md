# Hermes Agent Technical Research

Status: draft
Last Updated: 2026-05-25

## Research Summary

Hermes Agent is a local-first AI Agent project maintained by Nous Research. Its product surface includes CLI, TUI, Messaging Gateway, ACP, cron, tools, plugins, model providers, and memory providers. Its architecture core is not a single chat entry; instead, it connects multiple user interfaces and message channels to the same `AIAgent` runtime, then manages differences through a tool registry, Provider Profile, plugin hooks, session store, and Gateway adapters. [H-001][H-002][H-004][H-009]

This research is pinned to local snapshot `hermes-agent`, branch `main`, commit `cae7537359c0ba8fceedc0a6423a4d9f30972100`. It is a first architecture-level pass covering entries, the agent loop, tools, plugins, providers, memory, Gateway, TUI, cron, and reusable design ideas. It does not cover every platform adapter, every tool implementation, UI details, or performance testing.

## File Navigation

| File | Description |
|---|---|
| research-brief.md | Research goals, scope, questions, and deliverables |
| external-research.md | Official sources, collaboration sources, external claims, and source-verification relationships |
| research-questions.md | Source-verification questions generated from external material |
| source-map.md | Repository structure, entries, modules, and reading order |
| dashboard.html | Browser reading entry for Markdown, visual diagrams, and supporting materials |
| docs.html | UTF-8 document reader that avoids browser encoding issues with raw Markdown |
| architecture.md | Technical architecture, module boundaries, and dependency direction |
| visual/architecture.html | HTML visual structure diagram for entries, Agent Core, tools, plugins, Gateway, and state boundaries |
| visual/architecture.visual.js | Visual graph data linked to Markdown conclusions and evidence |
| visual/evidence.html | Clickable evidence explanation page with architecture context and source/doc snippets |
| visual/evidence.visual.js | Evidence explanation data extracted from evidence-index.md and architecture.visual.js |
| key-abstractions.md | Core abstractions, interfaces, data structures, and lifecycles |
| extension-points.md | Extension mechanisms such as plugins, hooks, registries, and providers |
| runtime-flows.md | Main runtime flows and key state changes |
| design-philosophy.md | Design philosophy and key tradeoffs |
| comparison.md | Comparison dimensions for similar Agent Gateway/CLI projects |
| adoption-notes.md | Adoption and learning notes |
| evidence-index.md | Evidence index |
| research-review.md | Research review |

## Current Conclusions

- Hermes Agent's official README/docs and local source confirm a "many entries, shared Agent Core" design: CLI, TUI, Gateway, ACP, and cron all organize around `AIAgent` and `run_conversation`. [H-003][H-004][H-013][H-014][H-015][EXT-HA-001]
- The tool system combines central `ToolRegistry`, toolset filtering, and plugin registration. `model_tools.py` converts Registry definitions into model-consumable tool schemas and dispatches model tool calls back to the Registry. [H-005][H-006][H-007]
- The plugin system is not a single hook list. It is a layered extension control plane with separate entries for general plugins, Provider Profile, Memory Provider, Gateway Platform, Context Engine, CLI/Slash Command, and Toolset. [H-008][H-010][H-011][H-012]
- Gateway is the most complex runtime surface. It unifies platform adapters, auth/pairing, session keys, agent cache, streaming output, duplicate-delivery protection, and cron delivery in one large file plus a small set of support modules. [H-009][H-010][H-016]
- The most reusable ideas are stable system prompt, entry convergence, registry-driven tools, provider behavior extraction, profile isolation, explicit session keys, and plugin hooks that fail open without taking down the main flow. [H-004][H-006][H-008][H-012]

## Pending Questions

- Hermes Agent local CLI/TUI/Gateway live behavior has not been run.
- Tests have not been run; this pass uses static source and repository-doc analysis.
- Official external references have been cross-checked, but independent third-party practice articles are not used as conclusion evidence.
- Each built-in tool, platform adapter, provider plugin, and memory provider has not been reviewed individually.
- TUI frontend `ui-tui` interaction design and render state machine were only scanned at entry level, not component level.
