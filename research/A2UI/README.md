# A2UI Technical Research

Status: draft
Last Updated: 2026-05-28

## Research Summary

A2UI is Google's open-source Agent-to-UI protocol and implementation repository. Its goal is to let agents emit safe, verifiable, stream-updatable declarative UI JSON, while clients render that intent with local component libraries as native interfaces. The repository currently includes protocol specifications, the Basic Catalog, React/Lit/Angular/Flutter renderers, a Python SDK, A2A/ADK integration, catalog build tooling, samples, and conformance tests.

This research is pinned to the `google/A2UI` `main` branch snapshot `e05dd9699dea21ba832059acb680f71022dd5a77`. It focuses on the v0.9 protocol because README, concept docs, React/web_core renderer, and Python SDK main implementations are centered on v0.9. It also incorporates web research from 2026-05-28, confirming that the official Roadmap marks v0.9 as current, feature complete, and supported, while v0.10/v1.0 remain draft/planned.

## Current Conclusions

- A2UI's core boundary is "the agent only sends data-shaped UI intent; the client interprets and renders it." This is safer than executing agent-generated code and lets the same UI intent map to multiple renderers.
- v0.9 organizes the protocol into four server-to-client messages: `createSurface`, `updateComponents`, `updateDataModel`, and `deleteSurface`. Components use a flat adjacency-list model with `id` and child references, which fits incremental LLM generation.
- The renderer's important logic is not in React components themselves, but in `web_core`: `MessageProcessor`, `SurfaceModel`, `DataModel`, `DataContext`, `GenericBinder`, and `Catalog`. The React renderer adapts these state and binding abstractions to UI.
- Catalog is the center of protocol capability, design-system mapping, and security boundaries. The Basic Catalog provides portable defaults; production systems should define their own catalog and negotiate it through capabilities or inline catalogs.
- The Python SDK turns A2UI from "ask the model to output JSON" into a generation pipeline: prompt, schema, catalog, validator, and A2A part conversion. It injects schema, repairs common JSON issues, validates component integrity/topology, and wraps A2UI payloads as A2A DataParts.
- Maturity signals should be read by source: the local README still warns about public preview/evolving APIs, while the official Roadmap marks v0.9 current/supported and v0.10/v1.0 as draft/target versions. Production adoption should pin a protocol version and verify the exact package/renderer release state.

## Reading Order

1. [research-brief.md](research-brief.md) - Research scope, version, and deliverables.
2. [architecture.md](architecture.md) - Overall architecture and module responsibilities.
3. [runtime-flows.md](runtime-flows.md) - Generation, rendering, interaction, SDK, and A2A flows.
4. [key-abstractions.md](key-abstractions.md) - Core abstractions.
5. [extension-points.md](extension-points.md) - Extension points and customization entries.
6. [adoption-notes.md](adoption-notes.md) - Adoption guidance, risks, and rollout path.
7. [evidence-index.md](evidence-index.md) - Mapping from conclusions to source/docs/test evidence.
8. [dashboard.html](dashboard.html) - Browser entry for this research directory.
9. [visual/architecture.html](visual/architecture.html) - Interactive architecture visualization.

## Research Boundaries

This pass uses the pinned local source snapshot and repository documentation as implementation evidence, with additional web research over the official site, GitHub repository, Roadmap, renderer/client setup docs, ecosystem renderers, and CrewAI/CopilotKit integration docs. It does not perform exhaustive issue triage, a full release diff, or third-party benchmarks. Every important implementation claim is tied to source, specification, tests, examples, or official documentation; unsupported claims are labeled as inference.
