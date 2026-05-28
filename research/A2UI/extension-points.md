# Extension Points

## 1. Custom Catalog

The most important extension point is a custom catalog. A catalog can define:

- Business component schemas.
- Component rendering implementations.
- Function schemas and implementations.
- Theme schema.
- Examples and LLM instructions.

Use cases:

- Constrain A2UI to an enterprise design system.
- Prevent the agent from using components or fields that violate product policy.
- Describe domain-specific components such as order cards, approval flows, data tables, charts, or business forms.

Implementation entries:

- Specification schema: `specification/v0_9/catalogs/basic/catalog.json`
- Runtime abstraction: `renderers/web_core/src/v0_9/catalog/types.ts`
- Assembly tool: `tools/build_catalog/assemble_catalog.py`
- SDK catalog config: `agent_sdks/python/src/a2ui/schema/catalog.py`

## 2. Renderer Component Implementations

The React renderer uses `createComponentImplementation` and `GenericBinder` to bind schema-shaped components to React components. Adding a component usually requires:

1. Define component properties in the catalog schema.
2. Implement the React component on the renderer side.
3. Register the component implementation with the adapter.
4. Expose instructions and examples in SDK/catalog prompt material.

The reusable idea is that business React components do not need to handle JSON Pointer, action context, or template child lists themselves; `GenericBinder` does that work.

## 3. Function Implementations

Functions support validation, formatting, local actions, and related behavior. Basic functions already include required, regex, length, numeric, email, formatString, formatNumber, formatCurrency, formatDate, pluralize, openUrl, and/or/not.

When extending functions:

- Function parameters are validated by schema.
- Functions may participate in reactive expressions, so return values should be predictable.
- Side-effect functions such as `openUrl` need host policy control, not only agent self-restraint.

## 4. Renderer Capabilities and Inline Catalogs

`MessageProcessor.getClientCapabilities()` can return:

- `supportedCatalogIds`
- `inlineCatalogs`

The Actions documentation also describes capabilities as the handshake that lets the agent understand renderer capability. The Python schema manager selects an active catalog from supported, inline, or default catalogs. This is the extension point for multi-client and multi-catalog scenarios.

## 5. Transport Binding

The A2UI protocol does not bind to a specific transport. The v0.9 spec only requires reliable ordering, message framing, metadata support, and optional bidirectionality. The repository provides A2A/AG UI binding docs and a sample shell. Production systems can replace transport with:

- SSE.
- WebSocket.
- A2A DataPart.
- An existing agent gateway.

The key is preserving message ordering, surfaceId/action metadata, and data-model synchronization semantics.

## 6. Agent SDK / ADK Toolset

`SendA2uiToClientToolset` can serve as an ADK agent toolset. Extension options include:

- Custom catalog provider.
- Custom examples provider.
- Control over whether A2UI is enabled.
- Replacing or wrapping the part converter.
- Selecting active catalog based on session state.

This matters for multi-tenant systems and clients with different UI capabilities.

## 7. Validator and Conformance

The validator already covers schema, component type, graph topology, path syntax, and recursion depth. Production systems can add:

- Business field allowlist/denylist.
- Action event allowlist.
- URL/domain allowlist.
- Surface/component count limits.
- Data model size limits.
- Renderer-specific conformance cases.

`agent_sdks/conformance/` provides the beginning of a cross-SDK suite and can be used as a base for aligning multi-language SDK behavior.

## 8. Theme

Catalog supports theme schema, and `createSurface` can carry theme. This research did not deeply compare theme implementation consistency across renderers, but the protocol and catalog abstractions make theme the natural extension point for connecting A2UI to brand systems.

## Extension Priority

| Priority | Extension Point | Reason |
|---|---|---|
| P0 | Custom Catalog | Determines the security boundary and product consistency of generated UI |
| P0 | Validator policy | Prevents unauthorized actions, dangerous URLs, and oversized data models |
| P1 | Renderer component set | Maps the protocol to the real design system |
| P1 | Capabilities negotiation | Supports multi-client and multi-version evolution |
| P2 | Conformance cases | Keeps renderer/SDK behavior consistent |
| P2 | Theme schema | Supports branding and multiple themes |
