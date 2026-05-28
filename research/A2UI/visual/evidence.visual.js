window.EVIDENCE_META = {
  "title": "A2UI Evidence Explanation",
  "description": "Trace from the architecture diagram back to evidence: architecture context, evidence conclusions, source/doc snippets, and original index locations.",
  "source": "../evidence-index.md",
  "projectRoot": "research/A2UI"
};

window.EVIDENCE_ITEMS = [
  {
    "id": "EVD-001",
    "conclusion": "A2UI is an open-source protocol/format and renderer set for agent-generated UI.",
    "type": "README",
    "location": "`README.md:1-6`",
    "confidence": "high",
    "verified": "yes",
    "note": "Project description",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "README.md:1-6",
        "path": "research/A2UI/README.md",
        "relativePath": "README.md",
        "start": 1,
        "end": 6,
        "snippet": "    1  # A2UI Technical Research\n    2  \n    3  Status: draft\n    4  Last Updated: 2026-05-28\n    5  \n    6  ## Research Summary",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-002",
    "conclusion": "A2UI's core mode is that the agent sends declarative JSON and the client renders it with native components.",
    "type": "README",
    "location": "`README.md:25-31`",
    "confidence": "high",
    "verified": "yes",
    "note": "Bound to the main architecture conclusion",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "README.md:25-31",
        "path": "research/A2UI/README.md",
        "relativePath": "README.md",
        "start": 25,
        "end": 31,
        "snippet": "   25  3. [runtime-flows.md](runtime-flows.md) - Generation, rendering, interaction, SDK, and A2A flows.\n   26  4. [key-abstractions.md](key-abstractions.md) - Core abstractions.\n   27  5. [extension-points.md](extension-points.md) - Extension points and customization entries.\n   28  6. [adoption-notes.md](adoption-notes.md) - Adoption guidance, risks, and rollout path.\n   29  7. [evidence-index.md](evidence-index.md) - Mapping from conclusions to source/docs/test evidence.\n   30  8. [dashboard.html](dashboard.html) - Browser entry for this research directory.\n   31  9. [visual/architecture.html](visual/architecture.html) - Interactive architecture visualization.",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-003",
    "conclusion": "Official introduction defines A2UI as a declarative UI protocol for agent-driven interfaces and emphasizes native rendering plus no arbitrary code.",
    "type": "official docs",
    "location": "`docs/introduction/what-is-a2ui.md:1-3`, `docs/introduction/what-is-a2ui.md:171-179`",
    "confidence": "high",
    "verified": "yes",
    "note": "Security positioning",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "docs/introduction/what-is-a2ui.md:1-3",
        "path": "research/A2UI/docs/introduction/what-is-a2ui.md",
        "relativePath": "docs/introduction/what-is-a2ui.md",
        "start": 1,
        "end": 3
      },
      {
        "kind": "file",
        "display": "docs/introduction/what-is-a2ui.md:171-179",
        "path": "research/A2UI/docs/introduction/what-is-a2ui.md",
        "relativePath": "docs/introduction/what-is-a2ui.md",
        "start": 171,
        "end": 179
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-004",
    "conclusion": "Components use a flat-list / adjacency-list model with ID references to express structure.",
    "type": "official docs",
    "location": "`docs/concepts/components.md:1-18`",
    "confidence": "high",
    "verified": "yes",
    "note": "Explains LLM/incremental friendliness",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "docs/concepts/components.md:1-18",
        "path": "research/A2UI/docs/concepts/components.md",
        "relativePath": "docs/concepts/components.md",
        "start": 1,
        "end": 18
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-005",
    "conclusion": "v0.9 components use a `component` string field and child ids.",
    "type": "official docs",
    "location": "`docs/concepts/components.md:85-137`",
    "confidence": "high",
    "verified": "yes",
    "note": "v0.9 structure",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "docs/concepts/components.md:85-137",
        "path": "research/A2UI/docs/concepts/components.md",
        "relativePath": "docs/concepts/components.md",
        "start": 85,
        "end": 137
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-006",
    "conclusion": "README marks the project as public preview / evolving and warns that APIs and protocol may change.",
    "type": "README",
    "location": "`README.md:12-17`",
    "confidence": "high",
    "verified": "yes",
    "note": "Maturity judgment",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "README.md:12-17",
        "path": "research/A2UI/README.md",
        "relativePath": "README.md",
        "start": 12,
        "end": 17,
        "snippet": "   12  ## Current Conclusions\n   13  \n   14  - A2UI's core boundary is \"the agent only sends data-shaped UI intent; the client interprets and renders it.\" This is safer than executing agent-generated code and lets the same UI intent map to multiple renderers.\n   15  - v0.9 organizes the protocol into four server-to-client messages: `createSurface`, `updateComponents`, `updateDataModel`, and `deleteSurface`. Components use a flat adjacency-list model with `id` and child references, which fits incremental LLM generation.\n   16  - The renderer's important logic is not in React components themselves, but in `web_core`: `MessageProcessor`, `SurfaceModel`, `DataModel`, `DataContext`, `GenericBinder`, and `Catalog`. The React renderer adapts these state and binding abstractions to UI.\n   17  - Catalog is the center of protocol capability, design-system mapping, and security boundaries. The Basic Catalog provides portable defaults; production systems should define their own catalog and negotiate it through capabilities or inline catalogs.",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-007",
    "conclusion": "The v0.9 server-to-client protocol contains `createSurface`, `updateComponents`, `updateDataModel`, and `deleteSurface`.",
    "type": "spec",
    "location": "`specification/v0_9/docs/a2ui_protocol.md:14-25`",
    "confidence": "high",
    "verified": "yes",
    "note": "Protocol core",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "System Overview",
        "viewDescription": "A2UI turns agent-generated JSON UI intent into native UI through transport, message processing, catalog lookup, state models, binding, and renderer components.",
        "title": "A2UI v0.9 Messages",
        "sub": "createSurface, updateComponents, updateDataModel, deleteSurface",
        "role": "Protocol",
        "detail": "The v0.9 protocol has four core server-to-client message kinds.",
        "relation": ""
      }
    ],
    "explanation": "This evidence supports System Overview / node \"A2UI v0.9 Messages\" in the architecture diagram. Evidence conclusion: The v0.9 server-to-client protocol contains `createSurface`, `updateComponents`, `updateDataModel`, and `deleteSurface`.. The diagram explanation says: The v0.9 protocol has four core server-to-client message kinds.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "specification/v0_9/docs/a2ui_protocol.md:14-25",
        "path": "research/A2UI/specification/v0_9/docs/a2ui_protocol.md",
        "relativePath": "specification/v0_9/docs/a2ui_protocol.md",
        "start": 14,
        "end": 25
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-008",
    "conclusion": "v0.9 JSON Schema defines the four server-to-client message types with `oneOf`.",
    "type": "JSON Schema",
    "location": "`specification/v0_9/json/server_to_client.json:1-12`",
    "confidence": "high",
    "verified": "yes",
    "note": "Machine-verifiable",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "specification/v0_9/json/server_to_client.json:1-12",
        "path": "research/A2UI/specification/v0_9/json/server_to_client.json",
        "relativePath": "specification/v0_9/json/server_to_client.json",
        "start": 1,
        "end": 12
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-009",
    "conclusion": "`updateComponents` schema requires `surfaceId` and component list, and component entries reference catalog `anyComponent`.",
    "type": "JSON Schema",
    "location": "`specification/v0_9/json/server_to_client.json:48-83`",
    "confidence": "high",
    "verified": "yes",
    "note": "Component update",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "specification/v0_9/json/server_to_client.json:48-83",
        "path": "research/A2UI/specification/v0_9/json/server_to_client.json",
        "relativePath": "specification/v0_9/json/server_to_client.json",
        "start": 48,
        "end": 83
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-010",
    "conclusion": "The v0.10 specification directory exists but is marked under development.",
    "type": "spec",
    "location": "`specification/v0_10/README.md:1-5`",
    "confidence": "high",
    "verified": "yes",
    "note": "Version evolution",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "specification/v0_10/README.md:1-5",
        "path": "research/A2UI/specification/v0_10/README.md",
        "relativePath": "specification/v0_10/README.md",
        "start": 1,
        "end": 5
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-011",
    "conclusion": "Data binding is based on JSON Pointer and supports separation of UI structure/state, dynamic values, and two-way input.",
    "type": "official docs",
    "location": "`docs/concepts/data-binding.md:1-18`, `docs/concepts/data-binding.md:173-181`",
    "confidence": "high",
    "verified": "yes",
    "note": "Consistent with DataModel implementation",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "actions-state",
        "viewLabel": "Actions and Data State",
        "viewDescription": "Input components update DataModel through setters; event actions resolve context at trigger time and travel back to the agent through host action handlers.",
        "title": "Input Component",
        "sub": "TextField, CheckBox, ChoicePicker",
        "role": "UI",
        "detail": "Bound inputs can write back to the data model.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "actions-state",
        "viewLabel": "Actions and Data State",
        "viewDescription": "Input components update DataModel through setters; event actions resolve context at trigger time and travel back to the agent through host action handlers.",
        "title": "Input Component -> DataModel",
        "sub": "writes via setter",
        "role": "state",
        "status": "",
        "detail": "Relationship semantics: writes via setter.",
        "relation": "Input Component to DataModel"
      }
    ],
    "explanation": "This evidence supports Actions and Data State / node \"Input Component\", Actions and Data State / edge \"Input Component -> DataModel\" in the architecture diagram. Evidence conclusion: Data binding is based on JSON Pointer and supports separation of UI structure/state, dynamic values, and two-way input.. The diagram explanation says: Bound inputs can write back to the data model.; Relationship semantics: writes via setter.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "docs/concepts/data-binding.md:1-18",
        "path": "research/A2UI/docs/concepts/data-binding.md",
        "relativePath": "docs/concepts/data-binding.md",
        "start": 1,
        "end": 18
      },
      {
        "kind": "file",
        "display": "docs/concepts/data-binding.md:173-181",
        "path": "research/A2UI/docs/concepts/data-binding.md",
        "relativePath": "docs/concepts/data-binding.md",
        "start": 173,
        "end": 181
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-012",
    "conclusion": "Actions are split into local Functions and Events sent to the agent; checks are mainly UX disabling, not data-integrity guarantees.",
    "type": "official docs",
    "location": "`docs/concepts/actions.md:1-15`, `docs/concepts/actions.md:63-69`",
    "confidence": "high",
    "verified": "yes",
    "note": "Action semantics",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "actions-state",
        "viewLabel": "Actions and Data State",
        "viewDescription": "Input components update DataModel through setters; event actions resolve context at trigger time and travel back to the agent through host action handlers.",
        "title": "Agent",
        "sub": "Receives event context",
        "role": "Agent",
        "detail": "Events send selected context back to the agent.",
        "relation": ""
      }
    ],
    "explanation": "This evidence supports Actions and Data State / node \"Agent\" in the architecture diagram. Evidence conclusion: Actions are split into local Functions and Events sent to the agent; checks are mainly UX disabling, not data-integrity guarantees.. The diagram explanation says: Events send selected context back to the agent.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "docs/concepts/actions.md:1-15",
        "path": "research/A2UI/docs/concepts/actions.md",
        "relativePath": "docs/concepts/actions.md",
        "start": 1,
        "end": 15
      },
      {
        "kind": "file",
        "display": "docs/concepts/actions.md:63-69",
        "path": "research/A2UI/docs/concepts/actions.md",
        "relativePath": "docs/concepts/actions.md",
        "start": 63,
        "end": 69
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-013",
    "conclusion": "Catalog defines components/functions/themes, and all A2UI JSON should be validated against the selected catalog; production can define its own catalog.",
    "type": "official docs",
    "location": "`docs/concepts/catalogs.md:5-9`, `docs/concepts/catalogs.md:70-85`",
    "confidence": "high",
    "verified": "yes",
    "note": "Main extension entry",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "docs/concepts/catalogs.md:5-9",
        "path": "research/A2UI/docs/concepts/catalogs.md",
        "relativePath": "docs/concepts/catalogs.md",
        "start": 5,
        "end": 9
      },
      {
        "kind": "file",
        "display": "docs/concepts/catalogs.md:70-85",
        "path": "research/A2UI/docs/concepts/catalogs.md",
        "relativePath": "docs/concepts/catalogs.md",
        "start": 70,
        "end": 85
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-014",
    "conclusion": "Renderer responsibilities include parsing adjacency lists, mapping widgets, data binding/lifecycle, incremental messages, and user actions.",
    "type": "official docs",
    "location": "`docs/reference/renderers.md:3-9`, `docs/reference/renderers.md:70-78`",
    "confidence": "high",
    "verified": "yes",
    "note": "Renderer responsibility",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "System Overview",
        "viewDescription": "A2UI turns agent-generated JSON UI intent into native UI through transport, message processing, catalog lookup, state models, binding, and renderer components.",
        "title": "Native UI",
        "sub": "React/Lit/Angular/Flutter components",
        "role": "Renderer",
        "detail": "Renderer maps A2UI components to native widgets and handles user interaction.",
        "relation": ""
      }
    ],
    "explanation": "This evidence supports System Overview / node \"Native UI\" in the architecture diagram. Evidence conclusion: Renderer responsibilities include parsing adjacency lists, mapping widgets, data binding/lifecycle, incremental messages, and user actions.. The diagram explanation says: Renderer maps A2UI components to native widgets and handles user interaction.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "docs/reference/renderers.md:3-9",
        "path": "research/A2UI/docs/reference/renderers.md",
        "relativePath": "docs/reference/renderers.md",
        "start": 3,
        "end": 9
      },
      {
        "kind": "file",
        "display": "docs/reference/renderers.md:70-78",
        "path": "research/A2UI/docs/reference/renderers.md",
        "relativePath": "docs/reference/renderers.md",
        "start": 70,
        "end": 78
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-015",
    "conclusion": "React renderer exports `A2uiSurface`, adapter, and Basic Catalog.",
    "type": "source",
    "location": "`renderers/react/src/v0_9/index.ts:17-21`",
    "confidence": "high",
    "verified": "yes",
    "note": "React entry",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "renderer-runtime",
        "viewLabel": "Renderer Runtime",
        "viewDescription": "The reusable implementation center is web_core; React is a comparatively thin adapter over surface state, component context, and GenericBinder.",
        "title": "A2uiSurface",
        "sub": "Root and deferred child rendering",
        "role": "React",
        "detail": "A2uiSurface renders root and child components through catalog implementations.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "renderer-runtime",
        "viewLabel": "Renderer Runtime",
        "viewDescription": "The reusable implementation center is web_core; React is a comparatively thin adapter over surface state, component context, and GenericBinder.",
        "title": "GenericBinder -> A2uiSurface",
        "sub": "renders props",
        "role": "render",
        "status": "",
        "detail": "Relationship semantics: renders props.",
        "relation": "GenericBinder to A2uiSurface"
      }
    ],
    "explanation": "This evidence supports Renderer Runtime / node \"A2uiSurface\", Renderer Runtime / edge \"GenericBinder -> A2uiSurface\" in the architecture diagram. Evidence conclusion: React renderer exports `A2uiSurface`, adapter, and Basic Catalog.. The diagram explanation says: A2uiSurface renders root and child components through catalog implementations.; Relationship semantics: renders props.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "renderers/react/src/v0_9/index.ts:17-21",
        "path": "research/A2UI/renderers/react/src/v0_9/index.ts",
        "relativePath": "renderers/react/src/v0_9/index.ts",
        "start": 17,
        "end": 21
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-016",
    "conclusion": "Basic Catalog v0.9 provides 18 basic components and 14 functions, including Text/Image/Icon/Row/Column/List/Card/Button/TextField.",
    "type": "JSON Schema",
    "location": "`specification/v0_9/catalogs/basic/catalog.json:1-80`",
    "confidence": "medium",
    "verified": "yes",
    "note": "Full list counted from JSON schema",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "specification/v0_9/catalogs/basic/catalog.json:1-80",
        "path": "research/A2UI/specification/v0_9/catalogs/basic/catalog.json",
        "relativePath": "specification/v0_9/catalogs/basic/catalog.json",
        "start": 1,
        "end": 80
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-017",
    "conclusion": "`MessageProcessor` owns `SurfaceGroupModel`, handles create/update/delete/data-model messages, and exposes capabilities.",
    "type": "source",
    "location": "`renderers/web_core/src/v0_9/processing/message-processor.ts:45-85`, `renderers/web_core/src/v0_9/processing/message-processor.ts:229-335`",
    "confidence": "high",
    "verified": "yes",
    "note": "Client state entry",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "System Overview",
        "viewDescription": "A2UI turns agent-generated JSON UI intent into native UI through transport, message processing, catalog lookup, state models, binding, and renderer components.",
        "title": "MessageProcessor",
        "sub": "Creates surfaces and applies updates",
        "role": "Client Runtime",
        "detail": "MessageProcessor is the main client-side state mutation entrypoint.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "System Overview",
        "viewDescription": "A2UI turns agent-generated JSON UI intent into native UI through transport, message processing, catalog lookup, state models, binding, and renderer components.",
        "title": "MessageProcessor -> SurfaceModel",
        "sub": "mutates",
        "role": "state",
        "status": "",
        "detail": "Relationship semantics: mutates.",
        "relation": "MessageProcessor to SurfaceModel"
      },
      {
        "kind": "node",
        "viewId": "renderer-runtime",
        "viewLabel": "Renderer Runtime",
        "viewDescription": "The reusable implementation center is web_core; React is a comparatively thin adapter over surface state, component context, and GenericBinder.",
        "title": "MessageProcessor",
        "sub": "Dispatches v0.9 message types",
        "role": "Runtime",
        "detail": "Rejects invalid multi-update shapes and applies surface/component/data model updates.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "renderer-runtime",
        "viewLabel": "Renderer Runtime",
        "viewDescription": "The reusable implementation center is web_core; React is a comparatively thin adapter over surface state, component context, and GenericBinder.",
        "title": "SurfaceGroupModel",
        "sub": "Manages active surfaces",
        "role": "State",
        "detail": "SurfaceGroupModel is held by MessageProcessor and tracks active surfaces.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "renderer-runtime",
        "viewLabel": "Renderer Runtime",
        "viewDescription": "The reusable implementation center is web_core; React is a comparatively thin adapter over surface state, component context, and GenericBinder.",
        "title": "ComponentModel",
        "sub": "ID, type, properties",
        "role": "State",
        "detail": "Component updates create, update, or recreate component models.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "renderer-runtime",
        "viewLabel": "Renderer Runtime",
        "viewDescription": "The reusable implementation center is web_core; React is a comparatively thin adapter over surface state, component context, and GenericBinder.",
        "title": "MessageProcessor -> SurfaceGroupModel",
        "sub": "owns",
        "role": "state",
        "status": "",
        "detail": "Relationship semantics: owns.",
        "relation": "MessageProcessor to SurfaceGroupModel"
      },
      {
        "kind": "edge",
        "viewId": "renderer-runtime",
        "viewLabel": "Renderer Runtime",
        "viewDescription": "The reusable implementation center is web_core; React is a comparatively thin adapter over surface state, component context, and GenericBinder.",
        "title": "SurfaceModel -> ComponentModel",
        "sub": "stores",
        "role": "state",
        "status": "",
        "detail": "Relationship semantics: stores.",
        "relation": "SurfaceModel to ComponentModel"
      }
    ],
    "explanation": "This evidence supports System Overview / node \"MessageProcessor\", System Overview / edge \"MessageProcessor -> SurfaceModel\", Renderer Runtime / node \"MessageProcessor\", Renderer Runtime / node \"SurfaceGroupModel\" in the architecture diagram. Evidence conclusion: `MessageProcessor` owns `SurfaceGroupModel`, handles create/update/delete/data-model messages, and exposes capabilities.. The diagram explanation says: MessageProcessor is the main client-side state mutation entrypoint.; Relationship semantics: mutates.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/processing/message-processor.ts:45-85",
        "path": "research/A2UI/renderers/web_core/src/v0_9/processing/message-processor.ts",
        "relativePath": "renderers/web_core/src/v0_9/processing/message-processor.ts",
        "start": 45,
        "end": 85
      },
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/processing/message-processor.ts:229-335",
        "path": "research/A2UI/renderers/web_core/src/v0_9/processing/message-processor.ts",
        "relativePath": "renderers/web_core/src/v0_9/processing/message-processor.ts",
        "start": 229,
        "end": 335
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-018",
    "conclusion": "`SurfaceModel` aggregates data model, components, catalog, theme, `sendDataModel`, and unified action/error dispatch.",
    "type": "source",
    "location": "`renderers/web_core/src/v0_9/state/surface-model.ts:26-94`",
    "confidence": "high",
    "verified": "yes",
    "note": "Surface runtime",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "System Overview",
        "viewDescription": "A2UI turns agent-generated JSON UI intent into native UI through transport, message processing, catalog lookup, state models, binding, and renderer components.",
        "title": "SurfaceModel",
        "sub": "DataModel, components, catalog, theme, actions",
        "role": "State",
        "detail": "SurfaceModel holds the runtime state of one A2UI surface.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "System Overview",
        "viewDescription": "A2UI turns agent-generated JSON UI intent into native UI through transport, message processing, catalog lookup, state models, binding, and renderer components.",
        "title": "SurfaceModel -> Catalog",
        "sub": "uses",
        "role": "contract",
        "status": "",
        "detail": "Relationship semantics: uses.",
        "relation": "SurfaceModel to Catalog"
      },
      {
        "kind": "node",
        "viewId": "renderer-runtime",
        "viewLabel": "Renderer Runtime",
        "viewDescription": "The reusable implementation center is web_core; React is a comparatively thin adapter over surface state, component context, and GenericBinder.",
        "title": "SurfaceModel",
        "sub": "Surface-local state",
        "role": "State",
        "detail": "SurfaceModel contains components, data model, catalog, theme, and action dispatch.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "renderer-runtime",
        "viewLabel": "Renderer Runtime",
        "viewDescription": "The reusable implementation center is web_core; React is a comparatively thin adapter over surface state, component context, and GenericBinder.",
        "title": "SurfaceGroupModel -> SurfaceModel",
        "sub": "contains",
        "role": "state",
        "status": "",
        "detail": "Relationship semantics: contains.",
        "relation": "SurfaceGroupModel to SurfaceModel"
      },
      {
        "kind": "node",
        "viewId": "actions-state",
        "viewLabel": "Actions and Data State",
        "viewDescription": "Input components update DataModel through setters; event actions resolve context at trigger time and travel back to the agent through host action handlers.",
        "title": "SurfaceModel",
        "sub": "dispatchAction",
        "role": "Runtime",
        "detail": "SurfaceModel wraps action with surface and source component metadata.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "actions-state",
        "viewLabel": "Actions and Data State",
        "viewDescription": "Input components update DataModel through setters; event actions resolve context at trigger time and travel back to the agent through host action handlers.",
        "title": "SurfaceModel -> Action Handler",
        "sub": "onAction",
        "role": "event",
        "status": "",
        "detail": "Relationship semantics: onAction.",
        "relation": "SurfaceModel to Action Handler"
      }
    ],
    "explanation": "This evidence supports System Overview / node \"SurfaceModel\", System Overview / edge \"SurfaceModel -> Catalog\", Renderer Runtime / node \"SurfaceModel\", Renderer Runtime / edge \"SurfaceGroupModel -> SurfaceModel\" in the architecture diagram. Evidence conclusion: `SurfaceModel` aggregates data model, components, catalog, theme, `sendDataModel`, and unified action/error dispatch.. The diagram explanation says: SurfaceModel holds the runtime state of one A2UI surface.; Relationship semantics: uses.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/state/surface-model.ts:26-94",
        "path": "research/A2UI/renderers/web_core/src/v0_9/state/surface-model.ts",
        "relativePath": "renderers/web_core/src/v0_9/state/surface-model.ts",
        "start": 26,
        "end": 94
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-019",
    "conclusion": "`DataModel` is a JSON Pointer-addressable, subscribable observable data store supporting root replacement, nested creation, deletion, and path notifications.",
    "type": "source",
    "location": "`renderers/web_core/src/v0_9/state/data-model.ts:35-39`, `renderers/web_core/src/v0_9/state/data-model.ts:78-170`, `renderers/web_core/src/v0_9/state/data-model.ts:183-280`",
    "confidence": "high",
    "verified": "yes",
    "note": "Binding base",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "renderer-runtime",
        "viewLabel": "Renderer Runtime",
        "viewDescription": "The reusable implementation center is web_core; React is a comparatively thin adapter over surface state, component context, and GenericBinder.",
        "title": "DataModel",
        "sub": "JSON Pointer observable store",
        "role": "State",
        "detail": "DataModel provides path get/set and subscriptions.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "renderer-runtime",
        "viewLabel": "Renderer Runtime",
        "viewDescription": "The reusable implementation center is web_core; React is a comparatively thin adapter over surface state, component context, and GenericBinder.",
        "title": "SurfaceModel -> DataModel",
        "sub": "stores",
        "role": "state",
        "status": "",
        "detail": "Relationship semantics: stores.",
        "relation": "SurfaceModel to DataModel"
      },
      {
        "kind": "node",
        "viewId": "actions-state",
        "viewLabel": "Actions and Data State",
        "viewDescription": "Input components update DataModel through setters; event actions resolve context at trigger time and travel back to the agent through host action handlers.",
        "title": "DataModel",
        "sub": "Shared JSON state",
        "role": "State",
        "detail": "Observable JSON Pointer data store.",
        "relation": ""
      }
    ],
    "explanation": "This evidence supports Renderer Runtime / node \"DataModel\", Renderer Runtime / edge \"SurfaceModel -> DataModel\", Actions and Data State / node \"DataModel\" in the architecture diagram. Evidence conclusion: `DataModel` is a JSON Pointer-addressable, subscribable observable data store supporting root replacement, nested creation, deletion, and path notifications.. The diagram explanation says: DataModel provides path get/set and subscriptions.; Relationship semantics: stores.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/state/data-model.ts:35-39",
        "path": "research/A2UI/renderers/web_core/src/v0_9/state/data-model.ts",
        "relativePath": "renderers/web_core/src/v0_9/state/data-model.ts",
        "start": 35,
        "end": 39
      },
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/state/data-model.ts:78-170",
        "path": "research/A2UI/renderers/web_core/src/v0_9/state/data-model.ts",
        "relativePath": "renderers/web_core/src/v0_9/state/data-model.ts",
        "start": 78,
        "end": 170
      },
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/state/data-model.ts:183-280",
        "path": "research/A2UI/renderers/web_core/src/v0_9/state/data-model.ts",
        "relativePath": "renderers/web_core/src/v0_9/state/data-model.ts",
        "start": 183,
        "end": 280
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-020",
    "conclusion": "`DataContext` resolves relative/absolute paths, dynamic values, function expressions, and action context.",
    "type": "source",
    "location": "`renderers/web_core/src/v0_9/rendering/data-context.ts:28-35`, `renderers/web_core/src/v0_9/rendering/data-context.ts:88-164`, `renderers/web_core/src/v0_9/rendering/data-context.ts:273-367`",
    "confidence": "high",
    "verified": "yes",
    "note": "Dynamic binding",
    "graphRefs": [
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "System Overview",
        "viewDescription": "A2UI turns agent-generated JSON UI intent into native UI through transport, message processing, catalog lookup, state models, binding, and renderer components.",
        "title": "SurfaceModel -> GenericBinder",
        "sub": "provides context",
        "role": "binding",
        "status": "",
        "detail": "Relationship semantics: provides context.",
        "relation": "SurfaceModel to GenericBinder"
      },
      {
        "kind": "node",
        "viewId": "renderer-runtime",
        "viewLabel": "Renderer Runtime",
        "viewDescription": "The reusable implementation center is web_core; React is a comparatively thin adapter over surface state, component context, and GenericBinder.",
        "title": "Component/Data Context",
        "sub": "Scoped access for rendering",
        "role": "Context",
        "detail": "DataContext resolves relative paths, dynamic values, and action context.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "renderer-runtime",
        "viewLabel": "Renderer Runtime",
        "viewDescription": "The reusable implementation center is web_core; React is a comparatively thin adapter over surface state, component context, and GenericBinder.",
        "title": "ComponentModel -> Component/Data Context",
        "sub": "loads",
        "role": "binding",
        "status": "",
        "detail": "Relationship semantics: loads.",
        "relation": "ComponentModel to Component/Data Context"
      },
      {
        "kind": "edge",
        "viewId": "renderer-runtime",
        "viewLabel": "Renderer Runtime",
        "viewDescription": "The reusable implementation center is web_core; React is a comparatively thin adapter over surface state, component context, and GenericBinder.",
        "title": "DataModel -> Component/Data Context",
        "sub": "scopes",
        "role": "binding",
        "status": "",
        "detail": "Relationship semantics: scopes.",
        "relation": "DataModel to Component/Data Context"
      },
      {
        "kind": "node",
        "viewId": "actions-state",
        "viewLabel": "Actions and Data State",
        "viewDescription": "Input components update DataModel through setters; event actions resolve context at trigger time and travel back to the agent through host action handlers.",
        "title": "DataContext",
        "sub": "Relative path and dynamic value resolution",
        "role": "Context",
        "detail": "Relative paths are resolved against a scoped base path.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "actions-state",
        "viewLabel": "Actions and Data State",
        "viewDescription": "Input components update DataModel through setters; event actions resolve context at trigger time and travel back to the agent through host action handlers.",
        "title": "DataModel -> DataContext",
        "sub": "read and subscribe",
        "role": "state",
        "status": "",
        "detail": "Relationship semantics: read and subscribe.",
        "relation": "DataModel to DataContext"
      }
    ],
    "explanation": "This evidence supports System Overview / edge \"SurfaceModel -> GenericBinder\", Renderer Runtime / node \"Component/Data Context\", Renderer Runtime / edge \"ComponentModel -> Component/Data Context\", Renderer Runtime / edge \"DataModel -> Component/Data Context\" in the architecture diagram. Evidence conclusion: `DataContext` resolves relative/absolute paths, dynamic values, function expressions, and action context.. The diagram explanation says: Relationship semantics: provides context.; DataContext resolves relative paths, dynamic values, and action context.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/rendering/data-context.ts:28-35",
        "path": "research/A2UI/renderers/web_core/src/v0_9/rendering/data-context.ts",
        "relativePath": "renderers/web_core/src/v0_9/rendering/data-context.ts",
        "start": 28,
        "end": 35
      },
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/rendering/data-context.ts:88-164",
        "path": "research/A2UI/renderers/web_core/src/v0_9/rendering/data-context.ts",
        "relativePath": "renderers/web_core/src/v0_9/rendering/data-context.ts",
        "start": 88,
        "end": 164
      },
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/rendering/data-context.ts:273-367",
        "path": "research/A2UI/renderers/web_core/src/v0_9/rendering/data-context.ts",
        "relativePath": "renderers/web_core/src/v0_9/rendering/data-context.ts",
        "start": 273,
        "end": 367
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-021",
    "conclusion": "`GenericBinder` identifies dynamic/action/structural/checkable/static/object/array fields from schema and generates renderer props.",
    "type": "source",
    "location": "`renderers/web_core/src/v0_9/rendering/generic-binder.ts:23-92`, `renderers/web_core/src/v0_9/rendering/generic-binder.ts:160-328`",
    "confidence": "high",
    "verified": "yes",
    "note": "Renderer reuse core",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "System Overview",
        "viewDescription": "A2UI turns agent-generated JSON UI intent into native UI through transport, message processing, catalog lookup, state models, binding, and renderer components.",
        "title": "GenericBinder",
        "sub": "Dynamic values, actions, children, validation",
        "role": "Binding",
        "detail": "GenericBinder turns component schema and state into renderer props.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "System Overview",
        "viewDescription": "A2UI turns agent-generated JSON UI intent into native UI through transport, message processing, catalog lookup, state models, binding, and renderer components.",
        "title": "GenericBinder -> Native UI",
        "sub": "produces props",
        "role": "render",
        "status": "",
        "detail": "Relationship semantics: produces props.",
        "relation": "GenericBinder to Native UI"
      },
      {
        "kind": "node",
        "viewId": "renderer-runtime",
        "viewLabel": "Renderer Runtime",
        "viewDescription": "The reusable implementation center is web_core; React is a comparatively thin adapter over surface state, component context, and GenericBinder.",
        "title": "GenericBinder",
        "sub": "Schema-aware prop generation",
        "role": "Binding",
        "detail": "GenericBinder classifies schema fields and binds them to renderer props.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "renderer-runtime",
        "viewLabel": "Renderer Runtime",
        "viewDescription": "The reusable implementation center is web_core; React is a comparatively thin adapter over surface state, component context, and GenericBinder.",
        "title": "Component/Data Context -> GenericBinder",
        "sub": "feeds",
        "role": "binding",
        "status": "",
        "detail": "Relationship semantics: feeds.",
        "relation": "Component/Data Context to GenericBinder"
      },
      {
        "kind": "node",
        "viewId": "actions-state",
        "viewLabel": "Actions and Data State",
        "viewDescription": "Input components update DataModel through setters; event actions resolve context at trigger time and travel back to the agent through host action handlers.",
        "title": "GenericBinder",
        "sub": "Setters, checks, action closures",
        "role": "Binding",
        "detail": "Binder produces reactive props, setters, validation state, and action handlers.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "actions-state",
        "viewLabel": "Actions and Data State",
        "viewDescription": "Input components update DataModel through setters; event actions resolve context at trigger time and travel back to the agent through host action handlers.",
        "title": "DataContext -> GenericBinder",
        "sub": "resolve",
        "role": "binding",
        "status": "",
        "detail": "Relationship semantics: resolve.",
        "relation": "DataContext to GenericBinder"
      }
    ],
    "explanation": "This evidence supports System Overview / node \"GenericBinder\", System Overview / edge \"GenericBinder -> Native UI\", Renderer Runtime / node \"GenericBinder\", Renderer Runtime / edge \"Component/Data Context -> GenericBinder\" in the architecture diagram. Evidence conclusion: `GenericBinder` identifies dynamic/action/structural/checkable/static/object/array fields from schema and generates renderer props.. The diagram explanation says: GenericBinder turns component schema and state into renderer props.; Relationship semantics: produces props.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/rendering/generic-binder.ts:23-92",
        "path": "research/A2UI/renderers/web_core/src/v0_9/rendering/generic-binder.ts",
        "relativePath": "renderers/web_core/src/v0_9/rendering/generic-binder.ts",
        "start": 23,
        "end": 92
      },
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/rendering/generic-binder.ts:160-328",
        "path": "research/A2UI/renderers/web_core/src/v0_9/rendering/generic-binder.ts",
        "relativePath": "renderers/web_core/src/v0_9/rendering/generic-binder.ts",
        "start": 160,
        "end": 328
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-022",
    "conclusion": "Action fields become closures in the binder; at trigger time they resolve context and dispatch.",
    "type": "source",
    "location": "`renderers/web_core/src/v0_9/rendering/generic-binder.ts:243-255`",
    "confidence": "high",
    "verified": "yes",
    "note": "Interaction flow",
    "graphRefs": [
      {
        "kind": "edge",
        "viewId": "actions-state",
        "viewLabel": "Actions and Data State",
        "viewDescription": "Input components update DataModel through setters; event actions resolve context at trigger time and travel back to the agent through host action handlers.",
        "title": "Button -> SurfaceModel",
        "sub": "dispatch",
        "role": "event",
        "status": "",
        "detail": "Relationship semantics: dispatch.",
        "relation": "Button to SurfaceModel"
      }
    ],
    "explanation": "This evidence supports Actions and Data State / edge \"Button -> SurfaceModel\" in the architecture diagram. Evidence conclusion: Action fields become closures in the binder; at trigger time they resolve context and dispatch.. The diagram explanation says: Relationship semantics: dispatch.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/rendering/generic-binder.ts:243-255",
        "path": "research/A2UI/renderers/web_core/src/v0_9/rendering/generic-binder.ts",
        "relativePath": "renderers/web_core/src/v0_9/rendering/generic-binder.ts",
        "start": 243,
        "end": 255
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-023",
    "conclusion": "React Button implementation only receives bound props, calls `props.action` on click, and disables when `isValid === false`.",
    "type": "source",
    "location": "`renderers/react/src/v0_9/catalog/basic/components/Button.tsx:22-35`",
    "confidence": "high",
    "verified": "yes",
    "note": "Thin adapter",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "actions-state",
        "viewLabel": "Actions and Data State",
        "viewDescription": "Input components update DataModel through setters; event actions resolve context at trigger time and travel back to the agent through host action handlers.",
        "title": "Button",
        "sub": "Calls bound action and honors isValid",
        "role": "UI",
        "detail": "React Button dispatches action and is disabled when validation fails.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "actions-state",
        "viewLabel": "Actions and Data State",
        "viewDescription": "Input components update DataModel through setters; event actions resolve context at trigger time and travel back to the agent through host action handlers.",
        "title": "GenericBinder -> Button",
        "sub": "action props",
        "role": "render",
        "status": "",
        "detail": "Relationship semantics: action props.",
        "relation": "GenericBinder to Button"
      }
    ],
    "explanation": "This evidence supports Actions and Data State / node \"Button\", Actions and Data State / edge \"GenericBinder -> Button\" in the architecture diagram. Evidence conclusion: React Button implementation only receives bound props, calls `props.action` on click, and disables when `isValid === false`.. The diagram explanation says: React Button dispatches action and is disabled when validation fails.; Relationship semantics: action props.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "renderers/react/src/v0_9/catalog/basic/components/Button.tsx:22-35",
        "path": "research/A2UI/renderers/react/src/v0_9/catalog/basic/components/Button.tsx",
        "relativePath": "renderers/react/src/v0_9/catalog/basic/components/Button.tsx",
        "start": 22,
        "end": 35
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-024",
    "conclusion": "`Catalog` runtime contains components, functions, and theme schema, and validates function parameters with Zod before execution.",
    "type": "source",
    "location": "`renderers/web_core/src/v0_9/catalog/types.ts:45-82`, `renderers/web_core/src/v0_9/catalog/types.ts:117-185`",
    "confidence": "high",
    "verified": "yes",
    "note": "Catalog runtime",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "System Overview",
        "viewDescription": "A2UI turns agent-generated JSON UI intent into native UI through transport, message processing, catalog lookup, state models, binding, and renderer components.",
        "title": "Catalog",
        "sub": "Components, functions, theme schema",
        "role": "Contract",
        "detail": "Catalog is both schema contract and runtime implementation registry.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "System Overview",
        "viewDescription": "A2UI turns agent-generated JSON UI intent into native UI through transport, message processing, catalog lookup, state models, binding, and renderer components.",
        "title": "Catalog -> GenericBinder",
        "sub": "describes fields",
        "role": "contract",
        "status": "",
        "detail": "Relationship semantics: describes fields.",
        "relation": "Catalog to GenericBinder"
      },
      {
        "kind": "edge",
        "viewId": "sdk-catalog",
        "viewLabel": "SDK and Catalog Pipeline",
        "viewDescription": "The Python SDK uses catalog selection, prompt generation, parsing, repair, validation, and A2A conversion to keep generated UI within renderer capabilities.",
        "title": "Catalog Assembler -> Renderer Catalog",
        "sub": "same contract",
        "role": "contract",
        "status": "",
        "detail": "Relationship semantics: same contract.",
        "relation": "Catalog Assembler to Renderer Catalog"
      }
    ],
    "explanation": "This evidence supports System Overview / node \"Catalog\", System Overview / edge \"Catalog -> GenericBinder\", SDK and Catalog Pipeline / edge \"Catalog Assembler -> Renderer Catalog\" in the architecture diagram. Evidence conclusion: `Catalog` runtime contains components, functions, and theme schema, and validates function parameters with Zod before execution.. The diagram explanation says: Catalog is both schema contract and runtime implementation registry.; Relationship semantics: describes fields.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/catalog/types.ts:45-82",
        "path": "research/A2UI/renderers/web_core/src/v0_9/catalog/types.ts",
        "relativePath": "renderers/web_core/src/v0_9/catalog/types.ts",
        "start": 45,
        "end": 82
      },
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/catalog/types.ts:117-185",
        "path": "research/A2UI/renderers/web_core/src/v0_9/catalog/types.ts",
        "relativePath": "renderers/web_core/src/v0_9/catalog/types.ts",
        "start": 117,
        "end": 185
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-025",
    "conclusion": "React Basic Catalog registers Basic component implementations and `BASIC_FUNCTIONS` as a catalog.",
    "type": "source",
    "location": "`renderers/react/src/v0_9/catalog/basic/index.ts:42-67`",
    "confidence": "high",
    "verified": "yes",
    "note": "React catalog",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "sdk-catalog",
        "viewLabel": "SDK and Catalog Pipeline",
        "viewDescription": "The Python SDK uses catalog selection, prompt generation, parsing, repair, validation, and A2A conversion to keep generated UI within renderer capabilities.",
        "title": "Renderer Catalog",
        "sub": "Runtime implementations",
        "role": "Client",
        "detail": "React Basic Catalog registers component implementations and functions.",
        "relation": ""
      }
    ],
    "explanation": "This evidence supports SDK and Catalog Pipeline / node \"Renderer Catalog\" in the architecture diagram. Evidence conclusion: React Basic Catalog registers Basic component implementations and `BASIC_FUNCTIONS` as a catalog.. The diagram explanation says: React Basic Catalog registers component implementations and functions.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "renderers/react/src/v0_9/catalog/basic/index.ts:42-67",
        "path": "research/A2UI/renderers/react/src/v0_9/catalog/basic/index.ts",
        "relativePath": "renderers/react/src/v0_9/catalog/basic/index.ts",
        "start": 42,
        "end": 67
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-026",
    "conclusion": "Renderer capabilities support `supportedCatalogIds` and optional inline catalogs; `getClientDataModel` only returns surfaces with `sendDataModel`.",
    "type": "source",
    "location": "`renderers/web_core/src/v0_9/processing/message-processor.ts:73-201`",
    "confidence": "high",
    "verified": "yes",
    "note": "Capability negotiation and sync",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "sdk-catalog",
        "viewLabel": "SDK and Catalog Pipeline",
        "viewDescription": "The Python SDK uses catalog selection, prompt generation, parsing, repair, validation, and A2A conversion to keep generated UI within renderer capabilities.",
        "title": "Client Capabilities",
        "sub": "supportedCatalogIds and inlineCatalogs",
        "role": "Client",
        "detail": "Renderer can expose supported catalog ids and inline catalog schemas.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "sdk-catalog",
        "viewLabel": "SDK and Catalog Pipeline",
        "viewDescription": "The Python SDK uses catalog selection, prompt generation, parsing, repair, validation, and A2A conversion to keep generated UI within renderer capabilities.",
        "title": "Client Capabilities -> A2uiSchemaManager",
        "sub": "selects catalog",
        "role": "contract",
        "status": "",
        "detail": "Relationship semantics: selects catalog.",
        "relation": "Client Capabilities to A2uiSchemaManager"
      }
    ],
    "explanation": "This evidence supports SDK and Catalog Pipeline / node \"Client Capabilities\", SDK and Catalog Pipeline / edge \"Client Capabilities -> A2uiSchemaManager\" in the architecture diagram. Evidence conclusion: Renderer capabilities support `supportedCatalogIds` and optional inline catalogs; `getClientDataModel` only returns surfaces with `sendDataModel`.. The diagram explanation says: Renderer can expose supported catalog ids and inline catalog schemas.; Relationship semantics: selects catalog.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/processing/message-processor.ts:73-201",
        "path": "research/A2UI/renderers/web_core/src/v0_9/processing/message-processor.ts",
        "relativePath": "renderers/web_core/src/v0_9/processing/message-processor.ts",
        "start": 73,
        "end": 201
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-027",
    "conclusion": "Python parser extracts payloads from `<a2ui-json>` tags and handles markdown code blocks.",
    "type": "source",
    "location": "`agent_sdks/python/src/a2ui/parser/parser.py:22-88`",
    "confidence": "high",
    "verified": "yes",
    "note": "Text-output compatibility",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "System Overview",
        "viewDescription": "A2UI turns agent-generated JSON UI intent into native UI through transport, message processing, catalog lookup, state models, binding, and renderer components.",
        "title": "Agent / SDK",
        "sub": "Generates A2UI messages and validates payloads",
        "role": "Agent / SDK",
        "detail": "Python SDK supplies parser, schema manager, validator, toolset, and A2A conversion.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "System Overview",
        "viewDescription": "A2UI turns agent-generated JSON UI intent into native UI through transport, message processing, catalog lookup, state models, binding, and renderer components.",
        "title": "Agent / SDK -> A2UI v0.9 Messages",
        "sub": "emits",
        "role": "data",
        "status": "",
        "detail": "Relationship semantics: emits.",
        "relation": "Agent / SDK to A2UI v0.9 Messages"
      },
      {
        "kind": "node",
        "viewId": "sdk-catalog",
        "viewLabel": "SDK and Catalog Pipeline",
        "viewDescription": "The Python SDK uses catalog selection, prompt generation, parsing, repair, validation, and A2A conversion to keep generated UI within renderer capabilities.",
        "title": "Parser / Fixer",
        "sub": "Tagged text and JSON repair",
        "role": "SDK",
        "detail": "Parser extracts a2ui-json tags and repairs common JSON issues.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "sdk-catalog",
        "viewLabel": "SDK and Catalog Pipeline",
        "viewDescription": "The Python SDK uses catalog selection, prompt generation, parsing, repair, validation, and A2A conversion to keep generated UI within renderer capabilities.",
        "title": "SendA2uiToClientToolset -> Parser / Fixer",
        "sub": "tool output",
        "role": "sdk",
        "status": "",
        "detail": "Relationship semantics: tool output.",
        "relation": "SendA2uiToClientToolset to Parser / Fixer"
      }
    ],
    "explanation": "This evidence supports System Overview / node \"Agent / SDK\", System Overview / edge \"Agent / SDK -> A2UI v0.9 Messages\", SDK and Catalog Pipeline / node \"Parser / Fixer\", SDK and Catalog Pipeline / edge \"SendA2uiToClientToolset -> Parser / Fixer\" in the architecture diagram. Evidence conclusion: Python parser extracts payloads from `<a2ui-json>` tags and handles markdown code blocks.. The diagram explanation says: Python SDK supplies parser, schema manager, validator, toolset, and A2A conversion.; Relationship semantics: emits.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "agent_sdks/python/src/a2ui/parser/parser.py:22-88",
        "path": "research/A2UI/agent_sdks/python/src/a2ui/parser/parser.py",
        "relativePath": "agent_sdks/python/src/a2ui/parser/parser.py",
        "start": 22,
        "end": 88
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-028",
    "conclusion": "`A2uiSchemaManager` selects active catalog from inline/supported/default catalogs and generates system prompt.",
    "type": "source",
    "location": "`agent_sdks/python/src/a2ui/schema/manager.py:101-236`",
    "confidence": "high",
    "verified": "yes",
    "note": "Generation path",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "sdk-catalog",
        "viewLabel": "SDK and Catalog Pipeline",
        "viewDescription": "The Python SDK uses catalog selection, prompt generation, parsing, repair, validation, and A2A conversion to keep generated UI within renderer capabilities.",
        "title": "A2uiSchemaManager",
        "sub": "Catalog selection and prompt",
        "role": "SDK",
        "detail": "SchemaManager selects active catalog and renders LLM instructions.",
        "relation": ""
      },
      {
        "kind": "node",
        "viewId": "sdk-catalog",
        "viewLabel": "SDK and Catalog Pipeline",
        "viewDescription": "The Python SDK uses catalog selection, prompt generation, parsing, repair, validation, and A2A conversion to keep generated UI within renderer capabilities.",
        "title": "SendA2uiToClientToolset",
        "sub": "Tool declaration and execution",
        "role": "ADK",
        "detail": "Toolset injects schema/examples and validates tool output.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "sdk-catalog",
        "viewLabel": "SDK and Catalog Pipeline",
        "viewDescription": "The Python SDK uses catalog selection, prompt generation, parsing, repair, validation, and A2A conversion to keep generated UI within renderer capabilities.",
        "title": "A2uiSchemaManager -> SendA2uiToClientToolset",
        "sub": "prompt/schema",
        "role": "sdk",
        "status": "",
        "detail": "Relationship semantics: prompt/schema.",
        "relation": "A2uiSchemaManager to SendA2uiToClientToolset"
      }
    ],
    "explanation": "This evidence supports SDK and Catalog Pipeline / node \"A2uiSchemaManager\", SDK and Catalog Pipeline / node \"SendA2uiToClientToolset\", SDK and Catalog Pipeline / edge \"A2uiSchemaManager -> SendA2uiToClientToolset\" in the architecture diagram. Evidence conclusion: `A2uiSchemaManager` selects active catalog from inline/supported/default catalogs and generates system prompt.. The diagram explanation says: SchemaManager selects active catalog and renders LLM instructions.; Toolset injects schema/examples and validates tool output.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "agent_sdks/python/src/a2ui/schema/manager.py:101-236",
        "path": "research/A2UI/agent_sdks/python/src/a2ui/schema/manager.py",
        "relativePath": "agent_sdks/python/src/a2ui/schema/manager.py",
        "start": 101,
        "end": 236
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-029",
    "conclusion": "ADK `PartConverter` can extract A2UI from tool responses, generic tool responses, or text tags and convert it to A2A parts.",
    "type": "source",
    "location": "`agent_sdks/python/src/a2ui/adk/a2a/part_converter.py:15-20`, `agent_sdks/python/src/a2ui/adk/a2a/part_converter.py:79-133`",
    "confidence": "high",
    "verified": "yes",
    "note": "A2A bridge",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "sdk-catalog",
        "viewLabel": "SDK and Catalog Pipeline",
        "viewDescription": "The Python SDK uses catalog selection, prompt generation, parsing, repair, validation, and A2A conversion to keep generated UI within renderer capabilities.",
        "title": "Part/Event Converter",
        "sub": "A2UI DataPart",
        "role": "A2A",
        "detail": "Converters package A2UI payloads for A2A clients.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "sdk-catalog",
        "viewLabel": "SDK and Catalog Pipeline",
        "viewDescription": "The Python SDK uses catalog selection, prompt generation, parsing, repair, validation, and A2A conversion to keep generated UI within renderer capabilities.",
        "title": "A2uiValidator -> Part/Event Converter",
        "sub": "valid A2UI",
        "role": "sdk",
        "status": "",
        "detail": "Relationship semantics: valid A2UI.",
        "relation": "A2uiValidator to Part/Event Converter"
      }
    ],
    "explanation": "This evidence supports SDK and Catalog Pipeline / node \"Part/Event Converter\", SDK and Catalog Pipeline / edge \"A2uiValidator -> Part/Event Converter\" in the architecture diagram. Evidence conclusion: ADK `PartConverter` can extract A2UI from tool responses, generic tool responses, or text tags and convert it to A2A parts.. The diagram explanation says: Converters package A2UI payloads for A2A clients.; Relationship semantics: valid A2UI.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "agent_sdks/python/src/a2ui/adk/a2a/part_converter.py:15-20",
        "path": "research/A2UI/agent_sdks/python/src/a2ui/adk/a2a/part_converter.py",
        "relativePath": "agent_sdks/python/src/a2ui/adk/a2a/part_converter.py",
        "start": 15,
        "end": 20
      },
      {
        "kind": "file",
        "display": "agent_sdks/python/src/a2ui/adk/a2a/part_converter.py:79-133",
        "path": "research/A2UI/agent_sdks/python/src/a2ui/adk/a2a/part_converter.py",
        "relativePath": "agent_sdks/python/src/a2ui/adk/a2a/part_converter.py",
        "start": 79,
        "end": 133
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-030",
    "conclusion": "`A2uiValidator` checks component integrity, topology, recursion, and path syntax in addition to JSON Schema.",
    "type": "source",
    "location": "`agent_sdks/python/src/a2ui/schema/validator.py:101-126`, `agent_sdks/python/src/a2ui/schema/validator.py:480-603`, `agent_sdks/python/src/a2ui/schema/validator.py:864-907`",
    "confidence": "high",
    "verified": "yes",
    "note": "Output safety net",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "sdk-catalog",
        "viewLabel": "SDK and Catalog Pipeline",
        "viewDescription": "The Python SDK uses catalog selection, prompt generation, parsing, repair, validation, and A2A conversion to keep generated UI within renderer capabilities.",
        "title": "A2uiValidator",
        "sub": "Schema, graph, path checks",
        "role": "SDK",
        "detail": "Validator checks schema and additional topology/path integrity.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "sdk-catalog",
        "viewLabel": "SDK and Catalog Pipeline",
        "viewDescription": "The Python SDK uses catalog selection, prompt generation, parsing, repair, validation, and A2A conversion to keep generated UI within renderer capabilities.",
        "title": "Parser / Fixer -> A2uiValidator",
        "sub": "payload",
        "role": "sdk",
        "status": "",
        "detail": "Relationship semantics: payload.",
        "relation": "Parser / Fixer to A2uiValidator"
      }
    ],
    "explanation": "This evidence supports SDK and Catalog Pipeline / node \"A2uiValidator\", SDK and Catalog Pipeline / edge \"Parser / Fixer -> A2uiValidator\" in the architecture diagram. Evidence conclusion: `A2uiValidator` checks component integrity, topology, recursion, and path syntax in addition to JSON Schema.. The diagram explanation says: Validator checks schema and additional topology/path integrity.; Relationship semantics: payload.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "agent_sdks/python/src/a2ui/schema/validator.py:101-126",
        "path": "research/A2UI/agent_sdks/python/src/a2ui/schema/validator.py",
        "relativePath": "agent_sdks/python/src/a2ui/schema/validator.py",
        "start": 101,
        "end": 126
      },
      {
        "kind": "file",
        "display": "agent_sdks/python/src/a2ui/schema/validator.py:480-603",
        "path": "research/A2UI/agent_sdks/python/src/a2ui/schema/validator.py",
        "relativePath": "agent_sdks/python/src/a2ui/schema/validator.py",
        "start": 480,
        "end": 603
      },
      {
        "kind": "file",
        "display": "agent_sdks/python/src/a2ui/schema/validator.py:864-907",
        "path": "research/A2UI/agent_sdks/python/src/a2ui/schema/validator.py",
        "relativePath": "agent_sdks/python/src/a2ui/schema/validator.py",
        "start": 864,
        "end": 907
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-031",
    "conclusion": "A2A helper wraps A2UI as a DataPart with metadata `mimeType: application/json+a2ui` and supports streaming parts.",
    "type": "source",
    "location": "`agent_sdks/python/src/a2ui/a2a/parts.py:28-64`, `agent_sdks/python/src/a2ui/a2a/parts.py:126-159`",
    "confidence": "high",
    "verified": "yes",
    "note": "Transport binding",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "overview",
        "viewLabel": "System Overview",
        "viewDescription": "A2UI turns agent-generated JSON UI intent into native UI through transport, message processing, catalog lookup, state models, binding, and renderer components.",
        "title": "Transport / A2A / AG UI",
        "sub": "Ordered message delivery and metadata",
        "role": "Binding",
        "detail": "A2UI can be carried as A2A DataPart with application/json+a2ui metadata.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "System Overview",
        "viewDescription": "A2UI turns agent-generated JSON UI intent into native UI through transport, message processing, catalog lookup, state models, binding, and renderer components.",
        "title": "A2UI v0.9 Messages -> Transport / A2A / AG UI",
        "sub": "carried by",
        "role": "transport",
        "status": "",
        "detail": "Relationship semantics: carried by.",
        "relation": "A2UI v0.9 Messages to Transport / A2A / AG UI"
      },
      {
        "kind": "edge",
        "viewId": "sdk-catalog",
        "viewLabel": "SDK and Catalog Pipeline",
        "viewDescription": "The Python SDK uses catalog selection, prompt generation, parsing, repair, validation, and A2A conversion to keep generated UI within renderer capabilities.",
        "title": "Part/Event Converter -> Renderer Catalog",
        "sub": "A2A DataPart",
        "role": "transport",
        "status": "",
        "detail": "Relationship semantics: A2A DataPart.",
        "relation": "Part/Event Converter to Renderer Catalog"
      }
    ],
    "explanation": "This evidence supports System Overview / node \"Transport / A2A / AG UI\", System Overview / edge \"A2UI v0.9 Messages -> Transport / A2A / AG UI\", SDK and Catalog Pipeline / edge \"Part/Event Converter -> Renderer Catalog\" in the architecture diagram. Evidence conclusion: A2A helper wraps A2UI as a DataPart with metadata `mimeType: application/json+a2ui` and supports streaming parts.. The diagram explanation says: A2UI can be carried as A2A DataPart with application/json+a2ui metadata.; Relationship semantics: carried by.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "agent_sdks/python/src/a2ui/a2a/parts.py:28-64",
        "path": "research/A2UI/agent_sdks/python/src/a2ui/a2a/parts.py",
        "relativePath": "agent_sdks/python/src/a2ui/a2a/parts.py",
        "start": 28,
        "end": 64
      },
      {
        "kind": "file",
        "display": "agent_sdks/python/src/a2ui/a2a/parts.py:126-159",
        "path": "research/A2UI/agent_sdks/python/src/a2ui/a2a/parts.py",
        "relativePath": "agent_sdks/python/src/a2ui/a2a/parts.py",
        "start": 126,
        "end": 159
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-032",
    "conclusion": "`assemble_catalog.py` can merge/flatten refs, combine components/functions/themes, and generate a standalone catalog.",
    "type": "source",
    "location": "`tools/build_catalog/assemble_catalog.py:65-124`, `tools/build_catalog/assemble_catalog.py:197-380`",
    "confidence": "high",
    "verified": "yes",
    "note": "Catalog toolchain",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "sdk-catalog",
        "viewLabel": "SDK and Catalog Pipeline",
        "viewDescription": "The Python SDK uses catalog selection, prompt generation, parsing, repair, validation, and A2A conversion to keep generated UI within renderer capabilities.",
        "title": "Catalog Assembler",
        "sub": "Standalone catalog.json",
        "role": "Tooling",
        "detail": "The assembly tool flattens refs and merges custom components, functions, and themes.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "sdk-catalog",
        "viewLabel": "SDK and Catalog Pipeline",
        "viewDescription": "The Python SDK uses catalog selection, prompt generation, parsing, repair, validation, and A2A conversion to keep generated UI within renderer capabilities.",
        "title": "Catalog Assembler -> A2uiSchemaManager",
        "sub": "catalog schema",
        "role": "contract",
        "status": "",
        "detail": "Relationship semantics: catalog schema.",
        "relation": "Catalog Assembler to A2uiSchemaManager"
      }
    ],
    "explanation": "This evidence supports SDK and Catalog Pipeline / node \"Catalog Assembler\", SDK and Catalog Pipeline / edge \"Catalog Assembler -> A2uiSchemaManager\" in the architecture diagram. Evidence conclusion: `assemble_catalog.py` can merge/flatten refs, combine components/functions/themes, and generate a standalone catalog.. The diagram explanation says: The assembly tool flattens refs and merges custom components, functions, and themes.; Relationship semantics: catalog schema.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "tools/build_catalog/assemble_catalog.py:65-124",
        "path": "research/A2UI/tools/build_catalog/assemble_catalog.py",
        "relativePath": "tools/build_catalog/assemble_catalog.py",
        "start": 65,
        "end": 124
      },
      {
        "kind": "file",
        "display": "tools/build_catalog/assemble_catalog.py:197-380",
        "path": "research/A2UI/tools/build_catalog/assemble_catalog.py",
        "relativePath": "tools/build_catalog/assemble_catalog.py",
        "start": 197,
        "end": 380
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-033",
    "conclusion": "Conformance and renderer tests cover parser, validator, catalog, schema manager, MessageProcessor, DataModel, GenericBinder, and React components.",
    "type": "tests",
    "location": "`agent_sdks/conformance/README.md:1-26`, `renderers/web_core/src/v0_9/processing/message-processor.test.ts:36-481`, `renderers/web_core/src/v0_9/state/data-model.test.ts:74-310`, `renderers/react/tests/v0_9/catalog-components.test.tsx:150-230`",
    "confidence": "high",
    "verified": "yes",
    "note": "Test support",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "agent_sdks/conformance/README.md:1-26",
        "path": "research/A2UI/agent_sdks/conformance/README.md",
        "relativePath": "agent_sdks/conformance/README.md",
        "start": 1,
        "end": 26
      },
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/processing/message-processor.test.ts:36-481",
        "path": "research/A2UI/renderers/web_core/src/v0_9/processing/message-processor.test.ts",
        "relativePath": "renderers/web_core/src/v0_9/processing/message-processor.test.ts",
        "start": 36,
        "end": 481
      },
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/state/data-model.test.ts:74-310",
        "path": "research/A2UI/renderers/web_core/src/v0_9/state/data-model.test.ts",
        "relativePath": "renderers/web_core/src/v0_9/state/data-model.test.ts",
        "start": 74,
        "end": 310
      },
      {
        "kind": "file",
        "display": "renderers/react/tests/v0_9/catalog-components.test.tsx:150-230",
        "path": "research/A2UI/renderers/react/tests/v0_9/catalog-components.test.tsx",
        "relativePath": "renderers/react/tests/v0_9/catalog-components.test.tsx",
        "start": 150,
        "end": 230
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-034",
    "conclusion": "React shell sample creates `MessageProcessor`, registers an action handler, processes mock/real streams, and renders `<A2uiSurface>`.",
    "type": "sample",
    "location": "`samples/client/react/shell/src/App.tsx:68-75`, `samples/client/react/shell/src/App.tsx:172-207`, `samples/client/react/shell/src/App.tsx:319-324`",
    "confidence": "high",
    "verified": "yes",
    "note": "Integration example",
    "graphRefs": [
      {
        "kind": "edge",
        "viewId": "overview",
        "viewLabel": "System Overview",
        "viewDescription": "A2UI turns agent-generated JSON UI intent into native UI through transport, message processing, catalog lookup, state models, binding, and renderer components.",
        "title": "Transport / A2A / AG UI -> MessageProcessor",
        "sub": "delivers",
        "role": "data",
        "status": "",
        "detail": "Relationship semantics: delivers.",
        "relation": "Transport / A2A / AG UI to MessageProcessor"
      },
      {
        "kind": "node",
        "viewId": "renderer-runtime",
        "viewLabel": "Renderer Runtime",
        "viewDescription": "The reusable implementation center is web_core; React is a comparatively thin adapter over surface state, component context, and GenericBinder.",
        "title": "React Shell",
        "sub": "Owns transport and surface list",
        "role": "Host",
        "detail": "The sample shell receives chunks, processes messages, and renders surfaces.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "renderer-runtime",
        "viewLabel": "Renderer Runtime",
        "viewDescription": "The reusable implementation center is web_core; React is a comparatively thin adapter over surface state, component context, and GenericBinder.",
        "title": "React Shell -> MessageProcessor",
        "sub": "processMessage",
        "role": "call",
        "status": "",
        "detail": "Relationship semantics: processMessage.",
        "relation": "React Shell to MessageProcessor"
      },
      {
        "kind": "node",
        "viewId": "actions-state",
        "viewLabel": "Actions and Data State",
        "viewDescription": "Input components update DataModel through setters; event actions resolve context at trigger time and travel back to the agent through host action handlers.",
        "title": "Action Handler",
        "sub": "Sends client action",
        "role": "Host",
        "detail": "The React shell action handler sends actions back to the agent endpoint.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "actions-state",
        "viewLabel": "Actions and Data State",
        "viewDescription": "Input components update DataModel through setters; event actions resolve context at trigger time and travel back to the agent through host action handlers.",
        "title": "Action Handler -> Agent",
        "sub": "POST action",
        "role": "transport",
        "status": "",
        "detail": "Relationship semantics: POST action.",
        "relation": "Action Handler to Agent"
      }
    ],
    "explanation": "This evidence supports System Overview / edge \"Transport / A2A / AG UI -> MessageProcessor\", Renderer Runtime / node \"React Shell\", Renderer Runtime / edge \"React Shell -> MessageProcessor\", Actions and Data State / node \"Action Handler\" in the architecture diagram. Evidence conclusion: React shell sample creates `MessageProcessor`, registers an action handler, processes mock/real streams, and renders `<A2uiSurface>`.. The diagram explanation says: Relationship semantics: delivers.; The sample shell receives chunks, processes messages, and renders surfaces.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "samples/client/react/shell/src/App.tsx:68-75",
        "path": "research/A2UI/samples/client/react/shell/src/App.tsx",
        "relativePath": "samples/client/react/shell/src/App.tsx",
        "start": 68,
        "end": 75
      },
      {
        "kind": "file",
        "display": "samples/client/react/shell/src/App.tsx:172-207",
        "path": "research/A2UI/samples/client/react/shell/src/App.tsx",
        "relativePath": "samples/client/react/shell/src/App.tsx",
        "start": 172,
        "end": 207
      },
      {
        "kind": "file",
        "display": "samples/client/react/shell/src/App.tsx:319-324",
        "path": "research/A2UI/samples/client/react/shell/src/App.tsx",
        "relativePath": "samples/client/react/shell/src/App.tsx",
        "start": 319,
        "end": 324
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-035",
    "conclusion": "A2UI's official site defines the project as a declarative UI protocol for agent-driven interfaces, emphasizing native rendering across web/mobile/desktop and no arbitrary code execution.",
    "type": "official web page",
    "location": "`https://a2ui.org/introduction/what-is-a2ui/`, retrieved 2026-05-28",
    "confidence": "high",
    "verified": "yes",
    "note": "Consistent with local README/intro docs",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "url",
        "display": "https://a2ui.org/introduction/what-is-a2ui/",
        "url": "https://a2ui.org/introduction/what-is-a2ui/"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-036",
    "conclusion": "The official v0.9 protocol page describes v0.9 as a JSON-based streaming UI protocol and defines four server-to-client message types.",
    "type": "official web page",
    "location": "`https://a2ui.org/specification/v0.9-a2ui/`, retrieved 2026-05-28",
    "confidence": "high",
    "verified": "yes",
    "note": "Consistent with local `specification/v0_9`",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "url",
        "display": "https://a2ui.org/specification/v0.9-a2ui/",
        "url": "https://a2ui.org/specification/v0.9-a2ui/"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-037",
    "conclusion": "The official Roadmap marks v0.9 current, feature complete, and supported; v0.10 and v1.0 are draft/target versions.",
    "type": "official web page",
    "location": "`https://a2ui.org/roadmap/`, retrieved 2026-05-28",
    "confidence": "high",
    "verified": "partly",
    "note": "Version-status wording",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "url",
        "display": "https://a2ui.org/roadmap/",
        "url": "https://a2ui.org/roadmap/"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-038",
    "conclusion": "Roadmap Q2 2026 milestones include publishing the v0.9 spec, web core/renderers supporting v0.9, the official React renderer, and Python Agents SDK.",
    "type": "official web page",
    "location": "`https://a2ui.org/roadmap/`, retrieved 2026-05-28",
    "confidence": "high",
    "verified": "yes",
    "note": "Matches local source structure",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "url",
        "display": "https://a2ui.org/roadmap/",
        "url": "https://a2ui.org/roadmap/"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-039",
    "conclusion": "Official Renderers Reference compares a renderer to a browser and requires support for adjacency list, data binding/lifecycle, incremental messages, server updates, and user actions.",
    "type": "official web page",
    "location": "`https://a2ui.org/reference/renderers/`, retrieved 2026-05-28",
    "confidence": "high",
    "verified": "yes",
    "note": "Consistent with `web_core`/React analysis",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "url",
        "display": "https://a2ui.org/reference/renderers/",
        "url": "https://a2ui.org/reference/renderers/"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-040",
    "conclusion": "Official Client Setup says web renderers share `@a2ui/web_core`, and custom catalog is the contract between agent and renderer.",
    "type": "official web page",
    "location": "`https://a2ui.org/guides/client-setup/`, retrieved 2026-05-28",
    "confidence": "high",
    "verified": "yes",
    "note": "Supports catalog/web_core conclusions",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "url",
        "display": "https://a2ui.org/guides/client-setup/",
        "url": "https://a2ui.org/guides/client-setup/"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-041",
    "conclusion": "Official Ecosystem Renderers page lists community renderers and notes that community renderers are maintained by their authors and require compatibility/maintenance checks.",
    "type": "official web page",
    "location": "`https://a2ui.org/ecosystem/renderers/`, retrieved 2026-05-28",
    "confidence": "medium",
    "verified": "not applicable",
    "note": "Ecosystem background, not implementation fact",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "url",
        "display": "https://a2ui.org/ecosystem/renderers/",
        "url": "https://a2ui.org/ecosystem/renderers/"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-042",
    "conclusion": "CrewAI docs describe A2UI as an A2A extension: valid messages are wrapped as `application/json+a2ui` DataParts, and clients inject catalog/instructions and track surface state.",
    "type": "integration docs",
    "location": "`https://docs.crewai.com/en/learn/a2ui`, retrieved 2026-05-28",
    "confidence": "medium",
    "verified": "partly",
    "note": "Matches local A2A parts/converter mechanism; CrewAI not run",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "url",
        "display": "https://docs.crewai.com/en/learn/a2ui",
        "url": "https://docs.crewai.com/en/learn/a2ui"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-043",
    "conclusion": "CopilotKit docs describe A2UI as a Google-led declarative Generative UI specification and distinguish dynamic schema from fixed schema.",
    "type": "integration docs",
    "location": "`https://docs.copilotkit.ai/google-adk/generative-ui/a2ui`, retrieved 2026-05-28",
    "confidence": "medium",
    "verified": "partly",
    "note": "Ecosystem/integration background",
    "graphRefs": [],
    "explanation": "The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.",
    "sourceRefs": [
      {
        "kind": "url",
        "display": "https://docs.copilotkit.ai/google-adk/generative-ui/a2ui",
        "url": "https://docs.copilotkit.ai/google-adk/generative-ui/a2ui"
      }
    ],
    "sourceLimitNote": ""
  }
];
