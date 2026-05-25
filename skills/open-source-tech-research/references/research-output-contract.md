# Research Output Contract

Use this contract to check whether a research output is useful enough to keep.

## Required Documents

For a full research pass, produce or update:

- `research-brief.md`
- `source-map.md`
- `architecture.md`
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
- explains module relationships, not just directory names
- traces at least one concrete runtime path for full research
- distinguishes facts, inferences, and open questions
- links key conclusions to source evidence
- turns design observations into practical learning and adoption notes
- explains which designs can be copied, adapted, avoided, or validated first

## Evidence Labels

Use these labels:

- `source fact`: directly visible in code
- `doc fact`: stated by official docs or repository docs
- `test fact`: demonstrated by tests or examples
- `inference`: reasoned from multiple facts
- `pending`: not enough evidence yet

## Final Research Summary Shape

When summarizing a research pass to the user, include:

- what was researched
- current version or snapshot
- main findings
- documents created or updated
- highest-value design and adoption insights
- remaining open questions
