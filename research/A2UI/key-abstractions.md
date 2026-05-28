# Key Abstractions

## Surface

A surface is a UI region driven by A2UI. v0.9 creates it with `createSurface`; later `updateComponents` and `updateDataModel` messages carry `surfaceId`. On the renderer side, `SurfaceModel` owns the data model, component model, catalog, theme, and action dispatch.

Key points:

- `root` is the conventional root component id.
- A surface can be deleted; deletion should dispose components, data model, and event subscriptions.
- `sendDataModel` controls whether the client sends the data model back to the agent.

Evidence: EVD-007, EVD-008, EVD-017, EVD-018.

## Component

Components are transmitted as a flat list in v0.9. Each component has an `id` and a `component` type field. Tree structure is not represented by deeply nested JSON, but by child id, child id lists, tabs, and similar reference fields.

Key points:

- The flat structure supports incremental updates and progressive rendering.
- When component type changes, the renderer recreates the component model.
- Basic Catalog component schemas use `unevaluatedProperties: false` to prevent unknown fields from model output.

Evidence: EVD-004, EVD-005, EVD-009, EVD-016.

## DataModel

DataModel is the JSON data source inside a surface. It is read and written by JSON Pointer. It supports:

- Root replacement.
- Object/array path writes.
- Deleting object keys or array indexes.
- Exact, ancestor, descendant, and root subscription notifications.
- Errors when traversing primitives or non-numeric array paths.

Evidence: EVD-011, EVD-019, EVD-033.

## DataContext

DataContext is a scoped view over DataModel. It resolves relative paths against the current base path, so template children can bind to local fields in the current item.

Key points:

- `path` dynamic values resolve to DataModel signals.
- Function dynamic values are reactively computed from argument signals.
- Action context is resolved at trigger time to avoid stale values.
- Setters can write renderer input back to the data model.

Evidence: EVD-020, EVD-021.

## GenericBinder

GenericBinder is the core abstraction that turns component schema into renderer props. It first analyzes schema fields and classifies them as dynamic, action, structural, checkable, static, object, or array, then produces a stable props snapshot before component render.

This lets renderer components care only about ordinary props:

- `Text` receives a string.
- `Button` receives an `action` function and `isValid`.
- `TextField` receives value and setter.
- List/card/row/column receive child refs.

Evidence: EVD-021, EVD-022, EVD-033.

## Catalog

Catalog is A2UI's capability registry. It contains:

- Component API schema.
- Component renderer implementation.
- Function API schema.
- Function implementation.
- Optional theme schema.

`Catalog.invokeFunction` validates function parameters before executing the implementation. This exposes validation, checks, formatting, `openUrl`, and related capabilities to the agent in a schema-shaped way.

Evidence: EVD-013, EVD-024, EVD-025.

## MessageProcessor

MessageProcessor is the client message entry. It processes message lists or wrappers, identifies v0.9 message types, and calls SurfaceGroup/Surface/Component/DataModel updates.

Key points:

- Supports client capabilities.
- Supports inline catalog schema generation.
- Sends back only data models for surfaces with `sendDataModel`.
- Emits errors for invalid message shapes.

Evidence: EVD-017, EVD-026, EVD-033.

## A2uiSchemaManager

Schema manager coordinates catalog and prompt generation in the Python SDK. It chooses the active catalog from supported catalogs, inline catalogs, or the default catalog, then generates a system prompt containing workflow, UI instructions, catalog instructions, and examples.

Evidence: EVD-027, EVD-028.

## A2uiValidator

Validator is the safety net in the generation path. Beyond JSON Schema, it checks:

- Whether component types exist in the catalog.
- Root, duplicate root, and root references.
- Component graph cycles, orphans, and excessive depth.
- Path syntax and recursion depth.

Evidence: EVD-030, EVD-033.

## A2A DataPart

In A2A, A2UI is wrapped as a DataPart with metadata `mimeType: application/json+a2ui`. The SDK provides part and event converters that extract A2UI payloads from ADK tool responses or text tags and hide intermediate function calls.

Evidence: EVD-029, EVD-031.
