# Tech Research Guide

This directory defines the workflow and templates for open-source technology research.

## Entry Points

- [TECH_RESEARCH_GUIDE.md](./TECH_RESEARCH_GUIDE.md): complete research guide
- [AI_TECH_RESEARCH_QUICKSTART.md](./AI_TECH_RESEARCH_QUICKSTART.md): quickstart for starting a research pass with an AI agent
- [GLOSSARY.md](./GLOSSARY.md): research glossary
- [roles/](./roles/): role boundaries for complex research
- [templates/](./templates/): copyable templates for each research effort
- [scripts/](./scripts/): source inventory, evidence viewer, dashboard, and validation scripts

## Usage

1. Create `research/<framework-name>/` for the research target.
2. Copy the needed templates from `templates/`.
3. Complete `research-brief.md` first. It is also the Research Charter.
4. Complete `external-research.md` before source reading, collecting necessary official, collaboration, and community references. If skipped, record why.
5. Complete `research-questions.md`, turning external claims and user goals into source-verifiable questions.
6. If local source is available, generate a structured inventory: `node docs/tech-research-guide/scripts/build-source-inventory.js research/<framework-name> --source-root /absolute/path/to/source`. The local path is a runtime input only and must not be written into research outputs.
7. Proceed through source map, key abstractions, runtime flows, architecture, extension points, design philosophy, and adoption notes.
8. Record important conclusions in `evidence-index.md`.
9. If HTML visual diagrams are needed, copy `visual-architecture-template.html` to `visual/architecture.html` and maintain graph data in `architecture.visual.js`. Also copy `evidence-viewer-template.html` to `visual/evidence.html` and maintain evidence explanations in `evidence.visual.js`.
10. Generate evidence explanation data: `node docs/tech-research-guide/scripts/build-evidence-visual.js research/<framework-name>`.
11. Generate the reading entry and UTF-8 document reader: `node docs/tech-research-guide/scripts/build-research-dashboard.js research/<framework-name>`.
12. Validate final outputs: `node docs/tech-research-guide/scripts/validate-research.js research/<framework-name>`.

## Scripts

```bash
# Scan source through a runtime argument and generate references/source-inventory.json
node docs/tech-research-guide/scripts/build-source-inventory.js research/<framework-name> --source-root /absolute/path/to/source

# Generate clickable evidence explanation data from evidence-index.md and visual/architecture.visual.js
node docs/tech-research-guide/scripts/build-evidence-visual.js research/<framework-name>

# Generate dashboard.html, docs.html, and research/index.html
node docs/tech-research-guide/scripts/build-research-dashboard.js research/<framework-name>

# Validate documents, dashboards, source inventories, visual data, evidence IDs, and inline HTML scripts
node docs/tech-research-guide/scripts/validate-research.js research/<framework-name>

# Check for personal paths, common token shapes, and private-key shapes before release
node docs/tech-research-guide/scripts/check-release-safety.js
```

## Boundary

`tech-research-guide` is for understanding technologies and preserving research conclusions.

This repository does not maintain implementation-planning specs. If research conclusions later become implementation work in another project, create planning, design, and acceptance materials in that project.
