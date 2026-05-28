# Runtime Flows

## Flow 1: Agent Generation to React Rendering

```mermaid
sequenceDiagram
  participant Agent
  participant Transport
  participant Shell as React Shell
  participant MP as MessageProcessor
  participant Surface as SurfaceModel
  participant Binder as GenericBinder
  participant UI as React Components

  Agent->>Transport: A2UI JSON / A2A DataPart / stream chunk
  Transport->>Shell: parsed message(s)
  Shell->>MP: process(message)
  MP->>Surface: create/update/delete surface
  MP->>Surface: update components/data model
  UI->>Surface: read root component
  Surface->>Binder: ComponentContext + schema
  Binder->>UI: bound props and child refs
  UI-->>Shell: native rendered UI
```

Implementation evidence:

- The v0.9 spec defines server-to-client messages as JSON stream objects and requires a transport contract with reliable ordering, framing, metadata support, and related behavior.
- The React shell sample reads chunks from `/a2a` or mock response, calls `MessageProcessor.processMessage`, then renders each surface with `<A2uiSurface>`.
- `A2uiSurface` always starts from the `root` component and renders child trees through `ComponentContext` and catalog component implementations.

## Flow 2: `updateComponents` and Progressive Rendering

```mermaid
flowchart TD
  A["updateComponents message"] --> B["MessageProcessor"]
  B --> C{"surface exists?"}
  C -- no --> D["emit error"]
  C -- yes --> E["for each component"]
  E --> F{"component id exists?"}
  F -- no --> G["add ComponentModel"]
  F -- yes --> H{"same type?"}
  H -- yes --> I["update properties"]
  H -- no --> J["remove and recreate"]
  G --> K["created listeners wake deferred child"]
  I --> L["updated listeners refresh binder snapshot"]
  J --> K
```

This flow explains two design points:

- Component lists can arrive in batches. React `DeferredChild` shows loading while a child has not been created and subscribes to created/deleted events.
- Component type changes are not a blind property overwrite; the component model is recreated to reduce schema/implementation mismatch.

## Flow 3: Data Binding and Dynamic Lists

```mermaid
flowchart LR
  A["DataModel JSON"] --> B["DataContext base path"]
  B --> C["DynamicValue path/function/literal"]
  C --> D["GenericBinder subscriptions"]
  D --> E["renderer props"]
  E --> F["native component"]
  F --> G["setter / input"]
  G --> A
```

The key to dynamic lists is that `ChildList` can be a template:

- `componentId` points to the template component.
- `path` points to array data.
- The binder maps each array index to a child ref `{id, basePath}`.
- Relative bindings such as `name` and `imageUrl` resolve under each item's base path.

The React shell restaurant mock messages use this pattern to render a restaurant list.

## Flow 4: User Action Back to Agent

```mermaid
sequenceDiagram
  participant User
  participant Button
  participant Binder
  participant DataContext
  participant Surface
  participant Shell
  participant Agent

  User->>Button: click
  Button->>Binder: action()
  Binder->>DataContext: resolve action context
  DataContext-->>Binder: concrete context
  Binder->>Surface: dispatchAction(action)
  Surface-->>Shell: onAction(client action)
  Shell->>Agent: POST /a2a {version, action}
```

Implementation details:

- `GenericBinder` generates a closure for action fields and does not resolve context at render time.
- When triggered, DataContext resolves dynamic context and `SurfaceModel.dispatchAction` wraps surfaceId, sourceComponentId, and timestamp.
- The React shell sample's action handler sends the client action to the agent.

## Flow 5: Python SDK Generation and Validation

```mermaid
flowchart TD
  A["Client capabilities / requested extension"] --> B["A2uiSchemaManager"]
  B --> C["select catalog"]
  C --> D["generate system prompt"]
  D --> E["ADK SendA2uiToClientToolset"]
  E --> F["LLM tool response or tagged text"]
  F --> G["parse_and_fix"]
  G --> H["A2uiValidator"]
  H --> I["A2A DataPart"]
  I --> J["Client renderer"]
```

The SDK is not just "a prompt for the model." Source shows constraints across several stages:

- Schema manager selects the active catalog from supported, inline, or default catalogs.
- The toolset appends schema and examples to the LLM request.
- Tool execution parses/repairs JSON and calls the validator.
- The A2A converter can extract A2UI payloads from tool responses or ordinary text tags.

## Flow 6: Catalog Assembly

```mermaid
flowchart LR
  A["Custom components"] --> D["assemble_catalog.py"]
  B["Custom functions"] --> D
  C["Theme schema"] --> D
  E["Basic catalog"] --> D
  D --> F["standalone catalog.json"]
  F --> G["SDK prompt/validation"]
  F --> H["Renderer capabilities"]
```

Catalog documentation requires the final catalog to be standalone JSON. `assemble_catalog.py` resolves local/remote refs, merges components, functions, and theme, and generates `anyComponent` / `anyFunction`. This provides a concrete path for production design-system integration.
