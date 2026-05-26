window.ARCHITECTURE_META = {
  title: "OpenClaw 可视化架构图",
  description: "展示 Gateway、Agent Runtime、Plugin Capability 和状态边界。",
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
    title: "Gateway 控制面 + Agent Runtime + Plugin Capability",
    description: "OpenClaw 的核心不是单一 Agent loop，而是长期运行 Gateway 把入口、会话、Agent、插件能力和设备节点统一起来。",
    width: 1360,
    height: 820,
    nodes: [
      {
        id: "entry",
        type: "entry",
        title: "入口与渠道",
        sub: "CLI / HTTP / WS / Channel",
        ev: "C-004 C-005 C-013",
        x: 70,
        y: 90,
        w: 210,
        h: 82,
        tip: "多入口进入 Gateway：本地 CLI、HTTP/WS surface、channel plugin 和外部消息。",
        role: "adapter",
        status: "source-verified",
        doc: "../evidence-index.md#C-004"
      },
      {
        id: "ui",
        type: "entry",
        title: "UI / Apps / Nodes",
        sub: "control clients / devices",
        ev: "C-004 C-006",
        x: 70,
        y: 265,
        w: 210,
        h: 82,
        tip: "控制面客户端和节点通过 Gateway 协议连接，不直接接管 Agent runtime。",
        role: "adapter",
        status: "source-verified",
        doc: "../evidence-index.md#C-004"
      },
      {
        id: "gateway",
        type: "core",
        title: "Gateway 控制面",
        sub: "src/gateway/**",
        ev: "C-004 C-006",
        x: 410,
        y: 165,
        w: 250,
        h: 96,
        tip: "长期运行控制面：协议、事件、节点、安全、pairing、RPC 和消息路由。",
        role: "module",
        status: "source-verified",
        doc: "../evidence-index.md#C-004"
      },
      {
        id: "agent",
        type: "runtime",
        title: "Agent Runtime 外壳",
        sub: "src/agents/**",
        ev: "C-007 C-008",
        x: 805,
        y: 90,
        w: 245,
        h: 92,
        tip: "OpenClaw 自有的 Agent 外壳，负责 workspace、session、skills、model、delivery 等边界。",
        role: "runtime-object",
        status: "source-verified",
        doc: "../evidence-index.md#C-007"
      },
      {
        id: "pi",
        type: "runtime",
        title: "Pi Agent Core",
        sub: "agent loop / tools",
        ev: "C-007 C-008",
        x: 1090,
        y: 105,
        w: 205,
        h: 78,
        tip: "执行核心由 Pi agent core 承接，OpenClaw 在外侧提供上下文和能力边界。",
        role: "runtime-object",
        status: "source-verified",
        doc: "../evidence-index.md#C-007"
      },
      {
        id: "pluginControl",
        type: "extension",
        title: "Plugin 控制面",
        sub: "manifest / discovery / validation",
        ev: "C-010 C-011",
        x: 410,
        y: 410,
        w: 260,
        h: 92,
        tip: "先读 manifest 做身份、能力归属、配置校验和加载计划，再进入运行时注册。",
        role: "extension-point",
        status: "source-verified",
        doc: "../evidence-index.md#C-010"
      },
      {
        id: "registry",
        type: "extension",
        title: "Capability Registry",
        sub: "tools / providers / channels / hooks",
        ev: "C-012",
        x: 805,
        y: 410,
        w: 250,
        h: 92,
        tip: "运行时能力注册表让 Gateway 与 Agent 能消费插件提供的 capability。",
        role: "extension-point",
        status: "source-verified",
        doc: "../evidence-index.md#C-012"
      },
      {
        id: "bundled",
        type: "extension",
        title: "Bundled Plugins",
        sub: "extensions/**",
        ev: "C-003 C-013 C-014",
        x: 1100,
        y: 410,
        w: 205,
        h: 86,
        tip: "内置插件覆盖 provider、channel、tool、hook、service 等能力类型。",
        role: "extension-point",
        status: "source-verified",
        doc: "../evidence-index.md#C-003"
      },
      {
        id: "session",
        type: "state",
        title: "Session / Multi-agent",
        sub: "routing / owner / isolation",
        ev: "C-009 EXT-OC-004",
        x: 410,
        y: 630,
        w: 260,
        h: 86,
        tip: "会话和多 Agent 是一等隔离模型，绑定 workspace、state、auth profile 和 history。",
        role: "state",
        status: "official-supported",
        doc: "../evidence-index.md#C-009"
      },
      {
        id: "local",
        type: "state",
        title: "~/.openclaw",
        sub: "agentDir / auth / transcripts",
        ev: "C-009",
        x: 805,
        y: 630,
        w: 250,
        h: 86,
        tip: "本地持久化保存 agent 目录、认证、session 历史和 transcript。",
        role: "state",
        status: "source-verified",
        doc: "../evidence-index.md#C-009"
      }
    ],
    edges: [
      {
        from: "entry",
        to: "gateway",
        label: "外部请求",
        kind: "request-flow",
        ev: "C-004 C-006",
        doc: "../evidence-index.md#C-004"
      },
      {
        from: "ui",
        to: "gateway",
        label: "控制协议",
        kind: "sync-call",
        ev: "C-004 C-006",
        doc: "../evidence-index.md#C-004"
      },
      {
        from: "gateway",
        to: "agent",
        label: "agent RPC",
        kind: "sync-call",
        ev: "C-007 C-008",
        doc: "../evidence-index.md#C-007"
      },
      {
        from: "agent",
        to: "pi",
        label: "执行循环",
        kind: "request-flow",
        ev: "C-007 C-008",
        doc: "../evidence-index.md#C-007"
      },
      {
        from: "gateway",
        to: "session",
        label: "路由归属",
        kind: "request-flow",
        ev: "C-009 EXT-OC-004",
        doc: "../evidence-index.md#C-009"
      },
      {
        from: "agent",
        to: "session",
        label: "读写上下文",
        kind: "context-build",
        ev: "C-009 EXT-OC-004",
        doc: "../evidence-index.md#C-009"
      },
      {
        from: "session",
        to: "local",
        label: "持久化",
        kind: "read-write",
        ev: "C-009",
        doc: "../evidence-index.md#C-009"
      },
      {
        from: "bundled",
        to: "pluginControl",
        label: "声明能力",
        kind: "registration",
        ev: "C-010 C-011",
        doc: "../evidence-index.md#C-010"
      },
      {
        from: "pluginControl",
        to: "registry",
        label: "加载注册",
        kind: "registration",
        ev: "C-012",
        doc: "../evidence-index.md#C-012"
      },
      {
        from: "registry",
        to: "agent",
        label: "提供工具/模型/渠道",
        kind: "model-stream",
        ev: "C-007 C-008",
        doc: "../evidence-index.md#C-007"
      },
      {
        from: "registry",
        to: "gateway",
        label: "surface 消费",
        kind: "dependency",
        ev: "C-004 C-006",
        doc: "../evidence-index.md#C-004"
      }
    ]
  },
  {
    id: "flow",
    label: "运行主链路",
    title: "一次外部消息进入 Agent 的主路径",
    description: "这条链路突出 OpenClaw 的热路径：入口信任、session 路由、Agent 外壳、Pi runtime、delivery 与 transcript。",
    width: 1320,
    height: 650,
    nodes: [
      {
        id: "f1",
        type: "entry",
        title: "Channel / CLI / WS",
        sub: "incoming event",
        ev: "C-004 C-005 C-013",
        x: 60,
        y: 260,
        w: 170,
        h: 78,
        tip: "外部消息或 CLI 命令进入 Gateway。",
        role: "adapter",
        status: "source-verified",
        doc: "../evidence-index.md#C-004"
      },
      {
        id: "f2",
        type: "core",
        title: "Gateway Ingress",
        sub: "senderIsOwner / model override",
        ev: "C-008",
        x: 285,
        y: 260,
        w: 190,
        h: 78,
        tip: "网络入口必须显式携带 owner 和 model override 信任事实。",
        role: "module",
        status: "source-verified",
        doc: "../evidence-index.md#C-008"
      },
      {
        id: "f3",
        type: "state",
        title: "Session Routing",
        sub: "DM / group / cron / webhook",
        ev: "C-009",
        x: 530,
        y: 260,
        w: 190,
        h: 78,
        tip: "按来源、会话和 Agent 归属决定上下文边界。",
        role: "state",
        status: "source-verified",
        doc: "../evidence-index.md#C-009"
      },
      {
        id: "f4",
        type: "runtime",
        title: "agentCommandFromIngress",
        sub: "normalized command",
        ev: "C-007 C-008",
        x: 775,
        y: 260,
        w: 210,
        h: 78,
        tip: "把外部入口命令归一到 Agent runtime 可处理的形态。",
        role: "runtime-object",
        status: "source-verified",
        doc: "../evidence-index.md#C-007"
      },
      {
        id: "f5",
        type: "runtime",
        title: "Pi Runtime",
        sub: "loop / tools / model",
        ev: "C-007 C-008",
        x: 1040,
        y: 190,
        w: 180,
        h: 78,
        tip: "执行模型循环和工具调用。",
        role: "runtime-object",
        status: "source-verified",
        doc: "../evidence-index.md#C-007"
      },
      {
        id: "f6",
        type: "extension",
        title: "Delivery / Channel Send",
        sub: "reply / outbound",
        ev: "C-013 C-014",
        x: 1040,
        y: 365,
        w: 180,
        h: 78,
        tip: "把 Agent 结果交给对应 delivery 或 channel 发送。",
        role: "extension-point",
        status: "source-verified",
        doc: "../evidence-index.md#C-013"
      },
      {
        id: "f7",
        type: "state",
        title: "Transcript / State",
        sub: "history / auth / workspace",
        ev: "C-009",
        x: 530,
        y: 455,
        w: 190,
        h: 78,
        tip: "运行结果、session 历史和本地状态被持久化。",
        role: "state",
        status: "source-verified",
        doc: "../evidence-index.md#C-009"
      }
    ],
    edges: [
      {
        from: "f1",
        to: "f2",
        label: "接入",
        kind: "request-flow",
        ev: "C-008",
        doc: "../evidence-index.md#C-008"
      },
      {
        from: "f2",
        to: "f3",
        label: "鉴权事实",
        kind: "permission-check",
        ev: "C-009",
        doc: "../evidence-index.md#C-009"
      },
      {
        from: "f3",
        to: "f4",
        label: "上下文",
        kind: "context-build",
        ev: "C-007 C-008",
        doc: "../evidence-index.md#C-007"
      },
      {
        from: "f4",
        to: "f5",
        label: "执行",
        kind: "request-flow",
        ev: "C-007 C-008",
        doc: "../evidence-index.md#C-007"
      },
      {
        from: "f5",
        to: "f6",
        label: "结果",
        kind: "result-return",
        ev: "C-013 C-014",
        doc: "../evidence-index.md#C-013"
      },
      {
        from: "f4",
        to: "f7",
        label: "记录",
        kind: "read-write",
        ev: "C-009",
        doc: "../evidence-index.md#C-009"
      },
      {
        from: "f6",
        to: "f7",
        label: "投递状态",
        kind: "read-write",
        ev: "C-009",
        doc: "../evidence-index.md#C-009"
      }
    ]
  },
  {
    id: "layers",
    label: "分层视图",
    title: "分层边界与依赖方向",
    description: "分层图适合快速判断哪些模块是入口适配，哪些是 Gateway 控制面，哪些属于 Agent runtime 或插件能力。",
    width: 1120,
    height: 790,
    layers: [
      {
        type: "entry",
        title: "接入层",
        sub: "CLI / HTTP / WS / Channel / UI",
        ev: "C-004 C-005 C-013",
        items: [
          "CLI",
          "HTTP/WS",
          "Channel",
          "UI/Nodes"
        ],
        role: "adapter",
        status: "source-verified",
        doc: "../evidence-index.md#C-004",
        tip: "CLI / HTTP / WS / Channel / UI"
      },
      {
        type: "core",
        title: "Gateway 控制层",
        sub: "protocol / events / nodes / security / pairing",
        ev: "C-004 C-006",
        items: [
          "RPC",
          "events",
          "pairing",
          "node registry"
        ],
        role: "module",
        status: "source-verified",
        doc: "../evidence-index.md#C-004",
        tip: "protocol / events / nodes / security / pairing"
      },
      {
        type: "runtime",
        title: "Agent 执行层",
        sub: "OpenClaw shell + Pi agent core",
        ev: "C-007 C-008",
        items: [
          "workspace",
          "session",
          "model/tools",
          "delivery"
        ],
        role: "runtime-object",
        status: "source-verified",
        doc: "../evidence-index.md#C-007",
        tip: "OpenClaw shell + Pi agent core"
      },
      {
        type: "extension",
        title: "插件能力层",
        sub: "manifest / validation / runtime registration / surface consumption",
        ev: "C-010 C-011 C-012",
        items: [
          "manifest",
          "registry",
          "provider",
          "channel"
        ],
        role: "extension-point",
        status: "source-verified",
        doc: "../evidence-index.md#C-010",
        tip: "manifest / validation / runtime registration / surface consumption"
      },
      {
        type: "state",
        title: "状态与隔离层",
        sub: "session / multi-agent / auth profile / transcripts",
        ev: "C-009 EXT-OC-004",
        items: [
          "agentDir",
          "auth",
          "history",
          "transcript"
        ],
        role: "state",
        status: "official-supported",
        doc: "../evidence-index.md#C-009",
        tip: "session / multi-agent / auth profile / transcripts"
      },
      {
        type: "infra",
        title: "本地基础设施",
        sub: "local-first device and gateway process",
        ev: "C-001 C-004",
        items: [
          "desktop",
          "config",
          "logs",
          "node"
        ],
        role: "external-dependency",
        status: "source-verified",
        doc: "../evidence-index.md#C-001",
        tip: "local-first device and gateway process"
      }
    ]
  }
];
