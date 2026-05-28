window.ARCHITECTURE_META = {
  title: "Understand Anything 可视化架构图",
  description: "展示从多平台 Skill 到知识图谱生产流水线、核心图谱契约、Dashboard 消费和增量更新的关系。",
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
    title: "Portable Skill Package + KnowledgeGraph IR + Dashboard",
    description: "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
    width: 1380,
    height: 820,
    nodes: [
      {
        id: "platform",
        type: "entry",
        role: "adapter",
        title: "平台接入",
        sub: "Claude / Codex / Copilot / Cursor",
        ev: "UA-001 UA-017",
        doc: "../evidence-index.md#UA-017",
        status: "source-verified",
        x: 60,
        y: 115,
        w: 235,
        h: 82,
        tip: "多平台 manifest 和 install.sh 将同一组 skills/agents 链接到不同 AI coding 平台。"
      },
      {
        id: "skills",
        type: "entry",
        role: "command-surface",
        title: "Skills 命令面",
        sub: "/understand / dashboard / chat",
        ev: "UA-005 UA-015 UA-016",
        doc: "../evidence-index.md#UA-005",
        status: "source-verified",
        x: 355,
        y: 115,
        w: 245,
        h: 82,
        tip: "Skill 文件定义用户命令、参数、输入输出路径和调度流程。"
      },
      {
        id: "pipeline",
        type: "runtime",
        role: "orchestrator",
        title: "图谱生产流水线",
        sub: "scan / batch / agents / merge",
        ev: "UA-005 UA-008 UA-011",
        doc: "../evidence-index.md#UA-005",
        status: "source-verified",
        x: 660,
        y: 105,
        w: 265,
        h: 96,
        tip: "/understand 编排确定性脚本和 LLM Agent，把项目转成 assembled graph。"
      },
      {
        id: "core",
        type: "core",
        role: "library",
        title: "@understand-anything/core",
        sub: "types / schema / parser / search",
        ev: "UA-004 UA-009 UA-010",
        doc: "../evidence-index.md#UA-010",
        status: "source-verified",
        x: 1000,
        y: 115,
        w: 280,
        h: 86,
        tip: "core 定义 KnowledgeGraph、schema、Tree-sitter plugin、registry、GraphBuilder、搜索和增量能力。"
      },
      {
        id: "graph",
        type: "state",
        role: "intermediate-representation",
        title: "KnowledgeGraph",
        sub: ".understand-anything/knowledge-graph.json",
        ev: "UA-010 INF-002",
        doc: "../evidence-index.md#UA-010",
        status: "source-verified",
        x: 660,
        y: 340,
        w: 280,
        h: 96,
        tip: "统一中间表示：代码图、领域图和知识库图都复用同一节点/边/layer/tour 契约。"
      },
      {
        id: "dashboard",
        type: "runtime",
        role: "consumer-ui",
        title: "Dashboard",
        sub: "React Flow / Zustand / token gate",
        ev: "UA-013 UA-014",
        doc: "../evidence-index.md#UA-013",
        status: "source-verified",
        x: 1000,
        y: 330,
        w: 280,
        h: 96,
        tip: "Dashboard 加载并校验图谱，建立索引和视图状态，通过受控端点读取源码。"
      },
      {
        id: "assistants",
        type: "runtime",
        role: "graph-consumer",
        title: "辅助理解技能",
        sub: "chat / explain / diff / onboard",
        ev: "UA-015",
        doc: "../evidence-index.md#UA-015",
        status: "source-verified",
        x: 360,
        y: 340,
        w: 245,
        h: 90,
        tip: "辅助技能不重新扫描项目，而是消费 KnowledgeGraph 构造 LLM 上下文或 Markdown 输出。"
      },
      {
        id: "domainKnowledge",
        type: "extension",
        role: "graph-mode",
        title: "领域 / 知识模式",
        sub: "domain-graph / kind=knowledge",
        ev: "UA-016 EXT-UA-005",
        doc: "../evidence-index.md#UA-016",
        status: "source-verified",
        x: 665,
        y: 590,
        w: 265,
        h: 90,
        tip: "Domain 和 Knowledge 模式扩展节点/边语义，但仍保存为 KnowledgeGraph 家族产物。"
      },
      {
        id: "incremental",
        type: "policy",
        role: "cost-policy",
        title: "增量与成本控制",
        sub: "fingerprint / staleness / hook",
        ev: "UA-012 INF-003",
        doc: "../evidence-index.md#UA-012",
        status: "partially-verified",
        x: 60,
        y: 340,
        w: 240,
        h: 90,
        tip: "Fingerprint 和 auto-update hook 先判断结构变化，避免 cosmetic 变更消耗 LLM token。"
      }
    ],
    edges: [
      { from: "platform", to: "skills", label: "安装/暴露命令", kind: "registration", ev: "UA-017", doc: "../evidence-index.md#UA-017" },
      { from: "skills", to: "pipeline", label: "调用主流程", kind: "request-flow", ev: "UA-005", doc: "../evidence-index.md#UA-005" },
      { from: "pipeline", to: "core", label: "复用分析库", kind: "dependency", ev: "UA-004 UA-009", doc: "../evidence-index.md#UA-009" },
      { from: "pipeline", to: "graph", label: "写入图谱", kind: "read-write", ev: "UA-005 UA-010", doc: "../evidence-index.md#UA-010" },
      { from: "graph", to: "dashboard", label: "加载/校验/展示", kind: "request-flow", ev: "UA-013 UA-014", doc: "../evidence-index.md#UA-013" },
      { from: "graph", to: "assistants", label: "构造问答上下文", kind: "context-build", ev: "UA-015", doc: "../evidence-index.md#UA-015" },
      { from: "domainKnowledge", to: "graph", label: "复用图谱契约", kind: "dependency", ev: "UA-016 INF-002", doc: "../evidence-index.md#UA-016" },
      { from: "incremental", to: "pipeline", label: "控制重跑范围", kind: "permission-check", ev: "UA-012", doc: "../evidence-index.md#UA-012" }
    ]
  },
  {
    id: "understand-flow",
    label: "/understand 主链路",
    title: "从项目路径到 knowledge-graph.json",
    description: "回答：一次 /understand 如何从项目目录生成可消费知识图谱？",
    width: 1460,
    height: 820,
    nodes: [
      { id: "preflight", type: "entry", role: "bootstrap", title: "Pre-flight", sub: "root / plugin / config / language", ev: "UA-005", doc: "../evidence-index.md#UA-005", status: "source-verified", x: 60, y: 120, w: 220, h: 82, tip: "解析项目根目录、worktree redirect、PLUGIN_ROOT、core build、autoUpdate 和输出语言。" },
      { id: "scan", type: "runtime", role: "deterministic-step", title: "项目扫描", sub: "scan-project.mjs", ev: "UA-006", doc: "../evidence-index.md#UA-006", status: "source-verified", x: 330, y: 120, w: 220, h: 82, tip: "枚举文件、应用 ignore、检测语言/类别、统计行数和复杂度。" },
      { id: "imports", type: "runtime", role: "deterministic-step", title: "ImportMap", sub: "extract-import-map.mjs", ev: "UA-007", doc: "../evidence-index.md#UA-007", status: "source-verified", x: 600, y: 120, w: 220, h: 82, tip: "预解析项目内部 imports，非代码文件为空，Tree-sitter 失败时降级为空图。" },
      { id: "batches", type: "runtime", role: "batcher", title: "语义批处理", sub: "Louvain + neighborMap", ev: "UA-008", doc: "../evidence-index.md#UA-008", status: "source-verified", x: 870, y: 120, w: 245, h: 82, tip: "按 import graph 社区分组，合并过小 batch，生成 batchImportData 和 cross-batch neighborMap。" },
      { id: "fileAgents", type: "runtime", role: "llm-agent-pool", title: "File Analyzer 并发", sub: "up to 5 subagents", ev: "UA-005 UA-011", doc: "../evidence-index.md#UA-011", status: "source-verified", x: 1180, y: 120, w: 230, h: 82, tip: "每个 batch 由 file-analyzer 产出 GraphNode 和 GraphEdge JSON，最多 5 个并发。" },
      { id: "merge", type: "core", role: "normalizer", title: "合并与标准化", sub: "merge / review / validate", ev: "UA-005 UA-010 UA-011", doc: "../evidence-index.md#UA-010", status: "source-verified", x: 465, y: 360, w: 255, h: 90, tip: "合并 batch JSON，标准化 ID/类型/复杂度/方向，去重和清理 dangling edges，再进行审查。" },
      { id: "layersTour", type: "runtime", role: "semantic-agent", title: "分层与导览", sub: "architecture-analyzer / tour-builder", ev: "UA-005 UA-011", doc: "../evidence-index.md#UA-011", status: "source-verified", x: 795, y: 360, w: 255, h: 90, tip: "在 assembled graph 基础上补充 layers 和 guided tour。" },
      { id: "save", type: "state", role: "persistence", title: "保存图谱", sub: "graph / meta / fingerprints", ev: "UA-005 UA-012", doc: "../evidence-index.md#UA-012", status: "source-verified", x: 615, y: 605, w: 275, h: 90, tip: "保存 knowledge-graph.json，生成 fingerprints baseline，写 meta.json，并清理 intermediate/tmp。" }
    ],
    edges: [
      { from: "preflight", to: "scan", label: "确定项目上下文", kind: "request-flow", ev: "UA-005 UA-006", doc: "../evidence-index.md#UA-005" },
      { from: "scan", to: "imports", label: "文件列表", kind: "request-flow", ev: "UA-006 UA-007", doc: "../evidence-index.md#UA-007" },
      { from: "imports", to: "batches", label: "import graph", kind: "request-flow", ev: "UA-007 UA-008", doc: "../evidence-index.md#UA-008" },
      { from: "batches", to: "fileAgents", label: "batch context", kind: "context-build", ev: "UA-008 UA-011", doc: "../evidence-index.md#UA-011" },
      { from: "fileAgents", to: "merge", label: "batch JSON", kind: "result-return", ev: "UA-011", doc: "../evidence-index.md#UA-011" },
      { from: "merge", to: "layersTour", label: "assembled graph", kind: "request-flow", ev: "UA-005 UA-011", doc: "../evidence-index.md#UA-005" },
      { from: "layersTour", to: "save", label: "final graph", kind: "read-write", ev: "UA-005 UA-012", doc: "../evidence-index.md#UA-012" },
      { from: "merge", to: "save", label: "validation path", kind: "permission-check", ev: "UA-010", doc: "../evidence-index.md#UA-010" }
    ]
  },
  {
    id: "graph-contract",
    label: "图谱契约",
    title: "KnowledgeGraph 作为系统 IR",
    description: "回答：哪些生产端和消费端依赖同一个图谱契约？",
    width: 1380,
    height: 820,
    nodes: [
      { id: "types", type: "core", role: "schema-model", title: "Graph Types", sub: "21 node types / 35 edge types", ev: "UA-010", doc: "../evidence-index.md#UA-010", status: "source-verified", x: 110, y: 100, w: 245, h: 86, tip: "types.ts 定义 code/non-code/domain/knowledge 节点与关系类型。" },
      { id: "schema", type: "policy", role: "validation-policy", title: "Schema + AutoFix", sub: "aliases / sanitize / validate", ev: "UA-010", doc: "../evidence-index.md#UA-010", status: "source-verified", x: 440, y: 100, w: 245, h: 86, tip: "schema.ts 用 alias 和 autoFix 吸收 LLM 输出的不稳定格式。" },
      { id: "builder", type: "core", role: "graph-builder", title: "GraphBuilder", sub: "structure -> nodes/edges", ev: "UA-010", doc: "../evidence-index.md#UA-010", status: "source-verified", x: 770, y: 100, w: 245, h: 86, tip: "GraphBuilder 将结构事实转成 file/function/class/non-code 节点和关系。" },
      { id: "kg", type: "state", role: "ir", title: "KnowledgeGraph JSON", sub: "version / project / nodes / edges / layers / tour", ev: "UA-010 INF-002", doc: "../evidence-index.md#INF-002", status: "source-verified", x: 525, y: 330, w: 320, h: 96, tip: "图谱是中心契约，既承载结构事实，也承载语义摘要、layers 和 tour。" },
      { id: "dash", type: "runtime", role: "ui-consumer", title: "Dashboard", sub: "validate + indexes + views", ev: "UA-013", doc: "../evidence-index.md#UA-013", status: "source-verified", x: 150, y: 590, w: 245, h: 86, tip: "Dashboard 通过 validateGraph 加载图谱，再在 store 中建立节点/layer/search/view 状态。" },
      { id: "chat", type: "runtime", role: "llm-context-consumer", title: "Chat / Explain", sub: "search + 1-hop + layer", ev: "UA-015", doc: "../evidence-index.md#UA-015", status: "source-verified", x: 475, y: 590, w: 245, h: 86, tip: "Chat 和 Explain 从图谱构造 LLM prompt 上下文，不重新扫描源码。" },
      { id: "domain", type: "extension", role: "mode-consumer", title: "Domain / Knowledge", sub: "domain graph / kind=knowledge", ev: "UA-016", doc: "../evidence-index.md#UA-016", status: "source-verified", x: 800, y: 590, w: 245, h: 86, tip: "领域图和知识库图通过扩展节点/边类型复用同一 KnowledgeGraph 家族。" },
      { id: "onboard", type: "runtime", role: "document-consumer", title: "Onboard / Diff", sub: "markdown / overlay", ev: "UA-015", doc: "../evidence-index.md#UA-015", status: "source-verified", x: 1125, y: 590, w: 220, h: 86, tip: "Onboard 从 graph 生成学习文档，Diff 基于 graph 节点和关系生成影响叠加。" }
    ],
    edges: [
      { from: "types", to: "kg", label: "定义数据模型", kind: "dependency", ev: "UA-010", doc: "../evidence-index.md#UA-010" },
      { from: "schema", to: "kg", label: "校验/修复", kind: "permission-check", ev: "UA-010", doc: "../evidence-index.md#UA-010" },
      { from: "builder", to: "kg", label: "构造节点边", kind: "request-flow", ev: "UA-010", doc: "../evidence-index.md#UA-010" },
      { from: "kg", to: "dash", label: "可视化", kind: "request-flow", ev: "UA-013", doc: "../evidence-index.md#UA-013" },
      { from: "kg", to: "chat", label: "LLM 上下文", kind: "context-build", ev: "UA-015", doc: "../evidence-index.md#UA-015" },
      { from: "kg", to: "domain", label: "模式扩展", kind: "dependency", ev: "UA-016", doc: "../evidence-index.md#UA-016" },
      { from: "kg", to: "onboard", label: "文档/影响", kind: "result-return", ev: "UA-015", doc: "../evidence-index.md#UA-015" }
    ]
  },
  {
    id: "dashboard-security",
    label: "Dashboard 与源码访问",
    title: "本地图谱 UI 的数据边界",
    description: "回答：Dashboard 如何读取图谱和源码，同时避免任意文件读取？",
    width: 1370,
    height: 760,
    nodes: [
      { id: "vite", type: "infra", role: "local-server", title: "Vite 本地服务", sub: "GRAPH_DIR + protected endpoints", ev: "UA-014", doc: "../evidence-index.md#UA-014", status: "source-verified", x: 90, y: 130, w: 250, h: 90, tip: "Vite 通过 GRAPH_DIR 或 cwd 查找 .understand-anything，并为数据端点加 token 保护。" },
      { id: "token", type: "policy", role: "access-token", title: "一次性 Token", sub: "?token=ACCESS_TOKEN", ev: "UA-013 UA-014", doc: "../evidence-index.md#UA-014", status: "source-verified", x: 420, y: 130, w: 230, h: 90, tip: "服务启动时生成 token，React 从 URL/sessionStorage 使用，所有数据端点都校验 token。" },
      { id: "json", type: "state", role: "data-files", title: "图谱数据文件", sub: "graph / domain / diff / meta / config", ev: "UA-013 UA-014", doc: "../evidence-index.md#UA-013", status: "source-verified", x: 730, y: 130, w: 260, h: 90, tip: "Dashboard 加载 knowledge、domain、diff、meta、config，并对 graph/domain 调用 validateGraph。" },
      { id: "store", type: "runtime", role: "client-state", title: "Zustand Store", sub: "indexes / search / view mode", ev: "UA-013", doc: "../evidence-index.md#UA-013", status: "source-verified", x: 1080, y: 130, w: 230, h: 90, tip: "setGraph 建立 nodesById、layer map、SearchEngine、视图模式和缓存状态。" },
      { id: "sourceRequest", type: "entry", role: "file-preview-request", title: "源码预览请求", sub: "/file-content.json?path=", ev: "UA-014", doc: "../evidence-index.md#UA-014", status: "source-verified", x: 250, y: 430, w: 260, h: 90, tip: "用户点击文件节点后请求源码内容，但请求必须走 file-content endpoint。" },
      { id: "allowlist", type: "policy", role: "path-policy", title: "路径与图谱白名单", sub: "no absolute / no escape / graph filePath only", ev: "UA-014", doc: "../evidence-index.md#UA-014", status: "source-verified", x: 610, y: 430, w: 300, h: 90, tip: "endpoint 拒绝绝对路径、路径逃逸、未出现在 knowledge graph 的文件。" },
      { id: "content", type: "state", role: "source-content", title: "受限源码内容", sub: "max 1MB / no binary", ev: "UA-014", doc: "../evidence-index.md#UA-014", status: "source-verified", x: 1010, y: 430, w: 250, h: 90, tip: "源码读取限制大小并拒绝二进制，返回相对 path、language、content、size 和 lineCount。" }
    ],
    edges: [
      { from: "vite", to: "token", label: "生成并要求", kind: "permission-check", ev: "UA-014", doc: "../evidence-index.md#UA-014" },
      { from: "token", to: "json", label: "授权读取", kind: "permission-check", ev: "UA-013 UA-014", doc: "../evidence-index.md#UA-013" },
      { from: "json", to: "store", label: "校验后建索引", kind: "request-flow", ev: "UA-013", doc: "../evidence-index.md#UA-013" },
      { from: "sourceRequest", to: "allowlist", label: "路径校验", kind: "permission-check", ev: "UA-014", doc: "../evidence-index.md#UA-014" },
      { from: "allowlist", to: "content", label: "读取源码", kind: "request-flow", ev: "UA-014", doc: "../evidence-index.md#UA-014" },
      { from: "json", to: "allowlist", label: "提供 filePath 白名单", kind: "read-write", ev: "UA-014", doc: "../evidence-index.md#UA-014" }
    ]
  },
  {
    id: "extension-model",
    label: "扩展机制",
    title: "Skills / Agents / Registry / Platforms",
    description: "回答：Understand Anything 的扩展点分别位于哪些层？",
    width: 1360,
    height: 760,
    nodes: [
      { id: "manifest", type: "entry", role: "platform-manifest", title: "平台 Manifest", sub: ".claude / .copilot / .cursor", ev: "UA-017", doc: "../evidence-index.md#UA-017", status: "source-verified", x: 80, y: 120, w: 245, h: 86, tip: "不同平台 manifest 和 marketplace 指向同一 plugin 源码、skills 和 agents。" },
      { id: "installer", type: "entry", role: "installer", title: "安装脚本", sub: "per-skill / folder symlink", ev: "UA-017 INF-005", doc: "../evidence-index.md#UA-017", status: "source-verified", x: 405, y: 120, w: 245, h: 86, tip: "install.sh 用平台表选择目标 skills 目录和 symlink 风格。" },
      { id: "skillExt", type: "extension", role: "command-extension", title: "Skill 扩展", sub: "user-facing commands", ev: "UA-005 UA-015 UA-016", doc: "../evidence-index.md#UA-005", status: "source-verified", x: 730, y: 120, w: 245, h: 86, tip: "新增用户能力通常表现为新增 skill，定义命令、参数、输入和输出。" },
      { id: "agentExt", type: "extension", role: "semantic-agent-extension", title: "Agent 扩展", sub: "semantic analysis roles", ev: "UA-011", doc: "../evidence-index.md#UA-011", status: "source-verified", x: 1055, y: 120, w: 245, h: 86, tip: "新增语义任务表现为新增 agent prompt，并通过 intermediate JSON 交接。" },
      { id: "parserRegistry", type: "core", role: "parser-extension", title: "Parser Registry", sub: "AnalyzerPlugin / Tree-sitter / non-code", ev: "UA-009", doc: "../evidence-index.md#UA-009", status: "source-verified", x: 245, y: 420, w: 285, h: 90, tip: "新增语言或非代码格式应接入 AnalyzerPlugin/PluginRegistry，而不是上层流程硬编码。" },
      { id: "langFramework", type: "core", role: "language-framework-extension", title: "Language / Framework", sub: "configs + framework addenda", ev: "UA-005 UA-009", doc: "../evidence-index.md#UA-009", status: "source-verified", x: 625, y: 420, w: 285, h: 90, tip: "语言配置驱动 parser 和 prompt context，框架识别影响 architecture analyzer 的语义判断。" },
      { id: "hook", type: "policy", role: "automation-extension", title: "Auto-update Hook", sub: "post-commit + fingerprint gate", ev: "UA-012", doc: "../evidence-index.md#UA-012", status: "partially-verified", x: 1005, y: 420, w: 245, h: 90, tip: "Hook 基于 fingerprint 变更分类决定是否跳过、局部更新或提示全量重建。" }
    ],
    edges: [
      { from: "manifest", to: "installer", label: "安装/发现", kind: "registration", ev: "UA-017", doc: "../evidence-index.md#UA-017" },
      { from: "installer", to: "skillExt", label: "链接 skills", kind: "registration", ev: "UA-017", doc: "../evidence-index.md#UA-017" },
      { from: "skillExt", to: "agentExt", label: "调度语义角色", kind: "async-event", ev: "UA-005 UA-011", doc: "../evidence-index.md#UA-011" },
      { from: "skillExt", to: "parserRegistry", label: "调用确定性解析", kind: "dependency", ev: "UA-009", doc: "../evidence-index.md#UA-009" },
      { from: "parserRegistry", to: "langFramework", label: "语言/框架配置", kind: "dependency", ev: "UA-009", doc: "../evidence-index.md#UA-009" },
      { from: "hook", to: "skillExt", label: "触发增量路径", kind: "async-event", ev: "UA-012", doc: "../evidence-index.md#UA-012" }
    ]
  }
];

