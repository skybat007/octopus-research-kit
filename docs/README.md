# Docs Guide

This directory contains the technical research guide, templates, reference material, and historical archives. Concrete research outputs live under the repository-level `research/` directory.

## Directory Overview

```text
docs/
  README.md
  tech-research-guide/
    README.md
    TECH_RESEARCH_GUIDE.md
    templates/
  memory/
  specs-archive/

research/
  <framework-name>/
    README.md
    research-brief.md
    external-research.md
    research-questions.md
    source-map.md
    architecture.md
    visual/
      architecture.html
      architecture.visual.js
    key-abstractions.md
    extension-points.md
    runtime-flows.md
    design-philosophy.md
    comparison.md
    adoption-notes.md
    evidence-index.md
    research-review.md
    references/
```

## Technical Research Documents

Technical research uses:

- [tech-research-guide/TECH_RESEARCH_GUIDE.md](./tech-research-guide/TECH_RESEARCH_GUIDE.md)
- [tech-research-guide/AI_TECH_RESEARCH_QUICKSTART.md](./tech-research-guide/AI_TECH_RESEARCH_QUICKSTART.md)
- [tech-research-guide/templates/](./tech-research-guide/templates/)
- [research/example-framework/](../research/example-framework/)

Use this workflow to:

- Analyze open-source framework source code
- Collect official docs, release notes, issues, PRs, and high-quality community references
- Map technical architecture
- Generate HTML visual layered diagrams for complex architecture
- Trace core runtime flows
- Summarize design philosophy
- Capture design patterns that can be learned from, adapted, or avoided

## References and Archives

- `docs/memory/`: reserved for project-level long-term memory, conventions, and research context.
- `docs/specs-archive/`: historical notes for old migrated business specs, kept only as reference.

New open-source technology research belongs under:

```text
research/<framework-name>/
```
