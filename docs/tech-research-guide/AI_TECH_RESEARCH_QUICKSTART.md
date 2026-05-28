# AI Tech Research Quickstart

Use this file to start an open-source technology research pass with an AI agent.

## 1. Recommended Input for the Agent

Provide as much as possible up front:

```text
Use open-source-tech-research to study <framework-name>.

Code location:
- Local source path, used only as input for this run and not written into outputs:
- GitHub repository:
- branch/tag/commit:

Focus for this research:
-

Out of scope:
-

I want to use the result for:
- Learning the architecture
- Comparing frameworks
- Capturing reusable designs
```

## 2. Minimum Research Flow

1. Create `research/<framework-name>/research-brief.md`.
2. Pin the code version and research scope.
3. Collect necessary external references and write `external-research.md`. If this is local-source-only research, record the skip reason in `research-review.md`.
4. Turn external claims and user goals into source-verifiable questions in `research-questions.md`.
5. If local source is available, generate `references/source-inventory.json`.
6. Generate `source-map.md`.
7. Trace one main runtime flow and write `runtime-flows.md`.
8. Extract key abstractions and write `key-abstractions.md`.
9. Write `architecture.md`. If architecture diagrams are hard to read in Markdown, add `visual/architecture.html`, `visual/architecture.visual.js`, `visual/evidence.html`, and `visual/evidence.visual.js`.
10. Write `design-philosophy.md`.
11. Record evidence in `evidence-index.md`.
12. Write `adoption-notes.md`.
13. Generate `dashboard.html` and `docs.html` as the browser reading entry and UTF-8 document reader.

## 3. Full Research Flow

Full research adds:

- `extension-points.md`: extension mechanism analysis
- `comparison.md`: cross-framework comparison
- `adoption-notes.md`: adoption and learning notes
- `research-review.md`: research quality gate

## 4. Common Prompts

```text
Do not start with a generic summary. First generate research-brief.md and define the research goal, scope, non-scope, key questions, and evidence standard.
```

```text
Do not analyze source code yet. First research <framework-name> externally. Prioritize official docs, README/Quickstart, Architecture/Concept docs, release notes, official examples, important issues/PRs/discussions, and high-quality third-party analysis. Produce external-research.md, separate official references, collaboration references, and third-party references, mark credibility, and identify which claims need source verification.

Note: external-research.md is a formal reference document. Do not record process deviations, correction notes, tool-call details, or "why the previous version was wrong" there. Put that process information in research-review.md.
```

```text
Generate research-questions.md from external-research.md. Convert important external claims into source-verifiable questions, explain why each question matters, mark likely source areas to inspect, and do not treat external claims as final conclusions.
```

```text
Use research-questions.md to perform source verification. For each research question, mark verified, partially verified, unverified, or pending. Provide source paths, classes, functions, configuration, or tests as evidence.
```

```text
Before analyzing source, generate references/source-inventory.json. Pass the local source path through --source-root. Deterministically record file counts, primary languages, top-level directories, build files, package files, entry candidates, tests, examples, docs, and configuration. references/source-inventory.json is a process reading index, not an architecture conclusion, and not a first-level reading entry. Do not write personal absolute local paths into outputs or Markdown.
```

```text
Generate dashboard.html and docs.html as the unified reading entry and UTF-8 document reader for this research. Requirements:
- The dashboard only navigates existing Markdown, visual/architecture.html, and visual/evidence.html.
- Markdown links must go through docs.html?doc=<file>, not directly to raw .md files.
- Do not add architecture conclusions to the dashboard that do not exist in Markdown.
- Dashboard and docs.html use the same side navigation.
- docs.html renders Mermaid blocks in Markdown and falls back to raw code blocks when scripts are unavailable.
- visual/architecture.html remains a dedicated architecture viewer under "Architecture Analysis".
- design-philosophy.md, comparison.md, and adoption-notes.md belong under "Architecture Analysis".
- source-map.md belongs under "Source Analysis" after "Architecture Analysis".
- visual/evidence.html belongs under "Evidence".
- references/source-inventory.json is reserved for scripts, dashboard metadata, and source-map.md; it is not a reading entry.
- A root-level visual-architecture.html, if present, is only a legacy redirect.
- research/index.html should only keep dashboard entries for each framework.
```

```text
Trace one main runtime path from a source entry point. Produce runtime-flows.md and bind every important step to source evidence.
```

```text
Generate a visual architecture diagram from architecture.md, runtime-flows.md, source-map.md, and evidence-index.md.

Authority relationship:
- Markdown is the knowledge source. HTML is only the visual presentation layer.
- Do not add conclusions to HTML or architecture.visual.js that are absent from architecture.md or evidence-index.md.
- Put graph data in visual/architecture.visual.js.
- Copy visual-architecture-template.html to visual/architecture.html as the renderer.
- Put the evidence viewer in visual/evidence.html and evidence explanations in visual/evidence.visual.js, including architecture context, evidence conclusions, and source/doc snippets.

Before generation, write a diagram design note:
1. Views in this diagram
2. The question each view answers
3. Node list for each view
4. Semantic type for each edge
5. How nodes and key edges trace back to evidence-index.md or Markdown sections

Generation requirements:
- Generate or update visual/architecture.visual.js, visual/architecture.html, visual/evidence.visual.js, and visual/evidence.html.
- Do not heavily modify the HTML template. The HTML template renders only; graph data goes in architecture.visual.js.
- Mainly edit ARCHITECTURE_META, ARCHITECTURE_VIEWS, nodes, edges, and layers.
- Do not put all research conclusions into one graph. One tab/view answers one core question.
- Consider at least these views: Architecture Overview, Entry and Initialization, Single-Run Main Flow, Tools and Extension Mechanisms, State and Context.
- Keep each view to 8-10 main nodes. Split larger views.
- Nodes must be architecture objects such as modules, components, runtime objects, state objects, extension points, external dependencies, policies, or permission components.
- Do not turn ordinary functions, fields, design principles, evidence IDs, or conclusion sentences into nodes.
- Every edge must have clear semantics, such as request flow, sync call, async event, dependency, registration/discovery, permission check, context build, state read/write, model stream, or result return.
- Every node must include id, type, role, title, sub, ev, doc, and tip.
- Every key edge must include from, to, label, kind, ev, and doc.
- ev must exist in evidence-index.md. doc must link to the relevant Markdown anchor or section.
- Do not display evidence IDs on the diagram surface. Keep evidence IDs in the design note, architecture.visual.js, or evidence-index.md.
- Node details may show doc source paths. Source clicks should open visual/evidence.html#<evidence-id>, not raw Markdown, to avoid browser encoding issues.
- Do not add unverified capabilities, counts, or design conclusions.
```

```text
Extract key-abstractions.md. For each abstraction, explain the problem it solves, key source, lifecycle, relationships to other objects, and adoption value.
```

```text
Generate adoption-notes.md. Explain which designs are worth learning from, which require context-specific adaptation, which should not be copied directly, and include evidence and applicability assumptions.
```

## 5. Quality Gate

Before final output, check:

- Version, branch, tag, or commit is explicit.
- Scope and non-scope are explicit.
- Necessary external references are covered, or a skip reason is recorded.
- External claims are converted into research questions and source-verification status is recorded.
- `references/source-inventory.json` is generated, or the absence of local source is explained.
- Markdown, dashboards, visual data, and references do not contain personal absolute local paths.
- `dashboard.html` and `docs.html` are generated as reading entries.
- A source map exists.
- At least one main runtime flow is traced.
- Complex architecture has an HTML visual diagram, or the skip reason is explained.
- Each visual architecture tab answers one core question.
- Visual architecture hides evidence IDs on the surface while preserving traceability.
- Visual architecture separates Markdown knowledge source, visual data, and HTML rendering.
- `ev` and `doc` fields in visual/architecture.visual.js can trace back through visual/evidence.html.
- Key abstractions are identified.
- Extension points are identified.
- Architecture diagrams have source evidence.
- Design philosophy comes from source structure and tradeoffs.
- Key conclusions are in `evidence-index.md`.
- Official facts, source facts, community facts, inferences, and pending items are separated.
- Adoption notes distinguish designs to learn from, adapt, avoid, or validate later.
- `node docs/tech-research-guide/scripts/validate-research.js research/<framework-name>` has been run, or the reason it could not run is recorded.
