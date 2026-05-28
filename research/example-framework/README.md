# Example Framework Technical Research

Status: example
Owner:
Last Updated: YYYY-MM-DD

This directory is an example structure for open-source framework research. When starting real research, copy this directory or use the templates under `docs/tech-research-guide/templates/`.

## Research Summary

This is a placeholder example showing the expected research file layout.

## File Navigation

| File | Description |
|---|---|
| [research-brief.md](research-brief.md) | Research goals, scope, questions, and deliverables |
| [external-research.md](external-research.md) | Official references, collaboration references, community references, and claims to verify |
| [research-questions.md](research-questions.md) | Source-verification questions derived from external references and user goals |
| [source-map.md](source-map.md) | Repository structure, module boundaries, entries, and reading order |
| [dashboard.html](dashboard.html) | Browser reading entry for Markdown, visual diagrams, and supporting materials |
| [docs.html](docs.html) | UTF-8 document reader that avoids browser encoding issues with raw Markdown |
| [architecture.md](architecture.md) | Technical architecture, core abstractions, dependency direction, and extension mechanisms |
| [visual/architecture.html](visual/architecture.html) | HTML visual structure diagram for layered relationships that are hard to express in Markdown |
| [visual/architecture.visual.js](visual/architecture.visual.js) | Visual graph data connected to Markdown conclusions and evidence links |
| [visual/evidence.html](visual/evidence.html) | Clickable evidence explanation page with architecture context and source/doc snippets |
| [visual/evidence.visual.js](visual/evidence.visual.js) | Evidence explanation data extracted from evidence-index.md and architecture.visual.js |
| [key-abstractions.md](key-abstractions.md) | Core abstractions, interfaces, data structures, and collaboration |
| [extension-points.md](extension-points.md) | Extension mechanisms such as plugins, hooks, registries, and providers |
| [runtime-flows.md](runtime-flows.md) | Main runtime flow trace and key state changes |
| [design-philosophy.md](design-philosophy.md) | Design philosophy, tradeoffs, and non-obvious designs |
| [comparison.md](comparison.md) | Comparison with similar frameworks or historical versions |
| [adoption-notes.md](adoption-notes.md) | Learning notes, applicability assumptions, and misread risks |
| [evidence-index.md](evidence-index.md) | Evidence index for key conclusions |
| [research-review.md](research-review.md) | Research quality gate and review notes |

## Usage Notes

1. Rename `example-framework` to the real framework name.
2. Fill in `research-brief.md` first.
3. Generate `references/source-inventory.json` first when local source is available.
4. Continue from the source map.
5. Record all key conclusions in `evidence-index.md`.

## Current Conclusions

- This directory is only an example structure.

## Pending Questions

- Replace placeholders with real research content.
