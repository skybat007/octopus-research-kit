# Evidence Index

## Version and Scope

| Conclusion ID | Conclusion | Evidence type | Location | Source verified | Confidence | Notes |
|---|---|---|---|---|---|---|
| <a id="EVD-001"></a>EVD-001 | A2UI is an open-source protocol/format and renderer set for agent-generated UI. | README | `README.md:1-6` | yes | high | Project description |
| <a id="EVD-002"></a>EVD-002 | A2UI's core mode is that the agent sends declarative JSON and the client renders it with native components. | README | `README.md:25-31` | yes | high | Bound to the main architecture conclusion |
| <a id="EVD-003"></a>EVD-003 | Official introduction defines A2UI as a declarative UI protocol for agent-driven interfaces and emphasizes native rendering plus no arbitrary code. | official docs | `docs/introduction/what-is-a2ui.md:1-3`, `docs/introduction/what-is-a2ui.md:171-179` | yes | high | Security positioning |
| <a id="EVD-004"></a>EVD-004 | Components use a flat-list / adjacency-list model with ID references to express structure. | official docs | `docs/concepts/components.md:1-18` | yes | high | Explains LLM/incremental friendliness |
| <a id="EVD-005"></a>EVD-005 | v0.9 components use a `component` string field and child ids. | official docs | `docs/concepts/components.md:85-137` | yes | high | v0.9 structure |
| <a id="EVD-006"></a>EVD-006 | README marks the project as public preview / evolving and warns that APIs and protocol may change. | README | `README.md:12-17` | yes | high | Maturity judgment |
| <a id="EVD-007"></a>EVD-007 | The v0.9 server-to-client protocol contains `createSurface`, `updateComponents`, `updateDataModel`, and `deleteSurface`. | spec | `specification/v0_9/docs/a2ui_protocol.md:14-25` | yes | high | Protocol core |
| <a id="EVD-008"></a>EVD-008 | v0.9 JSON Schema defines the four server-to-client message types with `oneOf`. | JSON Schema | `specification/v0_9/json/server_to_client.json:1-12` | yes | high | Machine-verifiable |
| <a id="EVD-009"></a>EVD-009 | `updateComponents` schema requires `surfaceId` and component list, and component entries reference catalog `anyComponent`. | JSON Schema | `specification/v0_9/json/server_to_client.json:48-83` | yes | high | Component update |
| <a id="EVD-010"></a>EVD-010 | The v0.10 specification directory exists but is marked under development. | spec | `specification/v0_10/README.md:1-5` | yes | high | Version evolution |

## Protocol and Data Model

| Conclusion ID | Conclusion | Evidence type | Location | Source verified | Confidence | Notes |
|---|---|---|---|---|---|---|
| <a id="EVD-011"></a>EVD-011 | Data binding is based on JSON Pointer and supports separation of UI structure/state, dynamic values, and two-way input. | official docs | `docs/concepts/data-binding.md:1-18`, `docs/concepts/data-binding.md:173-181` | yes | high | Consistent with DataModel implementation |
| <a id="EVD-012"></a>EVD-012 | Actions are split into local Functions and Events sent to the agent; checks are mainly UX disabling, not data-integrity guarantees. | official docs | `docs/concepts/actions.md:1-15`, `docs/concepts/actions.md:63-69` | yes | high | Action semantics |
| <a id="EVD-013"></a>EVD-013 | Catalog defines components/functions/themes, and all A2UI JSON should be validated against the selected catalog; production can define its own catalog. | official docs | `docs/concepts/catalogs.md:5-9`, `docs/concepts/catalogs.md:70-85` | yes | high | Main extension entry |
| <a id="EVD-014"></a>EVD-014 | Renderer responsibilities include parsing adjacency lists, mapping widgets, data binding/lifecycle, incremental messages, and user actions. | official docs | `docs/reference/renderers.md:3-9`, `docs/reference/renderers.md:70-78` | yes | high | Renderer responsibility |
| <a id="EVD-015"></a>EVD-015 | React renderer exports `A2uiSurface`, adapter, and Basic Catalog. | source | `renderers/react/src/v0_9/index.ts:17-21` | yes | high | React entry |
| <a id="EVD-016"></a>EVD-016 | Basic Catalog v0.9 provides 18 basic components and 14 functions, including Text/Image/Icon/Row/Column/List/Card/Button/TextField. | JSON Schema | `specification/v0_9/catalogs/basic/catalog.json:1-80` | yes | medium | Full list counted from JSON schema |

## Renderer Implementation

| Conclusion ID | Conclusion | Evidence type | Location | Source verified | Confidence | Notes |
|---|---|---|---|---|---|---|
| <a id="EVD-017"></a>EVD-017 | `MessageProcessor` owns `SurfaceGroupModel`, handles create/update/delete/data-model messages, and exposes capabilities. | source | `renderers/web_core/src/v0_9/processing/message-processor.ts:45-85`, `renderers/web_core/src/v0_9/processing/message-processor.ts:229-335` | yes | high | Client state entry |
| <a id="EVD-018"></a>EVD-018 | `SurfaceModel` aggregates data model, components, catalog, theme, `sendDataModel`, and unified action/error dispatch. | source | `renderers/web_core/src/v0_9/state/surface-model.ts:26-94` | yes | high | Surface runtime |
| <a id="EVD-019"></a>EVD-019 | `DataModel` is a JSON Pointer-addressable, subscribable observable data store supporting root replacement, nested creation, deletion, and path notifications. | source | `renderers/web_core/src/v0_9/state/data-model.ts:35-39`, `renderers/web_core/src/v0_9/state/data-model.ts:78-170`, `renderers/web_core/src/v0_9/state/data-model.ts:183-280` | yes | high | Binding base |
| <a id="EVD-020"></a>EVD-020 | `DataContext` resolves relative/absolute paths, dynamic values, function expressions, and action context. | source | `renderers/web_core/src/v0_9/rendering/data-context.ts:28-35`, `renderers/web_core/src/v0_9/rendering/data-context.ts:88-164`, `renderers/web_core/src/v0_9/rendering/data-context.ts:273-367` | yes | high | Dynamic binding |
| <a id="EVD-021"></a>EVD-021 | `GenericBinder` identifies dynamic/action/structural/checkable/static/object/array fields from schema and generates renderer props. | source | `renderers/web_core/src/v0_9/rendering/generic-binder.ts:23-92`, `renderers/web_core/src/v0_9/rendering/generic-binder.ts:160-328` | yes | high | Renderer reuse core |
| <a id="EVD-022"></a>EVD-022 | Action fields become closures in the binder; at trigger time they resolve context and dispatch. | source | `renderers/web_core/src/v0_9/rendering/generic-binder.ts:243-255` | yes | high | Interaction flow |
| <a id="EVD-023"></a>EVD-023 | React Button implementation only receives bound props, calls `props.action` on click, and disables when `isValid === false`. | source | `renderers/react/src/v0_9/catalog/basic/components/Button.tsx:22-35` | yes | high | Thin adapter |
| <a id="EVD-024"></a>EVD-024 | `Catalog` runtime contains components, functions, and theme schema, and validates function parameters with Zod before execution. | source | `renderers/web_core/src/v0_9/catalog/types.ts:45-82`, `renderers/web_core/src/v0_9/catalog/types.ts:117-185` | yes | high | Catalog runtime |
| <a id="EVD-025"></a>EVD-025 | React Basic Catalog registers Basic component implementations and `BASIC_FUNCTIONS` as a catalog. | source | `renderers/react/src/v0_9/catalog/basic/index.ts:42-67` | yes | high | React catalog |
| <a id="EVD-026"></a>EVD-026 | Renderer capabilities support `supportedCatalogIds` and optional inline catalogs; `getClientDataModel` only returns surfaces with `sendDataModel`. | source | `renderers/web_core/src/v0_9/processing/message-processor.ts:73-201` | yes | high | Capability negotiation and sync |

## SDK, A2A, and Tooling

| Conclusion ID | Conclusion | Evidence type | Location | Source verified | Confidence | Notes |
|---|---|---|---|---|---|---|
| <a id="EVD-027"></a>EVD-027 | Python parser extracts payloads from `<a2ui-json>` tags and handles markdown code blocks. | source | `agent_sdks/python/src/a2ui/parser/parser.py:22-88` | yes | high | Text-output compatibility |
| <a id="EVD-028"></a>EVD-028 | `A2uiSchemaManager` selects active catalog from inline/supported/default catalogs and generates system prompt. | source | `agent_sdks/python/src/a2ui/schema/manager.py:101-236` | yes | high | Generation path |
| <a id="EVD-029"></a>EVD-029 | ADK `PartConverter` can extract A2UI from tool responses, generic tool responses, or text tags and convert it to A2A parts. | source | `agent_sdks/python/src/a2ui/adk/a2a/part_converter.py:15-20`, `agent_sdks/python/src/a2ui/adk/a2a/part_converter.py:79-133` | yes | high | A2A bridge |
| <a id="EVD-030"></a>EVD-030 | `A2uiValidator` checks component integrity, topology, recursion, and path syntax in addition to JSON Schema. | source | `agent_sdks/python/src/a2ui/schema/validator.py:101-126`, `agent_sdks/python/src/a2ui/schema/validator.py:480-603`, `agent_sdks/python/src/a2ui/schema/validator.py:864-907` | yes | high | Output safety net |
| <a id="EVD-031"></a>EVD-031 | A2A helper wraps A2UI as a DataPart with metadata `mimeType: application/json+a2ui` and supports streaming parts. | source | `agent_sdks/python/src/a2ui/a2a/parts.py:28-64`, `agent_sdks/python/src/a2ui/a2a/parts.py:126-159` | yes | high | Transport binding |
| <a id="EVD-032"></a>EVD-032 | `assemble_catalog.py` can merge/flatten refs, combine components/functions/themes, and generate a standalone catalog. | source | `tools/build_catalog/assemble_catalog.py:65-124`, `tools/build_catalog/assemble_catalog.py:197-380` | yes | high | Catalog toolchain |
| <a id="EVD-033"></a>EVD-033 | Conformance and renderer tests cover parser, validator, catalog, schema manager, MessageProcessor, DataModel, GenericBinder, and React components. | tests | `agent_sdks/conformance/README.md:1-26`, `renderers/web_core/src/v0_9/processing/message-processor.test.ts:36-481`, `renderers/web_core/src/v0_9/state/data-model.test.ts:74-310`, `renderers/react/tests/v0_9/catalog-components.test.tsx:150-230` | yes | high | Test support |
| <a id="EVD-034"></a>EVD-034 | React shell sample creates `MessageProcessor`, registers an action handler, processes mock/real streams, and renders `<A2uiSurface>`. | sample | `samples/client/react/shell/src/App.tsx:68-75`, `samples/client/react/shell/src/App.tsx:172-207`, `samples/client/react/shell/src/App.tsx:319-324` | yes | high | Integration example |

## Web Evidence

| Conclusion ID | Conclusion | Evidence type | Location | Source verified | Confidence | Notes |
|---|---|---|---|---|---|---|
| <a id="EVD-035"></a>EVD-035 | A2UI's official site defines the project as a declarative UI protocol for agent-driven interfaces, emphasizing native rendering across web/mobile/desktop and no arbitrary code execution. | official web page | `https://a2ui.org/introduction/what-is-a2ui/`, retrieved 2026-05-28 | yes | high | Consistent with local README/intro docs |
| <a id="EVD-036"></a>EVD-036 | The official v0.9 protocol page describes v0.9 as a JSON-based streaming UI protocol and defines four server-to-client message types. | official web page | `https://a2ui.org/specification/v0.9-a2ui/`, retrieved 2026-05-28 | yes | high | Consistent with local `specification/v0_9` |
| <a id="EVD-037"></a>EVD-037 | The official Roadmap marks v0.9 current, feature complete, and supported; v0.10 and v1.0 are draft/target versions. | official web page | `https://a2ui.org/roadmap/`, retrieved 2026-05-28 | partly | high | Version-status wording |
| <a id="EVD-038"></a>EVD-038 | Roadmap Q2 2026 milestones include publishing the v0.9 spec, web core/renderers supporting v0.9, the official React renderer, and Python Agents SDK. | official web page | `https://a2ui.org/roadmap/`, retrieved 2026-05-28 | yes | high | Matches local source structure |
| <a id="EVD-039"></a>EVD-039 | Official Renderers Reference compares a renderer to a browser and requires support for adjacency list, data binding/lifecycle, incremental messages, server updates, and user actions. | official web page | `https://a2ui.org/reference/renderers/`, retrieved 2026-05-28 | yes | high | Consistent with `web_core`/React analysis |
| <a id="EVD-040"></a>EVD-040 | Official Client Setup says web renderers share `@a2ui/web_core`, and custom catalog is the contract between agent and renderer. | official web page | `https://a2ui.org/guides/client-setup/`, retrieved 2026-05-28 | yes | high | Supports catalog/web_core conclusions |
| <a id="EVD-041"></a>EVD-041 | Official Ecosystem Renderers page lists community renderers and notes that community renderers are maintained by their authors and require compatibility/maintenance checks. | official web page | `https://a2ui.org/ecosystem/renderers/`, retrieved 2026-05-28 | not applicable | medium | Ecosystem background, not implementation fact |
| <a id="EVD-042"></a>EVD-042 | CrewAI docs describe A2UI as an A2A extension: valid messages are wrapped as `application/json+a2ui` DataParts, and clients inject catalog/instructions and track surface state. | integration docs | `https://docs.crewai.com/en/learn/a2ui`, retrieved 2026-05-28 | partly | medium | Matches local A2A parts/converter mechanism; CrewAI not run |
| <a id="EVD-043"></a>EVD-043 | CopilotKit docs describe A2UI as a Google-led declarative Generative UI specification and distinguish dynamic schema from fixed schema. | integration docs | `https://docs.copilotkit.ai/google-adk/generative-ui/a2ui`, retrieved 2026-05-28 | partly | medium | Ecosystem/integration background |

## Evidence Integrity Notes

- "Source verified" means the conclusion is supported by at least one fixed source, specification, test, or official-doc evidence item.
- Production-adoption priority recommendations are engineering inferences and are tied to catalog, validator, capabilities, data model, and related source evidence where possible.
- This pass adds official-site, GitHub, and integration-doc web research. GitHub issues, PRs, and discussions were not triaged one by one, so specific community pain points are out of scope.
