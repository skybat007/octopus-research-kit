window.EVIDENCE_META = {
  "title": "A2UI 证据解释",
  "description": "从架构图回到证据解释：展示架构语境、证据结论、源码/文档片段和原始索引位置。",
  "source": "../evidence-index.md",
  "projectRoot": "A2UI"
};

window.EVIDENCE_ITEMS = [
  {
    "id": "EVD-001",
    "conclusion": "A2UI 是面向 agent-generated UI 的开源协议/格式与 renderer 集合。",
    "type": "README",
    "location": "`README.md:1-6`",
    "confidence": "高",
    "verified": "",
    "note": "项目自述",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "README.md:1-6",
        "path": "README.md",
        "relativePath": "README.md",
        "start": 1,
        "end": 6,
        "snippet": "    1  # A2UI: Agent-to-User Interface\n    2  \n    3  A2UI is an open-source project, complete with a format\n    4  optimized for representing updatable agent-generated\n    5  UIs and an initial set of renderers, that allows agents\n    6  to generate or populate rich user interfaces.",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-002",
    "conclusion": "A2UI 的核心模式是 agent 发送声明式 JSON，客户端用原生组件渲染。",
    "type": "README",
    "location": "`README.md:25-31`",
    "confidence": "高",
    "verified": "",
    "note": "与架构主结论绑定",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "README.md:25-31",
        "path": "README.md",
        "relativePath": "README.md",
        "start": 25,
        "end": 31,
        "snippet": "   25  **A2UI** is an open standard and set of libraries that allows agents to\n   26  \"speak UI.\" Agents send a declarative JSON format describing the _intent_ of\n   27  the UI. The client application then renders this using its own native\n   28  component library (Flutter, Angular, Lit, etc.).\n   29  \n   30  This approach ensures that agent-generated UIs are\n   31  **safe like data, but expressive like code**.",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-003",
    "conclusion": "官方介绍把 A2UI 定义为 agent-driven interface 的声明式 UI protocol，强调 native rendering 和 no arbitrary code。",
    "type": "官方文档",
    "location": "`docs/introduction/what-is-a2ui.md:1-3`, `docs/introduction/what-is-a2ui.md:171-179`",
    "confidence": "高",
    "verified": "",
    "note": "安全定位",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "docs/introduction/what-is-a2ui.md:1-3",
        "path": "docs/introduction/what-is-a2ui.md",
        "relativePath": "docs/introduction/what-is-a2ui.md",
        "start": 1,
        "end": 3,
        "snippet": "    1  # What is A2UI?\n    2  \n    3  **A2UI (Agent to UI) is a declarative UI protocol for agent-driven interfaces.** AI agents generate rich, interactive UIs that render natively across platforms (web, mobile, desktop) without executing arbitrary code.",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "docs/introduction/what-is-a2ui.md:171-179",
        "path": "docs/introduction/what-is-a2ui.md",
        "relativePath": "docs/introduction/what-is-a2ui.md",
        "start": 171,
        "end": 179,
        "snippet": "  171  **1. Security:** Declarative data, not code. Agent requests components from client's trusted catalog. No code execution risk.\n  172  \n  173  **2. Native Feel:** No iframes. Client renders with its own UI framework. Inherits app styling, accessibility, performance.\n  174  \n  175  **3. Portability:** One agent response works everywhere. Same JSON renders on web (Lit/Angular/React), mobile (Flutter/SwiftUI/Jetpack Compose), desktop.\n  176  \n  177  ## Design Principles\n  178  \n  179  **1. LLM-Friendly:** Flat component list with ID references. Easy to generate incrementally, correct mistakes, stream.",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-004",
    "conclusion": "组件采用 flat list / adjacency-list 模型，用 ID refs 表达结构。",
    "type": "官方文档",
    "location": "`docs/concepts/components.md:1-18`",
    "confidence": "高",
    "verified": "",
    "note": "解释 LLM/增量友好性",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "docs/concepts/components.md:1-18",
        "path": "docs/concepts/components.md",
        "relativePath": "docs/concepts/components.md",
        "start": 1,
        "end": 18,
        "snippet": "    1  # Components & Structure\n    2  \n    3  A2UI uses an **adjacency list model** for component hierarchies. Instead of nested JSON trees, components are a flat list with ID references.\n    4  \n    5  ## Why Flat Lists?\n    6  \n    7  **Traditional nested approach:**\n    8  \n    9  - LLM must generate perfect nesting in one pass\n   10  - Hard to update deeply nested components\n   11  - Difficult to stream incrementally\n   12  \n   13  **A2UI adjacency list:**\n   14  \n   15  - Flat structure, easy for LLMs to generate.\n   16  - Send components incrementally.\n   17  - Update any component by ID.\n   18  - Clear separation of structure and data.",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-005",
    "conclusion": "v0.9 component 使用 `component` 字符串字段和 child ids。",
    "type": "官方文档",
    "location": "`docs/concepts/components.md:85-137`",
    "confidence": "高",
    "verified": "",
    "note": "v0.9 结构",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "docs/concepts/components.md:85-137",
        "path": "docs/concepts/components.md",
        "relativePath": "docs/concepts/components.md",
        "start": 85,
        "end": 137,
        "snippet": "   85  === \"v0.9\"\n   86  \n   87      ```json\n   88      {\n   89        \"version\": \"v0.9\",\n   90        \"updateComponents\": {\n   91          \"surfaceId\": \"main\",\n   92          \"components\": [\n   93            {\n   94              \"id\": \"root\",\n   95              \"component\": \"Column\",\n   96              \"children\": [\"greeting\", \"buttons\"]\n   97            },\n   98            {\n   99              \"id\": \"greeting\",\n  100              \"component\": \"Text\",\n  101              \"text\": \"Hello\"\n  102            },",
        "omitted": "已截取 85-102 行，原始范围到 137 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-006",
    "conclusion": "README 标注 public preview / evolving，提醒 API 与协议可能变化。",
    "type": "README",
    "location": "`README.md:12-17`",
    "confidence": "高",
    "verified": "",
    "note": "成熟度判断",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "README.md:12-17",
        "path": "README.md",
        "relativePath": "README.md",
        "start": 12,
        "end": 17,
        "snippet": "   12  ## ⚠️ Status: Early stage public preview\n   13  \n   14  > **Note:** A2UI is currently in **v0.8 (Public Preview)**. The specification and\n   15  > implementations are functional but are still evolving. We are opening the project to\n   16  > foster collaboration, gather feedback, and solicit contributions (e.g., on client renderers).\n   17  > Expect changes.",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-007",
    "conclusion": "v0.9 server-to-client 协议包含 `createSurface`、`updateComponents`、`updateDataModel`、`deleteSurface`。",
    "type": "规范",
    "location": "`specification/v0_9/docs/a2ui_protocol.md:14-25`",
    "confidence": "高",
    "verified": "",
    "note": "协议核心",
    "graphRefs": [
      {
        "kind": "节点",
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
    "explanation": "这条证据在架构图中支撑 System Overview / 节点「A2UI v0.9 Messages」。证据结论是：v0.9 server-to-client 协议包含 `createSurface`、`updateComponents`、`updateDataModel`、`deleteSurface`。。图中的具体解释是：The v0.9 protocol has four core server-to-client message kinds.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "specification/v0_9/docs/a2ui_protocol.md:14-25",
        "path": "specification/v0_9/docs/a2ui_protocol.md",
        "relativePath": "specification/v0_9/docs/a2ui_protocol.md",
        "start": 14,
        "end": 25,
        "snippet": "   14  **Status:** Draft\n   15  **Created:** Nov 20, 2025\n   16  **Last Updated:** Dec 3, 2025\n   17  \n   18  A Specification for a JSON-Based, Streaming UI Protocol\n   19  \n   20  ## Introduction\n   21  \n   22  The A2UI Protocol is designed for dynamically rendering user interfaces from a stream of JSON objects sent from a server (Agent). Its core philosophy emphasizes a clean separation of UI structure and application data, enabling progressive rendering as the client processes each message.\n   23  \n   24  Communication occurs via a stream of JSON objects. The client parses each object as a distinct message and incrementally builds or updates the UI. The server-to-client protocol defines four message types:\n   25  ",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-008",
    "conclusion": "v0.9 JSON Schema 用 `oneOf` 定义四类 server-to-client message。",
    "type": "JSON Schema",
    "location": "`specification/v0_9/json/server_to_client.json:1-12`",
    "confidence": "高",
    "verified": "",
    "note": "机器可验证",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "specification/v0_9/json/server_to_client.json:1-12",
        "path": "specification/v0_9/json/server_to_client.json",
        "relativePath": "specification/v0_9/json/server_to_client.json",
        "start": 1,
        "end": 12,
        "snippet": "    1  {\n    2    \"$schema\": \"https://json-schema.org/draft/2020-12/schema\",\n    3    \"$id\": \"https://a2ui.org/specification/v0_9/server_to_client.json\",\n    4    \"title\": \"A2UI Message Schema\",\n    5    \"description\": \"Describes a JSON payload for an A2UI (Agent to UI) message, which is used to dynamically construct and update user interfaces.\",\n    6    \"type\": \"object\",\n    7    \"oneOf\": [\n    8      {\"$ref\": \"#/$defs/CreateSurfaceMessage\"},\n    9      {\"$ref\": \"#/$defs/UpdateComponentsMessage\"},\n   10      {\"$ref\": \"#/$defs/UpdateDataModelMessage\"},\n   11      {\"$ref\": \"#/$defs/DeleteSurfaceMessage\"}\n   12    ],",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-009",
    "conclusion": "`updateComponents` schema 要求 `surfaceId` 和 component list，component 引用 catalog anyComponent。",
    "type": "JSON Schema",
    "location": "`specification/v0_9/json/server_to_client.json:48-83`",
    "confidence": "高",
    "verified": "",
    "note": "组件更新",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "specification/v0_9/json/server_to_client.json:48-83",
        "path": "specification/v0_9/json/server_to_client.json",
        "relativePath": "specification/v0_9/json/server_to_client.json",
        "start": 48,
        "end": 83,
        "snippet": "   48      \"UpdateComponentsMessage\": {\n   49        \"type\": \"object\",\n   50        \"properties\": {\n   51          \"version\": {\n   52            \"const\": \"v0.9\"\n   53          },\n   54          \"updateComponents\": {\n   55            \"type\": \"object\",\n   56            \"description\": \"Updates a surface with a new set of components. This message can be sent multiple times to update the component tree of an existing surface. One of the components in one of the components lists MUST have an 'id' of 'root' to serve as the root of the component tree. The createSurface message MUST have been previously sent with the 'catalogId' that is in this message.\",\n   57            \"properties\": {\n   58              \"surfaceId\": {\n   59                \"type\": \"string\",\n   60                \"description\": \"The unique identifier for the UI surface to be updated.\"\n   61              },\n   62  \n   63              \"components\": {\n   64                \"type\": \"array\",\n   65                \"description\": \"A list containing all UI components for the surface.\",",
        "omitted": "已截取 48-65 行，原始范围到 83 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-010",
    "conclusion": "v0.10 规范目录存在但标注 under development。",
    "type": "规范",
    "location": "`specification/v0_10/README.md:1-5`",
    "confidence": "高",
    "verified": "",
    "note": "版本演进",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "specification/v0_10/README.md:1-5",
        "path": "specification/v0_10/README.md",
        "relativePath": "specification/v0_10/README.md",
        "start": 1,
        "end": 5,
        "snippet": "    1  # Specification v0.10\n    2  \n    3  This directory contains the specification for version 0.10 of A2UI.\n    4  \n    5  **This specification is currently under development.**",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-011",
    "conclusion": "Data binding 基于 JSON Pointer，支持 UI structure 与 state 分离、动态值和双向输入。",
    "type": "官方文档",
    "location": "`docs/concepts/data-binding.md:1-18`, `docs/concepts/data-binding.md:173-181`",
    "confidence": "高",
    "verified": "",
    "note": "与 DataModel 实现一致",
    "graphRefs": [
      {
        "kind": "节点",
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
        "kind": "连线",
        "viewId": "actions-state",
        "viewLabel": "Actions and Data State",
        "viewDescription": "Input components update DataModel through setters; event actions resolve context at trigger time and travel back to the agent through host action handlers.",
        "title": "Input Component -> DataModel",
        "sub": "writes via setter",
        "role": "state",
        "status": "",
        "detail": "关系语义：writes via setter。",
        "relation": "Input Component 到 DataModel"
      }
    ],
    "explanation": "这条证据在架构图中支撑 Actions and Data State / 节点「Input Component」、Actions and Data State / 连线「Input Component -> DataModel」。证据结论是：Data binding 基于 JSON Pointer，支持 UI structure 与 state 分离、动态值和双向输入。。图中的具体解释是：Bound inputs can write back to the data model.；关系语义：writes via setter。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "docs/concepts/data-binding.md:1-18",
        "path": "docs/concepts/data-binding.md",
        "relativePath": "docs/concepts/data-binding.md",
        "start": 1,
        "end": 18,
        "snippet": "    1  # Data Binding\n    2  \n    3  Data binding connects UI components to application state using JSON Pointer paths ([RFC 6901](https://tools.ietf.org/html/rfc6901)). It allows A2UI to efficiently define layouts for large arrays of data and to show updated content without regenerating it from scratch.\n    4  \n    5  ## Structure vs. State\n    6  \n    7  A2UI separates:\n    8  \n    9  1. **UI Structure** (Components): What the interface looks like\n   10  2. **Application State** (Data Model): What data it displays\n   11  \n   12  This enables:\n   13  \n   14  - Reactive updates.\n   15  - Data-driven UIs.\n   16  - Reusable templates.\n   17  - Bidirectional binding.\n   18  ",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "docs/concepts/data-binding.md:173-181",
        "path": "docs/concepts/data-binding.md",
        "relativePath": "docs/concepts/data-binding.md",
        "start": 173,
        "end": 181,
        "snippet": "  173  ## Input Bindings\n  174  \n  175  Interactive components update the data model bidirectionally:\n  176  \n  177  | Component          | Example                                     | User Action      | Data Update                |\n  178  | ------------------ | ------------------------------------------- | ---------------- | -------------------------- |\n  179  | **TextField**      | `{\"text\": {\"path\": \"/form/name\"}}`          | Types \"Alice\"    | `/form/name` = `\"Alice\"`   |\n  180  | **CheckBox**       | `{\"value\": {\"path\": \"/form/agreed\"}}`       | Checks box       | `/form/agreed` = `true`    |\n  181  | **MultipleChoice** | `{\"selections\": {\"path\": \"/form/country\"}}` | Selects \"Canada\" | `/form/country` = `[\"ca\"]` |",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-012",
    "conclusion": "action 分为 local Function 与发给 agent 的 Event，checks 主要用于 UX 禁用而非数据完整性。",
    "type": "官方文档",
    "location": "`docs/concepts/actions.md:1-15`, `docs/concepts/actions.md:63-69`",
    "confidence": "高",
    "verified": "",
    "note": "action 语义",
    "graphRefs": [
      {
        "kind": "节点",
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
    "explanation": "这条证据在架构图中支撑 Actions and Data State / 节点「Agent」。证据结论是：action 分为 local Function 与发给 agent 的 Event，checks 主要用于 UX 禁用而非数据完整性。。图中的具体解释是：Events send selected context back to the agent.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "docs/concepts/actions.md:1-15",
        "path": "docs/concepts/actions.md",
        "relativePath": "docs/concepts/actions.md",
        "start": 1,
        "end": 15,
        "snippet": "    1  # Handling User Actions\n    2  \n    3  This guide explains how A2UI handles user interactions. Components use the `action` property to trigger either local **Functions** (executed on the renderer) or **Events** (dispatched to the agent). In addition, **Data Model Synchronization** ensures the agent always has access to the full UI state, enabling seamless multi-modal interactions like voice commands. This design enables highly responsive interfaces while maintaining a secure, restricted environment.\n    4  \n    5  ## Action Architecture\n    6  \n    7  Actions allow UI components to trigger behavior defined in the [`Action`](../../specification/v0_9/json/common_types.json#L271-L313) schema in `common_types.json`. Actions can trigger:\n    8  \n    9  1.  **Events**: Dispatched to the Agent for processing (executed on Agent, e.g., clicking \"Submit\").\n   10  2.  **Functions**: Executed entirely on the renderer using [`FunctionCall`](../../specification/v0_9/json/common_types.json#L200-L242) (executed on Renderer, e.g., opening a URL).\n   11  \n   12  ### 1. Functions (Local)\n   13  \n   14  Functions execute immediate behavior on the renderer without a network round-trip. The agent is not informed of local function calls. They use the `functionCall` keyword.\n   15  ",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "docs/concepts/actions.md:63-69",
        "path": "docs/concepts/actions.md",
        "relativePath": "docs/concepts/actions.md",
        "start": 63,
        "end": 69,
        "snippet": "   63  ### Basic Catalog Function Validation (Checks)\n   64  \n   65  The basic catalog defines a limited set of checks that can be performed on the renderer. Interactive components can define a list of `checks` (using the [`Checkable`](../../specification/v0_9/json/common_types.json#L258-L270) schema in `common_types.json`). For a `Button`, if any check fails, the button is **automatically disabled** on the renderer.\n   66  \n   67  - **UX Focus**: Validation checks are designed to manage **UI State (User Experience)** by preventing invalid interactions before they happen. They are not a replacement for **Data Integrity** checks, which must still be performed on the agent.\n   68  \n   69  This allows the UI to enforce requirements (like a non-empty field) before the user even tries to submit.",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-013",
    "conclusion": "Catalog 定义 components/functions/themes，所有 A2UI JSON 应按选定 catalog 校验；生产可定义自有 catalog。",
    "type": "官方文档",
    "location": "`docs/concepts/catalogs.md:5-9`, `docs/concepts/catalogs.md:70-85`",
    "confidence": "高",
    "verified": "",
    "note": "扩展主入口",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "docs/concepts/catalogs.md:5-9",
        "path": "docs/concepts/catalogs.md",
        "relativePath": "docs/concepts/catalogs.md",
        "start": 5,
        "end": 9,
        "snippet": "    5  This guide defines the A2UI Catalog architecture and provides a roadmap for implementation. It explains the structure of catalog schemas, outlines strategies for using the pre-built \"Basic Catalog” versus defining your own application-specific catalog, and details the technical protocols for catalog negotiation, versioning, and runtime validation.\n    6  \n    7  ## Catalog Schema\n    8  \n    9  A catalog schema is a [JSON Schema file](../../specification/v0_9/json/client_capabilities.json#L62C5-L95C6) outlining the components, functions, and themes that agents can use to define A2UI surfaces using server-driven UI. All A2UI JSON sent from the agent is validated against the chosen catalog.",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "docs/concepts/catalogs.md:70-85",
        "path": "docs/concepts/catalogs.md",
        "relativePath": "docs/concepts/catalogs.md",
        "start": 70,
        "end": 85,
        "snippet": "   70  ### Defining Your Own Catalog\n   71  \n   72  While the Basic Catalog is useful for starting out, most production applications will define their own catalog to reflect their specific design system.\n   73  \n   74  By defining your own catalog, you restrict the agent to using exactly the components and visual language that exist in your application, rather than generic inputs or buttons. This catalog can be built entirely from scratch, or it can import definitions from the Basic Catalog to save time (e.g., using the Basic text definitions while defining your own unique Card component).\n   75  \n   76  For simplicity we recommend building catalogs that directly reflect a client's design system rather than trying to map the Basic Catalog to it through an adapter. Since A2UI is designed for GenUI, we expect the LLM can interpret different catalogs for different clients.\n   77  \n   78  [See an example Rizzcharts catalog](../../samples/agent/adk/rizzcharts/catalog_schemas/0.9/rizzcharts_catalog_definition.json)\n   79  \n   80  ### Recommendations\n   81  \n   82  | Usecase                             | Recommendation                                                                 | Effort                         |\n   83  | :---------------------------------- | :----------------------------------------------------------------------------- | :----------------------------- |\n   84  | Adding A2UI to a mature frontend    | Define a catalog that mirrors your existing design system.                     | Medium                         |\n   85  | Adding A2UI to a new/greenfield app | Start with Basic Catalog, then evolve into your own catalog as the app evolves | Low (assuming renderer exists) |",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-014",
    "conclusion": "Renderer 负责解析 adjacency list、映射 widgets、data binding/lifecycle、增量消息和用户 action。",
    "type": "官方文档",
    "location": "`docs/reference/renderers.md:3-9`, `docs/reference/renderers.md:70-78`",
    "confidence": "高",
    "verified": "",
    "note": "Renderer 职责",
    "graphRefs": [
      {
        "kind": "节点",
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
    "explanation": "这条证据在架构图中支撑 System Overview / 节点「Native UI」。证据结论是：Renderer 负责解析 adjacency list、映射 widgets、data binding/lifecycle、增量消息和用户 action。。图中的具体解释是：Renderer maps A2UI components to native widgets and handles user interaction.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "docs/reference/renderers.md:3-9",
        "path": "docs/reference/renderers.md",
        "relativePath": "docs/reference/renderers.md",
        "start": 3,
        "end": 9,
        "snippet": "    3  Renderers convert A2UI JSON messages into native UI components for different platforms.\n    4  \n    5  The [agents](agents.md) are responsible for generating the A2UI messages,\n    6  and the [transports](../concepts/transports.md) are responsible for delivering the messages to the client.\n    7  The client renderer library must buffer and handle A2UI messages, implement the A2UI lifecycle, render widgets, and route user actions back to the agent.\n    8  \n    9  Let's use the web as an analogy. The A2UI protocol is like HTML. It provides a language and the semantics of the UI model. The agent is like the server that serves HTML to the client. The renderer is like a browser. It talks to the agent, interprets the A2UI protocol, and renders the UI. Just like there are multiple browser engines for HTML, there are multiple different renderers for A2UI.",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "docs/reference/renderers.md:70-78",
        "path": "docs/reference/renderers.md",
        "relativePath": "docs/reference/renderers.md",
        "start": 70,
        "end": 78,
        "snippet": "   70  A compliant renderer must meet the following key requirements:\n   71  \n   72  - Parse A2UI JSON messages, specifically the adjacency list format.\n   73  - Map A2UI components to native widgets.\n   74  - Handle data binding, lifecycle events.\n   75  - Process a sequence of incremental A2UI messages to build and update the UI.\n   76  - Support server-initiated updates.\n   77  - Support user actions.\n   78  ",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-015",
    "conclusion": "React renderer 导出 `A2uiSurface`、adapter 和 Basic Catalog。",
    "type": "源码",
    "location": "`renderers/react/src/v0_9/index.ts:17-21`",
    "confidence": "高",
    "verified": "",
    "note": "React 入口",
    "graphRefs": [
      {
        "kind": "节点",
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
        "kind": "连线",
        "viewId": "renderer-runtime",
        "viewLabel": "Renderer Runtime",
        "viewDescription": "The reusable implementation center is web_core; React is a comparatively thin adapter over surface state, component context, and GenericBinder.",
        "title": "GenericBinder -> A2uiSurface",
        "sub": "renders props",
        "role": "render",
        "status": "",
        "detail": "关系语义：renders props。",
        "relation": "GenericBinder 到 A2uiSurface"
      }
    ],
    "explanation": "这条证据在架构图中支撑 Renderer Runtime / 节点「A2uiSurface」、Renderer Runtime / 连线「GenericBinder -> A2uiSurface」。证据结论是：React renderer 导出 `A2uiSurface`、adapter 和 Basic Catalog。。图中的具体解释是：A2uiSurface renders root and child components through catalog implementations.；关系语义：renders props。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "renderers/react/src/v0_9/index.ts:17-21",
        "path": "renderers/react/src/v0_9/index.ts",
        "relativePath": "renderers/react/src/v0_9/index.ts",
        "start": 17,
        "end": 21,
        "snippet": "   17  export * from './A2uiSurface';\n   18  export * from './adapter';\n   19  \n   20  // Export basic catalog components directly for 3P developers\n   21  export * from './catalog/basic';",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-016",
    "conclusion": "Basic Catalog v0.9 提供 Text/Image/Icon/Row/Column/List/Card/Button/TextField 等 18 个基础组件和 14 个函数。",
    "type": "JSON Schema",
    "location": "`specification/v0_9/catalogs/basic/catalog.json:1-80`",
    "confidence": "中",
    "verified": "",
    "note": "完整列表由 JSON schema 统计",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "specification/v0_9/catalogs/basic/catalog.json:1-80",
        "path": "specification/v0_9/catalogs/basic/catalog.json",
        "relativePath": "specification/v0_9/catalogs/basic/catalog.json",
        "start": 1,
        "end": 80,
        "snippet": "    1  {\n    2    \"$schema\": \"https://json-schema.org/draft/2020-12/schema\",\n    3    \"$id\": \"https://a2ui.org/specification/v0_9/catalogs/basic/catalog.json\",\n    4    \"title\": \"A2UI Basic Catalog\",\n    5    \"description\": \"Unified catalog of basic A2UI components and functions.\",\n    6    \"catalogId\": \"https://a2ui.org/specification/v0_9/catalogs/basic/catalog.json\",\n    7    \"components\": {\n    8      \"Text\": {\n    9        \"type\": \"object\",\n   10        \"allOf\": [\n   11          {\n   12            \"$ref\": \"https://a2ui.org/specification/v0_9/common_types.json#/$defs/ComponentCommon\"\n   13          },\n   14          {\n   15            \"$ref\": \"#/$defs/CatalogComponentCommon\"\n   16          },\n   17          {\n   18            \"type\": \"object\",",
        "omitted": "已截取 1-18 行，原始范围到 80 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-017",
    "conclusion": "`MessageProcessor` 持有 `SurfaceGroupModel`，处理 create/update/delete/data model 消息并暴露 capabilities。",
    "type": "源码",
    "location": "`renderers/web_core/src/v0_9/processing/message-processor.ts:45-85`, `renderers/web_core/src/v0_9/processing/message-processor.ts:229-335`",
    "confidence": "高",
    "verified": "",
    "note": "客户端状态入口",
    "graphRefs": [
      {
        "kind": "节点",
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
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "System Overview",
        "viewDescription": "A2UI turns agent-generated JSON UI intent into native UI through transport, message processing, catalog lookup, state models, binding, and renderer components.",
        "title": "MessageProcessor -> SurfaceModel",
        "sub": "mutates",
        "role": "state",
        "status": "",
        "detail": "关系语义：mutates。",
        "relation": "MessageProcessor 到 SurfaceModel"
      },
      {
        "kind": "节点",
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
        "kind": "节点",
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
        "kind": "节点",
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
        "kind": "连线",
        "viewId": "renderer-runtime",
        "viewLabel": "Renderer Runtime",
        "viewDescription": "The reusable implementation center is web_core; React is a comparatively thin adapter over surface state, component context, and GenericBinder.",
        "title": "MessageProcessor -> SurfaceGroupModel",
        "sub": "owns",
        "role": "state",
        "status": "",
        "detail": "关系语义：owns。",
        "relation": "MessageProcessor 到 SurfaceGroupModel"
      },
      {
        "kind": "连线",
        "viewId": "renderer-runtime",
        "viewLabel": "Renderer Runtime",
        "viewDescription": "The reusable implementation center is web_core; React is a comparatively thin adapter over surface state, component context, and GenericBinder.",
        "title": "SurfaceModel -> ComponentModel",
        "sub": "stores",
        "role": "state",
        "status": "",
        "detail": "关系语义：stores。",
        "relation": "SurfaceModel 到 ComponentModel"
      }
    ],
    "explanation": "这条证据在架构图中支撑 System Overview / 节点「MessageProcessor」、System Overview / 连线「MessageProcessor -> SurfaceModel」、Renderer Runtime / 节点「MessageProcessor」、Renderer Runtime / 节点「SurfaceGroupModel」。证据结论是：`MessageProcessor` 持有 `SurfaceGroupModel`，处理 create/update/delete/data model 消息并暴露 capabilities。。图中的具体解释是：MessageProcessor is the main client-side state mutation entrypoint.；关系语义：mutates。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/processing/message-processor.ts:45-85",
        "path": "renderers/web_core/src/v0_9/processing/message-processor.ts",
        "relativePath": "renderers/web_core/src/v0_9/processing/message-processor.ts",
        "start": 45,
        "end": 85,
        "snippet": "   45   * The central processor for A2UI messages.\n   46   * @template T The concrete type of the ComponentApi.\n   47   */\n   48  export class MessageProcessor<T extends ComponentApi> {\n   49    readonly model: SurfaceGroupModel<T>;\n   50  \n   51    /**\n   52     * Creates a new message processor.\n   53     *\n   54     * @param catalogs A list of available catalogs.\n   55     * @param actionHandler A global handler for actions from all surfaces.\n   56     */\n   57    constructor(\n   58      private catalogs: Catalog<T>[],\n   59      private actionHandler?: ActionListener,\n   60    ) {\n   61      this.model = new SurfaceGroupModel<T>();\n   62      if (this.actionHandler) {",
        "omitted": "已截取 45-62 行，原始范围到 85 行。"
      },
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/processing/message-processor.ts:229-335",
        "path": "renderers/web_core/src/v0_9/processing/message-processor.ts",
        "relativePath": "renderers/web_core/src/v0_9/processing/message-processor.ts",
        "start": 229,
        "end": 335,
        "snippet": "  229    private processMessage(message: A2uiMessage): void {\n  230      const updateTypes = [\n  231        'createSurface',\n  232        'updateComponents',\n  233        'updateDataModel',\n  234        'deleteSurface',\n  235      ].filter(k => k in message);\n  236  \n  237      if (updateTypes.length > 1) {\n  238        throw new A2uiValidationError(\n  239          `Message contains multiple update types: ${updateTypes.join(', ')}.`,\n  240        );\n  241      }\n  242  \n  243      if ('createSurface' in message) {\n  244        this.processCreateSurfaceMessage(message);\n  245        return;\n  246      }",
        "omitted": "已截取 229-246 行，原始范围到 335 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-018",
    "conclusion": "`SurfaceModel` 聚合 data model、components、catalog、theme、sendDataModel，并统一 dispatch action/error。",
    "type": "源码",
    "location": "`renderers/web_core/src/v0_9/state/surface-model.ts:26-94`",
    "confidence": "高",
    "verified": "",
    "note": "surface runtime",
    "graphRefs": [
      {
        "kind": "节点",
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
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "System Overview",
        "viewDescription": "A2UI turns agent-generated JSON UI intent into native UI through transport, message processing, catalog lookup, state models, binding, and renderer components.",
        "title": "SurfaceModel -> Catalog",
        "sub": "uses",
        "role": "contract",
        "status": "",
        "detail": "关系语义：uses。",
        "relation": "SurfaceModel 到 Catalog"
      },
      {
        "kind": "节点",
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
        "kind": "连线",
        "viewId": "renderer-runtime",
        "viewLabel": "Renderer Runtime",
        "viewDescription": "The reusable implementation center is web_core; React is a comparatively thin adapter over surface state, component context, and GenericBinder.",
        "title": "SurfaceGroupModel -> SurfaceModel",
        "sub": "contains",
        "role": "state",
        "status": "",
        "detail": "关系语义：contains。",
        "relation": "SurfaceGroupModel 到 SurfaceModel"
      },
      {
        "kind": "节点",
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
        "kind": "连线",
        "viewId": "actions-state",
        "viewLabel": "Actions and Data State",
        "viewDescription": "Input components update DataModel through setters; event actions resolve context at trigger time and travel back to the agent through host action handlers.",
        "title": "SurfaceModel -> Action Handler",
        "sub": "onAction",
        "role": "event",
        "status": "",
        "detail": "关系语义：onAction。",
        "relation": "SurfaceModel 到 Action Handler"
      }
    ],
    "explanation": "这条证据在架构图中支撑 System Overview / 节点「SurfaceModel」、System Overview / 连线「SurfaceModel -> Catalog」、Renderer Runtime / 节点「SurfaceModel」、Renderer Runtime / 连线「SurfaceGroupModel -> SurfaceModel」。证据结论是：`SurfaceModel` 聚合 data model、components、catalog、theme、sendDataModel，并统一 dispatch action/error。。图中的具体解释是：SurfaceModel holds the runtime state of one A2UI surface.；关系语义：uses。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/state/surface-model.ts:26-94",
        "path": "renderers/web_core/src/v0_9/state/surface-model.ts",
        "relativePath": "renderers/web_core/src/v0_9/state/surface-model.ts",
        "start": 26,
        "end": 94,
        "snippet": "   26  /**\n   27   * The state model for a single UI surface.\n   28   *\n   29   * A surface is the root container for a set of components and their associated data.\n   30   * It coordinates data binding, component state, and action dispatching.\n   31   *\n   32   * @template T The concrete type of the ComponentApi from the catalog.\n   33   */\n   34  export class SurfaceModel<T extends ComponentApi = ComponentApi> {\n   35    /** The data model for this surface. */\n   36    readonly dataModel: DataModel;\n   37    /** The collection of component models for this surface. */\n   38    readonly componentsModel: SurfaceComponentsModel;\n   39  \n   40    private readonly _onAction = new EventEmitter<A2uiClientAction>();\n   41    private readonly _onError = new EventEmitter<any>();\n   42  \n   43    /** Fires whenever an action is dispatched from this surface. */",
        "omitted": "已截取 26-43 行，原始范围到 94 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-019",
    "conclusion": "`DataModel` 是 JSON Pointer 可寻址、可订阅的 observable data store，支持 root replace、嵌套创建、删除和路径通知。",
    "type": "源码",
    "location": "`renderers/web_core/src/v0_9/state/data-model.ts:35-39`, `renderers/web_core/src/v0_9/state/data-model.ts:78-170`, `renderers/web_core/src/v0_9/state/data-model.ts:183-280`",
    "confidence": "高",
    "verified": "",
    "note": "binding 基础",
    "graphRefs": [
      {
        "kind": "节点",
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
        "kind": "连线",
        "viewId": "renderer-runtime",
        "viewLabel": "Renderer Runtime",
        "viewDescription": "The reusable implementation center is web_core; React is a comparatively thin adapter over surface state, component context, and GenericBinder.",
        "title": "SurfaceModel -> DataModel",
        "sub": "stores",
        "role": "state",
        "status": "",
        "detail": "关系语义：stores。",
        "relation": "SurfaceModel 到 DataModel"
      },
      {
        "kind": "节点",
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
    "explanation": "这条证据在架构图中支撑 Renderer Runtime / 节点「DataModel」、Renderer Runtime / 连线「SurfaceModel -> DataModel」、Actions and Data State / 节点「DataModel」。证据结论是：`DataModel` 是 JSON Pointer 可寻址、可订阅的 observable data store，支持 root replace、嵌套创建、删除和路径通知。。图中的具体解释是：DataModel provides path get/set and subscriptions.；关系语义：stores。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/state/data-model.ts:35-39",
        "path": "renderers/web_core/src/v0_9/state/data-model.ts",
        "relativePath": "renderers/web_core/src/v0_9/state/data-model.ts",
        "start": 35,
        "end": 39,
        "snippet": "   35  /**\n   36   * A standalone, observable data store representing the client-side state.\n   37   * It handles JSON Pointer path resolution and subscription management.\n   38   */\n   39  export class DataModel {",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/state/data-model.ts:78-170",
        "path": "renderers/web_core/src/v0_9/state/data-model.ts",
        "relativePath": "renderers/web_core/src/v0_9/state/data-model.ts",
        "start": 78,
        "end": 170,
        "snippet": "   78    set(path: string, value: any): this {\n   79      if (path === null || path === undefined) {\n   80        throw new A2uiDataError('Path cannot be null or undefined.');\n   81      }\n   82  \n   83      if (path === '/' || path === '') {\n   84        this.data = value;\n   85        this.notifyAllSignals();\n   86        return this;\n   87      }\n   88  \n   89      const segments = this.parsePath(path);\n   90      const lastSegment = segments.pop()!;\n   91  \n   92      if (!this.data) {\n   93        this.data = {};\n   94      }\n   95      let current: any = this.data;",
        "omitted": "已截取 78-95 行，原始范围到 170 行。"
      },
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/state/data-model.ts:183-280",
        "path": "renderers/web_core/src/v0_9/state/data-model.ts",
        "relativePath": "renderers/web_core/src/v0_9/state/data-model.ts",
        "start": 183,
        "end": 280,
        "snippet": "  183    subscribe<T>(path: string, onChange: (value: T | undefined) => void): DataSubscription<T> {\n  184      const sig = this.getSignal<T>(path);\n  185      let isSync = true;\n  186      let currentValue = sig.peek();\n  187  \n  188      const dispose = effect(() => {\n  189        const val = sig.value;\n  190        currentValue = val;\n  191        if (!isSync) {\n  192          onChange(val);\n  193        }\n  194      });\n  195      isSync = false;\n  196  \n  197      this.subscriptions.add(dispose);\n  198  \n  199      return {\n  200        get value() {",
        "omitted": "已截取 183-200 行，原始范围到 280 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-020",
    "conclusion": "`DataContext` 解析相对/绝对路径、dynamic values、function expressions 和 action context。",
    "type": "源码",
    "location": "`renderers/web_core/src/v0_9/rendering/data-context.ts:28-35`, `renderers/web_core/src/v0_9/rendering/data-context.ts:88-164`, `renderers/web_core/src/v0_9/rendering/data-context.ts:273-367`",
    "confidence": "高",
    "verified": "",
    "note": "动态绑定",
    "graphRefs": [
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "System Overview",
        "viewDescription": "A2UI turns agent-generated JSON UI intent into native UI through transport, message processing, catalog lookup, state models, binding, and renderer components.",
        "title": "SurfaceModel -> GenericBinder",
        "sub": "provides context",
        "role": "binding",
        "status": "",
        "detail": "关系语义：provides context。",
        "relation": "SurfaceModel 到 GenericBinder"
      },
      {
        "kind": "节点",
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
        "kind": "连线",
        "viewId": "renderer-runtime",
        "viewLabel": "Renderer Runtime",
        "viewDescription": "The reusable implementation center is web_core; React is a comparatively thin adapter over surface state, component context, and GenericBinder.",
        "title": "ComponentModel -> Component/Data Context",
        "sub": "loads",
        "role": "binding",
        "status": "",
        "detail": "关系语义：loads。",
        "relation": "ComponentModel 到 Component/Data Context"
      },
      {
        "kind": "连线",
        "viewId": "renderer-runtime",
        "viewLabel": "Renderer Runtime",
        "viewDescription": "The reusable implementation center is web_core; React is a comparatively thin adapter over surface state, component context, and GenericBinder.",
        "title": "DataModel -> Component/Data Context",
        "sub": "scopes",
        "role": "binding",
        "status": "",
        "detail": "关系语义：scopes。",
        "relation": "DataModel 到 Component/Data Context"
      },
      {
        "kind": "节点",
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
        "kind": "连线",
        "viewId": "actions-state",
        "viewLabel": "Actions and Data State",
        "viewDescription": "Input components update DataModel through setters; event actions resolve context at trigger time and travel back to the agent through host action handlers.",
        "title": "DataModel -> DataContext",
        "sub": "read and subscribe",
        "role": "state",
        "status": "",
        "detail": "关系语义：read and subscribe。",
        "relation": "DataModel 到 DataContext"
      }
    ],
    "explanation": "这条证据在架构图中支撑 System Overview / 连线「SurfaceModel -> GenericBinder」、Renderer Runtime / 节点「Component/Data Context」、Renderer Runtime / 连线「ComponentModel -> Component/Data Context」、Renderer Runtime / 连线「DataModel -> Component/Data Context」。证据结论是：`DataContext` 解析相对/绝对路径、dynamic values、function expressions 和 action context。。图中的具体解释是：关系语义：provides context。；DataContext resolves relative paths, dynamic values, and action context.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/rendering/data-context.ts:28-35",
        "path": "renderers/web_core/src/v0_9/rendering/data-context.ts",
        "relativePath": "renderers/web_core/src/v0_9/rendering/data-context.ts",
        "start": 28,
        "end": 35,
        "snippet": "   28  /**\n   29   * A contextual view of the main DataModel, serving as the unified interface for resolving\n   30   * DynamicValues (literals, data paths, function calls) within a specific scope.\n   31   *\n   32   * Components use `DataContext` instead of interacting with the `DataModel` directly.\n   33   * It automatically handles resolving relative paths against the component's current scope\n   34   * and provides tools for evaluating complex, reactive expressions.\n   35   */",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/rendering/data-context.ts:88-164",
        "path": "renderers/web_core/src/v0_9/rendering/data-context.ts",
        "relativePath": "renderers/web_core/src/v0_9/rendering/data-context.ts",
        "start": 88,
        "end": 164,
        "snippet": "   88    resolveDynamicValue<V>(value: DynamicValue): V {\n   89      // 1. Literal check (excluding arrays and objects)\n   90      if (value === null || typeof value !== 'object' || Array.isArray(value)) {\n   91        return value as V;\n   92      }\n   93  \n   94      // 2. Path Check: { path: \"...\" }\n   95      if ('path' in value) {\n   96        const absolutePath = this.resolvePath((value as DataBinding).path);\n   97        return this.dataModel.get(absolutePath);\n   98      }\n   99  \n  100      // 3. Function Call: { call: \"...\", args: ... }\n  101      if ('call' in value) {\n  102        const call = value as FunctionCall;\n  103        const args: Record<string, any> = {};\n  104  \n  105        for (const [key, argVal] of Object.entries(call.args)) {",
        "omitted": "已截取 88-105 行，原始范围到 164 行。"
      },
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/rendering/data-context.ts:273-367",
        "path": "renderers/web_core/src/v0_9/rendering/data-context.ts",
        "relativePath": "renderers/web_core/src/v0_9/rendering/data-context.ts",
        "start": 273,
        "end": 367,
        "snippet": "  273    resolveAction(action: Action): any {\n  274      if ('event' in action) {\n  275        const resolvedContext: Record<string, any> = {};\n  276        if (action.event.context) {\n  277          for (const [key, value] of Object.entries(action.event.context)) {\n  278            resolvedContext[key] = this.resolveDynamicValue(value);\n  279          }\n  280        }\n  281        return {\n  282          event: {\n  283            ...action.event,\n  284            context: resolvedContext,\n  285          },\n  286        };\n  287      }\n  288      if ('functionCall' in action) {\n  289        return this.resolveDynamicValue(action.functionCall);\n  290      }",
        "omitted": "已截取 273-290 行，原始范围到 367 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-021",
    "conclusion": "`GenericBinder` 根据 schema 识别 dynamic/action/structural/checkable/static/object/array，并生成 renderer props。",
    "type": "源码",
    "location": "`renderers/web_core/src/v0_9/rendering/generic-binder.ts:23-92`, `renderers/web_core/src/v0_9/rendering/generic-binder.ts:160-328`",
    "confidence": "高",
    "verified": "",
    "note": "renderer 复用核心",
    "graphRefs": [
      {
        "kind": "节点",
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
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "System Overview",
        "viewDescription": "A2UI turns agent-generated JSON UI intent into native UI through transport, message processing, catalog lookup, state models, binding, and renderer components.",
        "title": "GenericBinder -> Native UI",
        "sub": "produces props",
        "role": "render",
        "status": "",
        "detail": "关系语义：produces props。",
        "relation": "GenericBinder 到 Native UI"
      },
      {
        "kind": "节点",
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
        "kind": "连线",
        "viewId": "renderer-runtime",
        "viewLabel": "Renderer Runtime",
        "viewDescription": "The reusable implementation center is web_core; React is a comparatively thin adapter over surface state, component context, and GenericBinder.",
        "title": "Component/Data Context -> GenericBinder",
        "sub": "feeds",
        "role": "binding",
        "status": "",
        "detail": "关系语义：feeds。",
        "relation": "Component/Data Context 到 GenericBinder"
      },
      {
        "kind": "节点",
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
        "kind": "连线",
        "viewId": "actions-state",
        "viewLabel": "Actions and Data State",
        "viewDescription": "Input components update DataModel through setters; event actions resolve context at trigger time and travel back to the agent through host action handlers.",
        "title": "DataContext -> GenericBinder",
        "sub": "resolve",
        "role": "binding",
        "status": "",
        "detail": "关系语义：resolve。",
        "relation": "DataContext 到 GenericBinder"
      }
    ],
    "explanation": "这条证据在架构图中支撑 System Overview / 节点「GenericBinder」、System Overview / 连线「GenericBinder -> Native UI」、Renderer Runtime / 节点「GenericBinder」、Renderer Runtime / 连线「Component/Data Context -> GenericBinder」。证据结论是：`GenericBinder` 根据 schema 识别 dynamic/action/structural/checkable/static/object/array，并生成 renderer props。。图中的具体解释是：GenericBinder turns component schema and state into renderer props.；关系语义：produces props。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/rendering/generic-binder.ts:23-92",
        "path": "renderers/web_core/src/v0_9/rendering/generic-binder.ts",
        "relativePath": "renderers/web_core/src/v0_9/rendering/generic-binder.ts",
        "start": 23,
        "end": 92,
        "snippet": "   23  /**\n   24   * Represents the intended runtime behavior of a property parsed from its Zod schema.\n   25   *\n   26   * - `DYNAMIC`: The property can be bound to the `DataModel` (e.g. `DynamicString`).\n   27   *    The Binder will automatically subscribe to data changes and emit primitive values.\n   28   * - `ACTION`: The property represents a user interaction (e.g. `Action`).\n   29   *    The Binder will resolve deep payload bindings and output a ready-to-call `() => void` closure.\n   30   * - `STRUCTURAL`: The property dictates the rendering of child components (e.g. `ChildList`).\n   31   *    The Binder outputs lists of objects containing `{ id, basePath }` for structural layout.\n   32   * - `CHECKABLE`: Special property for handling validation arrays (e.g. `checks`).\n   33   *    The Binder will reactively evaluate the rules and inject `isValid` and `validationErrors` booleans into the parent object.\n   34   * - `STATIC`: A primitive value that requires no reactive subscription or resolution.\n   35   * - `OBJECT` / `ARRAY`: Recursive traversal nodes for complex nested schemas.\n   36   */\n   37  export type BehaviorNode =\n   38    | {type: 'DYNAMIC'}\n   39    | {type: 'ACTION'}\n   40    | {type: 'STRUCTURAL'}",
        "omitted": "已截取 23-40 行，原始范围到 92 行。"
      },
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/rendering/generic-binder.ts:160-328",
        "path": "renderers/web_core/src/v0_9/rendering/generic-binder.ts",
        "relativePath": "renderers/web_core/src/v0_9/rendering/generic-binder.ts",
        "start": 160,
        "end": 328,
        "snippet": "  160  /**\n  161   * The Generic Binder is a framework-agnostic engine that transforms raw A2UI JSON payload\n  162   * configurations into a single, cohesive reactive stream of strongly-typed `ResolvedProps`.\n  163   *\n  164   * It solves the problem of manual state management: developers do not need to write\n  165   * boilerplate code to subscribe to data paths, evaluate logic expressions, or tear down\n  166   * listeners when components unmount.\n  167   *\n  168   * Usage Flow:\n  169   * 1. Takes a `ComponentContext` (the raw JSON config) and a `Zod Schema` (the API definition).\n  170   * 2. Uses `scrapeSchemaBehavior` to analyze the schema.\n  171   * 3. Deeply iterates over the raw JSON properties, applying rules based on the scraped behavior.\n  172   * 4. Subscribes to the `DataContext` for all `DYNAMIC` and `CHECKABLE` paths.\n  173   * 5. Bundles the final resolved primitives, structural arrays, and executable Actions into `currentProps`.\n  174   * 6. Exposes a `subscribe()` interface for framework-specific adapters (React, Angular) to listen to state changes.\n  175   */\n  176  export class GenericBinder<T> {\n  177    private dataListeners: (() => void)[] = [];",
        "omitted": "已截取 160-177 行，原始范围到 328 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-022",
    "conclusion": "action 字段在 binder 中变成闭包，触发时解析 context 并 dispatch。",
    "type": "源码",
    "location": "`renderers/web_core/src/v0_9/rendering/generic-binder.ts:243-255`",
    "confidence": "高",
    "verified": "",
    "note": "交互流",
    "graphRefs": [
      {
        "kind": "连线",
        "viewId": "actions-state",
        "viewLabel": "Actions and Data State",
        "viewDescription": "Input components update DataModel through setters; event actions resolve context at trigger time and travel back to the agent through host action handlers.",
        "title": "Button -> SurfaceModel",
        "sub": "dispatch",
        "role": "event",
        "status": "",
        "detail": "关系语义：dispatch。",
        "relation": "Button 到 SurfaceModel"
      }
    ],
    "explanation": "这条证据在架构图中支撑 Actions and Data State / 连线「Button -> SurfaceModel」。证据结论是：action 字段在 binder 中变成闭包，触发时解析 context 并 dispatch。。图中的具体解释是：关系语义：dispatch。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/rendering/generic-binder.ts:243-255",
        "path": "renderers/web_core/src/v0_9/rendering/generic-binder.ts",
        "relativePath": "renderers/web_core/src/v0_9/rendering/generic-binder.ts",
        "start": 243,
        "end": 255,
        "snippet": "  243        case 'ACTION': {\n  244          return () => {\n  245            const resolveDeepSync = (val: any): any => {\n  246              if (typeof val !== 'object' || val === null) return val;\n  247              if ('path' in val || 'call' in val)\n  248                return this.context.dataContext.resolveDynamicValue(val);\n  249              if (Array.isArray(val)) return val.map(resolveDeepSync);\n  250              const res: any = {};\n  251              for (const [k, v] of Object.entries(val)) res[k] = resolveDeepSync(v);\n  252              return res;\n  253            };\n  254            this.context.dispatchAction(resolveDeepSync(value));\n  255          };",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-023",
    "conclusion": "React Button 实现只接收 bound props，点击调用 `props.action`，`isValid === false` 时 disabled。",
    "type": "源码",
    "location": "`renderers/react/src/v0_9/catalog/basic/components/Button.tsx:22-35`",
    "confidence": "高",
    "verified": "",
    "note": "adapter 变薄",
    "graphRefs": [
      {
        "kind": "节点",
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
        "kind": "连线",
        "viewId": "actions-state",
        "viewLabel": "Actions and Data State",
        "viewDescription": "Input components update DataModel through setters; event actions resolve context at trigger time and travel back to the agent through host action handlers.",
        "title": "GenericBinder -> Button",
        "sub": "action props",
        "role": "render",
        "status": "",
        "detail": "关系语义：action props。",
        "relation": "GenericBinder 到 Button"
      }
    ],
    "explanation": "这条证据在架构图中支撑 Actions and Data State / 节点「Button」、Actions and Data State / 连线「GenericBinder -> Button」。证据结论是：React Button 实现只接收 bound props，点击调用 `props.action`，`isValid === false` 时 disabled。。图中的具体解释是：React Button dispatches action and is disabled when validation fails.；关系语义：action props。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "renderers/react/src/v0_9/catalog/basic/components/Button.tsx:22-35",
        "path": "renderers/react/src/v0_9/catalog/basic/components/Button.tsx",
        "relativePath": "renderers/react/src/v0_9/catalog/basic/components/Button.tsx",
        "start": 22,
        "end": 35,
        "snippet": "   22  export const Button = createComponentImplementation(ButtonApi, ({props, buildChild}) => {\n   23    useBasicCatalogStyles();\n   24  \n   25    const classes = [styles.button];\n   26    if (props.variant === 'primary') {\n   27      classes.push(styles.primary);\n   28    } else if (props.variant === 'borderless') {\n   29      classes.push(styles.borderless);\n   30    }\n   31  \n   32    return (\n   33      <button className={classes.join(' ')} onClick={props.action} disabled={props.isValid === false}>\n   34        {props.child ? buildChild(props.child) : null}\n   35      </button>",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-024",
    "conclusion": "`Catalog` 运行时包含组件、函数、theme schema，并用 Zod 校验函数参数后执行。",
    "type": "源码",
    "location": "`renderers/web_core/src/v0_9/catalog/types.ts:45-82`, `renderers/web_core/src/v0_9/catalog/types.ts:117-185`",
    "confidence": "高",
    "verified": "",
    "note": "catalog runtime",
    "graphRefs": [
      {
        "kind": "节点",
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
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "System Overview",
        "viewDescription": "A2UI turns agent-generated JSON UI intent into native UI through transport, message processing, catalog lookup, state models, binding, and renderer components.",
        "title": "Catalog -> GenericBinder",
        "sub": "describes fields",
        "role": "contract",
        "status": "",
        "detail": "关系语义：describes fields。",
        "relation": "Catalog 到 GenericBinder"
      },
      {
        "kind": "连线",
        "viewId": "sdk-catalog",
        "viewLabel": "SDK and Catalog Pipeline",
        "viewDescription": "The Python SDK uses catalog selection, prompt generation, parsing, repair, validation, and A2A conversion to keep generated UI within renderer capabilities.",
        "title": "Catalog Assembler -> Renderer Catalog",
        "sub": "same contract",
        "role": "contract",
        "status": "",
        "detail": "关系语义：same contract。",
        "relation": "Catalog Assembler 到 Renderer Catalog"
      }
    ],
    "explanation": "这条证据在架构图中支撑 System Overview / 节点「Catalog」、System Overview / 连线「Catalog -> GenericBinder」、SDK and Catalog Pipeline / 连线「Catalog Assembler -> Renderer Catalog」。证据结论是：`Catalog` 运行时包含组件、函数、theme schema，并用 Zod 校验函数参数后执行。。图中的具体解释是：Catalog is both schema contract and runtime implementation registry.；关系语义：describes fields。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/catalog/types.ts:45-82",
        "path": "renderers/web_core/src/v0_9/catalog/types.ts",
        "relativePath": "renderers/web_core/src/v0_9/catalog/types.ts",
        "start": 45,
        "end": 82,
        "snippet": "   45  /**\n   46   * A definition of a UI function's API.\n   47   */\n   48  export interface FunctionApi {\n   49    readonly name: string;\n   50    readonly returnType: A2uiReturnType;\n   51    readonly schema: z.ZodTypeAny;\n   52  }\n   53  \n   54  /**\n   55   * A function implementation that can be registered with the evaluator or basic catalog.\n   56   */\n   57  export interface FunctionImplementation extends FunctionApi {\n   58    execute(\n   59      args: Record<string, any>,\n   60      context: DataContext,\n   61      abortSignal?: AbortSignal,\n   62    ): unknown | Signal<unknown>;",
        "omitted": "已截取 45-62 行，原始范围到 82 行。"
      },
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/catalog/types.ts:117-185",
        "path": "renderers/web_core/src/v0_9/catalog/types.ts",
        "relativePath": "renderers/web_core/src/v0_9/catalog/types.ts",
        "start": 117,
        "end": 185,
        "snippet": "  117  export class Catalog<T extends ComponentApi> {\n  118    readonly id: string;\n  119  \n  120    /**\n  121     * A map of available components.\n  122     * This is readonly to encourage immutable extension patterns.\n  123     */\n  124    readonly components: ReadonlyMap<string, T>;\n  125  \n  126    /**\n  127     * Map of functions provided by this catalog.\n  128     */\n  129    readonly functions: ReadonlyMap<string, FunctionImplementation>;\n  130  \n  131    /**\n  132     * The schema for theme parameters used by this catalog.\n  133     */\n  134    readonly themeSchema?: z.ZodObject<any>;",
        "omitted": "已截取 117-134 行，原始范围到 185 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-025",
    "conclusion": "React Basic Catalog 将 Basic component implementations 与 `BASIC_FUNCTIONS` 注册为 catalog。",
    "type": "源码",
    "location": "`renderers/react/src/v0_9/catalog/basic/index.ts:42-67`",
    "confidence": "高",
    "verified": "",
    "note": "React catalog",
    "graphRefs": [
      {
        "kind": "节点",
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
    "explanation": "这条证据在架构图中支撑 SDK and Catalog Pipeline / 节点「Renderer Catalog」。证据结论是：React Basic Catalog 将 Basic component implementations 与 `BASIC_FUNCTIONS` 注册为 catalog。。图中的具体解释是：React Basic Catalog registers component implementations and functions.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "renderers/react/src/v0_9/catalog/basic/index.ts:42-67",
        "path": "renderers/react/src/v0_9/catalog/basic/index.ts",
        "relativePath": "renderers/react/src/v0_9/catalog/basic/index.ts",
        "start": 42,
        "end": 67,
        "snippet": "   42  const basicComponents: ReactComponentImplementation[] = [\n   43    Text,\n   44    Image,\n   45    Icon,\n   46    Video,\n   47    AudioPlayer,\n   48    Row,\n   49    Column,\n   50    List,\n   51    Card,\n   52    Tabs,\n   53    Divider,\n   54    Modal,\n   55    Button,\n   56    TextField,\n   57    CheckBox,\n   58    ChoicePicker,\n   59    Slider,",
        "omitted": "已截取 42-59 行，原始范围到 67 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-026",
    "conclusion": "Renderer capabilities 支持 `supportedCatalogIds` 和可选 inline catalogs；`getClientDataModel` 只返回 `sendDataModel` surface。",
    "type": "源码",
    "location": "`renderers/web_core/src/v0_9/processing/message-processor.ts:73-201`",
    "confidence": "高",
    "verified": "",
    "note": "能力协商与同步",
    "graphRefs": [
      {
        "kind": "节点",
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
        "kind": "连线",
        "viewId": "sdk-catalog",
        "viewLabel": "SDK and Catalog Pipeline",
        "viewDescription": "The Python SDK uses catalog selection, prompt generation, parsing, repair, validation, and A2A conversion to keep generated UI within renderer capabilities.",
        "title": "Client Capabilities -> A2uiSchemaManager",
        "sub": "selects catalog",
        "role": "contract",
        "status": "",
        "detail": "关系语义：selects catalog。",
        "relation": "Client Capabilities 到 A2uiSchemaManager"
      }
    ],
    "explanation": "这条证据在架构图中支撑 SDK and Catalog Pipeline / 节点「Client Capabilities」、SDK and Catalog Pipeline / 连线「Client Capabilities -> A2uiSchemaManager」。证据结论是：Renderer capabilities 支持 `supportedCatalogIds` 和可选 inline catalogs；`getClientDataModel` 只返回 `sendDataModel` surface。。图中的具体解释是：Renderer can expose supported catalog ids and inline catalog schemas.；关系语义：selects catalog。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/processing/message-processor.ts:73-201",
        "path": "renderers/web_core/src/v0_9/processing/message-processor.ts",
        "relativePath": "renderers/web_core/src/v0_9/processing/message-processor.ts",
        "start": 73,
        "end": 201,
        "snippet": "   73    getClientCapabilities(options?: CapabilitiesOptions): A2uiClientCapabilities {\n   74      const capabilities: A2uiClientCapabilities = {\n   75        'v0.9': {\n   76          supportedCatalogIds: this.catalogs.map(c => c.id),\n   77        },\n   78      };\n   79  \n   80      if (options?.includeInlineCatalogs) {\n   81        capabilities['v0.9'].inlineCatalogs = this.catalogs.map(c => this.generateInlineCatalog(c));\n   82      }\n   83  \n   84      return capabilities;\n   85    }\n   86  \n   87    private generateInlineCatalog(catalog: Catalog<T>): InlineCatalog {\n   88      const components: Record<string, any> = {};\n   89  \n   90      for (const [name, api] of catalog.components.entries()) {",
        "omitted": "已截取 73-90 行，原始范围到 201 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-027",
    "conclusion": "Python parser 从 `<a2ui-json>` tags 提取 payload，并处理 markdown code block。",
    "type": "源码",
    "location": "`agent_sdks/python/src/a2ui/parser/parser.py:22-88`",
    "confidence": "高",
    "verified": "",
    "note": "文本输出兼容",
    "graphRefs": [
      {
        "kind": "节点",
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
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "System Overview",
        "viewDescription": "A2UI turns agent-generated JSON UI intent into native UI through transport, message processing, catalog lookup, state models, binding, and renderer components.",
        "title": "Agent / SDK -> A2UI v0.9 Messages",
        "sub": "emits",
        "role": "data",
        "status": "",
        "detail": "关系语义：emits。",
        "relation": "Agent / SDK 到 A2UI v0.9 Messages"
      },
      {
        "kind": "节点",
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
        "kind": "连线",
        "viewId": "sdk-catalog",
        "viewLabel": "SDK and Catalog Pipeline",
        "viewDescription": "The Python SDK uses catalog selection, prompt generation, parsing, repair, validation, and A2A conversion to keep generated UI within renderer capabilities.",
        "title": "SendA2uiToClientToolset -> Parser / Fixer",
        "sub": "tool output",
        "role": "sdk",
        "status": "",
        "detail": "关系语义：tool output。",
        "relation": "SendA2uiToClientToolset 到 Parser / Fixer"
      }
    ],
    "explanation": "这条证据在架构图中支撑 System Overview / 节点「Agent / SDK」、System Overview / 连线「Agent / SDK -> A2UI v0.9 Messages」、SDK and Catalog Pipeline / 节点「Parser / Fixer」、SDK and Catalog Pipeline / 连线「SendA2uiToClientToolset -> Parser / Fixer」。证据结论是：Python parser 从 `<a2ui-json>` tags 提取 payload，并处理 markdown code block。。图中的具体解释是：Python SDK supplies parser, schema manager, validator, toolset, and A2A conversion.；关系语义：emits。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "agent_sdks/python/src/a2ui/parser/parser.py:22-88",
        "path": "agent_sdks/python/src/a2ui/parser/parser.py",
        "relativePath": "agent_sdks/python/src/a2ui/parser/parser.py",
        "start": 22,
        "end": 88,
        "snippet": "   22  _A2UI_BLOCK_PATTERN = re.compile(\n   23      f\"{re.escape(A2UI_OPEN_TAG)}(.*?){re.escape(A2UI_CLOSE_TAG)}\", re.DOTALL\n   24  )\n   25  \n   26  \n   27  def has_a2ui_parts(content: str) -> bool:\n   28    \"\"\"Checks if the content has A2UI parts.\"\"\"\n   29    return A2UI_OPEN_TAG in content and A2UI_CLOSE_TAG in content\n   30  \n   31  \n   32  def _sanitize_json_string(json_string: str) -> str:\n   33    \"\"\"Sanitizes the JSON string by removing markdown code blocks.\"\"\"\n   34    json_string = json_string.strip()\n   35    if json_string.startswith(\"```json\"):\n   36      json_string = json_string[len(\"```json\") :]\n   37    elif json_string.startswith(\"```\"):\n   38      json_string = json_string[len(\"```\") :]\n   39    if json_string.endswith(\"```\"):",
        "omitted": "已截取 22-39 行，原始范围到 88 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-028",
    "conclusion": "`A2uiSchemaManager` 根据 inline/supported/default catalog 选择 active catalog，并生成 system prompt。",
    "type": "源码",
    "location": "`agent_sdks/python/src/a2ui/schema/manager.py:101-236`",
    "confidence": "高",
    "verified": "",
    "note": "生成链路",
    "graphRefs": [
      {
        "kind": "节点",
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
        "kind": "节点",
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
        "kind": "连线",
        "viewId": "sdk-catalog",
        "viewLabel": "SDK and Catalog Pipeline",
        "viewDescription": "The Python SDK uses catalog selection, prompt generation, parsing, repair, validation, and A2A conversion to keep generated UI within renderer capabilities.",
        "title": "A2uiSchemaManager -> SendA2uiToClientToolset",
        "sub": "prompt/schema",
        "role": "sdk",
        "status": "",
        "detail": "关系语义：prompt/schema。",
        "relation": "A2uiSchemaManager 到 SendA2uiToClientToolset"
      }
    ],
    "explanation": "这条证据在架构图中支撑 SDK and Catalog Pipeline / 节点「A2uiSchemaManager」、SDK and Catalog Pipeline / 节点「SendA2uiToClientToolset」、SDK and Catalog Pipeline / 连线「A2uiSchemaManager -> SendA2uiToClientToolset」。证据结论是：`A2uiSchemaManager` 根据 inline/supported/default catalog 选择 active catalog，并生成 system prompt。。图中的具体解释是：SchemaManager selects active catalog and renders LLM instructions.；Toolset injects schema/examples and validates tool output.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "agent_sdks/python/src/a2ui/schema/manager.py:101-236",
        "path": "agent_sdks/python/src/a2ui/schema/manager.py",
        "relativePath": "agent_sdks/python/src/a2ui/schema/manager.py",
        "start": 101,
        "end": 236,
        "snippet": "  101    def _select_catalog(\n  102        self, client_ui_capabilities: Optional[dict[str, Any]] = None\n  103    ) -> A2uiCatalog:\n  104      \"\"\"Selects the component catalog for the prompt based on client capabilities.\n  105  \n  106      Selection priority:\n  107      1. If inline catalogs are provided (and accepted by the agent), their\n  108         components are merged on top of a base catalog. The base is determined\n  109         by supportedCatalogIds (if also provided) or the agent's default catalog.\n  110      2. If only supportedCatalogIds is provided, pick the first mutually\n  111         supported catalog.\n  112      3. Fallback to the first agent-supported catalog (usually the bundled catalog).\n  113  \n  114      Args:\n  115        client_ui_capabilities: A dictionary of client UI capabilities, containing\n  116          inline catalogs and client-supported catalog IDs.\n  117  \n  118      Returns:",
        "omitted": "已截取 101-118 行，原始范围到 236 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-029",
    "conclusion": "ADK `PartConverter` 可从 tool response、generic tool response 或 text tags 中抽取 A2UI 并转为 A2A parts。",
    "type": "源码",
    "location": "`agent_sdks/python/src/a2ui/adk/a2a/part_converter.py:15-20`, `agent_sdks/python/src/a2ui/adk/a2a/part_converter.py:79-133`",
    "confidence": "高",
    "verified": "",
    "note": "A2A bridge",
    "graphRefs": [
      {
        "kind": "节点",
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
        "kind": "连线",
        "viewId": "sdk-catalog",
        "viewLabel": "SDK and Catalog Pipeline",
        "viewDescription": "The Python SDK uses catalog selection, prompt generation, parsing, repair, validation, and A2A conversion to keep generated UI within renderer capabilities.",
        "title": "A2uiValidator -> Part/Event Converter",
        "sub": "valid A2UI",
        "role": "sdk",
        "status": "",
        "detail": "关系语义：valid A2UI。",
        "relation": "A2uiValidator 到 Part/Event Converter"
      }
    ],
    "explanation": "这条证据在架构图中支撑 SDK and Catalog Pipeline / 节点「Part/Event Converter」、SDK and Catalog Pipeline / 连线「A2uiValidator -> Part/Event Converter」。证据结论是：ADK `PartConverter` 可从 tool response、generic tool response 或 text tags 中抽取 A2UI 并转为 A2A parts。。图中的具体解释是：Converters package A2UI payloads for A2A clients.；关系语义：valid A2UI。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "agent_sdks/python/src/a2ui/adk/a2a/part_converter.py:15-20",
        "path": "agent_sdks/python/src/a2ui/adk/a2a/part_converter.py",
        "relativePath": "agent_sdks/python/src/a2ui/adk/a2a/part_converter.py",
        "start": 15,
        "end": 20,
        "snippet": "   15  \"\"\"Module for the A2UI Part Converter.\n   16  \n   17  This module provides the `A2uiPartConverter` which acts as a catalog-aware GenAI to A2A\n   18  part converter. It handles both tool-based A2UI (via the `send_a2ui_json_to_client` tool response)\n   19  and text-based A2UI (extracted and healed via A2UI custom tags), validating the structures\n   20  against the active A2UI catalog schema.",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "agent_sdks/python/src/a2ui/adk/a2a/part_converter.py:79-133",
        "path": "agent_sdks/python/src/a2ui/adk/a2a/part_converter.py",
        "relativePath": "agent_sdks/python/src/a2ui/adk/a2a/part_converter.py",
        "start": 79,
        "end": 133,
        "snippet": "   79      # 1. Handle Tool Responses (FunctionResponse)\n   80      if function_response := part.function_response:\n   81        is_send_a2ui_json_to_client_response = (\n   82            function_response.name == constants.A2UI_TOOL_NAME\n   83        )\n   84  \n   85        if is_send_a2ui_json_to_client_response or self._bypass_tool_check:\n   86          response_dict = function_response.response or {}\n   87  \n   88          if constants.A2UI_TOOL_ERROR_KEY in response_dict:\n   89            logger.warning(\n   90                f\"A2UI tool call failed: {response_dict[constants.A2UI_TOOL_ERROR_KEY]}\"\n   91            )\n   92            return []\n   93  \n   94          if (\n   95              isinstance(response_dict, dict)\n   96              and constants.A2UI_VALIDATED_JSON_KEY in response_dict",
        "omitted": "已截取 79-96 行，原始范围到 133 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-030",
    "conclusion": "`A2uiValidator` 除 JSON Schema 外，还校验 component integrity、topology、recursion 和 path syntax。",
    "type": "源码",
    "location": "`agent_sdks/python/src/a2ui/schema/validator.py:101-126`, `agent_sdks/python/src/a2ui/schema/validator.py:480-603`, `agent_sdks/python/src/a2ui/schema/validator.py:864-907`",
    "confidence": "高",
    "verified": "",
    "note": "输出安全网",
    "graphRefs": [
      {
        "kind": "节点",
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
        "kind": "连线",
        "viewId": "sdk-catalog",
        "viewLabel": "SDK and Catalog Pipeline",
        "viewDescription": "The Python SDK uses catalog selection, prompt generation, parsing, repair, validation, and A2A conversion to keep generated UI within renderer capabilities.",
        "title": "Parser / Fixer -> A2uiValidator",
        "sub": "payload",
        "role": "sdk",
        "status": "",
        "detail": "关系语义：payload。",
        "relation": "Parser / Fixer 到 A2uiValidator"
      }
    ],
    "explanation": "这条证据在架构图中支撑 SDK and Catalog Pipeline / 节点「A2uiValidator」、SDK and Catalog Pipeline / 连线「Parser / Fixer -> A2uiValidator」。证据结论是：`A2uiValidator` 除 JSON Schema 外，还校验 component integrity、topology、recursion 和 path syntax。。图中的具体解释是：Validator checks schema and additional topology/path integrity.；关系语义：payload。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "agent_sdks/python/src/a2ui/schema/validator.py:101-126",
        "path": "agent_sdks/python/src/a2ui/schema/validator.py",
        "relativePath": "agent_sdks/python/src/a2ui/schema/validator.py",
        "start": 101,
        "end": 126,
        "snippet": "  101  class A2uiValidator:\n  102    \"\"\"Validates the A2UI JSON payload against the provided schema and checks for integrity.\n  103  \n  104    Checks performed:\n  105    1.  **JSON Schema Validation**: Ensures payload adheres to the A2UI schema.\n  106    2.  **Component Integrity**:\n  107        -   All component IDs are unique.\n  108        -   A 'root' component exists.\n  109        -   All unique component references point to valid IDs.\n  110    3.  **Topology**:\n  111        -   No circular references (including self-references).\n  112        -   No orphaned components (all components must be reachable from 'root').\n  113    4.  **Recursion Limits**:\n  114        -   Global recursion depth limit (50).\n  115        -   FunctionCall recursion depth limit (5).\n  116    5.  **Path Syntax**:\n  117        -   Validates JSON Pointer syntax for data paths.\n  118  ",
        "omitted": "已截取 101-118 行，原始范围到 126 行。"
      },
      {
        "kind": "file",
        "display": "agent_sdks/python/src/a2ui/schema/validator.py:480-603",
        "path": "agent_sdks/python/src/a2ui/schema/validator.py",
        "relativePath": "agent_sdks/python/src/a2ui/schema/validator.py",
        "start": 480,
        "end": 603,
        "snippet": "  480  def _validate_component_integrity(\n  481      root_id: Optional[str],\n  482      components: List[Dict[str, Any]],\n  483      ref_fields_map: Dict[str, tuple[Set[str], Set[str]]],\n  484      skip_root_check: bool = False,\n  485  ) -> None:\n  486    \"\"\"\n  487    Validates that:\n  488    1. All component IDs are unique.\n  489    2. A 'root' component exists.\n  490    3. All references point to existing IDs.\n  491    \"\"\"\n  492    ids: Set[str] = set()\n  493  \n  494    # 1. Collect IDs and check for duplicates\n  495    for comp in components:\n  496      comp_id = comp.get(ID)\n  497      if comp_id is None:",
        "omitted": "已截取 480-497 行，原始范围到 603 行。"
      },
      {
        "kind": "file",
        "display": "agent_sdks/python/src/a2ui/schema/validator.py:864-907",
        "path": "agent_sdks/python/src/a2ui/schema/validator.py",
        "relativePath": "agent_sdks/python/src/a2ui/schema/validator.py",
        "start": 864,
        "end": 907,
        "snippet": "  864  def _validate_recursion_and_paths(data: Any) -> None:\n  865    \"\"\"\n  866    Validates:\n  867    1. Global recursion depth limit (50).\n  868    2. FunctionCall recursion depth limit (5).\n  869    3. Path syntax for DataBindings/DataModelUpdates.\n  870    \"\"\"\n  871  \n  872    def traverse(item: Any, global_depth: int, func_depth: int):\n  873      if global_depth > MAX_GLOBAL_DEPTH:\n  874        raise ValueError(f\"Global recursion limit exceeded: Depth > {MAX_GLOBAL_DEPTH}\")\n  875  \n  876      if isinstance(item, list):\n  877        for x in item:\n  878          traverse(x, global_depth + 1, func_depth)\n  879        return\n  880  \n  881      if isinstance(item, dict):",
        "omitted": "已截取 864-881 行，原始范围到 907 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-031",
    "conclusion": "A2A helper 将 A2UI 包装为 metadata `mimeType: application/json+a2ui` 的 DataPart，并支持 streaming parts。",
    "type": "源码",
    "location": "`agent_sdks/python/src/a2ui/a2a/parts.py:28-64`, `agent_sdks/python/src/a2ui/a2a/parts.py:126-159`",
    "confidence": "高",
    "verified": "",
    "note": "transport binding",
    "graphRefs": [
      {
        "kind": "节点",
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
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "System Overview",
        "viewDescription": "A2UI turns agent-generated JSON UI intent into native UI through transport, message processing, catalog lookup, state models, binding, and renderer components.",
        "title": "A2UI v0.9 Messages -> Transport / A2A / AG UI",
        "sub": "carried by",
        "role": "transport",
        "status": "",
        "detail": "关系语义：carried by。",
        "relation": "A2UI v0.9 Messages 到 Transport / A2A / AG UI"
      },
      {
        "kind": "连线",
        "viewId": "sdk-catalog",
        "viewLabel": "SDK and Catalog Pipeline",
        "viewDescription": "The Python SDK uses catalog selection, prompt generation, parsing, repair, validation, and A2A conversion to keep generated UI within renderer capabilities.",
        "title": "Part/Event Converter -> Renderer Catalog",
        "sub": "A2A DataPart",
        "role": "transport",
        "status": "",
        "detail": "关系语义：A2A DataPart。",
        "relation": "Part/Event Converter 到 Renderer Catalog"
      }
    ],
    "explanation": "这条证据在架构图中支撑 System Overview / 节点「Transport / A2A / AG UI」、System Overview / 连线「A2UI v0.9 Messages -> Transport / A2A / AG UI」、SDK and Catalog Pipeline / 连线「Part/Event Converter -> Renderer Catalog」。证据结论是：A2A helper 将 A2UI 包装为 metadata `mimeType: application/json+a2ui` 的 DataPart，并支持 streaming parts。。图中的具体解释是：A2UI can be carried as A2A DataPart with application/json+a2ui metadata.；关系语义：carried by。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "agent_sdks/python/src/a2ui/a2a/parts.py:28-64",
        "path": "agent_sdks/python/src/a2ui/a2a/parts.py",
        "relativePath": "agent_sdks/python/src/a2ui/a2a/parts.py",
        "start": 28,
        "end": 64,
        "snippet": "   28  MIME_TYPE_KEY = \"mimeType\"\n   29  A2UI_MIME_TYPE = \"application/json+a2ui\"\n   30  \n   31  \n   32  def create_a2ui_part(a2ui_data: dict[str, Any]) -> Part:\n   33    \"\"\"Creates an A2A Part containing A2UI data.\n   34  \n   35    Args:\n   36        a2ui_data: The A2UI data dictionary.\n   37  \n   38    Returns:\n   39        An A2A Part with a DataPart containing the A2UI data.\n   40    \"\"\"\n   41    return Part(\n   42        root=DataPart(\n   43            data=a2ui_data,\n   44            metadata={\n   45                MIME_TYPE_KEY: A2UI_MIME_TYPE,",
        "omitted": "已截取 28-45 行，原始范围到 64 行。"
      },
      {
        "kind": "file",
        "display": "agent_sdks/python/src/a2ui/a2a/parts.py:126-159",
        "path": "agent_sdks/python/src/a2ui/a2a/parts.py",
        "relativePath": "agent_sdks/python/src/a2ui/a2a/parts.py",
        "start": 126,
        "end": 159,
        "snippet": "  126  async def stream_response_to_parts(\n  127      parser: \"A2uiStreamParser\",\n  128      token_stream: AsyncIterable[str],\n  129  ) -> AsyncIterable[Part]:\n  130    \"\"\"Helper to parse a stream of LLM tokens into A2A Parts incrementally.\n  131  \n  132    Args:\n  133        parser: A2uiStreamParser instance to process the stream.\n  134        token_stream: An async iterable of strings (tokens).\n  135  \n  136    Yields:\n  137        A2A Part objects as they are discovered in the stream.\n  138    \"\"\"\n  139    async for token in token_stream:\n  140      logger.info(\"-----------------------------\")\n  141      logger.info(f\"--- AGENT: Received token:\\n{token}\")\n  142      response_parts = parser.process_chunk(token)\n  143      logger.info(",
        "omitted": "已截取 126-143 行，原始范围到 159 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-032",
    "conclusion": "`assemble_catalog.py` 可合并/展平 refs，组合 components/functions/themes，并生成 standalone catalog。",
    "type": "源码",
    "location": "`tools/build_catalog/assemble_catalog.py:65-124`, `tools/build_catalog/assemble_catalog.py:197-380`",
    "confidence": "高",
    "verified": "",
    "note": "catalog 工具链",
    "graphRefs": [
      {
        "kind": "节点",
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
        "kind": "连线",
        "viewId": "sdk-catalog",
        "viewLabel": "SDK and Catalog Pipeline",
        "viewDescription": "The Python SDK uses catalog selection, prompt generation, parsing, repair, validation, and A2A conversion to keep generated UI within renderer capabilities.",
        "title": "Catalog Assembler -> A2uiSchemaManager",
        "sub": "catalog schema",
        "role": "contract",
        "status": "",
        "detail": "关系语义：catalog schema。",
        "relation": "Catalog Assembler 到 A2uiSchemaManager"
      }
    ],
    "explanation": "这条证据在架构图中支撑 SDK and Catalog Pipeline / 节点「Catalog Assembler」、SDK and Catalog Pipeline / 连线「Catalog Assembler -> A2uiSchemaManager」。证据结论是：`assemble_catalog.py` 可合并/展平 refs，组合 components/functions/themes，并生成 standalone catalog。。图中的具体解释是：The assembly tool flattens refs and merges custom components, functions, and themes.；关系语义：catalog schema。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "tools/build_catalog/assemble_catalog.py:65-124",
        "path": "tools/build_catalog/assemble_catalog.py",
        "relativePath": "tools/build_catalog/assemble_catalog.py",
        "start": 65,
        "end": 124,
        "snippet": "   65  class CatalogAssembler:\n   66    \"\"\"Assembles multiple catalogs into one, flattening external references.\"\"\"\n   67  \n   68    # Maps well-known schema filenames to their local attribute overrides or versioned remote URLs.\n   69    # This allows developers to work with local files while the tool defaults to remote sources.\n   70    INTERCEPT_MAP = {\n   71        \"basic_catalog.json\": (\"local_basic_catalog_path\", BASIC_CATALOG_URLS, \"basic_catalog\"),\n   72        \"standard_catalog_definition.json\": (\n   73            \"local_basic_catalog_path\",\n   74            BASIC_CATALOG_URLS,\n   75            \"basic_catalog\",\n   76        ),\n   77        \"common_types.json\": (\"local_common_types_path\", COMMON_TYPES_URLS, \"common_types\"),\n   78    }\n   79  \n   80    def __init__(\n   81        self,\n   82        version: str,",
        "omitted": "已截取 65-82 行，原始范围到 124 行。"
      },
      {
        "kind": "file",
        "display": "tools/build_catalog/assemble_catalog.py:197-380",
        "path": "tools/build_catalog/assemble_catalog.py",
        "relativePath": "tools/build_catalog/assemble_catalog.py",
        "start": 197,
        "end": 380,
        "snippet": "  197    def _process_ref(self, schema: dict, current_base_uri: str, depth: int) -> None:\n  198      \"\"\"Resolves an external $ref and updates the schema in place.\"\"\"\n  199      ref = schema[\"$ref\"]\n  200      \n  201      parsed_ref = urllib.parse.urlparse(ref)\n  202      \n  203      # Treat references to catalog.json as references to the assembled catalog root.\n  204      if Path(parsed_ref.path).name == \"catalog.json\":\n  205        schema[\"$ref\"] = f\"#{parsed_ref.fragment}\"\n  206        return\n  207  \n  208      # Determine target URI and fragment.\n  209      if ref.startswith(\"#\"):\n  210        # Reference is local to the CURRENT file we are processing.\n  211        target_uri = current_base_uri\n  212        fragment = ref.lstrip(\"#\")\n  213        if is_remote_uri(target_uri):\n  214          stem = Path(urllib.parse.urlparse(target_uri).path).stem",
        "omitted": "已截取 197-214 行，原始范围到 380 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-033",
    "conclusion": "Conformance 和 renderer tests 覆盖 parser、validator、catalog、schema manager、MessageProcessor、DataModel、GenericBinder、React components。",
    "type": "测试",
    "location": "`agent_sdks/conformance/README.md:1-26`, `renderers/web_core/src/v0_9/processing/message-processor.test.ts:36-481`, `renderers/web_core/src/v0_9/state/data-model.test.ts:74-310`, `renderers/react/tests/v0_9/catalog-components.test.tsx:150-230`",
    "confidence": "高",
    "verified": "",
    "note": "测试支撑",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "agent_sdks/conformance/README.md:1-26",
        "path": "agent_sdks/conformance/README.md",
        "relativePath": "agent_sdks/conformance/README.md",
        "start": 1,
        "end": 26,
        "snippet": "    1  # Conformance Testing\n    2  \n    3  To ensure behavioral parity across all SDK implementations (Python, Kotlin, etc.), the project maintains a language-agnostic conformance suite in this directory.\n    4  \n    5  ## Suite Structure\n    6  \n    7  All test suites are located in the `suites/` directory:\n    8  \n    9  - `suites/streaming_parser.yaml`: Contains test cases for the `A2uiStreamParser` (streaming), verifying chunk buffering, incremental yielding, and edge cases like cut tokens.\n   10  - `suites/parser.yaml`: Contains test cases for non-streaming parsing and payload fixing.\n   11  - `suites/validator.yaml`: Contains test cases for the `A2uiValidator`, verifying structural integrity, cycle detection, and reachability.\n   12  - `suites/catalog.yaml`: Contains test cases for `A2uiCatalog` (prune, render, load).\n   13  - `suites/schema_manager.yaml`: Contains test cases for `A2uiSchemaManager` (select_catalog, load_catalog, generate_prompt).\n   14  \n   15  All static test data and simplified schemas are located in the `test_data/` directory.\n   16  \n   17  `conformance_schema.json` at the root is the JSON schema that validates the structure of the YAML test files themselves.\n   18  ",
        "omitted": "已截取 1-18 行，原始范围到 26 行。"
      },
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/processing/message-processor.test.ts:36-481",
        "path": "renderers/web_core/src/v0_9/processing/message-processor.test.ts",
        "relativePath": "renderers/web_core/src/v0_9/processing/message-processor.test.ts",
        "start": 36,
        "end": 481,
        "snippet": "   36    describe('getClientCapabilities', () => {\n   37      it('generates basic client capabilities with supportedCatalogIds', () => {\n   38        const caps: any = processor.getClientCapabilities();\n   39        assert.strictEqual((caps['v0.9'] as any).inlineCatalogs, undefined);\n   40        assert.deepStrictEqual(caps, {\n   41          'v0.9': {\n   42            supportedCatalogIds: ['test-catalog'],\n   43          },\n   44        });\n   45      });\n   46  \n   47      it('generates inline catalogs when requested', () => {\n   48        const buttonApi: ComponentApi = {\n   49          name: 'Button',\n   50          schema: z.object({\n   51            label: z.string().describe('The button label'),\n   52          }),\n   53        };",
        "omitted": "已截取 36-53 行，原始范围到 481 行。"
      },
      {
        "kind": "file",
        "display": "renderers/web_core/src/v0_9/state/data-model.test.ts:74-310",
        "path": "renderers/web_core/src/v0_9/state/data-model.test.ts",
        "relativePath": "renderers/web_core/src/v0_9/state/data-model.test.ts",
        "start": 74,
        "end": 310,
        "snippet": "   74    it('sets value at existing path', () => {\n   75      model.set('/user/name', 'Bob');\n   76      assert.strictEqual(model.get('/user/name'), 'Bob');\n   77    });\n   78  \n   79    it('sets value at new path', () => {\n   80      model.set('/user/age', 30);\n   81      assert.strictEqual(model.get('/user/age'), 30);\n   82    });\n   83  \n   84    it('creates intermediate objects', () => {\n   85      model.set('/a/b/c', 'foo');\n   86      assert.strictEqual(model.get('/a/b/c'), 'foo');\n   87      assert.notStrictEqual(model.get('/a/b'), undefined);\n   88    });\n   89  \n   90    it('removes keys when value is undefined', () => {\n   91      model.set('/user/name', undefined);",
        "omitted": "已截取 74-91 行，原始范围到 310 行。"
      },
      {
        "kind": "file",
        "display": "renderers/react/tests/v0_9/catalog-components.test.tsx:150-230",
        "path": "renderers/react/tests/v0_9/catalog-components.test.tsx",
        "relativePath": "renderers/react/tests/v0_9/catalog-components.test.tsx",
        "start": 150,
        "end": 230,
        "snippet": "  150    describe('Button', () => {\n  151      it('dispatches action on click', async () => {\n  152        const {surface} = renderA2uiComponent(Button, 'b1', {\n  153          action: {event: {name: 'submit_clicked'}},\n  154          child: 'label1',\n  155        });\n  156  \n  157        const actionSpy = vi.fn();\n  158        surface.onAction.subscribe(actionSpy);\n  159  \n  160        fireEvent.click(screen.getByRole('button'));\n  161  \n  162        expect(actionSpy).toHaveBeenCalledWith(expect.objectContaining({name: 'submit_clicked'}));\n  163      });\n  164  \n  165      it('is disabled when isValid is false (via checks)', async () => {\n  166        const {updateData} = renderA2uiComponent(\n  167          Button,",
        "omitted": "已截取 150-167 行，原始范围到 230 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-034",
    "conclusion": "React shell sample 创建 MessageProcessor，注册 action handler，处理 mock/real stream 并渲染 `<A2uiSurface>`。",
    "type": "样例",
    "location": "`samples/client/react/shell/src/App.tsx:68-75`, `samples/client/react/shell/src/App.tsx:172-207`, `samples/client/react/shell/src/App.tsx:319-324`",
    "confidence": "高",
    "verified": "",
    "note": "集成示例",
    "graphRefs": [
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "System Overview",
        "viewDescription": "A2UI turns agent-generated JSON UI intent into native UI through transport, message processing, catalog lookup, state models, binding, and renderer components.",
        "title": "Transport / A2A / AG UI -> MessageProcessor",
        "sub": "delivers",
        "role": "data",
        "status": "",
        "detail": "关系语义：delivers。",
        "relation": "Transport / A2A / AG UI 到 MessageProcessor"
      },
      {
        "kind": "节点",
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
        "kind": "连线",
        "viewId": "renderer-runtime",
        "viewLabel": "Renderer Runtime",
        "viewDescription": "The reusable implementation center is web_core; React is a comparatively thin adapter over surface state, component context, and GenericBinder.",
        "title": "React Shell -> MessageProcessor",
        "sub": "processMessage",
        "role": "call",
        "status": "",
        "detail": "关系语义：processMessage。",
        "relation": "React Shell 到 MessageProcessor"
      },
      {
        "kind": "节点",
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
        "kind": "连线",
        "viewId": "actions-state",
        "viewLabel": "Actions and Data State",
        "viewDescription": "Input components update DataModel through setters; event actions resolve context at trigger time and travel back to the agent through host action handlers.",
        "title": "Action Handler -> Agent",
        "sub": "POST action",
        "role": "transport",
        "status": "",
        "detail": "关系语义：POST action。",
        "relation": "Action Handler 到 Agent"
      }
    ],
    "explanation": "这条证据在架构图中支撑 System Overview / 连线「Transport / A2A / AG UI -> MessageProcessor」、Renderer Runtime / 节点「React Shell」、Renderer Runtime / 连线「React Shell -> MessageProcessor」、Actions and Data State / 节点「Action Handler」。证据结论是：React shell sample 创建 MessageProcessor，注册 action handler，处理 mock/real stream 并渲染 `<A2uiSurface>`。。图中的具体解释是：关系语义：delivers。；The sample shell receives chunks, processes messages, and renders surfaces.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "samples/client/react/shell/src/App.tsx:68-75",
        "path": "samples/client/react/shell/src/App.tsx",
        "relativePath": "samples/client/react/shell/src/App.tsx",
        "start": 68,
        "end": 75,
        "snippet": "   68    const processor = useMemo(() => {\n   69      return new MessageProcessor([basicCatalog], action => {\n   70        console.log('User action:', action);\n   71        if (sendAndProcessRef.current) {\n   72          sendAndProcessRef.current({version: 'v0.9', action});\n   73        }\n   74      });\n   75    }, []);",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "samples/client/react/shell/src/App.tsx:172-207",
        "path": "samples/client/react/shell/src/App.tsx",
        "relativePath": "samples/client/react/shell/src/App.tsx",
        "start": 172,
        "end": 207,
        "snippet": "  172    // Send message to agent and process response\n  173    const sendAndProcess = useCallback(\n  174      async (message: A2uiClientMessage | string) => {\n  175        try {\n  176          setRequesting(true);\n  177          setError(null);\n  178          setLoadingTextIndex(0);\n  179  \n  180          Array.from(processor.model.surfacesMap.keys()).forEach(id => {\n  181            processor.model.deleteSurface(id);\n  182          });\n  183  \n  184          let response: A2uiMessage[];\n  185  \n  186          if (isMockMode) {\n  187            // Simulate network delay in mock mode\n  188            await new Promise(resolve => setTimeout(resolve, 800));\n  189            response = getMockResponse(message);",
        "omitted": "已截取 172-189 行，原始范围到 207 行。"
      },
      {
        "kind": "file",
        "display": "samples/client/react/shell/src/App.tsx:319-324",
        "path": "samples/client/react/shell/src/App.tsx",
        "relativePath": "samples/client/react/shell/src/App.tsx",
        "start": 319,
        "end": 324,
        "snippet": "  319        {/* Render all surfaces */}\n  320        {hasSurfaces && (\n  321          <section className=\"surfaces\">\n  322            {surfaces.map(surface => (\n  323              <A2uiSurface key={surface.id} surface={surface} />\n  324            ))}",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EVD-035",
    "conclusion": "A2UI 官网把项目定义为 agent-driven interfaces 的声明式 UI protocol，强调跨 web/mobile/desktop 原生渲染且不执行任意代码。",
    "type": "官方网页",
    "location": "`https://a2ui.org/introduction/what-is-a2ui/`，retrieved 2026-05-28",
    "confidence": "高",
    "verified": "",
    "note": "与本地 README/intro 文档一致",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
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
    "conclusion": "官网 v0.9 protocol 页面说明 v0.9 是 JSON-based streaming UI protocol，并定义四类 server-to-client message。",
    "type": "官方网页",
    "location": "`https://a2ui.org/specification/v0.9-a2ui/`，retrieved 2026-05-28",
    "confidence": "高",
    "verified": "",
    "note": "与本地 `specification/v0_9` 一致",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
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
    "conclusion": "官网 Roadmap 把 v0.9 标为 current、feature complete、supported；v0.10 与 v1.0 为 draft/目标版本。",
    "type": "官方网页",
    "location": "`https://a2ui.org/roadmap/`，retrieved 2026-05-28",
    "confidence": "高",
    "verified": "",
    "note": "版本状态口径",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
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
    "conclusion": "Roadmap 的 Q2 2026 milestones 包括发布 v0.9 spec、web core/renderers 支持 v0.9、官方 React renderer、Python Agents SDK。",
    "type": "官方网页",
    "location": "`https://a2ui.org/roadmap/`，retrieved 2026-05-28",
    "confidence": "高",
    "verified": "",
    "note": "与本地源码结构匹配",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
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
    "conclusion": "官网 Renderers Reference 将 renderer 类比 browser，要求支持 adjacency list、data binding/lifecycle、incremental messages、server updates、user actions。",
    "type": "官方网页",
    "location": "`https://a2ui.org/reference/renderers/`，retrieved 2026-05-28",
    "confidence": "高",
    "verified": "",
    "note": "与 `web_core`/React 分析一致",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
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
    "conclusion": "官网 Client Setup 说明 web renderers 共享 `@a2ui/web_core`，custom catalog 是 agent 与 renderer 的契约。",
    "type": "官方网页",
    "location": "`https://a2ui.org/guides/client-setup/`，retrieved 2026-05-28",
    "confidence": "高",
    "verified": "",
    "note": "支持 catalog/web_core 主结论",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
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
    "conclusion": "官网 Ecosystem Renderers 列出社区 renderer，并提醒社区 renderer 由各自作者维护、需检查兼容版本和维护状态。",
    "type": "官方网页",
    "location": "`https://a2ui.org/ecosystem/renderers/`，retrieved 2026-05-28",
    "confidence": "中",
    "verified": "",
    "note": "生态背景，不作为实现事实",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
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
    "conclusion": "CrewAI 文档把 A2UI 描述为 A2A extension，valid messages 会包装为 `application/json+a2ui` DataPart，并由 client 注入 catalog/instructions 和跟踪 surface state。",
    "type": "集成方文档",
    "location": "`https://docs.crewai.com/en/learn/a2ui`，retrieved 2026-05-28",
    "confidence": "中",
    "verified": "",
    "note": "与本地 A2A parts/converter 机制相符，未运行 CrewAI",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
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
    "conclusion": "CopilotKit 文档称 A2UI 是 Google 牵头的 declarative Generative UI specification，并区分 dynamic schema 与 fixed schema 两种实践路径。",
    "type": "集成方文档",
    "location": "`https://docs.copilotkit.ai/google-adk/generative-ui/a2ui`，retrieved 2026-05-28",
    "confidence": "中",
    "verified": "",
    "note": "作为生态/集成背景",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
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
