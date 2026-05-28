window.ARCHITECTURE_META = {
  title: "A2UI Architecture",
  subtitle: "Agent UI intent protocol, catalog-driven renderer runtime, and SDK validation pipeline",
  defaultView: "overview",
};

window.ARCHITECTURE_VIEWS = [
  {
    id: "overview",
    label: "System Overview",
    title: "System Overview",
    description: "A2UI turns agent-generated JSON UI intent into native UI through transport, message processing, catalog lookup, state models, binding, and renderer components.",
    nodes: [
      { id: "agent", type: "producer", role: "Agent / SDK", title: "Agent / SDK", sub: "Generates A2UI messages and validates payloads", ev: "EVD-027", doc: "../evidence-index.md#EVD-027", tip: "Python SDK supplies parser, schema manager, validator, toolset, and A2A conversion." },
      { id: "messages", type: "protocol", role: "Protocol", title: "A2UI v0.9 Messages", sub: "createSurface, updateComponents, updateDataModel, deleteSurface", ev: "EVD-007", doc: "../evidence-index.md#EVD-007", tip: "The v0.9 protocol has four core server-to-client message kinds." },
      { id: "transport", type: "transport", role: "Binding", title: "Transport / A2A / AG UI", sub: "Ordered message delivery and metadata", ev: "EVD-031", doc: "../evidence-index.md#EVD-031", tip: "A2UI can be carried as A2A DataPart with application/json+a2ui metadata." },
      { id: "processor", type: "runtime", role: "Client Runtime", title: "MessageProcessor", sub: "Creates surfaces and applies updates", ev: "EVD-017", doc: "../evidence-index.md#EVD-017", tip: "MessageProcessor is the main client-side state mutation entrypoint." },
      { id: "surface", type: "state", role: "State", title: "SurfaceModel", sub: "DataModel, components, catalog, theme, actions", ev: "EVD-018", doc: "../evidence-index.md#EVD-018", tip: "SurfaceModel holds the runtime state of one A2UI surface." },
      { id: "catalog", type: "contract", role: "Contract", title: "Catalog", sub: "Components, functions, theme schema", ev: "EVD-024", doc: "../evidence-index.md#EVD-024", tip: "Catalog is both schema contract and runtime implementation registry." },
      { id: "binder", type: "runtime", role: "Binding", title: "GenericBinder", sub: "Dynamic values, actions, children, validation", ev: "EVD-021", doc: "../evidence-index.md#EVD-021", tip: "GenericBinder turns component schema and state into renderer props." },
      { id: "ui", type: "renderer", role: "Renderer", title: "Native UI", sub: "React/Lit/Angular/Flutter components", ev: "EVD-014", doc: "../evidence-index.md#EVD-014", tip: "Renderer maps A2UI components to native widgets and handles user interaction." }
    ],
    edges: [
      { from: "agent", to: "messages", label: "emits", kind: "data", ev: "EVD-027", doc: "../evidence-index.md#EVD-027" },
      { from: "messages", to: "transport", label: "carried by", kind: "transport", ev: "EVD-031", doc: "../evidence-index.md#EVD-031" },
      { from: "transport", to: "processor", label: "delivers", kind: "data", ev: "EVD-034", doc: "../evidence-index.md#EVD-034" },
      { from: "processor", to: "surface", label: "mutates", kind: "state", ev: "EVD-017", doc: "../evidence-index.md#EVD-017" },
      { from: "surface", to: "catalog", label: "uses", kind: "contract", ev: "EVD-018", doc: "../evidence-index.md#EVD-018" },
      { from: "surface", to: "binder", label: "provides context", kind: "binding", ev: "EVD-020", doc: "../evidence-index.md#EVD-020" },
      { from: "catalog", to: "binder", label: "describes fields", kind: "contract", ev: "EVD-024", doc: "../evidence-index.md#EVD-024" },
      { from: "binder", to: "ui", label: "produces props", kind: "render", ev: "EVD-021", doc: "../evidence-index.md#EVD-021" }
    ]
  },
  {
    id: "renderer-runtime",
    label: "Renderer Runtime",
    title: "Renderer Runtime",
    description: "The reusable implementation center is web_core; React is a comparatively thin adapter over surface state, component context, and GenericBinder.",
    nodes: [
      { id: "shell", type: "host", role: "Host", title: "React Shell", sub: "Owns transport and surface list", ev: "EVD-034", doc: "../evidence-index.md#EVD-034", tip: "The sample shell receives chunks, processes messages, and renders surfaces." },
      { id: "processor", type: "runtime", role: "Runtime", title: "MessageProcessor", sub: "Dispatches v0.9 message types", ev: "EVD-017", doc: "../evidence-index.md#EVD-017", tip: "Rejects invalid multi-update shapes and applies surface/component/data model updates." },
      { id: "group", type: "state", role: "State", title: "SurfaceGroupModel", sub: "Manages active surfaces", ev: "EVD-017", doc: "../evidence-index.md#EVD-017", tip: "SurfaceGroupModel is held by MessageProcessor and tracks active surfaces." },
      { id: "surface", type: "state", role: "State", title: "SurfaceModel", sub: "Surface-local state", ev: "EVD-018", doc: "../evidence-index.md#EVD-018", tip: "SurfaceModel contains components, data model, catalog, theme, and action dispatch." },
      { id: "components", type: "state", role: "State", title: "ComponentModel", sub: "ID, type, properties", ev: "EVD-017", doc: "../evidence-index.md#EVD-017", tip: "Component updates create, update, or recreate component models." },
      { id: "data", type: "state", role: "State", title: "DataModel", sub: "JSON Pointer observable store", ev: "EVD-019", doc: "../evidence-index.md#EVD-019", tip: "DataModel provides path get/set and subscriptions." },
      { id: "context", type: "binding", role: "Context", title: "Component/Data Context", sub: "Scoped access for rendering", ev: "EVD-020", doc: "../evidence-index.md#EVD-020", tip: "DataContext resolves relative paths, dynamic values, and action context." },
      { id: "binder", type: "binding", role: "Binding", title: "GenericBinder", sub: "Schema-aware prop generation", ev: "EVD-021", doc: "../evidence-index.md#EVD-021", tip: "GenericBinder classifies schema fields and binds them to renderer props." },
      { id: "react", type: "renderer", role: "React", title: "A2uiSurface", sub: "Root and deferred child rendering", ev: "EVD-015", doc: "../evidence-index.md#EVD-015", tip: "A2uiSurface renders root and child components through catalog implementations." }
    ],
    edges: [
      { from: "shell", to: "processor", label: "processMessage", kind: "call", ev: "EVD-034", doc: "../evidence-index.md#EVD-034" },
      { from: "processor", to: "group", label: "owns", kind: "state", ev: "EVD-017", doc: "../evidence-index.md#EVD-017" },
      { from: "group", to: "surface", label: "contains", kind: "state", ev: "EVD-018", doc: "../evidence-index.md#EVD-018" },
      { from: "surface", to: "components", label: "stores", kind: "state", ev: "EVD-017", doc: "../evidence-index.md#EVD-017" },
      { from: "surface", to: "data", label: "stores", kind: "state", ev: "EVD-019", doc: "../evidence-index.md#EVD-019" },
      { from: "components", to: "context", label: "loads", kind: "binding", ev: "EVD-020", doc: "../evidence-index.md#EVD-020" },
      { from: "data", to: "context", label: "scopes", kind: "binding", ev: "EVD-020", doc: "../evidence-index.md#EVD-020" },
      { from: "context", to: "binder", label: "feeds", kind: "binding", ev: "EVD-021", doc: "../evidence-index.md#EVD-021" },
      { from: "binder", to: "react", label: "renders props", kind: "render", ev: "EVD-015", doc: "../evidence-index.md#EVD-015" }
    ]
  },
  {
    id: "actions-state",
    label: "Actions and Data State",
    title: "Actions and Data State",
    description: "Input components update DataModel through setters; event actions resolve context at trigger time and travel back to the agent through host action handlers.",
    nodes: [
      { id: "input", type: "renderer", role: "UI", title: "Input Component", sub: "TextField, CheckBox, ChoicePicker", ev: "EVD-011", doc: "../evidence-index.md#EVD-011", tip: "Bound inputs can write back to the data model." },
      { id: "data", type: "state", role: "State", title: "DataModel", sub: "Shared JSON state", ev: "EVD-019", doc: "../evidence-index.md#EVD-019", tip: "Observable JSON Pointer data store." },
      { id: "context", type: "binding", role: "Context", title: "DataContext", sub: "Relative path and dynamic value resolution", ev: "EVD-020", doc: "../evidence-index.md#EVD-020", tip: "Relative paths are resolved against a scoped base path." },
      { id: "binder", type: "binding", role: "Binding", title: "GenericBinder", sub: "Setters, checks, action closures", ev: "EVD-021", doc: "../evidence-index.md#EVD-021", tip: "Binder produces reactive props, setters, validation state, and action handlers." },
      { id: "button", type: "renderer", role: "UI", title: "Button", sub: "Calls bound action and honors isValid", ev: "EVD-023", doc: "../evidence-index.md#EVD-023", tip: "React Button dispatches action and is disabled when validation fails." },
      { id: "surface", type: "state", role: "Runtime", title: "SurfaceModel", sub: "dispatchAction", ev: "EVD-018", doc: "../evidence-index.md#EVD-018", tip: "SurfaceModel wraps action with surface and source component metadata." },
      { id: "host", type: "host", role: "Host", title: "Action Handler", sub: "Sends client action", ev: "EVD-034", doc: "../evidence-index.md#EVD-034", tip: "The React shell action handler sends actions back to the agent endpoint." },
      { id: "agent", type: "producer", role: "Agent", title: "Agent", sub: "Receives event context", ev: "EVD-012", doc: "../evidence-index.md#EVD-012", tip: "Events send selected context back to the agent." }
    ],
    edges: [
      { from: "input", to: "data", label: "writes via setter", kind: "state", ev: "EVD-011", doc: "../evidence-index.md#EVD-011" },
      { from: "data", to: "context", label: "read and subscribe", kind: "state", ev: "EVD-020", doc: "../evidence-index.md#EVD-020" },
      { from: "context", to: "binder", label: "resolve", kind: "binding", ev: "EVD-021", doc: "../evidence-index.md#EVD-021" },
      { from: "binder", to: "button", label: "action props", kind: "render", ev: "EVD-023", doc: "../evidence-index.md#EVD-023" },
      { from: "button", to: "surface", label: "dispatch", kind: "event", ev: "EVD-022", doc: "../evidence-index.md#EVD-022" },
      { from: "surface", to: "host", label: "onAction", kind: "event", ev: "EVD-018", doc: "../evidence-index.md#EVD-018" },
      { from: "host", to: "agent", label: "POST action", kind: "transport", ev: "EVD-034", doc: "../evidence-index.md#EVD-034" }
    ]
  },
  {
    id: "sdk-catalog",
    label: "SDK and Catalog Pipeline",
    title: "SDK and Catalog Pipeline",
    description: "The Python SDK uses catalog selection, prompt generation, parsing, repair, validation, and A2A conversion to keep generated UI within renderer capabilities.",
    nodes: [
      { id: "capabilities", type: "contract", role: "Client", title: "Client Capabilities", sub: "supportedCatalogIds and inlineCatalogs", ev: "EVD-026", doc: "../evidence-index.md#EVD-026", tip: "Renderer can expose supported catalog ids and inline catalog schemas." },
      { id: "manager", type: "sdk", role: "SDK", title: "A2uiSchemaManager", sub: "Catalog selection and prompt", ev: "EVD-028", doc: "../evidence-index.md#EVD-028", tip: "SchemaManager selects active catalog and renders LLM instructions." },
      { id: "toolset", type: "sdk", role: "ADK", title: "SendA2uiToClientToolset", sub: "Tool declaration and execution", ev: "EVD-028", doc: "../evidence-index.md#EVD-028", tip: "Toolset injects schema/examples and validates tool output." },
      { id: "parser", type: "sdk", role: "SDK", title: "Parser / Fixer", sub: "Tagged text and JSON repair", ev: "EVD-027", doc: "../evidence-index.md#EVD-027", tip: "Parser extracts a2ui-json tags and repairs common JSON issues." },
      { id: "validator", type: "sdk", role: "SDK", title: "A2uiValidator", sub: "Schema, graph, path checks", ev: "EVD-030", doc: "../evidence-index.md#EVD-030", tip: "Validator checks schema and additional topology/path integrity." },
      { id: "converter", type: "sdk", role: "A2A", title: "Part/Event Converter", sub: "A2UI DataPart", ev: "EVD-029", doc: "../evidence-index.md#EVD-029", tip: "Converters package A2UI payloads for A2A clients." },
      { id: "assembler", type: "tool", role: "Tooling", title: "Catalog Assembler", sub: "Standalone catalog.json", ev: "EVD-032", doc: "../evidence-index.md#EVD-032", tip: "The assembly tool flattens refs and merges custom components, functions, and themes." },
      { id: "renderer", type: "renderer", role: "Client", title: "Renderer Catalog", sub: "Runtime implementations", ev: "EVD-025", doc: "../evidence-index.md#EVD-025", tip: "React Basic Catalog registers component implementations and functions." }
    ],
    edges: [
      { from: "capabilities", to: "manager", label: "selects catalog", kind: "contract", ev: "EVD-026", doc: "../evidence-index.md#EVD-026" },
      { from: "manager", to: "toolset", label: "prompt/schema", kind: "sdk", ev: "EVD-028", doc: "../evidence-index.md#EVD-028" },
      { from: "toolset", to: "parser", label: "tool output", kind: "sdk", ev: "EVD-027", doc: "../evidence-index.md#EVD-027" },
      { from: "parser", to: "validator", label: "payload", kind: "sdk", ev: "EVD-030", doc: "../evidence-index.md#EVD-030" },
      { from: "validator", to: "converter", label: "valid A2UI", kind: "sdk", ev: "EVD-029", doc: "../evidence-index.md#EVD-029" },
      { from: "assembler", to: "manager", label: "catalog schema", kind: "contract", ev: "EVD-032", doc: "../evidence-index.md#EVD-032" },
      { from: "assembler", to: "renderer", label: "same contract", kind: "contract", ev: "EVD-024", doc: "../evidence-index.md#EVD-024" },
      { from: "converter", to: "renderer", label: "A2A DataPart", kind: "transport", ev: "EVD-031", doc: "../evidence-index.md#EVD-031" }
    ]
  }
];
