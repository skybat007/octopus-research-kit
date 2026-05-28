window.ARCHITECTURE_META = {
  title: "Claude Code 可视化架构图",
  description: "展示入口路由、Conversation Runtime、Tool、权限流水线和扩展面。",
  sourceDocs: [
    "../architecture.md",
    "../runtime-flows.md",
    "../source-map.md",
    "../evidence-index.md"
  ]
};

window.ARCHITECTURE_VIEWS = [
  {
    id: "overview",
    label: "架构总览",
    title: "多入口路由 + Trust 前置 + Conversation Runtime",
    description: "Claude Code snapshot 的核心不是单次 CLI prompt，而是把本地交互、headless SDK、remote、bridge 和 direct-connect 收敛到同一套消息、工具、权限和 session 语义。",
    width: 1400,
    height: 850,
    nodes: [
      {
        id: "entry",
        type: "entry",
        title: "多入口模式路由",
        sub: "argv / URL / SSH / SDK / Bridge",
        ev: "C-003 C-004 INF-001",
        x: 60,
        y: 115,
        w: 230,
        h: 88,
        tip: "src/main.tsx 在 Commander 前处理 direct-connect、deep link、assistant、SSH、headless/interactive 和 client type。",
        role: "adapter",
        status: "inference",
        doc: "../evidence-index.md#C-003"
      },
      {
        id: "setup",
        type: "entry",
        title: "Setup And Trust",
        sub: "cwd / trust / API key / MCP approvals",
        ev: "C-005",
        x: 395,
        y: 115,
        w: 255,
        h: 88,
        tip: "setup/renderAndRun 把 workspace trust、API key、MCP approvals、telemetry 和 bypass dialog 放在 query 之前。",
        role: "adapter",
        status: "source-verified",
        doc: "../evidence-index.md#C-005"
      },
      {
        id: "repl",
        type: "entry",
        title: "React/Ink REPL",
        sub: "App / REPL / interactive state",
        ev: "C-006",
        x: 60,
        y: 330,
        w: 230,
        h: 86,
        tip: "交互式路径保存 UI、MCP、tools、file history、agents、thinking 等状态，再组装 query 上下文。",
        role: "adapter",
        status: "source-verified",
        doc: "../evidence-index.md#C-006"
      },
      {
        id: "remote",
        type: "infra",
        title: "Headless / Remote IO",
        sub: "stream-json / bridge / direct-connect",
        ev: "C-015 INF-001",
        x: 60,
        y: 520,
        w: 230,
        h: 86,
        tip: "headless、bridge、remote 和 direct-connect 使用结构化消息和 permission control request。",
        role: "external-dependency",
        status: "inference",
        doc: "../evidence-index.md#C-015"
      },
      {
        id: "engine",
        type: "core",
        title: "QueryEngine",
        sub: "conversation state owner",
        ev: "C-007",
        x: 450,
        y: 315,
        w: 230,
        h: 92,
        tip: "会话级生命周期对象，拥有 initial messages、tools、commands、MCP clients、permission callback、budget 和 AppState。",
        role: "module",
        status: "source-verified",
        doc: "../evidence-index.md#C-007"
      },
      {
        id: "loop",
        type: "runtime",
        title: "queryLoop",
        sub: "turn orchestration",
        ev: "C-008 EXT-CC-002",
        x: 800,
        y: 315,
        w: 230,
        h: 92,
        tip: "turn 内主循环，处理 system context、auto-compact、model streaming、tool execution、fallback、刷新 tools。",
        role: "runtime-object",
        status: "official-supported",
        doc: "../evidence-index.md#C-008"
      },
      {
        id: "tools",
        type: "extension",
        title: "Tool Contract",
        sub: "schema / permission / render / hints",
        ev: "C-009",
        x: 1110,
        y: 355,
        w: 210,
        h: 88,
        tip: "Tool 不是简单回调，携带 schema、权限、并发、只读、破坏性、渲染、MCP/LSP、defer、strict 等语义。",
        role: "extension-point",
        status: "source-verified",
        doc: "../evidence-index.md#C-009"
      },
      {
        id: "permission",
        type: "extension",
        title: "Permission Pipeline",
        sub: "hooks / UI / remote / classifier",
        ev: "C-010 EXT-CC-003",
        x: 800,
        y: 545,
        w: 230,
        h: 88,
        tip: "tool execution 会经过 validation、hooks、permission decision、interactive handler、bridge/remote callbacks 和 classifier。",
        role: "extension-point",
        status: "official-supported",
        doc: "../evidence-index.md#C-010"
      },
      {
        id: "extensions",
        type: "extension",
        title: "Skills / Plugins / MCP / Hooks",
        sub: "command / tool / resource / event",
        ev: "C-011 C-012 INF-003",
        x: 1110,
        y: 545,
        w: 210,
        h: 88,
        tip: "扩展面分层：Skill、Plugin、MCP、Hook、remote control request 最终映射到 command/tool/permission/session 语义。",
        role: "extension-point",
        status: "inference",
        doc: "../evidence-index.md#C-011"
      },
      {
        id: "state",
        type: "state",
        title: "Session And Context",
        sub: "transcript / project root / CLAUDE.md / git",
        ev: "C-013 C-014 EXT-CC-005",
        x: 450,
        y: 650,
        w: 580,
        h: 88,
        tip: "sessionStorage、bootstrap state 和 context memoization 共同构成长期状态与上下文快照。",
        role: "state",
        status: "official-supported",
        doc: "../evidence-index.md#C-013"
      }
    ],
    edges: [
      {
        from: "entry",
        to: "setup",
        label: "模式归一",
        kind: "sync-call",
        ev: "C-005",
        doc: "../evidence-index.md#C-005"
      },
      {
        from: "setup",
        to: "repl",
        label: "交互路径",
        kind: "sync-call",
        ev: "C-006",
        doc: "../evidence-index.md#C-006"
      },
      {
        from: "setup",
        to: "remote",
        label: "结构化 IO",
        kind: "sync-call",
        ev: "C-015 INF-001",
        doc: "../evidence-index.md#C-015"
      },
      {
        from: "repl",
        to: "engine",
        label: "submitMessage",
        kind: "sync-call",
        ev: "C-007",
        doc: "../evidence-index.md#C-007"
      },
      {
        from: "remote",
        to: "engine",
        label: "SDK message",
        kind: "sync-call",
        ev: "C-007",
        doc: "../evidence-index.md#C-007"
      },
      {
        from: "engine",
        to: "loop",
        label: "turn",
        kind: "sync-call",
        ev: "C-008 EXT-CC-002",
        doc: "../evidence-index.md#C-008"
      },
      {
        from: "loop",
        to: "tools",
        label: "工具调用",
        kind: "request-flow",
        ev: "C-009",
        doc: "../evidence-index.md#C-009"
      },
      {
        from: "tools",
        to: "permission",
        label: "执行前决策",
        kind: "request-flow",
        ev: "C-010 EXT-CC-003",
        doc: "../evidence-index.md#C-010"
      },
      {
        from: "extensions",
        to: "tools",
        label: "注册/包装能力",
        kind: "registration",
        ev: "C-009",
        doc: "../evidence-index.md#C-009"
      },
      {
        from: "permission",
        to: "extensions",
        label: "hooks/MCP/remote",
        kind: "dependency",
        ev: "C-011 C-012 INF-003",
        doc: "../evidence-index.md#C-011"
      },
      {
        from: "loop",
        to: "state",
        label: "读写上下文",
        kind: "context-build",
        ev: "C-013 C-014 EXT-CC-005",
        doc: "../evidence-index.md#C-013"
      },
      {
        from: "engine",
        to: "state",
        label: "持久化会话",
        kind: "read-write",
        ev: "C-013 C-014 EXT-CC-005",
        doc: "../evidence-index.md#C-013"
      }
    ]
  },
  {
    id: "turn",
    label: "Turn 主链路",
    title: "一次用户输入进入 QueryEngine 和 queryLoop 的主路径",
    description: "这个视图把 REPL/headless 差异收敛后的 Agent turn 展开，重点看 context、model streaming、tool execution、permission 和 transcript。",
    width: 1340,
    height: 680,
    nodes: [
      {
        id: "t1",
        type: "entry",
        title: "User Input / SDK Message",
        sub: "interactive or stream-json",
        ev: "C-006 C-015",
        x: 55,
        y: 285,
        w: 205,
        h: 78,
        tip: "输入可能来自 REPL，也可能来自 headless/bridge/remote/direct-connect。",
        role: "adapter",
        status: "source-verified",
        doc: "../evidence-index.md#C-006"
      },
      {
        id: "t2",
        type: "state",
        title: "Context Assembly",
        sub: "tools / prompts / system context",
        ev: "C-006 C-014",
        x: 315,
        y: 285,
        w: 195,
        h: 78,
        tip: "REPL 或 headless 路径在 query 前组装 tool permission context、tool pool、system/user context。",
        role: "state",
        status: "source-verified",
        doc: "../evidence-index.md#C-006"
      },
      {
        id: "t3",
        type: "core",
        title: "QueryEngine.submitMessage",
        sub: "session state + permission wrapper",
        ev: "C-007",
        x: 565,
        y: 285,
        w: 215,
        h: 78,
        tip: "submitMessage 持久化 session，包装 permission callback，并调用 query。",
        role: "module",
        status: "source-verified",
        doc: "../evidence-index.md#C-007"
      },
      {
        id: "t4",
        type: "runtime",
        title: "queryLoop",
        sub: "budget / compact / streaming",
        ev: "C-008",
        x: 835,
        y: 285,
        w: 185,
        h: 78,
        tip: "turn 内编排模型、工具、fallback、error、auto-compact 和 streaming events。",
        role: "runtime-object",
        status: "source-verified",
        doc: "../evidence-index.md#C-008"
      },
      {
        id: "t5",
        type: "runtime",
        title: "Model Streaming",
        sub: "QueryDeps",
        ev: "C-014",
        x: 1085,
        y: 185,
        w: 175,
        h: 78,
        tip: "模型调用经 QueryDeps 注入，支持 provider 差异和 fallback。",
        role: "runtime-object",
        status: "source-verified",
        doc: "../evidence-index.md#C-014"
      },
      {
        id: "t6",
        type: "extension",
        title: "Tool Execution",
        sub: "ToolUseContext",
        ev: "C-009 C-010",
        x: 1085,
        y: 385,
        w: 175,
        h: 78,
        tip: "工具执行携带 commands、MCP clients/resources、budgets、prompts、AppState、messages 等上下文。",
        role: "extension-point",
        status: "source-verified",
        doc: "../evidence-index.md#C-009"
      },
      {
        id: "t7",
        type: "state",
        title: "Transcript / Result",
        sub: "JSONL / usage / stop reason",
        ev: "C-013",
        x: 565,
        y: 500,
        w: 215,
        h: 78,
        tip: "记录 transcript、metadata、usage、cost、duration、stop reason 和 permission denials。",
        role: "state",
        status: "source-verified",
        doc: "../evidence-index.md#C-013"
      }
    ],
    edges: [
      {
        from: "t1",
        to: "t2",
        label: "输入",
        kind: "request-flow",
        ev: "C-006 C-014",
        doc: "../evidence-index.md#C-006"
      },
      {
        from: "t2",
        to: "t3",
        label: "上下文",
        kind: "context-build",
        ev: "C-007",
        doc: "../evidence-index.md#C-007"
      },
      {
        from: "t3",
        to: "t4",
        label: "启动 turn",
        kind: "request-flow",
        ev: "C-008",
        doc: "../evidence-index.md#C-008"
      },
      {
        from: "t4",
        to: "t5",
        label: "模型流",
        kind: "model-stream",
        ev: "C-014",
        doc: "../evidence-index.md#C-014"
      },
      {
        from: "t5",
        to: "t4",
        label: "stream event",
        kind: "model-stream",
        ev: "C-008",
        doc: "../evidence-index.md#C-008"
      },
      {
        from: "t4",
        to: "t6",
        label: "tool use",
        kind: "request-flow",
        ev: "C-009 C-010",
        doc: "../evidence-index.md#C-009"
      },
      {
        from: "t6",
        to: "t4",
        label: "tool result",
        kind: "dependency",
        ev: "C-008",
        doc: "../evidence-index.md#C-008"
      },
      {
        from: "t4",
        to: "t7",
        label: "结束/记录",
        kind: "read-write",
        ev: "C-013",
        doc: "../evidence-index.md#C-013"
      },
      {
        from: "t3",
        to: "t7",
        label: "会话状态",
        kind: "read-write",
        ev: "C-013",
        doc: "../evidence-index.md#C-013"
      }
    ]
  },
  {
    id: "permission",
    label: "权限与扩展",
    title: "Tool contract 下的权限流水线和分层扩展面",
    description: "Claude Code 最值得单独看的部分是：外部能力进入 runtime 后，会被包装成 Tool/Command/Resource，再由统一权限与 hook 语义处理。",
    width: 1360,
    height: 760,
    nodes: [
      {
        id: "p1",
        type: "extension",
        title: "Built-in Tools",
        sub: "tools.ts source of truth",
        ev: "C-009",
        x: 70,
        y: 115,
        w: 190,
        h: 78,
        tip: "内置工具通过 feature/env gate、deny rules、simple mode、dedup 和稳定排序进入 tool pool。",
        role: "extension-point",
        status: "source-verified",
        doc: "../evidence-index.md#C-009"
      },
      {
        id: "p2",
        type: "extension",
        title: "MCP Tools / Resources",
        sub: "remote and local servers",
        ev: "C-012 EXT-CC-004",
        x: 70,
        y: 275,
        w: 190,
        h: 78,
        tip: "MCP discovery 连接 server，获取 tools、commands、skills、resources，并映射为 Claude Code Tool。",
        role: "extension-point",
        status: "official-supported",
        doc: "../evidence-index.md#C-012"
      },
      {
        id: "p3",
        type: "extension",
        title: "Skills / Plugin Commands",
        sub: "markdown / manifest / hooks",
        ev: "C-011 INF-003",
        x: 70,
        y: 435,
        w: 190,
        h: 78,
        tip: "Skill、Plugin command、plugin hooks、marketplace 都有自己的加载和校验策略。",
        role: "extension-point",
        status: "inference",
        doc: "../evidence-index.md#C-011"
      },
      {
        id: "tool",
        type: "core",
        title: "Unified Tool Contract",
        sub: "schema + permission + hints",
        ev: "C-009",
        x: 405,
        y: 265,
        w: 250,
        h: 92,
        tip: "不同能力源进入 runtime 后统一成 Tool/Command/Resource 语义，供模型、UI、权限、调度共同消费。",
        role: "module",
        status: "source-verified",
        doc: "../evidence-index.md#C-009"
      },
      {
        id: "validate",
        type: "extension",
        title: "Validation And Hooks",
        sub: "schema / PreToolUse / prevent",
        ev: "C-010",
        x: 760,
        y: 130,
        w: 220,
        h: 78,
        tip: "执行前先解析 tool name、input schema，并运行 PreToolUse hooks。",
        role: "extension-point",
        status: "source-verified",
        doc: "../evidence-index.md#C-010"
      },
      {
        id: "decision",
        type: "extension",
        title: "Permission Decision",
        sub: "rules / modes / resolve once",
        ev: "C-010 EXT-CC-003",
        x: 760,
        y: 305,
        w: 220,
        h: 78,
        tip: "permission context 支持 allow/deny/ask、hook allow、用户 allow、deny abort、decision persistence。",
        role: "extension-point",
        status: "official-supported",
        doc: "../evidence-index.md#C-010"
      },
      {
        id: "interactive",
        type: "infra",
        title: "Decision Sources",
        sub: "UI / bridge / remote / classifier",
        ev: "C-010 C-015",
        x: 760,
        y: 480,
        w: 220,
        h: 78,
        tip: "交互 handler、bridge callback、remote callback 和 speculative classifier 都可能参与 can-use-tool 决策。",
        role: "external-dependency",
        status: "source-verified",
        doc: "../evidence-index.md#C-010"
      },
      {
        id: "call",
        type: "runtime",
        title: "tool.call(...)",
        sub: "execute with ToolUseContext",
        ev: "C-009 C-010",
        x: 1090,
        y: 305,
        w: 185,
        h: 78,
        tip: "权限流水线完成后才真正执行工具调用，并把结果回到 queryLoop。",
        role: "runtime-object",
        status: "source-verified",
        doc: "../evidence-index.md#C-009"
      }
    ],
    edges: [
      {
        from: "p1",
        to: "tool",
        label: "内置",
        kind: "sync-call",
        ev: "C-009",
        doc: "../evidence-index.md#C-009"
      },
      {
        from: "p2",
        to: "tool",
        label: "包装",
        kind: "registration",
        ev: "C-009",
        doc: "../evidence-index.md#C-009"
      },
      {
        from: "p3",
        to: "tool",
        label: "命令/能力",
        kind: "sync-call",
        ev: "C-009",
        doc: "../evidence-index.md#C-009"
      },
      {
        from: "tool",
        to: "validate",
        label: "执行前",
        kind: "request-flow",
        ev: "C-010",
        doc: "../evidence-index.md#C-010"
      },
      {
        from: "validate",
        to: "decision",
        label: "策略输入",
        kind: "request-flow",
        ev: "C-010 EXT-CC-003",
        doc: "../evidence-index.md#C-010"
      },
      {
        from: "decision",
        to: "interactive",
        label: "需要确认",
        kind: "dependency",
        ev: "C-010 C-015",
        doc: "../evidence-index.md#C-010"
      },
      {
        from: "interactive",
        to: "decision",
        label: "返回决策",
        kind: "result-return",
        ev: "C-010 EXT-CC-003",
        doc: "../evidence-index.md#C-010"
      },
      {
        from: "decision",
        to: "call",
        label: "允许执行",
        kind: "request-flow",
        ev: "C-009 C-010",
        doc: "../evidence-index.md#C-009"
      },
      {
        from: "call",
        to: "tool",
        label: "结果/状态",
        kind: "read-write",
        ev: "C-009",
        doc: "../evidence-index.md#C-009"
      }
    ]
  },
  {
    id: "layers",
    label: "分层视图",
    title: "从入口到状态的分层边界",
    description: "分层图用于快速识别 Claude Code 中哪些模块属于入口路由、运行前边界、交互状态、会话核心、工具权限和持久化上下文。",
    width: 1140,
    height: 850,
    layers: [
      {
        type: "entry",
        title: "入口路由层",
        sub: "main.tsx / Commander / direct-connect / bridge / SDK",
        ev: "C-003 C-004 C-015",
        items: [
          "argv",
          "URL",
          "SSH",
          "SDK"
        ],
        role: "adapter",
        status: "source-verified",
        doc: "../evidence-index.md#C-003",
        tip: "main.tsx / Commander / direct-connect / bridge / SDK"
      },
      {
        type: "entry",
        title: "Setup 与 Trust 层",
        sub: "cwd / terminal / workspace trust / MCP approvals",
        ev: "C-005",
        items: [
          "cwd",
          "trust",
          "API key",
          "MCP approval"
        ],
        role: "adapter",
        status: "source-verified",
        doc: "../evidence-index.md#C-005",
        tip: "cwd / terminal / workspace trust / MCP approvals"
      },
      {
        type: "entry",
        title: "交互与结构化 IO 层",
        sub: "React/Ink REPL / stream-json / remote messages",
        ev: "C-006 C-015",
        items: [
          "REPL",
          "headless",
          "bridge",
          "remote"
        ],
        role: "adapter",
        status: "source-verified",
        doc: "../evidence-index.md#C-006",
        tip: "React/Ink REPL / stream-json / remote messages"
      },
      {
        type: "core",
        title: "Conversation Core 层",
        sub: "QueryEngine owns conversation state",
        ev: "C-007",
        items: [
          "messages",
          "tools",
          "commands",
          "budget"
        ],
        role: "module",
        status: "source-verified",
        doc: "../evidence-index.md#C-007",
        tip: "QueryEngine owns conversation state"
      },
      {
        type: "runtime",
        title: "Turn Runtime 层",
        sub: "queryLoop / model streaming / compact / fallback",
        ev: "C-008 C-014",
        items: [
          "model",
          "compact",
          "fallback",
          "events"
        ],
        role: "runtime-object",
        status: "source-verified",
        doc: "../evidence-index.md#C-008",
        tip: "queryLoop / model streaming / compact / fallback"
      },
      {
        type: "extension",
        title: "Tool 与权限层",
        sub: "Tool contract / permission pipeline / hooks",
        ev: "C-009 C-010",
        items: [
          "schema",
          "permission",
          "hooks",
          "callback"
        ],
        role: "extension-point",
        status: "source-verified",
        doc: "../evidence-index.md#C-009",
        tip: "Tool contract / permission pipeline / hooks"
      },
      {
        type: "extension",
        title: "扩展接入层",
        sub: "Skills / Plugins / MCP / Commands",
        ev: "C-011 C-012 INF-003",
        items: [
          "skills",
          "plugins",
          "MCP",
          "commands"
        ],
        role: "extension-point",
        status: "inference",
        doc: "../evidence-index.md#C-011",
        tip: "Skills / Plugins / MCP / Commands"
      },
      {
        type: "state",
        title: "状态与上下文层",
        sub: "session transcript / bootstrap state / context memoization",
        ev: "C-013 C-014",
        items: [
          "JSONL",
          "project root",
          "CLAUDE.md",
          "git"
        ],
        role: "state",
        status: "source-verified",
        doc: "../evidence-index.md#C-013",
        tip: "session transcript / bootstrap state / context memoization"
      }
    ]
  }
];
