# Tech Research Guide

This guide tells agents how to research open-source frameworks, infrastructure projects, middleware, toolchains, or unfamiliar codebases in this repository.

The goal is not to pile up notes. The goal is to create reusable understanding: external research, research questions, source maps, source inventories, architecture documents, visual architecture diagrams, dashboard reading entries, runtime flows, design philosophy, evidence indexes, and adoption notes.

## 1. Principles

### 1.1 Define the Questions Before Reading Source

Every research effort must begin with explicit research questions. Do not start with aimless directory traversal.

Good research questions include:

- How does this framework transform user APIs into runtime execution plans?
- How does the core lifecycle start, extend, and shut down?
- How does the plugin mechanism isolate the framework core from external extensions?
- How do state, context, or dependencies move across modules?
- Which designs are worth learning from, and which should not be copied directly?

### 1.2 Read External References Before Source Verification

Open-source technology research should not rely only on source code. Use official docs and high-quality external references to build context, turn important claims into verifiable questions, and then verify them in source.

External references do not replace source analysis:

- Official references explain design goals, recommended usage, and capability boundaries.
- Community references explain practice, common issues, and historical discussion.
- Source, tests, and configuration verify actual implementation.
- Anything not verified by source, tests, or official references must be labeled as inference or pending.

### 1.3 Conclusions Must Be Traceable

Important conclusions must be tied to evidence. Evidence may come from:

- Source files, classes, functions, configuration, and tests
- Official docs or design docs
- Build scripts, examples, and benchmarks
- Design discussions in issues, PRs, release notes, or commits

Distinguish:

- Source fact: directly visible in code
- Official fact: stated by official websites, README, docs, examples, or release notes
- Repository doc fact: stated by docs inside the researched repository
- Collaboration fact: traceable to issues, PRs, discussions, or commit messages
- Community fact: stated by third-party articles, talks, videos, or user practice
- Test fact: demonstrated by tests, examples, or benchmarks
- Inference: reasoned from multiple evidence items
- Pending: not enough evidence for a confirmed conclusion

### 1.4 Credibility Levels

| Level | Type | Source | Use | Rule |
|---|---|---|---|---|
| S | Source fact | Core source, tests, configuration, runnable examples | Support final architecture and implementation conclusions | Highest priority |
| A | Official reference | Official site, README, docs, quickstart, architecture docs, release notes, official blog | Understand goals, usage, and capability boundaries | Verify key implementation details in source when possible |
| B | Collaboration reference | Issue, PR, discussion, commit message | Understand evolution, tradeoffs, and pain points | Record context and date |
| C | Third-party analysis | Blogs, videos, unofficial architecture analysis, user practice | Add practice context and inspiration | Never use as the only evidence for a core conclusion |
| D | AI inference | Model-generated explanation or unsupported design-intent guess | Form hypotheses | Must be labeled as inference |

### 1.5 When to Search the Web

Use web search when:

- The user gives only a project name, framework name, or remote repo name and you need to confirm the official repo, docs, license, latest release/tag, or active branch.
- You need official positioning, recommended usage, stable API promises, compatibility, capability boundaries, or design goals.
- You need version differences, release notes, changelogs, breaking changes, deprecations, or new capabilities.
- You are comparing frameworks and the comparison targets do not already have pinned local research.
- You need ecosystem maturity, maintenance status, community pain points, security advisories, package-manager versions, or plugin ecosystem information.
- Local source is incomplete or from an unusual source, or you need to compare a local snapshot with current official behavior.
- `research-review.md` marks an important conclusion as missing official, community, or version evidence.

Web search is usually unnecessary when:

- Creating a source map, module boundary map, call chain, or core abstraction analysis
- Verifying implementation behavior, configuration loading, test coverage, or runtime state changes
- Extracting design tradeoffs from source structure
- The user explicitly requests local-source-only research

### 1.6 Pin the Version

Research conclusions must state:

- Project identifier
- Git remote
- Branch, tag, or commit
- Dependency versions
- Research date

If the version is not pinned, mark conclusions as current snapshot only.

### 1.7 Trace Main Flows From User Scenarios

Start from outward-facing entries:

- Public APIs
- CLI commands
- Configuration entries
- Examples
- Tests
- Server bootstrap

Do not describe modules only by package name. Architecture documents should explain how a real call travels through core abstractions.

### 1.8 Research Must Serve Understanding and Reuse

Every research effort should end by answering:

- Which design patterns are reusable?
- Which designs depend on a specific ecosystem and should not be copied directly?
- What problem does each design solve?
- What context is required before evaluating adoption elsewhere?
- Which risks or constraints need more verification?

## 2. Recommended Directory Structure

```text
research/<framework-name>/
  README.md
  research-brief.md
  external-research.md
  research-questions.md
  source-map.md
  dashboard.html
  docs.html
  architecture.md
  visual/
    architecture.html
    architecture.visual.js
    evidence.html
    evidence.visual.js
  runtime-flows.md
  key-abstractions.md
  extension-points.md
  design-philosophy.md
  comparison.md
  adoption-notes.md
  evidence-index.md
  research-review.md
  references/
    source-inventory.json
```

Focused research can merge some documents, but it should still include:

- Research goal and scope
- External reference summary and questions to verify
- Source map
- `references/source-inventory.json`, or an explanation when no local source is available
- Core architecture
- One main flow trace
- Design philosophy summary
- Evidence index
- Adoption notes

Full research should also include:

- Extension mechanism analysis
- Visual architecture diagrams
- Dashboard reading entry
- Cross-framework comparison
- Research quality review

## 3. Research Lifecycle

### 3.1 Research Brief

Complete `research-brief.md` first. It is the Research Charter for the effort:

- Target
- Version information
- Background and motivation
- Research questions
- Scope and non-scope
- Expected deliverables
- Acceptance criteria

### 3.2 External Research

Complete `external-research.md`:

- Official references: website, docs, README, quickstart, architecture docs, release notes, official examples
- Collaboration references: important issues, PRs, discussions, commit messages
- Community references: high-quality technical articles, user practice, videos, or talks
- Credibility level, key claims, and value for this research
- Important claims that require source verification
- Differences between external references and local source

`external-research.md` is a formal reference document. It records sources, search scope, key claims, credibility, source-verification status, reference boundaries, and differences from source. Do not put process deviations, agent mistakes, correction notes, tool-call details, apologies, rerun reasons, or "why the previous version was wrong" there. Put that process information in `research-review.md`.

If the user explicitly requests local-source-only research, web search can be skipped, but the skip reason must be recorded in `research-review.md`.

### 3.3 Research Questions

Complete `research-questions.md`:

- Convert external claims, README statements, and user goals into verifiable questions.
- Mark the source direction and importance for each question.
- After source analysis, update each question as verified, partially verified, unverified, or pending.
- Record external/source mismatches separately.

### 3.4 Source Map

Complete `source-map.md`:

- Repository structure
- Build system
- Core modules
- External entries
- Example and test entries
- Recommended reading order
- Whether `references/source-inventory.json` was generated

### 3.5 Source Inventory

Generate or update `references/source-inventory.json`:

```bash
node docs/tech-research-guide/scripts/build-source-inventory.js research/<framework-name> --source-root /absolute/path/to/source
```

`references/source-inventory.json` is a deterministic index produced from local source. It supports reading and validation. It is process/machine-generated material, kept under `references/`, and not a first-level reading entry. `--source-root` may point to a local source path at runtime, but outputs and Markdown must only keep project names, repository-relative paths, and version metadata. Do not write personal absolute paths.

It may record:

- Project identifier, remote, branch, commit, and version hint
- File counts, primary languages, top-level directory summary
- Build files, package files, entry candidates, tests, examples, docs, configuration, and large files
- Candidate entries useful for `source-map.md`, `runtime-flows.md`, and `evidence-index.md`

Rules:

- It is not an architecture conclusion and cannot replace `architecture.md`.
- It does not explain design philosophy. It only provides a deterministic source index.
- Important conclusions still belong in Markdown and must be bound to evidence in `evidence-index.md`.
- If local source is unavailable, explain why in `research-review.md`.

### 3.6 Architecture

Complete `architecture.md`:

- Overall architecture
- Module responsibilities
- Dependency direction
- Core abstractions
- Extension points
- State and data flow

### 3.7 Dashboard

Generate or update `dashboard.html`:

```bash
node docs/tech-research-guide/scripts/build-research-dashboard.js research/<framework-name>
```

The dashboard is a reading entry, not a new knowledge source. It organizes README, Markdown research docs, visual architecture diagrams, and evidence viewers. `docs.html` is the UTF-8 document reader used by the dashboard. Process materials such as `references/source-inventory.json` remain for scripts, dashboard metadata, and `source-map.md`; they are not user reading entries.

Rules:

- Dashboard only navigates and summarizes. It must not add architecture conclusions that are absent from Markdown.
- Dashboard Markdown links must point to `docs.html?doc=<file>`, not raw `.md`.
- Dashboard and `docs.html` use the same side navigation.
- `docs.html` should render Mermaid blocks and fall back to raw code blocks when Mermaid is unavailable.
- `visual/architecture.html` remains a dedicated architecture viewer under "Architecture Analysis".
- `design-philosophy.md`, `comparison.md`, and `adoption-notes.md` belong under "Architecture Analysis".
- `source-map.md` belongs under "Source Analysis" after "Architecture Analysis".
- `visual/evidence.html` belongs under "Evidence".
- `references/source-inventory.json` stays in `references/` and is not shown in side navigation or README file navigation.
- Legacy `visual-architecture.html` can remain as a compatibility redirect, but is not the main entry for new outputs.
- `research/index.html` can be the global research index, but should only link to each framework's `dashboard.html`.

### 3.8 Visual Architecture

Add visual architecture diagrams when Markdown/Mermaid cannot clearly express layered architecture, multiple entries, multiple flows, or many extension points.

Recommended linked structure:

```text
research/<framework-name>/
  architecture.md
  runtime-flows.md
  source-map.md
  evidence-index.md
  visual/
    architecture.html
    architecture.visual.js
    evidence.html
    evidence.visual.js
```

Authority relationship:

- Markdown is the knowledge source.
- `architecture.visual.js` is graph data only: views, nodes, edges, layers, `ev`, `doc`, `tip`.
- `architecture.html` is rendering and interaction only.
- `evidence.visual.js` is evidence explanation data derived from `evidence-index.md` and `architecture.visual.js`.
- `evidence.html` is the evidence explanation page opened from diagram nodes.
- Do not add architecture conclusions to HTML or visual data that are absent from Markdown.
- Legacy single-file `visual-architecture.html` may be kept for compatibility, but new outputs should use `visual/architecture.html` + `visual/architecture.visual.js` + `visual/evidence.html` + `visual/evidence.visual.js`.

Use HTML visual diagrams when:

- The diagram has more than 3 layers or 12 important nodes.
- The same framework needs overview, runtime flow, layered view, extension points, and state flow.
- Mermaid diagrams become crowded, cross too heavily, or require horizontal scrolling.
- The user needs a readable presentation/review diagram, not just source-tracing evidence.

Requirements:

- The visual diagram complements `architecture.md`; it does not replace it.
- Write a diagram design note before data generation: views, each view's question, node list, edge semantics, and evidence mapping.
- Read `architecture.md`, `runtime-flows.md`, `source-map.md`, and `evidence-index.md` first; read `design-philosophy.md` if needed.
- One tab/view answers one core question.
- Keep each view to 8-10 main nodes. Split larger views.
- Nodes must be architecture objects: modules, components, runtime objects, state objects, extension points, external dependencies, policies, or permission components.
- Do not turn ordinary functions, fields, design principles, evidence IDs, or conclusion sentences into nodes.
- Every edge must have clear semantics: request flow, sync call, async event, dependency, registration/discovery, permission check, context build, state read/write, model stream, or result return.
- Different relationship types should be visually distinguishable.
- Recommended views include Architecture Overview, Entry and Initialization, Single-Run Main Flow, Tools and Extension Mechanisms, State and Context.
- Nodes, key edges, and explanations must trace back to evidence IDs in `evidence-index.md`.
- Every node must include `id`, `type`, `role`, `title`, `sub`, `ev`, `doc`, and `tip`.
- Every key edge must include `from`, `to`, `label`, `kind`, `ev`, and `doc`.
- `ev` must exist in `evidence-index.md`; `doc` must link to a Markdown anchor or section.
- Evidence IDs are hidden on the diagram surface by default and kept in the design note, `architecture.visual.js`, or `evidence-index.md`.
- Large diagrams should support zooming, dragging, legends, tooltips, or explanation panels.
- Visual diagrams must open offline and not depend on external CDNs, remote images, or running services.
- Do not add unverified capabilities, counts, or design conclusions.

HTML template rules:

- Do not modify core CSS, zoom, drag, tooltip, legend, or fit behavior unless explicitly requested.
- Mainly edit `visual/architecture.visual.js`.
- `visual/architecture.html` is copied from `visual-architecture-template.html` and only reads `./architecture.visual.js`.
- `view.purpose` must answer "what reading problem does this view solve?"
- `node.role` distinguishes `module`, `runtime-object`, `state`, `external-dependency`, `extension-point`, `policy`, and `adapter`.
- `edge.kind` uses fixed relationship types instead of treating every edge as a call.
- `node.ev` and `edge.ev` are evidence metadata; do not render them on the diagram surface unless explicitly requested.
- Node details may show `doc` source paths. Source clicks should open `visual/evidence.html#<evidence-id>`, not raw Markdown.

Self-check after generation:

- Does each tab answer one core question?
- Did one graph absorb too many research conclusions?
- Is every node an architecture object?
- Was any ordinary concept drawn as a module?
- Does every edge have clear semantics?
- Are main flow, dependency, registration, permission, and state read/write distinguishable?
- Can nodes and key edges trace back to `evidence-index.md`?
- Do all `ev` values in `architecture.visual.js` exist in `evidence-index.md`?
- Can `doc` values trace back through `visual/evidence.html`?
- Are there conclusions in HTML/visual data that do not exist in Markdown?
- Are any conclusions unsupported by evidence?
- Are source facts, design inferences, and pending items separated?
- Is the layout readable?

### 3.9 Key Abstractions

Complete `key-abstractions.md`:

- Core interfaces, classes, functions, and data structures
- Lifecycle objects
- Collaboration between abstractions
- The problem each abstraction solves
- Design limits and adoption value for each abstraction

### 3.10 Runtime Flows

Complete `runtime-flows.md`:

- Choose 1-3 key scenarios.
- Trace from entry to core execution.
- Draw a sequence diagram or flowchart.
- Mark important functions and state changes.

### 3.11 Extension Points

Complete `extension-points.md`:

- Plugins, hooks, registries, providers, middleware, and other extension points
- How they are registered, discovered, loaded, executed, and isolated
- How extension failure is handled
- Which extension mechanisms are worth learning from

### 3.12 Design Philosophy

Complete `design-philosophy.md`:

- Why it is designed this way
- What complexity it solves
- What it sacrifices
- How it differs from common alternatives
- Which designs reflect core tradeoffs
- Official references may explain design goals
- Source evidence must verify actual implementation
- Community references can only provide practice context or problem background

### 3.13 Comparison

When the user needs framework comparison, complete `comparison.md`:

- Positioning and architecture style
- Differences in runtime, tools, workflow, memory, plugins, and other core abstractions
- Engineering maturity and extension friendliness
- Implications for learning, selection, or design judgment

### 3.14 Adoption Notes

Complete `adoption-notes.md`:

- Designs that can be learned from directly
- Designs that require context-specific adaptation
- Designs that should not be copied directly
- Preconditions, constraints, and validation questions
- Learning value and later standalone evaluation directions

### 3.15 Evidence Index

Maintain `evidence-index.md` throughout:

- Every key conclusion has evidence
- Evidence type and location are explicit
- Credibility level is explicit
- Whether source, tests, or official references verify the claim is explicit
- Inference chains are marked
- Low-confidence conclusions do not enter final recommendations

### 3.16 Research Review

Complete `research-review.md`:

- Whether the research version is pinned
- Whether necessary external references are covered
- Whether external claims were converted to research questions and verified in source
- Whether conclusions have evidence
- Whether architecture diagrams are source-backed
- Whether design philosophy over-interprets
- Whether adoption advice crosses into implementation plans
- Which questions remain pending
- Whether process notes, skipped/compensated steps, validation failures and fixes, document-boundary issues, and similar process records are centralized here instead of polluting formal research documents

## 4. Output Quality Standard

A good technical research output should:

- Let readers understand the framework's core design within 10 minutes
- Let readers continue into source using the source map
- Tie every key conclusion to evidence
- Trace at least one main flow from entry to core execution
- Derive design philosophy from source structure and tradeoffs
- Explain applicability, constraints, and non-copyable parts in adoption notes

## 5. Research Quality Gate

Run this gate before final output:

| Check | Requirement |
|---|---|
| Version pinned | Branch, tag, commit, or current snapshot is explicit |
| Scope clear | Scope and non-scope are explicit |
| External references | Necessary official, collaboration, or community references are covered, or skip reason is recorded |
| Research questions | External claims are converted into verifiable questions and verification status is recorded |
| Source map | Repository structure, entries, modules, and reading order are explained |
| Source inventory | `references/source-inventory.json` is generated, or lack of local source is explained |
| Dashboard | `dashboard.html` is generated as a reading entry, or skip reason is explained |
| Main flow | At least one runtime flow from entry to core execution is traced |
| Key abstractions | Key interfaces, objects, data structures, and lifecycles are identified |
| Extension points | Registration, loading, execution, isolation, and failure handling are identified |
| Architecture diagram | Diagrams are backed by source, docs, tests, or examples |
| Visual architecture | Complex architecture has `visual/architecture.html` and `visual/architecture.visual.js`, or skip reason is explained |
| Design philosophy | Design claims come from source structure and tradeoffs, not imagination |
| Evidence index | Key conclusions are recorded in `evidence-index.md` |
| Fact separation | Source facts, official facts, repository doc facts, collaboration facts, community facts, test facts, inferences, and pending items are separated |
| Adoption notes | Learn/adapt/avoid/validate-later guidance is explicit |
| Review record | Complex research has `research-review.md` |
| Automated validation | `node docs/tech-research-guide/scripts/validate-research.js research/<framework-name>` ran, or the failure reason is recorded |

## 6. Research Roles

Complex research can use these roles as thinking lenses. You do not need to mechanically split work across multiple people. Full goals, documents, responsibilities, and boundaries live under `roles/`.

| Role | Goal | Main documents |
|---|---|---|
| Research Lead | Turn vague intent into a scoped, answerable, acceptable Research Brief and organize external references and research questions | `research-brief.md`, `external-research.md`, `research-questions.md`, `README.md`, `research-review.md` |
| Source Code Analyst | Build reliable source entries, source maps, source inventories, and call-chain evidence; verify research questions | `source-map.md`, `references/source-inventory.json`, `runtime-flows.md`, `research-questions.md`, `evidence-index.md` |
| Architecture Analyst | Abstract source facts into architecture models and key abstraction relationships | `architecture.md`, `key-abstractions.md`, `extension-points.md` |
| Design Philosophy Analyst | Extract design philosophy from official goals, source structure, and architecture tradeoffs | `design-philosophy.md`, `external-research.md`, `architecture.md`, `key-abstractions.md` |
| Adoption Analyst | Turn framework designs into learning and adoption notes with assumptions and non-copyable parts | `adoption-notes.md`, `comparison.md`, `external-research.md` |
| Research Reviewer | Review whether the research output is reliable, complete, and reusable | `research-review.md`, `evidence-index.md`, `external-research.md`, `research-questions.md` |

## 7. Anti-Patterns

Avoid:

- Copying only the official introduction
- Listing directories without explaining module relationships
- Drawing architecture diagrams without source evidence
- Forcing complex relationships into one unreadable Markdown diagram
- Presenting speculation as fact
- Using empty slogans such as "high cohesion and low coupling" instead of concrete design analysis
- Giving confirmed conclusions without pinning the version
- Failing to separate learning notes from reusable design guidance
