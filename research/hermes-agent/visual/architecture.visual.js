window.ARCHITECTURE_META = {
  title: "Hermes Agent 可视化架构图",
  description: "展示多入口、Agent Core、工具、插件、Gateway 和状态边界。",
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
    title: "多入口统一到 AIAgent，再由工具、插件、Provider 和 Gateway 扩展",
    description: "Hermes Agent 的主设计是 CLI、TUI、Gateway、ACP、cron 等入口共享 AIAgent 与 run_conversation，而不是每个入口各自实现 Agent loop。",
    width: 1360,
    height: 820,
    nodes: [
      {
        id: "interfaces",
        type: "entry",
        title: "Interface Layer",
        sub: "CLI / TUI / ACP / Cron",
        ev: "H-003 H-013 H-014 H-015 H-016",
        x: 70,
        y: 110,
        w: 230,
        h: 88,
        tip: "多个用户界面和定时任务入口最终围绕 AIAgent 组织。",
        role: "adapter",
        status: "source-verified",
        doc: "../evidence-index.md#H-003"
      },
      {
        id: "gateway",
        type: "infra",
        title: "Messaging Gateway",
        sub: "gateway/run.py",
        ev: "H-009 H-010",
        x: 70,
        y: 325,
        w: 230,
        h: 88,
        tip: "平台 Adapter、allowlist/pairing、SessionContext、delivery 和 agent cache。",
        role: "external-dependency",
        status: "source-verified",
        doc: "../evidence-index.md#H-009"
      },
      {
        id: "agent",
        type: "core",
        title: "AIAgent",
        sub: "run_agent.py",
        ev: "H-004",
        x: 430,
        y: 170,
        w: 220,
        h: 92,
        tip: "核心 facade，承接入口参数、初始化上下文并进入对话运行时。",
        role: "module",
        status: "source-verified",
        doc: "../evidence-index.md#H-004"
      },
      {
        id: "loop",
        type: "runtime",
        title: "run_conversation",
        sub: "conversation_loop.py",
        ev: "H-004",
        x: 770,
        y: 170,
        w: 240,
        h: 92,
        tip: "Agent turn 主循环：模型调用、tool call、结果回写和流式输出。",
        role: "runtime-object",
        status: "source-verified",
        doc: "../evidence-index.md#H-004"
      },
      {
        id: "provider",
        type: "extension",
        title: "Provider Profile",
        sub: "providers / profiles",
        ev: "H-011",
        x: 1085,
        y: 90,
        w: 210,
        h: 82,
        tip: "模型 Provider 行为剥离到 profile，减少主循环中的 provider 差异。",
        role: "extension-point",
        status: "source-verified",
        doc: "../evidence-index.md#H-011"
      },
      {
        id: "tools",
        type: "extension",
        title: "ToolRegistry + Toolsets",
        sub: "registry / model_tools",
        ev: "H-005 H-006 H-007",
        x: 1085,
        y: 260,
        w: 210,
        h: 88,
        tip: "中央工具注册表、toolset 过滤、模型 schema 转换和 tool call 分发。",
        role: "extension-point",
        status: "source-verified",
        doc: "../evidence-index.md#H-005"
      },
      {
        id: "plugins",
        type: "extension",
        title: "Plugin Manager",
        sub: "PluginContext / hooks",
        ev: "H-008 H-010 H-011 H-012",
        x: 430,
        y: 465,
        w: 230,
        h: 88,
        tip: "插件可注册 tools、hooks、slash command、gateway platform、provider、memory 等。",
        role: "extension-point",
        status: "source-verified",
        doc: "../evidence-index.md#H-008"
      },
      {
        id: "memory",
        type: "state",
        title: "Memory Manager",
        sub: "built-in + one provider",
        ev: "H-012 EXT-HA-005",
        x: 770,
        y: 465,
        w: 240,
        h: 88,
        tip: "内置记忆始终启用，外部 memory provider 一次只激活一个，并隔离失败。",
        role: "state",
        status: "official-supported",
        doc: "../evidence-index.md#H-012"
      },
      {
        id: "session",
        type: "state",
        title: "Session / Config / DB",
        sub: "profiles / session store / cron jobs",
        ev: "H-003 H-009 H-016",
        x: 430,
        y: 660,
        w: 580,
        h: 86,
        tip: "profile、session key、gateway store、cron jobs 和本地配置共同构成运行状态边界。",
        role: "state",
        status: "source-verified",
        doc: "../evidence-index.md#H-003"
      }
    ],
    edges: [
      {
        from: "interfaces",
        to: "agent",
        label: "入口归一",
        kind: "sync-call",
        ev: "H-004",
        doc: "../evidence-index.md#H-004"
      },
      {
        from: "gateway",
        to: "agent",
        label: "SessionContext",
        kind: "read-write",
        ev: "H-004",
        doc: "../evidence-index.md#H-004"
      },
      {
        from: "agent",
        to: "loop",
        label: "启动 turn",
        kind: "request-flow",
        ev: "H-004",
        doc: "../evidence-index.md#H-004"
      },
      {
        from: "loop",
        to: "provider",
        label: "模型调用",
        kind: "model-stream",
        ev: "H-011",
        doc: "../evidence-index.md#H-011"
      },
      {
        from: "loop",
        to: "tools",
        label: "tool schema/call",
        kind: "request-flow",
        ev: "H-005 H-006 H-007",
        doc: "../evidence-index.md#H-005"
      },
      {
        from: "plugins",
        to: "tools",
        label: "注册能力",
        kind: "registration",
        ev: "H-005 H-006 H-007",
        doc: "../evidence-index.md#H-005"
      },
      {
        from: "plugins",
        to: "provider",
        label: "扩展 Provider",
        kind: "registration",
        ev: "H-011",
        doc: "../evidence-index.md#H-011"
      },
      {
        from: "plugins",
        to: "memory",
        label: "扩展记忆",
        kind: "registration",
        ev: "H-012 EXT-HA-005",
        doc: "../evidence-index.md#H-012"
      },
      {
        from: "loop",
        to: "memory",
        label: "读写记忆",
        kind: "read-write",
        ev: "H-012 EXT-HA-005",
        doc: "../evidence-index.md#H-012"
      },
      {
        from: "gateway",
        to: "session",
        label: "会话/投递状态",
        kind: "read-write",
        ev: "H-003 H-009 H-016",
        doc: "../evidence-index.md#H-003"
      },
      {
        from: "agent",
        to: "session",
        label: "配置/profile",
        kind: "context-build",
        ev: "H-003 H-009 H-016",
        doc: "../evidence-index.md#H-003"
      }
    ]
  },
  {
    id: "flow",
    label: "运行主链路",
    title: "一次 Agent turn 的主执行路径",
    description: "该流程把 CLI/TUI/Gateway/cron 的差异收敛到同一条 turn 执行链路，再通过工具注册表、memory 和 delivery 返回结果。",
    width: 1320,
    height: 650,
    nodes: [
      {
        id: "f1",
        type: "entry",
        title: "入口事件",
        sub: "CLI / TUI / Gateway / Cron",
        ev: "H-003 H-013 H-014 H-015 H-016",
        x: 60,
        y: 260,
        w: 190,
        h: 78,
        tip: "用户命令、外部消息、TUI RPC、ACP 或定时任务触发。",
        role: "adapter",
        status: "source-verified",
        doc: "../evidence-index.md#H-003"
      },
      {
        id: "f2",
        type: "entry",
        title: "入口适配",
        sub: "args / message / schedule",
        ev: "H-003 H-009 H-016",
        x: 310,
        y: 260,
        w: 180,
        h: 78,
        tip: "把不同入口转换成 AIAgent 可消费的上下文。",
        role: "adapter",
        status: "source-verified",
        doc: "../evidence-index.md#H-003"
      },
      {
        id: "f3",
        type: "core",
        title: "AIAgent",
        sub: "init + context",
        ev: "H-004",
        x: 550,
        y: 260,
        w: 170,
        h: 78,
        tip: "初始化 provider、tools、memory、插件和系统提示词。",
        role: "module",
        status: "source-verified",
        doc: "../evidence-index.md#H-004"
      },
      {
        id: "f4",
        type: "runtime",
        title: "Conversation Loop",
        sub: "model turn",
        ev: "H-004",
        x: 780,
        y: 260,
        w: 190,
        h: 78,
        tip: "统一执行模型 turn 和工具调用循环。",
        role: "runtime-object",
        status: "source-verified",
        doc: "../evidence-index.md#H-004"
      },
      {
        id: "f5",
        type: "extension",
        title: "ToolRegistry",
        sub: "toolsets / call dispatch",
        ev: "H-005 H-006 H-007",
        x: 1030,
        y: 185,
        w: 190,
        h: 78,
        tip: "把可用工具暴露给模型，并执行模型返回的 tool call。",
        role: "extension-point",
        status: "source-verified",
        doc: "../evidence-index.md#H-005"
      },
      {
        id: "f6",
        type: "state",
        title: "Memory Provider",
        sub: "prefetch / sync / tool schemas",
        ev: "H-012",
        x: 1030,
        y: 345,
        w: 190,
        h: 78,
        tip: "记忆参与 prompt、prefetch、turn sync 和可选 tool schema。",
        role: "state",
        status: "source-verified",
        doc: "../evidence-index.md#H-012"
      },
      {
        id: "f7",
        type: "infra",
        title: "Response / Delivery",
        sub: "stdout / TUI / platform",
        ev: "H-009 H-014",
        x: 550,
        y: 460,
        w: 190,
        h: 78,
        tip: "根据入口形态将结果输出到终端、TUI 或 messaging platform。",
        role: "external-dependency",
        status: "source-verified",
        doc: "../evidence-index.md#H-009"
      }
    ],
    edges: [
      {
        from: "f1",
        to: "f2",
        label: "输入",
        kind: "request-flow",
        ev: "H-003 H-009 H-016",
        doc: "../evidence-index.md#H-003"
      },
      {
        from: "f2",
        to: "f3",
        label: "上下文",
        kind: "context-build",
        ev: "H-004",
        doc: "../evidence-index.md#H-004"
      },
      {
        from: "f3",
        to: "f4",
        label: "执行 turn",
        kind: "request-flow",
        ev: "H-004",
        doc: "../evidence-index.md#H-004"
      },
      {
        from: "f4",
        to: "f5",
        label: "工具调用",
        kind: "request-flow",
        ev: "H-005 H-006 H-007",
        doc: "../evidence-index.md#H-005"
      },
      {
        from: "f5",
        to: "f4",
        label: "结果反馈",
        kind: "result-return",
        ev: "H-004",
        doc: "../evidence-index.md#H-004"
      },
      {
        from: "f4",
        to: "f6",
        label: "记忆读写",
        kind: "read-write",
        ev: "H-012",
        doc: "../evidence-index.md#H-012"
      },
      {
        from: "f4",
        to: "f7",
        label: "响应",
        kind: "result-return",
        ev: "H-009 H-014",
        doc: "../evidence-index.md#H-009"
      }
    ]
  },
  {
    id: "layers",
    label: "分层视图",
    title: "入口、内核、能力和状态的分层边界",
    description: "分层图用于快速识别 Hermes Agent 中可以独立学习的结构：入口归一、Agent facade、注册表驱动工具、插件分层和状态隔离。",
    width: 1120,
    height: 790,
    layers: [
      {
        type: "entry",
        title: "接入层",
        sub: "CLI / TUI / Gateway / ACP / Cron",
        ev: "H-003 H-013 H-014 H-015 H-016",
        items: [
          "CLI",
          "TUI",
          "Gateway",
          "Cron"
        ],
        role: "adapter",
        status: "source-verified",
        doc: "../evidence-index.md#H-003",
        tip: "CLI / TUI / Gateway / ACP / Cron"
      },
      {
        type: "core",
        title: "Agent 内核层",
        sub: "AIAgent facade and initialization",
        ev: "H-004",
        items: [
          "system prompt",
          "context",
          "provider",
          "memory"
        ],
        role: "module",
        status: "source-verified",
        doc: "../evidence-index.md#H-004",
        tip: "AIAgent facade and initialization"
      },
      {
        type: "runtime",
        title: "对话运行层",
        sub: "run_conversation / model loop / tool calls",
        ev: "H-004 H-006",
        items: [
          "model turn",
          "tool call",
          "streaming",
          "errors"
        ],
        role: "runtime-object",
        status: "source-verified",
        doc: "../evidence-index.md#H-004",
        tip: "run_conversation / model loop / tool calls"
      },
      {
        type: "extension",
        title: "能力扩展层",
        sub: "ToolRegistry / toolsets / plugins / providers",
        ev: "H-005 H-007 H-008 H-011",
        items: [
          "registry",
          "toolset",
          "hooks",
          "profiles"
        ],
        role: "extension-point",
        status: "source-verified",
        doc: "../evidence-index.md#H-005",
        tip: "ToolRegistry / toolsets / plugins / providers"
      },
      {
        type: "state",
        title: "状态与记忆层",
        sub: "SessionStore / profiles / MemoryManager",
        ev: "H-009 H-012 H-016",
        items: [
          "session key",
          "profile",
          "memory",
          "cron DB"
        ],
        role: "state",
        status: "source-verified",
        doc: "../evidence-index.md#H-009",
        tip: "SessionStore / profiles / MemoryManager"
      },
      {
        type: "infra",
        title: "平台投递层",
        sub: "Gateway adapters / pairing / delivery",
        ev: "H-009 H-010",
        items: [
          "adapter",
          "allowlist",
          "pairing",
          "delivery"
        ],
        role: "external-dependency",
        status: "source-verified",
        doc: "../evidence-index.md#H-009",
        tip: "Gateway adapters / pairing / delivery"
      }
    ]
  }
];
