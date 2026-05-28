# Research Review

## Completion Check

| Item | Status | Notes |
|---|---|---|
| Fixed source version | Complete | `main @ e05dd9699dea21ba832059acb680f71022dd5a77` |
| Source inventory generated | Complete | `references/source-inventory.json`, 1968 files indexed |
| Official docs reviewed | Complete | README, introduction, concepts, reference renderers |
| Specification reviewed | Complete | v0.9 protocol, server_to_client schema, common_types, Basic Catalog, evolution guide |
| Renderer source reviewed | Complete | React v0.9, web_core message/state/rendering/catalog |
| SDK source reviewed | Complete | Python parser, schema manager, validator, ADK toolset, A2A converters |
| Tests/examples verified | Complete | React shell sample, web_core tests, React tests, conformance README |
| External web research | Complete | Official site, GitHub, Roadmap, renderer/client setup, ecosystem renderers, CrewAI/CopilotKit integration docs |
| Architecture visualization | Complete | `visual/architecture.html` |
| Dashboard | Complete | `dashboard.html`, `docs.html` |
| Research validation | Complete | `node docs/tech-research-guide/scripts/validate-research.js research/A2UI` returned OK |

## Quality Gates

| Check | Result |
|---|---|
| Important conclusions have evidence IDs | Pass |
| Evidence points to source/spec/tests/official docs | Pass |
| Fact and inference are distinguished | Mostly pass; production recommendations are labeled as engineering inference |
| Avoids local absolute paths | Pass |
| Covers core flows | Pass; covers generation, transport, message processing, binding, action, SDK/A2A |
| Covers extension points | Pass; covers catalog, renderer, function, capabilities, transport, validator |
| Covers required external references | Pass; web research was added, with process deviation recorded below |
| Covers risks | Pass |

## Main Residual Risks

- A2UI's own full test suite was not run; test evidence comes from source reading.
- GitHub issues, PRs, and discussions were only checked for entry points and rough counts, not triaged one by one.
- This cannot represent project state after 2026-05-28.
- v0.10 was not researched at source level; this pass only confirms that online/local docs still describe it as draft or under development.
- Flutter/Lit/Angular renderers were not analyzed line by line; this pass focuses on React + web_core.

## Process Review Notes

- The initial external-research pass incorrectly used a skill-level exception saying official docs in the local repository may let web research be skipped. That did not follow the project-level research guide. This was corrected by adding searches over the official site, GitHub, Roadmap, renderer/client setup, ecosystem renderers, and CrewAI/CopilotKit.
- The initial `external-research.md` included process-correction notes. Those notes are unrelated to the formal source document and were moved here. The official external-research document now keeps only search strategy, source list, key claims, source-verification status, wording differences, and source boundaries.

## Review Recommendations

If this research moves toward an adoption decision, add:

1. Run A2UI's own test matrix, at least covering `renderers/web_core`, `renderers/react`, and `agent_sdks/python`.
2. Build a PoC with a business custom catalog to verify the full loop across SDK prompt, validator, and renderer component implementation.
3. Run an end-to-end streaming test with a real A2A server/client.
4. Track v0.10 versus v0.9 schema/API differences separately.
