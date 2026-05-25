---
name: open-source-tech-research
description: Analyze open-source frameworks or unfamiliar codebases and produce source-backed technical research documents, including source maps, architecture, key abstractions, extension points, runtime flows, design philosophy, comparison, and adoption notes. Use when the user asks to research, study, read, compare, or document an open-source technology or framework.
---

# Open Source Tech Research

Use this skill when the user wants to understand an open-source framework, unfamiliar codebase, middleware, library, infrastructure project, or toolchain through source-backed technical research.

## Core Rule

Do not produce generic introductions. Important conclusions must be backed by source, docs, tests, examples, config, or version evidence. Mark assumptions and inferences explicitly.

## Workflow

1. Identify the research target:
   - local path or remote repository
   - branch, tag, commit, or current snapshot
   - user's learning goal
   - modules and scenarios in scope
2. Read or create `research/<framework-name>/research-brief.md`.
   - If the research goal is unclear, ask concise clarification before broad code reading.
   - If enough context exists, create the brief from `docs/tech-research-guide/templates/research-brief-template.md`.
3. Build a source map:
   - use `rg --files` to inspect structure
   - identify build files, packages, examples, docs, tests, public APIs, CLI entrypoints, server startup, and config loaders
   - write findings to `source-map.md`
4. Trace architecture:
   - identify core abstractions, module boundaries, dependency direction, state flow, extension points, and lifecycle
   - write findings to `architecture.md`
5. Extract key abstractions:
   - document important interfaces, classes, functions, data structures, lifecycle objects, and their collaboration
   - write findings to `key-abstractions.md`
6. Trace extension points when relevant:
   - inspect plugin, hook, registry, provider, middleware, tool, skill, or integration mechanisms
   - document registration, discovery, loading, execution, isolation, configuration, and failure handling
   - write findings to `extension-points.md`
7. Trace runtime flows:
   - start from a real user-facing API, example, test, CLI, or bootstrap path
   - follow the call chain into core execution
   - capture state changes, important branching, error handling, and extension hooks
   - write findings to `runtime-flows.md`
8. Extract design philosophy:
   - explain why the code is organized this way
   - compare tradeoffs and likely alternatives
   - avoid empty labels such as "high cohesion" unless tied to concrete code structure
   - write findings to `design-philosophy.md`
9. Compare frameworks when the user asks for comparison:
   - compare positioning, architecture style, runtime, tool abstractions, workflow, memory, plugin model, engineering maturity, and adoption cost
   - write findings to `comparison.md`
10. Convert findings into adoption notes when useful:
   - identify directly reusable designs, designs requiring adaptation, and designs not worth copying
   - explain applicability, constraints, risks, and open validation questions
   - write findings to `adoption-notes.md`
11. Review research quality:
   - verify version, scope, source map, main runtime flow, core abstractions, extension points, evidence, fact/inference labels, and adoption advice
   - write findings to `research-review.md` for complex research
12. Maintain `evidence-index.md` throughout the work.

## Output Contract

Read `references/research-output-contract.md` when creating or reviewing final research documents.

Read `references/analysis-lenses.md` when choosing which technical angles to inspect for a framework.

## Evidence Standard

For each key conclusion, include:

- claim
- evidence type: source fact, doc fact, test fact, or inference
- file path and line number when local source is available
- version, tag, commit, or snapshot date
- confidence: high, medium, or low

## Quality Gate

Before finalizing complex research, check:

- version, branch, tag, commit, or snapshot is explicit
- scope and non-scope are explicit
- source map exists
- at least one main runtime flow is traced
- core abstractions are identified
- extension points are identified when relevant
- architecture diagrams are evidence-backed
- design philosophy is grounded in code structure and tradeoffs
- key conclusions are in `evidence-index.md`
- facts, inferences, and pending questions are separated
- adoption notes explain what to learn from, adapt, avoid, and validate later

## Relationship to Project Docs

Follow `docs/tech-research-guide/TECH_RESEARCH_GUIDE.md` for the project-level research process.
