# Contributing

Contributions are welcome. This repository helps researchers turn open-source framework reading into traceable, reviewable, and reusable technical documents.

## What to Contribute

- Research workflow, quality gates, and evidence standards
- Templates under `docs/tech-research-guide/templates/`
- Role boundaries under `docs/tech-research-guide/roles/`
- Generation and validation scripts under `docs/tech-research-guide/scripts/`
- Skill workflow under `skills/open-source-tech-research/`
- Sanitized example research outputs

## Contribution Principles

- Markdown is the knowledge source. HTML, dashboards, and visual data are presentation and navigation layers.
- Important conclusions must trace back to evidence: official docs, source code, tests, configuration, examples, issues, PRs, release notes, or clearly labeled inferences.
- Do not submit personal absolute local paths, tokens, private keys, account data, or unsanitized internal project content.
- Do not mix downstream implementation plans into the technical research guide. Research outputs should focus on understanding, verification, architecture abstraction, and adoption notes.
- If generated outputs include third-party source snippets, keep them limited and preserve source, version, and usage context.

## Local Checks

Before submitting, run:

```bash
npm run research:sanitize
npm run research:dashboard
npm run research:validate
npm run release:check
git diff --check
```

If you are preparing a public release, also run:

```bash
npm run research:validate:strict
```

## Adding a Research Directory

Add each new research effort under:

```text
research/<framework-name>/
```

Use `docs/tech-research-guide/templates/` as the starting point, and make sure `evidence-index.md` supports the main conclusions.
