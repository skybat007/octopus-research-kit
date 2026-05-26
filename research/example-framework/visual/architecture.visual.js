window.ARCHITECTURE_META = {
  title: "示例框架可视化结构图",
  description: "模板示例，用于复制后替换为真实框架的架构证据。",
  sourceDocs: [
    "../architecture.md",
    "../runtime-flows.md",
    "../source-map.md",
    "../evidence-index.md"
  ]
};

window.ARCHITECTURE_VIEWS = [
  {
    id: "researchFlow",
    label: "调研流程",
    title: "外部资料 -> 研究问题 -> 源码验证 -> 架构产物",
    description: "这个视图展示新版技术调研方式：先建立外部认知，再转成可验证问题，最后用源码和证据索引支撑架构文档。",
    width: 1320,
    height: 650,
    nodes: [
      {
        id: "r1",
        type: "entry",
        title: "调研简报",
        sub: "research-brief.md",
        ev: "TPL-001",
        x: 60,
        y: 260,
        w: 180,
        h: 78,
        tip: "定义目标、范围、问题和交付物。",
        role: "adapter",
        status: "pending",
        doc: "../evidence-index.md"
      },
      {
        id: "r2",
        type: "entry",
        title: "外部资料调研",
        sub: "external-research.md",
        ev: "TPL-002",
        x: 300,
        y: 180,
        w: 190,
        h: 78,
        tip: "收集官方、协作和社区资料，标记可信度。",
        role: "adapter",
        status: "pending",
        doc: "../evidence-index.md"
      },
      {
        id: "r3",
        type: "core",
        title: "研究问题",
        sub: "research-questions.md",
        ev: "TPL-003",
        x: 300,
        y: 340,
        w: 190,
        h: 78,
        tip: "把外部资料中的关键说法转成源码验证问题。",
        role: "module",
        status: "pending",
        doc: "../evidence-index.md"
      },
      {
        id: "r4",
        type: "runtime",
        title: "源码地图",
        sub: "source-map.md",
        ev: "TPL-004",
        x: 560,
        y: 260,
        w: 180,
        h: 78,
        tip: "定位入口、模块边界和阅读顺序。",
        role: "runtime-object",
        status: "pending",
        doc: "../evidence-index.md"
      },
      {
        id: "r5",
        type: "core",
        title: "架构与流程",
        sub: "architecture.md / runtime-flows.md",
        ev: "TPL-005",
        x: 800,
        y: 210,
        w: 210,
        h: 78,
        tip: "沉淀模块关系、依赖方向和运行主链路。",
        role: "module",
        status: "pending",
        doc: "../evidence-index.md"
      },
      {
        id: "r6",
        type: "extension",
        title: "核心抽象与扩展点",
        sub: "key-abstractions / extension-points",
        ev: "TPL-006",
        x: 800,
        y: 360,
        w: 210,
        h: 78,
        tip: "提炼核心对象、接口、插件、Hook、Provider 等扩展机制。",
        role: "extension-point",
        status: "pending",
        doc: "../evidence-index.md"
      },
      {
        id: "r7",
        type: "state",
        title: "证据索引与审查",
        sub: "evidence-index / research-review",
        ev: "TPL-007",
        x: 1080,
        y: 285,
        w: 190,
        h: 78,
        tip: "所有关键结论回到源码、官方资料或明确推断。",
        role: "state",
        status: "pending",
        doc: "../evidence-index.md"
      }
    ],
    edges: [
      {
        from: "r1",
        to: "r2",
        label: "确定范围",
        kind: "sync-call",
        ev: "TPL-002",
        doc: "../evidence-index.md"
      },
      {
        from: "r2",
        to: "r3",
        label: "形成问题",
        kind: "sync-call",
        ev: "TPL-003",
        doc: "../evidence-index.md"
      },
      {
        from: "r3",
        to: "r4",
        label: "源码验证",
        kind: "sync-call",
        ev: "TPL-004",
        doc: "../evidence-index.md"
      },
      {
        from: "r4",
        to: "r5",
        label: "支撑架构",
        kind: "sync-call",
        ev: "TPL-005",
        doc: "../evidence-index.md"
      },
      {
        from: "r4",
        to: "r6",
        label: "支撑抽象",
        kind: "sync-call",
        ev: "TPL-006",
        doc: "../evidence-index.md"
      },
      {
        from: "r5",
        to: "r7",
        label: "记录证据",
        kind: "read-write",
        ev: "TPL-007",
        doc: "../evidence-index.md"
      },
      {
        from: "r6",
        to: "r7",
        label: "记录证据",
        kind: "read-write",
        ev: "TPL-007",
        doc: "../evidence-index.md"
      }
    ]
  },
  {
    id: "placeholder",
    label: "架构占位",
    title: "真实框架架构图的占位结构",
    description: "复制本文件时，将入口、核心、运行时、扩展点、状态和基础设施替换为真实框架的模块。",
    width: 1240,
    height: 720,
    nodes: [
      {
        id: "entry",
        type: "entry",
        title: "入口层",
        sub: "CLI / API / UI / Gateway",
        ev: "EVD-占位-001",
        x: 70,
        y: 110,
        w: 210,
        h: 82,
        tip: "替换为真实入口证据。",
        role: "adapter",
        status: "pending",
        doc: "../evidence-index.md"
      },
      {
        id: "core",
        type: "core",
        title: "核心控制面",
        sub: "Router / Registry / Policy",
        ev: "EVD-占位-002",
        x: 420,
        y: 110,
        w: 230,
        h: 92,
        tip: "替换为真实核心模块证据。",
        role: "module",
        status: "pending",
        doc: "../evidence-index.md"
      },
      {
        id: "runtime",
        type: "runtime",
        title: "执行运行时",
        sub: "Loop / Worker / Scheduler",
        ev: "EVD-占位-003",
        x: 830,
        y: 110,
        w: 230,
        h: 82,
        tip: "替换为真实执行链路证据。",
        role: "runtime-object",
        status: "pending",
        doc: "../evidence-index.md"
      },
      {
        id: "extension",
        type: "extension",
        title: "扩展机制",
        sub: "Plugin / Hook / Provider / Tool",
        ev: "EVD-占位-004",
        x: 420,
        y: 350,
        w: 250,
        h: 86,
        tip: "替换为真实扩展点证据。",
        role: "extension-point",
        status: "pending",
        doc: "../evidence-index.md"
      },
      {
        id: "state",
        type: "state",
        title: "状态与持久化",
        sub: "Session / Memory / Config",
        ev: "EVD-占位-005",
        x: 95,
        y: 500,
        w: 230,
        h: 82,
        tip: "替换为真实状态边界证据。",
        role: "state",
        status: "pending",
        doc: "../evidence-index.md"
      },
      {
        id: "infra",
        type: "infra",
        title: "基础设施",
        sub: "Auth / Network / Sandbox / Logs",
        ev: "EVD-占位-006",
        x: 830,
        y: 500,
        w: 230,
        h: 82,
        tip: "替换为真实基础设施证据。",
        role: "external-dependency",
        status: "pending",
        doc: "../evidence-index.md"
      }
    ],
    edges: [
      {
        from: "entry",
        to: "core",
        label: "请求进入",
        kind: "request-flow",
        ev: "EVD-占位-002",
        doc: "../evidence-index.md"
      },
      {
        from: "core",
        to: "runtime",
        label: "调度执行",
        kind: "request-flow",
        ev: "EVD-占位-003",
        doc: "../evidence-index.md"
      },
      {
        from: "core",
        to: "extension",
        label: "发现/注册",
        kind: "registration",
        ev: "EVD-占位-004",
        doc: "../evidence-index.md"
      },
      {
        from: "extension",
        to: "runtime",
        label: "提供能力",
        kind: "registration",
        ev: "EVD-占位-003",
        doc: "../evidence-index.md"
      },
      {
        from: "core",
        to: "state",
        label: "读写上下文",
        kind: "context-build",
        ev: "EVD-占位-005",
        doc: "../evidence-index.md"
      },
      {
        from: "runtime",
        to: "infra",
        label: "依赖",
        kind: "dependency",
        ev: "EVD-占位-006",
        doc: "../evidence-index.md"
      }
    ]
  },
  {
    id: "layers",
    label: "分层模板",
    title: "可复用的分层视图模板",
    description: "适合表达 Mermaid 难以清晰呈现的横向模块、纵向依赖和证据归属。",
    width: 1120,
    height: 790,
    layers: [
      {
        type: "entry",
        title: "接入层",
        sub: "CLI / API / UI / Channel",
        ev: "EVD-占位-101",
        items: [
          "入口适配",
          "协议转换",
          "用户交互",
          "外部事件"
        ],
        role: "adapter",
        status: "pending",
        doc: "../evidence-index.md",
        tip: "CLI / API / UI / Channel"
      },
      {
        type: "core",
        title: "控制层",
        sub: "Routing / Registry / Policy",
        ev: "EVD-占位-102",
        items: [
          "配置加载",
          "注册表",
          "权限策略",
          "调度"
        ],
        role: "module",
        status: "pending",
        doc: "../evidence-index.md",
        tip: "Routing / Registry / Policy"
      },
      {
        type: "runtime",
        title: "执行层",
        sub: "Loop / Worker / Scheduler",
        ev: "EVD-占位-103",
        items: [
          "主循环",
          "任务执行",
          "错误处理",
          "结果生成"
        ],
        role: "runtime-object",
        status: "pending",
        doc: "../evidence-index.md",
        tip: "Loop / Worker / Scheduler"
      },
      {
        type: "extension",
        title: "能力层",
        sub: "Plugin / Hook / Provider / Tool",
        ev: "EVD-占位-104",
        items: [
          "工具",
          "Provider",
          "Hook",
          "插件"
        ],
        role: "extension-point",
        status: "pending",
        doc: "../evidence-index.md",
        tip: "Plugin / Hook / Provider / Tool"
      },
      {
        type: "state",
        title: "状态层",
        sub: "Session / Memory / Storage",
        ev: "EVD-占位-105",
        items: [
          "会话",
          "上下文",
          "记忆",
          "持久化"
        ],
        role: "state",
        status: "pending",
        doc: "../evidence-index.md",
        tip: "Session / Memory / Storage"
      },
      {
        type: "infra",
        title: "支撑层",
        sub: "Auth / Network / Logs / Sandbox",
        ev: "EVD-占位-106",
        items: [
          "鉴权",
          "网络",
          "日志",
          "隔离"
        ],
        role: "external-dependency",
        status: "pending",
        doc: "../evidence-index.md",
        tip: "Auth / Network / Logs / Sandbox"
      }
    ]
  }
];
