# Security Policy

## Reporting

If you find leaked sensitive information, tokens, private keys, personal absolute local paths, unsanitized internal project content, or generation scripts that may expose private data, please contact the maintainers through GitHub Security Advisory or an issue.

Do not paste real tokens, private keys, internal code, or personal paths into public issues.

## Scope

This repository focuses on the security and privacy boundary of the research framework itself, including:

- Personal local paths in research outputs
- Sensitive content in dashboards, visual data, and evidence data
- Accidentally committed `.env` files, IDE configuration, tokens, or private keys
- Unsanitized source paths in generated outputs

This repository does not provide security guarantees for third-party open-source projects being researched. Security-related statements in research documents are research conclusions or source-reading results, not security audit reports.

## Release Checks

Before publishing publicly, run:

```bash
npm run research:sanitize
npm run research:validate:strict
npm run release:check
```
