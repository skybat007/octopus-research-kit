# Source Map

## Repository Structure Overview

The source inventory indexes 1968 files. By directory, the repository consists of samples, renderers, specifications, tooling, and SDKs:

| Directory | File Count | Responsibility |
|---|---:|---|
| `samples/` | 668 | React/client/server examples, mock messages, end-to-end integration samples |
| `renderers/` | 617 | React/Lit/Angular/Flutter renderers and shared web_core |
| `specification/` | 271 | v0.8/v0.9/v0.10 protocol docs, JSON Schema, Basic Catalog |
| `tools/` | 167 | Catalog assembly, validation, and helper tools |
| `agent_sdks/` | 122 | Python SDK, A2A/ADK integration, parser/validator/conformance |
| `docs/` | 56 | User concept docs, reference, quickstart |
| `eval/` | 19 | Evaluation-related materials |

The language distribution is mainly TypeScript/TSX, JSON Schema, Markdown, and Python. This matches the project shape: protocol and catalog are expressed as JSON Schema, renderers are mostly TypeScript, and the agent SDK is Python.

## Key Entries

| Module | Entry | Notes |
|---|---|---|
| Project positioning | `README.md` | Defines A2UI as a safe declarative protocol and renderer ecosystem for agent-generated UI |
| v0.9 spec | `specification/v0_9/docs/a2ui_protocol.md` | Server-to-client messages, transport contract, A2A/AG UI binding |
| v0.9 JSON Schema | `specification/v0_9/json/server_to_client.json` | Schemas for `createSurface`, `updateComponents`, `updateDataModel`, and `deleteSurface` |
| Basic Catalog | `specification/v0_9/catalogs/basic/catalog.json` | Schemas for 18 basic components and 14 basic functions |
| React renderer | `renderers/react/src/v0_9/A2uiSurface.tsx` | React surface rendering entry, recursively/deferred from root component |
| React catalog adapter | `renderers/react/src/v0_9/adapter.tsx` | Connects component implementations to GenericBinder |
| Shared core | `renderers/web_core/src/v0_9/processing/message-processor.ts` | Receives A2UI messages and maintains surfaces/components/data model |
| Data model | `renderers/web_core/src/v0_9/state/data-model.ts` | JSON Pointer data store, subscriptions, and update notifications |
| Binding | `renderers/web_core/src/v0_9/rendering/generic-binder.ts` | Converts dynamic/action/child/checkable schema fields into renderer props |
| Catalog runtime | `renderers/web_core/src/v0_9/catalog/types.ts` | Runtime abstraction for components, functions, and theme schema |
| Python parser | `agent_sdks/python/src/a2ui/parser/parser.py` | Extracts `<a2ui-json>` blocks from text and repairs JSON |
| Python validator | `agent_sdks/python/src/a2ui/schema/validator.py` | Schema validation, component integrity, topology, recursion, and path validation |
| Schema manager | `agent_sdks/python/src/a2ui/schema/manager.py` | Catalog selection and schema prompt generation |
| ADK toolset | `agent_sdks/python/src/a2ui/adk/send_a2ui_to_client_toolset.py` | Emits A2UI as agent tool output and validates it |
| A2A converter | `agent_sdks/python/src/a2ui/adk/a2a/part_converter.py` | Converts A2UI from tool/text output into A2A DataParts |
| React shell sample | `samples/client/react/shell/src/App.tsx` | Demonstrates combining MessageProcessor, A2uiSurface, and action handler on the client |

## Specification Layer

`specification/v0_9/` is the main research line. It contains:

- `docs/a2ui_protocol.md`: protocol prose, transport, A2A/AG UI binding, message sequences.
- `json/server_to_client.json`: server-to-client message schema.
- `json/common_types.json`: component id, accessibility, dynamic values, data binding, actions, checks.
- `catalogs/basic/catalog.json`: Basic Catalog component/function schema.
- `docs/evolution_guide.md`: v0.8.1 to v0.9 migration, explaining prompt-first design, modular schema, flat discriminator, and related changes.

## Renderer Layer

`renderers/web_core/src/v0_9/` contains core logic shared by multiple web renderers:

- `processing/message-processor.ts`: process messages, create/delete surfaces, update components/data model, expose client capabilities/data model.
- `state/`: `SurfaceGroupModel`, `SurfaceModel`, `SurfaceComponentsModel`, `ComponentModel`, `DataModel`.
- `rendering/`: `ComponentContext`, `DataContext`, `GenericBinder`.
- `catalog/` and `basic_catalog/`: runtime catalog, component API, function API, and Basic Catalog definitions.

`renderers/react/src/v0_9/` is the React adapter layer:

- `A2uiSurface.tsx` renders from the `root` component and handles missing/unknown children.
- `adapter.tsx` uses `GenericBinder` to bind component models into React props.
- `catalog/basic/` maps Basic Catalog to React components.

## Agent SDK Layer

`agent_sdks/python/src/a2ui/` puts protocol constraints into the agent generation path:

- `schema/manager.py` selects catalog and generates system prompt.
- `schema/validator.py` performs JSON Schema plus custom topology/path validation.
- `parser/` supports `<a2ui-json>` blocks in text, JSON repair, and v0.9 streaming parser.
- `adk/` provides ADK toolset plus A2A event/part conversion.
- `a2a/` provides A2UI DataPart metadata, extension negotiation, and streaming parts.

## Tooling and Tests

- `tools/build_catalog/assemble_catalog.py` supports merging Basic Catalog, custom components/functions/themes, and generating standalone catalog.
- `agent_sdks/conformance/` defines cross-SDK parser, streaming parser, validator, catalog, and schema manager suites.
- `renderers/web_core/src/v0_9/**/*.test.ts` validates message processor, data model, and generic binder.
- `renderers/react/tests/v0_9/*.test.tsx` validates React catalog components and integration scenarios.

## Suggested Reading Path

1. `README.md`
2. `specification/v0_9/docs/a2ui_protocol.md`
3. `specification/v0_9/json/server_to_client.json`
4. `renderers/web_core/src/v0_9/processing/message-processor.ts`
5. `renderers/web_core/src/v0_9/rendering/generic-binder.ts`
6. `renderers/react/src/v0_9/A2uiSurface.tsx`
7. `agent_sdks/python/src/a2ui/schema/validator.py`
8. `samples/client/react/shell/src/App.tsx`
