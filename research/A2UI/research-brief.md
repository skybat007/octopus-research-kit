# Research Brief

## Goal

Research A2UI's protocol positioning, core architecture, renderer implementation, SDK generation path, extension points, and reusable engineering ideas. The output should support later evaluation of A2UI for agent-driven UI, A2A clients, dynamic forms, or multi-client UI-generation scenarios.

## Pinned Version

| Item | Value |
|---|---|
| Target repository | `google/A2UI` |
| Code source | `https://github.com/google/A2UI.git` |
| Research snapshot | `main @ e05dd9699dea21ba832059acb680f71022dd5a77` |
| Latest commit time | 2026-05-27 14:12:24 -0700 |
| Research date | 2026-05-28 |
| Core version | v0.9 protocol; packages indicate `0.10.0`; the official Roadmap marks v0.9 current/supported while v0.10/v1.0 remain draft/planned |

## Research Questions

- What core problem does A2UI solve, and how is it bounded compared with asking agents to output HTML/JS or plain text?
- How does the v0.9 protocol describe interfaces, data, events, and lifecycle?
- How does the renderer turn JSON messages into React/native UI, and where are state updates and data binding implemented?
- What role does Catalog play in security, capability declaration, and design-system mapping?
- How does the Python SDK reduce invalid UI JSON from LLM output?
- How do A2A, AG UI, and transport layers separate from the A2UI protocol?
- What capabilities, tests, and security boundaries are needed for production adoption?

## Deliverables

This directory contains:

- Source inventory: `references/source-inventory.json`
- Research context: `research-brief.md`, `external-research.md`, `research-questions.md`
- Source map and architecture: `source-map.md`, `architecture.md`, `runtime-flows.md`
- Design and extension analysis: `key-abstractions.md`, `extension-points.md`, `design-philosophy.md`
- Comparison and adoption notes: `comparison.md`, `adoption-notes.md`
- Evidence and review: `evidence-index.md`, `research-review.md`
- Visual entries: `dashboard.html`, `docs.html`, `visual/architecture.html`

## Method

1. Read README, concept docs, and the v0.9 specification to establish the protocol model.
2. Use `source-inventory.json` to map repository structure and locate renderers, SDKs, samples, tools, and tests.
3. Trace message processing, surface/component/data model, binding, and action flow from `renderers/web_core`.
4. Trace concrete UI adapter behavior from `renderers/react`.
5. Trace schema manager, validator, parser, ADK toolset, and A2A part converter from `agent_sdks/python`.
6. Add web research over the official site, GitHub, Roadmap, renderer/client setup, and ecosystem integration docs, then turn external claims into source-verification questions.
7. Use tests, samples, and conformance suites to verify implementation claims instead of relying only on prose docs.

## Out of Scope

- No visual-quality or component-library aesthetics review.
- No performance benchmark.
- No exhaustive issue triage, full release diff, or external competitor benchmark.
- No source modification or full upstream test-matrix run.
