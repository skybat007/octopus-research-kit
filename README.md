# Octopus Tech Research Workspace

Octopus Tech Research Workspace is a source-backed research framework for studying open-source technologies, reading unfamiliar codebases, and turning that work into reusable technical documents.

Its goal is not to collect loose notes. It helps you build a traceable understanding of an open-source technology:

- What problem it solves
- Where its architecture boundaries are
- How its core abstractions are organized
- How important runtime flows appear in source code
- What design ideas, tradeoffs, and extension mechanisms it uses
- Which patterns are worth learning, adapting, or evaluating later

## Core Workflow

This project combines `Research Spec + Research Skill`.

`Research Spec` defines a specific research effort:

- Target project, version, and code source
- Goals, scope, and out-of-scope items
- Key questions to answer
- Required technical documents
- External research, source-verification questions, and evidence for conclusions

`Research Skill` captures the execution method:

- How to scan an unfamiliar open-source repository
- How to turn official and community materials into source-verification questions
- How to locate entry points, core modules, key abstractions, and main flows
- How to derive architecture conclusions from source evidence
- How to add HTML visual architecture diagrams driven by `visual/architecture.visual.js` when Markdown is not expressive enough
- How to produce consistent architecture, design-philosophy, and adoption notes

## Repository Layout

```text
.
├── .github/
│   └── workflows/
├── AGENTS.md
├── LICENSE
├── package.json
├── README.md
├── QUICKSTART.md
├── docs/
│   ├── README.md
│   ├── tech-research-guide/
│   │   ├── README.md
│   │   ├── TECH_RESEARCH_GUIDE.md
│   │   ├── roles/
│   │   ├── scripts/
│   │   └── templates/
│   ├── memory/
│   └── specs-archive/
├── research/
│   ├── index.html
│   └── <framework-name>/
└── skills/
    └── open-source-tech-research/
```

## Key Entry Points

- [Tech Research Guide](docs/tech-research-guide/TECH_RESEARCH_GUIDE.md)
- [AI Tech Research Quickstart](docs/tech-research-guide/AI_TECH_RESEARCH_QUICKSTART.md)
- [Research templates](docs/tech-research-guide/templates/)
- [Example research spec](research/example-framework/README.md)
- [Open-source tech research skill](skills/open-source-tech-research/SKILL.md)

## Support This Project

If this research workspace helps you, please consider giving the GitHub repository a Star.

Stars are not just encouragement. They also help more people who need source research, architecture analysis, and evidence-backed technical writing discover the project.

## Intended Use

Use this repository as a technical research workspace for:

- Studying an open-source framework
- Reading unfamiliar source code
- Producing architecture documents
- Extracting design philosophy
- Building reusable technical knowledge and design patterns

## Recommended Flow

1. Create `research/<framework-name>/`.
2. Copy the templates from `docs/tech-research-guide/templates/`.
3. Start with `research-brief.md` to define goals and boundaries.
4. Produce `external-research.md` and `research-questions.md`, using external materials to build a question list before source verification.
5. Use the `open-source-tech-research` skill to scan source code, map abstractions, break down architecture, trace runtime flows, inspect extension points, and extract design philosophy.
6. Record each important conclusion in `evidence-index.md`, backed by official docs, source files, tests, configuration, examples, issues, PRs, release notes, or clearly labeled community evidence.
7. Capture reusable patterns, context-dependent ideas, and designs that should not be copied directly in `adoption-notes.md`.

## Release Checks

Before publishing publicly, run at least:

```bash
npm run research:sanitize
npm run research:dashboard
npm run research:validate:strict
npm run release:check
```

These checks verify research structure, regenerated dashboards, common Mermaid issues, and likely privacy leaks such as local paths, tokens, or private-key shapes.

## License

This repository is released under the [MIT License](LICENSE). You may use it for personal learning, internal team methods, and commercial project research workflows.

Third-party open-source projects, official docs, source snippets, and external materials referenced during research remain governed by their own licenses and terms. This repository does not relicense third-party content.
