---
name: open-source-tech-research
description: Analyze open-source frameworks or unfamiliar codebases with external research plus source verification, then produce technical research documents including external research, research questions, source maps, architecture, optional visual architecture HTML, key abstractions, extension points, runtime flows, design philosophy, comparison, and adoption notes. Use when the user asks to research, study, read, compare, or document an open-source technology or framework.
---

# Open Source Tech Research

Use this skill when the user wants to understand an open-source framework, unfamiliar codebase, middleware, library, infrastructure project, or toolchain through source-backed technical research.

## Core Rule

Do not produce generic introductions. Important conclusions must be backed by official docs, source, tests, examples, config, version evidence, or clearly labeled community evidence. 外部资料用于建立问题和背景，源码/测试/配置用于验证真实实现。Mark assumptions and inferences explicitly.

## Workflow

1. Identify the research target:
   - local path or remote repository
   - branch, tag, commit, or current snapshot
   - user's learning goal
   - modules and scenarios in scope
2. Read or create `research/<framework-name>/research-brief.md`.
   - If the research goal is unclear, ask concise clarification before broad code reading.
   - If enough context exists, create the brief from `docs/tech-research-guide/templates/research-brief-template.md`.
3. Collect external research when needed:
   - search official docs, official README, quickstart, architecture/concept docs, release notes, examples, important issues/PRs/discussions, and high-quality third-party analysis
   - always use external research when the target/source/version is unclear, when comparing frameworks, when discussing latest behavior or release changes, when local source is incomplete, or when official design intent matters
   - skip only when the user explicitly asks for local-source-only research or when all needed official docs are already in the local repo; record the skip reason in `research-review.md`
   - write findings to `external-research.md`
4. Generate research questions:
   - convert external claims and user goals into source-verifiable questions
   - track status as pending, verified, partially verified, or unverified
   - write findings to `research-questions.md`
5. Build a source map:
   - use `rg --files` to inspect structure
   - identify build files, packages, examples, docs, tests, public APIs, CLI entrypoints, server startup, and config loaders
   - write findings to `source-map.md`
6. Trace architecture:
   - identify core abstractions, module boundaries, dependency direction, state flow, extension points, and lifecycle
   - use official evidence for design goals and source evidence for implementation behavior
   - write findings to `architecture.md`
7. Add visual architecture when Markdown diagrams are not enough:
   - prefer `visual/architecture.html` plus `visual/architecture.visual.js` for complex layered diagrams, multi-flow diagrams, or diagrams with many nodes
   - keep Markdown as the knowledge source: `architecture.md`, `runtime-flows.md`, `source-map.md`, and `evidence-index.md`
   - keep `visual/architecture.html` as a renderer only; put graph data in `visual/architecture.visual.js`
   - generate `visual/evidence.html` plus `visual/evidence.visual.js` so node source links open a UTF-8 evidence explanation page with graph context and source/doc snippets instead of raw Markdown
   - do not add conclusions to the visual data that are absent from the Markdown research documents
   - before generating HTML, write a short diagram design note: views, each view's question, node list, edge semantics, and evidence mapping
   - use one tab/view per question; do not pack all research conclusions into one overview
   - keep each view to 8-10 main nodes; split the view if it grows larger
   - use nodes only for architecture objects: modules, components, runtime objects, state objects, extension points, external dependencies, policies, permissions, or adapters
   - do not turn ordinary functions, fields, design principles, evidence IDs, or conclusion sentences into nodes
   - use typed edges for request flow, sync call, async event, dependency, registration/discovery, permission check, context build, state read/write, model stream, and result return
   - each node must include id, type, role, title, sub, ev, doc, and tip
   - each key edge must include from, to, label, kind, ev, and doc
   - keep evidence IDs as metadata or in the design note; do not render evidence IDs on the diagram surface unless the user explicitly asks
   - use `doc` fields to point back to Markdown evidence or architecture sections, but do not navigate directly to raw Markdown from the renderer
   - use only offline HTML/CSS/SVG/JS; do not depend on remote assets or CDNs
8. Extract key abstractions:
   - document important interfaces, classes, functions, data structures, lifecycle objects, and their collaboration
   - write findings to `key-abstractions.md`
9. Trace extension points when relevant:
   - inspect plugin, hook, registry, provider, middleware, tool, skill, or integration mechanisms
   - document registration, discovery, loading, execution, isolation, configuration, and failure handling
   - write findings to `extension-points.md`
10. Trace runtime flows:
   - start from a real user-facing API, example, test, CLI, or bootstrap path
   - follow the call chain into core execution
   - capture state changes, important branching, error handling, and extension hooks
   - write findings to `runtime-flows.md`
11. Extract design philosophy:
   - explain why the code is organized this way
   - compare tradeoffs and likely alternatives
   - separate official design intent, source-verified behavior, community practice, and inference
   - avoid empty labels such as "high cohesion" unless tied to concrete code structure
   - write findings to `design-philosophy.md`
12. Compare frameworks when the user asks for comparison:
   - fix version/source evidence for every compared framework; use web research unless each comparison target already has local evidence
   - compare positioning, architecture style, runtime, tool abstractions, workflow, memory, plugin model, engineering maturity, and adoption cost
   - write findings to `comparison.md`
13. Convert findings into adoption notes when useful:
   - identify directly reusable designs, designs requiring adaptation, and designs not worth copying
   - explain applicability, constraints, risks, and open validation questions
   - write findings to `adoption-notes.md`
14. Review research quality:
   - verify version, scope, external research coverage, research question validation, source map, main runtime flow, visual architecture need, core abstractions, extension points, evidence, fact/inference labels, and adoption advice
   - write findings to `research-review.md` for complex research
15. Maintain `evidence-index.md` throughout the work.

## Output Contract

Read `references/research-output-contract.md` when creating or reviewing final research documents.

Read `references/analysis-lenses.md` when choosing which technical angles to inspect for a framework.

## Evidence Standard

For each key conclusion, include:

- claim
- evidence type: source fact, official fact, repository doc fact, collaboration fact, community fact, test fact, inference, or pending
- evidence grade: S for source/test/config/example, A for official docs/releases, B for issue/PR/discussion/commit, C for third-party analysis, D for AI inference
- file path and line number when local source is available
- URL and retrieval date when web evidence is used
- whether the claim has source verification: yes, partial, no, or not applicable
- version, tag, commit, or snapshot date
- confidence: high, medium, or low

## Quality Gate

Before finalizing complex research, check:

- version, branch, tag, commit, or snapshot is explicit
- scope and non-scope are explicit
- external research is present or explicitly skipped with a reason
- research questions are generated and source verification status is recorded
- source map exists
- at least one main runtime flow is traced
- core abstractions are identified
- extension points are identified when relevant
- architecture diagrams are evidence-backed
- visual architecture is present for complex diagrams or explicitly skipped
- visual architecture separates Markdown knowledge source, `architecture.visual.js` graph data, `evidence.visual.js` evidence data, and HTML rendering
- visual architecture uses one view per question, architecture-object nodes, typed edges, and hidden-on-surface evidence metadata
- design philosophy is grounded in code structure and tradeoffs
- key conclusions are in `evidence-index.md`
- facts, inferences, and pending questions are separated
- adoption notes explain what to learn from, adapt, avoid, and validate later

## Relationship to Project Docs

Follow `docs/tech-research-guide/TECH_RESEARCH_GUIDE.md` for the project-level research process.
