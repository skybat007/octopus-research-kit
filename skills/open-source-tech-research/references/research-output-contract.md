# Research Output Contract

Use this contract to check whether a research output is useful enough to keep.

## Required Documents

For a full research pass, produce or update:

- `research-brief.md`
- `external-research.md`
- `research-questions.md`
- `source-map.md`
- `dashboard.html`
- `docs.html`
- `references/source-inventory.json` when a local source tree is available
- `architecture.md`
- `visual/architecture.html` and `visual/architecture.visual.js` when Markdown diagrams are too dense or the framework has multiple major views
- `key-abstractions.md`
- `extension-points.md`
- `runtime-flows.md`
- `design-philosophy.md`
- `comparison.md`
- `adoption-notes.md`
- `evidence-index.md`
- `research-review.md`

For a focused research pass, produce only the documents needed for the user's question, but still keep `evidence-index.md` updated.

## Quality Bar

A good output:

- answers the user's stated research questions
- fixes the framework version or clearly labels it as current snapshot
- captures relevant official, collaboration, and community evidence or explains why external research was skipped
- keeps process deviations, skipped/compensated steps, validation failures, tool-run notes, correction explanations, and agent workflow issues in `research-review.md`, not in formal research documents such as `external-research.md`
- converts external claims into source-verifiable research questions
- includes a deterministic `references/source-inventory.json` for local source trees, or explains why it could not be generated
- includes `dashboard.html` as a browser reading entry and `docs.html` as a UTF-8 Markdown/JSON reader; do not link raw `.md` files from the dashboard
- explains module relationships, not just directory names
- traces at least one concrete runtime path for full research
- uses `visual/architecture.html` plus `visual/architecture.visual.js` for complex layered diagrams that are hard to read in Markdown
- uses `visual/evidence.html` plus `visual/evidence.visual.js` when graph nodes need clickable evidence explanation with graph context and source/doc snippets without opening raw Markdown
- treats Markdown research documents as the knowledge source, visual JS as graph/evidence data, and HTML as rendering only
- keeps visual architecture views focused: one tab answers one question
- uses architecture-object nodes and typed edges instead of a single concept map
- keeps evidence IDs traceable through `evidence-index.md`, `doc` links, `visual/evidence.html`, or visual JS metadata, but does not display evidence IDs on the diagram surface by default
- distinguishes facts, inferences, and open questions
- links key conclusions to explicit evidence
- separates official intent, source-verified behavior, community practice, and inference
- turns design observations into practical learning and adoption notes
- explains which designs can be copied, adapted, avoided, or validated first
- passes `node docs/tech-research-guide/scripts/validate-research.js research/<framework-name>` for complex research, or records unresolved validation warnings

## Evidence Labels

Use these labels:

- `source fact`: directly visible in code, config, tests, or runnable examples
- `official fact`: stated by official docs, official README, official examples, or release notes
- `repository doc fact`: stated by docs inside the researched repository
- `collaboration fact`: stated by issue, PR, discussion, or commit message
- `community fact`: stated by third-party articles, videos, or user practice reports
- `test fact`: demonstrated by tests or examples
- `inference`: reasoned from multiple facts
- `pending`: not enough evidence yet

## Final Research Summary Shape

When summarizing a research pass to the user, include:

- what was researched
- current version or snapshot
- whether web/external research was used
- main findings
- documents created or updated
- highest-value design and adoption insights
- remaining open questions
