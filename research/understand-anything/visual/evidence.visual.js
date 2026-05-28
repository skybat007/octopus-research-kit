window.EVIDENCE_META = {
  "title": "Understand Anything 证据解释",
  "description": "从架构图回到证据解释：展示架构语境、证据结论、源码/文档片段和原始索引位置。",
  "source": "../evidence-index.md",
  "projectRoot": "/Users/cheng/IdeaProjects/Understand-Anything"
};

window.EVIDENCE_ITEMS = [
  {
    "id": "UA-001",
    "conclusion": "README 将项目定位为把 codebase、knowledge base、docs 转成 interactive knowledge graph，并提供 `/understand`、dashboard、chat、diff、domain、knowledge 等命令",
    "type": "repository doc fact",
    "location": "`README.md:4-6`, `README.md:46-48`, `README.md:119-168`, `README.md:274-297`",
    "confidence": "高",
    "verified": "",
    "note": "官方仓库 README",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "平台接入",
        "sub": "Claude / Codex / Copilot / Cursor",
        "role": "adapter",
        "status": "source-verified",
        "detail": "多平台 manifest 和 install.sh 将同一组 skills/agents 链接到不同 AI coding 平台。",
        "relation": ""
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「平台接入」。证据结论是：README 将项目定位为把 codebase、knowledge base、docs 转成 interactive knowledge graph，并提供 `/understand`、dashboard、chat、diff、domain、knowledge 等命令。图中的具体解释是：多平台 manifest 和 install.sh 将同一组 skills/agents 链接到不同 AI coding 平台。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "README.md:4-6",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/README.md",
        "relativePath": "README.md",
        "start": 4,
        "end": 6,
        "snippet": "    4    <strong>Turn any codebase, knowledge base, or docs into an interactive knowledge graph you can explore, search, and ask questions about.</strong>\n    5    <br />\n    6    <em>Works with Claude Code, Codex, Cursor, Copilot, Gemini CLI, and more.</em>",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "README.md:46-48",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/README.md",
        "relativePath": "README.md",
        "start": 46,
        "end": 48,
        "snippet": "   46  Understand Anything is a [Claude Code Plugin](https://code.claude.com/docs/en/plugins-reference#plugins-reference) that analyzes your project with a multi-agent pipeline, builds a knowledge graph of every file, function, class, and dependency, then gives you an interactive dashboard to explore it all visually. Stop reading code blind. Start seeing the big picture.\n   47  \n   48  > **The goal isn't a graph that wows you with how complex your codebase is — it's a graph that quietly teaches you how every piece fits together.**",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "README.md:119-168",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/README.md",
        "relativePath": "README.md",
        "start": 119,
        "end": 168,
        "snippet": "  119  A multi-agent pipeline scans your project, extracts every file, function, class, and dependency, then builds a knowledge graph saved to `.understand-anything/knowledge-graph.json`.\n  120  \n  121  **Localized output:** Use `--language` to generate content in your preferred language:\n  122  \n  123  ```bash\n  124  # Generate Chinese content (知识图节点描述和 Dashboard UI)\n  125  /understand --language zh\n  126  \n  127  # Supported languages: en (default), zh, zh-TW, ja, ko, ru\n  128  ```\n  129  \n  130  The `--language` parameter affects:\n  131  - Node summaries and descriptions in the knowledge graph\n  132  - Dashboard UI labels, buttons, and tooltips\n  133  - Guided tour explanations\n  134  \n  135  ### 3. Explore the dashboard\n  136  ",
        "omitted": "已截取 119-136 行，原始范围到 168 行。"
      },
      {
        "kind": "file",
        "display": "README.md:274-297",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/README.md",
        "relativePath": "README.md",
        "start": 274,
        "end": 297,
        "snippet": "  274  ### Tree-sitter + LLM hybrid\n  275  \n  276  Static analysis and LLMs do what each does best:\n  277  \n  278  - **Tree-sitter (deterministic)** — parses source into a concrete syntax tree and extracts structural facts: imports, exports, function/class definitions, call sites, inheritance. Pre-resolved into an `importMap` during the scan phase and passed to file-analyzers so they don't re-derive imports from source. Same input → same output, every run. Also powers fingerprint-based change detection for incremental updates.\n  279  - **LLM (semantic)** — reads the parsed structure alongside the original source to produce what parsers can't: plain-English summaries, tags, architectural layer assignments, business-domain mapping, guided tours, language concept callouts.\n  280  \n  281  This split is why the graph is reproducible on the structural side (the same code always yields the same edges) while still capturing intent on the semantic side (what a file is *for*, not just what it imports).\n  282  \n  283  ### Multi-Agent Pipeline\n  284  \n  285  The `/understand` command orchestrates 5 specialized agents, and `/understand-domain` adds a 6th:\n  286  \n  287  | Agent | Role |\n  288  |-------|------|\n  289  | `project-scanner` | Discover files, detect languages and frameworks |\n  290  | `file-analyzer` | Extract functions, classes, imports; produce graph nodes and edges |\n  291  | `architecture-analyzer` | Identify architectural layers |",
        "omitted": "已截取 274-291 行，原始范围到 297 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "UA-002",
    "conclusion": "本地快照 remote 为官方 GitHub 仓库，branch `main`，commit `26edf61856fa476e466bda1814819a266a293c47`；本地只有未跟踪 `.idea/`",
    "type": "source fact",
    "location": "`git remote get-url origin`, `git branch --show-current`, `git rev-parse HEAD`, `git status --short`",
    "confidence": "高",
    "verified": "",
    "note": "固定本轮调研版本",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "command",
        "display": "git remote get-url origin"
      },
      {
        "kind": "command",
        "display": "git branch --show-current"
      },
      {
        "kind": "command",
        "display": "git rev-parse HEAD"
      },
      {
        "kind": "command",
        "display": "git status --short"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "UA-003",
    "conclusion": "仓库自述架构为 pnpm monorepo，plugin 下含 core、dashboard、src、skills、agents；Dashboard 源码预览受 token 和 graph allowlist 控制",
    "type": "repository doc fact",
    "location": "`CLAUDE.md:10-18`, `CLAUDE.md:19-31`, `CLAUDE.md:50-52`",
    "confidence": "高",
    "verified": "",
    "note": "仓库内部架构说明",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "CLAUDE.md:10-18",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/CLAUDE.md",
        "relativePath": "CLAUDE.md",
        "start": 10,
        "end": 18,
        "snippet": "   10  ## Architecture\n   11  - **Monorepo** with pnpm workspaces\n   12  - **understand-anything-plugin/** — Claude Code plugin containing all source code:\n   13    - **packages/core** — Shared analysis engine (types, persistence, tree-sitter, search, schema, tours, plugins)\n   14    - **packages/dashboard** — React + TypeScript web dashboard (React Flow, Zustand, TailwindCSS v4)\n   15    - **src/** — Skill TypeScript source for `/understand-chat`, `/understand-diff`, `/understand-explain`, `/understand-onboard`\n   16    - **skills/** — Skill definitions (`/understand`, `/understand-dashboard`, etc.)\n   17    - **agents/** — Agent definitions (project-scanner, file-analyzer, architecture-analyzer, tour-builder, graph-reviewer)\n   18  ",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "CLAUDE.md:19-31",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/CLAUDE.md",
        "relativePath": "CLAUDE.md",
        "start": 19,
        "end": 31,
        "snippet": "   19  ## Dashboard\n   20  - Dark luxury theme: deep blacks (#0a0a0a), gold/amber accents (#d4a574), DM Serif Display typography\n   21  - Graph-first layout: 75% graph + 360px right sidebar\n   22  - No ChatPanel or Monaco Editor\n   23  - Sidebar tabs: `Info` (ProjectOverview default → NodeInfo when node selected → LearnPanel in Learn persona, composing) and `Files` (FileExplorer tree built from the structural graph)\n   24  - Code viewer: prism-react-renderer source viewer that slides up from the bottom on file node click; an expand button promotes it into a full-screen modal. Source content is fetched from the dev server's `/file-content.json` endpoint, gated by access token + a graph-derived path allowlist\n   25  - Schema validation on graph load with error banner\n   26  \n   27  ## Agent Pipeline\n   28  - Agents write intermediate results to `.understand-anything/intermediate/` on disk (not returned to context)\n   29  - Agent model field is omitted from frontmatter so each platform falls back to its configured default — `inherit` was a Claude Code-only keyword that opencode (and similar tools) treated as a literal model id and rejected with `ProviderModelNotFoundError` (see #167)\n   30  - `/understand` auto-triggers `/understand-dashboard` after completion\n   31  - Intermediate files cleaned up after graph assembly",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "CLAUDE.md:50-52",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/CLAUDE.md",
        "relativePath": "CLAUDE.md",
        "start": 50,
        "end": 52,
        "snippet": "   50  ## Gotchas\n   51  - **tree-sitter**: Uses `web-tree-sitter` (WASM) instead of native `tree-sitter` — native bindings fail on darwin/arm64 + Node 24\n   52  - **Dashboard imports**: Dashboard must only import from core's browser-safe subpath exports (`./search`, `./types`, `./schema`), never the main entry point which pulls in Node.js modules",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "UA-004",
    "conclusion": "顶层 workspace 覆盖 plugin packages、plugin、homepage；插件包版本 `2.7.5`，core/dashboard 版本 `0.1.0`，core 提供 browser-safe subpath exports",
    "type": "source fact",
    "location": "`package.json:2-12`, `pnpm-workspace.yaml:1-4`, `understand-anything-plugin/package.json:2-15`, `understand-anything-plugin/packages/core/package.json:2-28`, `understand-anything-plugin/packages/dashboard/package.json:2-30`",
    "confidence": "高",
    "verified": "",
    "note": "包边界",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "@understand-anything/core",
        "sub": "types / schema / parser / search",
        "role": "library",
        "status": "source-verified",
        "detail": "core 定义 KnowledgeGraph、schema、Tree-sitter plugin、registry、GraphBuilder、搜索和增量能力。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "图谱生产流水线 -> @understand-anything/core",
        "sub": "复用分析库",
        "role": "dependency",
        "status": "",
        "detail": "关系语义：复用分析库。",
        "relation": "图谱生产流水线 到 @understand-anything/core"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「@understand-anything/core」、架构总览 / 连线「图谱生产流水线 -> @understand-anything/core」。证据结论是：顶层 workspace 覆盖 plugin packages、plugin、homepage；插件包版本 `2.7.5`，core/dashboard 版本 `0.1.0`，core 提供 browser-safe subpath exports。图中的具体解释是：core 定义 KnowledgeGraph、schema、Tree-sitter plugin、registry、GraphBuilder、搜索和增量能力。；关系语义：复用分析库。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "package.json:2-12",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/package.json",
        "relativePath": "package.json",
        "start": 2,
        "end": 12,
        "snippet": "    2    \"name\": \"understand-anything\",\n    3    \"private\": true,\n    4    \"type\": \"module\",\n    5    \"main\": \".opencode/plugins/understand-anything.js\",\n    6    \"packageManager\": \"pnpm@10.6.2+sha512.47870716bea1572b53df34ad8647b42962bc790ce2bf4562ba0f643237d7302a3d6a8ecef9e4bdfc01d23af1969aa90485d4cebb0b9638fa5ef1daef656f6c1b\",\n    7    \"scripts\": {\n    8      \"prepare\": \"pnpm --filter @understand-anything/core build\",\n    9      \"build\": \"pnpm -r build\",\n   10      \"test\": \"vitest run\",\n   11      \"dev:dashboard\": \"pnpm --filter @understand-anything/dashboard dev\",\n   12      \"lint\": \"eslint .\"",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "pnpm-workspace.yaml:1-4",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/pnpm-workspace.yaml",
        "relativePath": "pnpm-workspace.yaml",
        "start": 1,
        "end": 4,
        "snippet": "    1  packages:\n    2    - 'understand-anything-plugin/packages/*'\n    3    - 'understand-anything-plugin'\n    4    - 'homepage'",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/package.json:2-15",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/package.json",
        "relativePath": "understand-anything-plugin/package.json",
        "start": 2,
        "end": 15,
        "snippet": "    2    \"name\": \"@understand-anything/skill\",\n    3    \"version\": \"2.7.5\",\n    4    \"type\": \"module\",\n    5    \"main\": \"dist/index.js\",\n    6    \"types\": \"dist/index.d.ts\",\n    7    \"scripts\": {\n    8      \"build\": \"tsc\",\n    9      \"test\": \"node -e \\\"console.log('skill tests live at <repo-root>/tests/skill — run via root \\\\`pnpm test\\\\`')\\\"\"\n   10    },\n   11    \"dependencies\": {\n   12      \"@understand-anything/core\": \"workspace:*\",\n   13      \"graphology\": \"~0.26.0\",\n   14      \"graphology-communities-louvain\": \"^2.0.2\"\n   15    },",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/packages/core/package.json:2-28",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/packages/core/package.json",
        "relativePath": "understand-anything-plugin/packages/core/package.json",
        "start": 2,
        "end": 28,
        "snippet": "    2    \"name\": \"@understand-anything/core\",\n    3    \"version\": \"0.1.0\",\n    4    \"type\": \"module\",\n    5    \"main\": \"dist/index.js\",\n    6    \"types\": \"dist/index.d.ts\",\n    7    \"exports\": {\n    8      \".\": {\n    9        \"types\": \"./dist/index.d.ts\",\n   10        \"default\": \"./dist/index.js\"\n   11      },\n   12      \"./search\": {\n   13        \"types\": \"./dist/search.d.ts\",\n   14        \"default\": \"./dist/search.js\"\n   15      },\n   16      \"./types\": {\n   17        \"types\": \"./dist/types.d.ts\",\n   18        \"default\": \"./dist/types.js\"\n   19      },",
        "omitted": "已截取 2-19 行，原始范围到 28 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/packages/dashboard/package.json:2-30",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/packages/dashboard/package.json",
        "relativePath": "understand-anything-plugin/packages/dashboard/package.json",
        "start": 2,
        "end": 30,
        "snippet": "    2    \"name\": \"@understand-anything/dashboard\",\n    3    \"private\": true,\n    4    \"version\": \"0.1.0\",\n    5    \"type\": \"module\",\n    6    \"scripts\": {\n    7      \"dev\": \"vite\",\n    8      \"build\": \"tsc -b && vite build\",\n    9      \"build:demo\": \"tsc -b && vite build --config vite.config.demo.ts\",\n   10      \"preview\": \"vite preview\",\n   11      \"test\": \"vitest run\",\n   12      \"test:watch\": \"vitest\"\n   13    },\n   14    \"dependencies\": {\n   15      \"@dagrejs/dagre\": \"^2.0.4\",\n   16      \"@understand-anything/core\": \"workspace:*\",\n   17      \"@xyflow/react\": \"^12.0.0\",\n   18      \"d3-force\": \"^3.0.0\",\n   19      \"devlop\": \"^1.1.0\",",
        "omitted": "已截取 2-19 行，原始范围到 30 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "UA-005",
    "conclusion": "`/understand` Skill 定义 7 阶段流程：preflight、ignore、scan、batch、analyze、review、architecture、tour、validation、save，并处理 worktree redirect、插件根目录、语言、auto-update 等",
    "type": "source fact",
    "location": "`understand-anything-plugin/skills/understand/SKILL.md:1-18`, `understand-anything-plugin/skills/understand/SKILL.md:42-172`, `understand-anything-plugin/skills/understand/SKILL.md:278-357`, `understand-anything-plugin/skills/understand/SKILL.md:734-790`",
    "confidence": "高",
    "verified": "",
    "note": "主流程",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "Skills 命令面",
        "sub": "/understand / dashboard / chat",
        "role": "command-surface",
        "status": "source-verified",
        "detail": "Skill 文件定义用户命令、参数、输入输出路径和调度流程。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "图谱生产流水线",
        "sub": "scan / batch / agents / merge",
        "role": "orchestrator",
        "status": "source-verified",
        "detail": "/understand 编排确定性脚本和 LLM Agent，把项目转成 assembled graph。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "Skills 命令面 -> 图谱生产流水线",
        "sub": "调用主流程",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：调用主流程。",
        "relation": "Skills 命令面 到 图谱生产流水线"
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "图谱生产流水线 -> KnowledgeGraph",
        "sub": "写入图谱",
        "role": "read-write",
        "status": "",
        "detail": "关系语义：写入图谱。",
        "relation": "图谱生产流水线 到 KnowledgeGraph"
      },
      {
        "kind": "节点",
        "viewId": "understand-flow",
        "viewLabel": "/understand 主链路",
        "viewDescription": "回答：一次 /understand 如何从项目目录生成可消费知识图谱？",
        "title": "Pre-flight",
        "sub": "root / plugin / config / language",
        "role": "bootstrap",
        "status": "source-verified",
        "detail": "解析项目根目录、worktree redirect、PLUGIN_ROOT、core build、autoUpdate 和输出语言。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "understand-flow",
        "viewLabel": "/understand 主链路",
        "viewDescription": "回答：一次 /understand 如何从项目目录生成可消费知识图谱？",
        "title": "File Analyzer 并发",
        "sub": "up to 5 subagents",
        "role": "llm-agent-pool",
        "status": "source-verified",
        "detail": "每个 batch 由 file-analyzer 产出 GraphNode 和 GraphEdge JSON，最多 5 个并发。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "understand-flow",
        "viewLabel": "/understand 主链路",
        "viewDescription": "回答：一次 /understand 如何从项目目录生成可消费知识图谱？",
        "title": "合并与标准化",
        "sub": "merge / review / validate",
        "role": "normalizer",
        "status": "source-verified",
        "detail": "合并 batch JSON，标准化 ID/类型/复杂度/方向，去重和清理 dangling edges，再进行审查。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "understand-flow",
        "viewLabel": "/understand 主链路",
        "viewDescription": "回答：一次 /understand 如何从项目目录生成可消费知识图谱？",
        "title": "分层与导览",
        "sub": "architecture-analyzer / tour-builder",
        "role": "semantic-agent",
        "status": "source-verified",
        "detail": "在 assembled graph 基础上补充 layers 和 guided tour。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "understand-flow",
        "viewLabel": "/understand 主链路",
        "viewDescription": "回答：一次 /understand 如何从项目目录生成可消费知识图谱？",
        "title": "保存图谱",
        "sub": "graph / meta / fingerprints",
        "role": "persistence",
        "status": "source-verified",
        "detail": "保存 knowledge-graph.json，生成 fingerprints baseline，写 meta.json，并清理 intermediate/tmp。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "understand-flow",
        "viewLabel": "/understand 主链路",
        "viewDescription": "回答：一次 /understand 如何从项目目录生成可消费知识图谱？",
        "title": "Pre-flight -> 项目扫描",
        "sub": "确定项目上下文",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：确定项目上下文。",
        "relation": "Pre-flight 到 项目扫描"
      },
      {
        "kind": "连线",
        "viewId": "understand-flow",
        "viewLabel": "/understand 主链路",
        "viewDescription": "回答：一次 /understand 如何从项目目录生成可消费知识图谱？",
        "title": "合并与标准化 -> 分层与导览",
        "sub": "assembled graph",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：assembled graph。",
        "relation": "合并与标准化 到 分层与导览"
      },
      {
        "kind": "连线",
        "viewId": "understand-flow",
        "viewLabel": "/understand 主链路",
        "viewDescription": "回答：一次 /understand 如何从项目目录生成可消费知识图谱？",
        "title": "分层与导览 -> 保存图谱",
        "sub": "final graph",
        "role": "read-write",
        "status": "",
        "detail": "关系语义：final graph。",
        "relation": "分层与导览 到 保存图谱"
      },
      {
        "kind": "节点",
        "viewId": "extension-model",
        "viewLabel": "扩展机制",
        "viewDescription": "回答：Understand Anything 的扩展点分别位于哪些层？",
        "title": "Skill 扩展",
        "sub": "user-facing commands",
        "role": "command-extension",
        "status": "source-verified",
        "detail": "新增用户能力通常表现为新增 skill，定义命令、参数、输入和输出。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "extension-model",
        "viewLabel": "扩展机制",
        "viewDescription": "回答：Understand Anything 的扩展点分别位于哪些层？",
        "title": "Language / Framework",
        "sub": "configs + framework addenda",
        "role": "language-framework-extension",
        "status": "source-verified",
        "detail": "语言配置驱动 parser 和 prompt context，框架识别影响 architecture analyzer 的语义判断。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "extension-model",
        "viewLabel": "扩展机制",
        "viewDescription": "回答：Understand Anything 的扩展点分别位于哪些层？",
        "title": "Skill 扩展 -> Agent 扩展",
        "sub": "调度语义角色",
        "role": "async-event",
        "status": "",
        "detail": "关系语义：调度语义角色。",
        "relation": "Skill 扩展 到 Agent 扩展"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Skills 命令面」、架构总览 / 节点「图谱生产流水线」、架构总览 / 连线「Skills 命令面 -> 图谱生产流水线」、架构总览 / 连线「图谱生产流水线 -> KnowledgeGraph」。证据结论是：`/understand` Skill 定义 7 阶段流程：preflight、ignore、scan、batch、analyze、review、architecture、tour、validation、save，并处理 worktree redirect、插件根目录、语言、auto-update 等。图中的具体解释是：Skill 文件定义用户命令、参数、输入输出路径和调度流程。；/understand 编排确定性脚本和 LLM Agent，把项目转成 assembled graph。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "understand-anything-plugin/skills/understand/SKILL.md:1-18",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/skills/understand/SKILL.md",
        "relativePath": "understand-anything-plugin/skills/understand/SKILL.md",
        "start": 1,
        "end": 18,
        "snippet": "    1  ---\n    2  name: understand\n    3  description: Analyze a codebase to produce an interactive knowledge graph for understanding architecture, components, and relationships\n    4  argument-hint: [\"[path] [--full|--auto-update|--no-auto-update|--review|--language <lang>]\"]\n    5  ---\n    6  \n    7  # /understand\n    8  \n    9  Analyze the current codebase and produce a `knowledge-graph.json` file in `.understand-anything/`. This file powers the interactive dashboard for exploring the project's architecture.\n   10  \n   11  ## Options\n   12  \n   13  - `$ARGUMENTS` may contain:\n   14    - `--full` — Force a full rebuild, ignoring any existing graph\n   15    - `--auto-update` — Enable automatic graph updates on commit (writes `autoUpdate: true` to `.understand-anything/config.json`)\n   16    - `--no-auto-update` — Disable automatic graph updates (writes `autoUpdate: false` to `.understand-anything/config.json`)\n   17    - `--review` — Run full LLM graph-reviewer instead of inline deterministic validation\n   18    - `--language <lang>` — Generate all textual content (summaries, descriptions, tags, titles, languageNotes, languageLesson) in the specified language. Accepts ISO 639-1 codes (`zh`, `ja`, `ko`, `en`, `es`, `fr`, `de`, etc.) or friendly names (`chinese`, `japanese`, `korean`, `english`, `spanish`, etc.). Locale variants supported: `zh-TW`, `zh-HK`, etc. Defaults to `en` (English). Stores preference in `.understand-anything/config.json` for consistency across incremental updates.",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/skills/understand/SKILL.md:42-172",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/skills/understand/SKILL.md",
        "relativePath": "understand-anything-plugin/skills/understand/SKILL.md",
        "start": 42,
        "end": 172,
        "snippet": "   42  ## Phase 0 — Pre-flight\n   43  \n   44  Determine whether to run a full analysis or incremental update.\n   45  \n   46  1. **Resolve `PROJECT_ROOT`:**\n   47     - Parse `$ARGUMENTS` for a non-flag token (any argument that does not start with `--`). If found, treat it as the target directory path.\n   48       - If the path is relative, resolve it against the current working directory.\n   49       - Verify the resolved path exists and is a directory (run `test -d <path>`). If it does not exist or is not a directory, report an error to the user and **STOP**.\n   50       - Set `PROJECT_ROOT` to the resolved absolute path.\n   51     - If no directory path argument is found, set `PROJECT_ROOT` to the current working directory.\n   52     - **Worktree redirect.** If `PROJECT_ROOT` is inside a git worktree (not the main checkout), redirect output to the main repository root. Worktrees managed by Claude Code are ephemeral — `.understand-anything/` written there is destroyed when the session ends, taking the knowledge graph with it (issue #133). Detect a worktree by comparing `git rev-parse --git-dir` against `git rev-parse --git-common-dir`; in a normal checkout or submodule they resolve to the same path, in a worktree they differ and the parent of `--git-common-dir` is the main repo root.\n   53  \n   54       ```bash\n   55       COMMON_DIR=$(git -C \"$PROJECT_ROOT\" rev-parse --git-common-dir 2>/dev/null)\n   56       GIT_DIR=$(git -C \"$PROJECT_ROOT\" rev-parse --git-dir 2>/dev/null)\n   57       if [ -n \"$COMMON_DIR\" ] && [ -n \"$GIT_DIR\" ]; then\n   58         COMMON_ABS=$(cd \"$PROJECT_ROOT\" && cd \"$COMMON_DIR\" 2>/dev/null && pwd -P)\n   59         GIT_ABS=$(cd \"$PROJECT_ROOT\" && cd \"$GIT_DIR\" 2>/dev/null && pwd -P)",
        "omitted": "已截取 42-59 行，原始范围到 172 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/skills/understand/SKILL.md:278-357",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/skills/understand/SKILL.md",
        "relativePath": "understand-anything-plugin/skills/understand/SKILL.md",
        "start": 278,
        "end": 357,
        "snippet": "  278  ## Phase 1.5 — BATCH\n  279  \n  280  Report: `[Phase 1.5/7] Computing semantic batches...`\n  281  \n  282  Run the bundled batching script:\n  283  ```bash\n  284  node <SKILL_DIR>/compute-batches.mjs $PROJECT_ROOT\n  285  ```\n  286  \n  287  Reads `.understand-anything/intermediate/scan-result.json`, writes `.understand-anything/intermediate/batches.json`.\n  288  \n  289  Capture stderr. Append any line starting with `Warning:` to `$PHASE_WARNINGS` for the final report.\n  290  \n  291  If the script exits non-zero, the failure is hard — relay the full stderr to the user as a Phase 1.5 failure. Do not attempt to recover; the script's internal fallback (count-based) already handles recoverable issues. A non-zero exit means a fundamental problem (missing input file, malformed JSON, etc.).\n  292  \n  293  ---\n  294  \n  295  ## Phase 2 — ANALYZE",
        "omitted": "已截取 278-295 行，原始范围到 357 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/skills/understand/SKILL.md:734-790",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/skills/understand/SKILL.md",
        "relativePath": "understand-anything-plugin/skills/understand/SKILL.md",
        "start": 734,
        "end": 790,
        "snippet": "  734  ## Phase 7 — SAVE\n  735  \n  736  Report to the user: `[Phase 7/7] Saving knowledge graph...`\n  737  \n  738  1. Write the final knowledge graph to `$PROJECT_ROOT/.understand-anything/knowledge-graph.json`.\n  739  \n  740  2. **Generate structural fingerprints baseline.** This creates the basis for future automatic incremental updates and **must succeed before `meta.json` is written** — otherwise auto-update sees a fresh commit hash with no fingerprints to compare against, classifies every file as STRUCTURAL, and escalates to `FULL_UPDATE` on every subsequent commit (issue #152).\n  741  \n  742     Write the input file:\n  743     ```bash\n  744     cat > $PROJECT_ROOT/.understand-anything/intermediate/fingerprint-input.json <<EOF\n  745     {\n  746       \"projectRoot\": \"$PROJECT_ROOT\",\n  747       \"sourceFilePaths\": [<all source file paths from Phase 1, as JSON array>],\n  748       \"gitCommitHash\": \"<current commit hash>\"\n  749     }\n  750     EOF\n  751     ```",
        "omitted": "已截取 734-751 行，原始范围到 790 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "UA-006",
    "conclusion": "`scan-project.mjs` 优先 `git ls-files -z -co --exclude-standard`，失败退回 deterministic walk，并通过 ignore、语言、类别、行数和复杂度生成 scan result",
    "type": "source fact",
    "location": "`understand-anything-plugin/skills/understand/scan-project.mjs:455-559`, `understand-anything-plugin/skills/understand/scan-project.mjs:668-764`",
    "confidence": "高",
    "verified": "",
    "note": "确定性扫描",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "understand-flow",
        "viewLabel": "/understand 主链路",
        "viewDescription": "回答：一次 /understand 如何从项目目录生成可消费知识图谱？",
        "title": "项目扫描",
        "sub": "scan-project.mjs",
        "role": "deterministic-step",
        "status": "source-verified",
        "detail": "枚举文件、应用 ignore、检测语言/类别、统计行数和复杂度。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "understand-flow",
        "viewLabel": "/understand 主链路",
        "viewDescription": "回答：一次 /understand 如何从项目目录生成可消费知识图谱？",
        "title": "Pre-flight -> 项目扫描",
        "sub": "确定项目上下文",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：确定项目上下文。",
        "relation": "Pre-flight 到 项目扫描"
      },
      {
        "kind": "连线",
        "viewId": "understand-flow",
        "viewLabel": "/understand 主链路",
        "viewDescription": "回答：一次 /understand 如何从项目目录生成可消费知识图谱？",
        "title": "项目扫描 -> ImportMap",
        "sub": "文件列表",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：文件列表。",
        "relation": "项目扫描 到 ImportMap"
      }
    ],
    "explanation": "这条证据在架构图中支撑 /understand 主链路 / 节点「项目扫描」、/understand 主链路 / 连线「Pre-flight -> 项目扫描」、/understand 主链路 / 连线「项目扫描 -> ImportMap」。证据结论是：`scan-project.mjs` 优先 `git ls-files -z -co --exclude-standard`，失败退回 deterministic walk，并通过 ignore、语言、类别、行数和复杂度生成 scan result。图中的具体解释是：枚举文件、应用 ignore、检测语言/类别、统计行数和复杂度。；关系语义：确定项目上下文。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "understand-anything-plugin/skills/understand/scan-project.mjs:455-559",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/skills/understand/scan-project.mjs",
        "relativePath": "understand-anything-plugin/skills/understand/scan-project.mjs",
        "start": 455,
        "end": 559,
        "snippet": "  455  /**\n  456   * Enumerate all files in `projectRoot` via `git ls-files`. Returns an\n  457   * array of project-relative POSIX paths, or null if the directory is not\n  458   * a git repository (or git is not installed). Caller falls back to the\n  459   * recursive walker.\n  460   *\n  461   * Why git ls-files first: it respects the repo's `.gitignore`, handles\n  462   * submodules sensibly, and gives a fast, deterministic listing. The walker\n  463   * is a strict superset of what git would emit (no .gitignore awareness),\n  464   * so the ignore filter has to do more work in the fallback path.\n  465   */\n  466  function enumerateViaGit(projectRoot) {\n  467    // -z = NUL-terminated output. Without it, `git ls-files` C-escapes non-ASCII\n  468    // bytes in path names — paths containing emoji, accented characters, CJK\n  469    // codepoints, etc. come back quoted with octal escapes (e.g.\n  470    // `\"30. \\360\\237\\217\\227 BD-CCER/file.md\"` for a path containing 🏗️).\n  471    // Those quoted-escaped strings then fail to round-trip back to real disk\n  472    // paths in downstream consumers, so files in such directories are silently",
        "omitted": "已截取 455-472 行，原始范围到 559 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/skills/understand/scan-project.mjs:668-764",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/skills/understand/scan-project.mjs",
        "relativePath": "understand-anything-plugin/skills/understand/scan-project.mjs",
        "start": 668,
        "end": 764,
        "snippet": "  668    // 1. Enumerate. Either git ls-files or recursive walk.\n  669    const candidates = enumerateFiles(projectRoot);\n  670  \n  671    // 2. Filter via createIgnoreFilter (defaults + user .understandignore).\n  672    //    Build a defaults-only filter in parallel to count user-driven drops.\n  673    const combined = createIgnoreFilter(projectRoot);\n  674    const userIgnoresPresent = hasUserIgnoreFile(projectRoot);\n  675    const defaultsOnly = userIgnoresPresent ? buildDefaultsOnlyFilter() : combined;\n  676  \n  677    let filteredByIgnore = 0;\n  678    const kept = [];\n  679    for (const rel of candidates) {\n  680      const isIgnoredCombined = combined.isIgnored(rel);\n  681      if (!isIgnoredCombined) {\n  682        kept.push(rel);\n  683        continue;\n  684      }\n  685      // Dropped by combined filter. If defaults-only would have ALSO dropped",
        "omitted": "已截取 668-685 行，原始范围到 764 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "UA-007",
    "conclusion": "`extract-import-map.mjs` 使用 TreeSitterPlugin、PluginRegistry、registerAllParsers 预解析内部 importMap；Tree-sitter 初始化失败会输出空 importMap 而不是中断全流程",
    "type": "source fact",
    "location": "`understand-anything-plugin/skills/understand/extract-import-map.mjs:1397-1427`, `understand-anything-plugin/skills/understand/extract-import-map.mjs:1431-1527`",
    "confidence": "高",
    "verified": "",
    "note": "importMap",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "understand-flow",
        "viewLabel": "/understand 主链路",
        "viewDescription": "回答：一次 /understand 如何从项目目录生成可消费知识图谱？",
        "title": "ImportMap",
        "sub": "extract-import-map.mjs",
        "role": "deterministic-step",
        "status": "source-verified",
        "detail": "预解析项目内部 imports，非代码文件为空，Tree-sitter 失败时降级为空图。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "understand-flow",
        "viewLabel": "/understand 主链路",
        "viewDescription": "回答：一次 /understand 如何从项目目录生成可消费知识图谱？",
        "title": "项目扫描 -> ImportMap",
        "sub": "文件列表",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：文件列表。",
        "relation": "项目扫描 到 ImportMap"
      },
      {
        "kind": "连线",
        "viewId": "understand-flow",
        "viewLabel": "/understand 主链路",
        "viewDescription": "回答：一次 /understand 如何从项目目录生成可消费知识图谱？",
        "title": "ImportMap -> 语义批处理",
        "sub": "import graph",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：import graph。",
        "relation": "ImportMap 到 语义批处理"
      }
    ],
    "explanation": "这条证据在架构图中支撑 /understand 主链路 / 节点「ImportMap」、/understand 主链路 / 连线「项目扫描 -> ImportMap」、/understand 主链路 / 连线「ImportMap -> 语义批处理」。证据结论是：`extract-import-map.mjs` 使用 TreeSitterPlugin、PluginRegistry、registerAllParsers 预解析内部 importMap；Tree-sitter 初始化失败会输出空 importMap 而不是中断全流程。图中的具体解释是：预解析项目内部 imports，非代码文件为空，Tree-sitter 失败时降级为空图。；关系语义：文件列表。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "understand-anything-plugin/skills/understand/extract-import-map.mjs:1397-1427",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/skills/understand/extract-import-map.mjs",
        "relativePath": "understand-anything-plugin/skills/understand/extract-import-map.mjs",
        "start": 1397,
        "end": 1427,
        "snippet": " 1397    // Create tree-sitter plugin with all configs that have WASM grammars.\n 1398    //\n 1399    // WHY graceful init: the most likely real-world failure mode is the WASM\n 1400    // loader failing to locate or fetch the grammar binaries (cache eviction,\n 1401    // restricted sandboxes, transient FS issues). When that happens, we still\n 1402    // want the script to complete — producing an empty importMap for every\n 1403    // code file — rather than crashing the whole project-scanner pipeline.\n 1404    // The structural graph will lose import edges, but all OTHER analysis\n 1405    // (file inventory, exports inferred from filenames, etc.) keeps working.\n 1406    let registry = null;\n 1407    let treeSitterReady = false;\n 1408    try {\n 1409      const tsConfigs = builtinLanguageConfigs.filter(c => c.treeSitter);\n 1410      const tsPlugin = new TreeSitterPlugin(tsConfigs);\n 1411      await tsPlugin.init();\n 1412      registry = new PluginRegistry();\n 1413      registry.register(tsPlugin);\n 1414      registerAllParsers(registry);",
        "omitted": "已截取 1397-1414 行，原始范围到 1427 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/skills/understand/extract-import-map.mjs:1431-1527",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/skills/understand/extract-import-map.mjs",
        "relativePath": "understand-anything-plugin/skills/understand/extract-import-map.mjs",
        "start": 1431,
        "end": 1527,
        "snippet": " 1431    for (const file of files) {\n 1432      const path = toPosix(file.path);\n 1433  \n 1434      // Non-code files always get an empty array\n 1435      if (file.fileCategory !== 'code') {\n 1436        importMap[path] = [];\n 1437        continue;\n 1438      }\n 1439  \n 1440      // Tree-sitter init failed earlier — produce empty importMap entries for\n 1441      // every code file and skip the analysis path. The one-time warning was\n 1442      // already emitted at startup.\n 1443      if (!treeSitterReady) {\n 1444        importMap[path] = [];\n 1445        continue;\n 1446      }\n 1447  \n 1448      const absolutePath = join(projectRoot, file.path);",
        "omitted": "已截取 1431-1448 行，原始范围到 1527 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "UA-008",
    "conclusion": "`compute-batches.mjs` 用 Louvain 在 import graph 上分组，失败时 count fallback；非代码文件按语义分组；输出 batchImportData 和 cross-batch neighborMap",
    "type": "source fact",
    "location": "`understand-anything-plugin/skills/understand/compute-batches.mjs:1-13`, `understand-anything-plugin/skills/understand/compute-batches.mjs:90-130`, `understand-anything-plugin/skills/understand/compute-batches.mjs:197-229`, `understand-anything-plugin/skills/understand/compute-batches.mjs:301-525`",
    "confidence": "高",
    "verified": "",
    "note": "batching",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "图谱生产流水线",
        "sub": "scan / batch / agents / merge",
        "role": "orchestrator",
        "status": "source-verified",
        "detail": "/understand 编排确定性脚本和 LLM Agent，把项目转成 assembled graph。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "understand-flow",
        "viewLabel": "/understand 主链路",
        "viewDescription": "回答：一次 /understand 如何从项目目录生成可消费知识图谱？",
        "title": "语义批处理",
        "sub": "Louvain + neighborMap",
        "role": "batcher",
        "status": "source-verified",
        "detail": "按 import graph 社区分组，合并过小 batch，生成 batchImportData 和 cross-batch neighborMap。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "understand-flow",
        "viewLabel": "/understand 主链路",
        "viewDescription": "回答：一次 /understand 如何从项目目录生成可消费知识图谱？",
        "title": "ImportMap -> 语义批处理",
        "sub": "import graph",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：import graph。",
        "relation": "ImportMap 到 语义批处理"
      },
      {
        "kind": "连线",
        "viewId": "understand-flow",
        "viewLabel": "/understand 主链路",
        "viewDescription": "回答：一次 /understand 如何从项目目录生成可消费知识图谱？",
        "title": "语义批处理 -> File Analyzer 并发",
        "sub": "batch context",
        "role": "context-build",
        "status": "",
        "detail": "关系语义：batch context。",
        "relation": "语义批处理 到 File Analyzer 并发"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「图谱生产流水线」、/understand 主链路 / 节点「语义批处理」、/understand 主链路 / 连线「ImportMap -> 语义批处理」、/understand 主链路 / 连线「语义批处理 -> File Analyzer 并发」。证据结论是：`compute-batches.mjs` 用 Louvain 在 import graph 上分组，失败时 count fallback；非代码文件按语义分组；输出 batchImportData 和 cross-batch neighborMap。图中的具体解释是：/understand 编排确定性脚本和 LLM Agent，把项目转成 assembled graph。；按 import graph 社区分组，合并过小 batch，生成 batchImportData 和 cross-batch neighborMap。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "understand-anything-plugin/skills/understand/compute-batches.mjs:1-13",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/skills/understand/compute-batches.mjs",
        "relativePath": "understand-anything-plugin/skills/understand/compute-batches.mjs",
        "start": 1,
        "end": 13,
        "snippet": "    1  #!/usr/bin/env node\n    2  /**\n    3   * compute-batches.mjs — Phase 1.5 of /understand\n    4   *\n    5   * Reads scan-result.json, runs Louvain community detection on the import\n    6   * graph, and writes batches.json containing batches + neighborMap.\n    7   *\n    8   * Usage:\n    9   *   node compute-batches.mjs <project-root> [--changed-files=<path>]\n   10   *\n   11   * Input:  <project-root>/.understand-anything/intermediate/scan-result.json\n   12   * Output: <project-root>/.understand-anything/intermediate/batches.json\n   13   */",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/skills/understand/compute-batches.mjs:90-130",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/skills/understand/compute-batches.mjs",
        "relativePath": "understand-anything-plugin/skills/understand/compute-batches.mjs",
        "start": 90,
        "end": 130,
        "snippet": "   90  /**\n   91   * Build batches for non-code files per Groups A-E in the design spec.\n   92   * Returns Array<{ files: FileMeta[], mergeable: boolean }> — caller assigns\n   93   * batchIndex. `mergeable=false` for semantic Groups A-D (Dockerfile clusters,\n   94   * .github/workflows, .gitlab-ci/.circleci, SQL migrations) preserves their\n   95   * boundary intent across the merge-small pass; Group E (catch-all parent-dir\n   96   * grouping) is `mergeable=true` so its tiny singletons can be pooled.\n   97   */\n   98  function buildNonCodeBatches(nonCodeFiles) {\n   99    const byPath = new Map(nonCodeFiles.map(f => [f.path, f]));\n  100    const consumed = new Set();\n  101    const groups = [];\n  102  \n  103    const dirOf = p => p.includes('/') ? p.slice(0, p.lastIndexOf('/')) : '';\n  104    const baseOf = p => p.includes('/') ? p.slice(p.lastIndexOf('/') + 1) : p;\n  105  \n  106    // Group A: per-directory Dockerfile clusters.\n  107    const dirsWithDockerfile = new Set(",
        "omitted": "已截取 90-107 行，原始范围到 130 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/skills/understand/compute-batches.mjs:197-229",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/skills/understand/compute-batches.mjs",
        "relativePath": "understand-anything-plugin/skills/understand/compute-batches.mjs",
        "start": 197,
        "end": 229,
        "snippet": "  197   * Returns Map<path, communityId> via Louvain. May throw — caller must catch\n  198   * and fall back if it does. Honors UA_COMPUTE_BATCHES_FORCE_LOUVAIN_THROW=1\n  199   * to allow tests to exercise the fallback path.\n  200   */\n  201  function runLouvain(codeFiles, importMap) {\n  202    if (process.env.UA_COMPUTE_BATCHES_FORCE_LOUVAIN_THROW === '1') {\n  203      throw new Error('forced throw via UA_COMPUTE_BATCHES_FORCE_LOUVAIN_THROW');\n  204    }\n  205    const g = new Graph({ type: 'undirected', allowSelfLoops: false });\n  206    for (const f of codeFiles) g.addNode(f.path);\n  207    for (const [src, targets] of Object.entries(importMap)) {\n  208      if (!g.hasNode(src)) continue;\n  209      for (const tgt of targets) {\n  210        if (!g.hasNode(tgt) || src === tgt || g.hasEdge(src, tgt)) continue;\n  211        g.addEdge(src, tgt);\n  212      }\n  213    }\n  214    const cs = louvain(g);  // { nodeId: communityId }",
        "omitted": "已截取 197-214 行，原始范围到 229 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/skills/understand/compute-batches.mjs:301-525",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/skills/understand/compute-batches.mjs",
        "relativePath": "understand-anything-plugin/skills/understand/compute-batches.mjs",
        "start": 301,
        "end": 525,
        "snippet": "  301  // ── Main: load → Louvain (or count-fallback) → enrich → write batches.json ─\n  302  async function main() {\n  303    const projectRoot = process.argv[2];\n  304    if (!projectRoot) {\n  305      process.stderr.write('Usage: node compute-batches.mjs <project-root> [--changed-files=<path>]\\n');\n  306      process.exit(1);\n  307    }\n  308  \n  309    let changedFiles = null;\n  310    for (const arg of process.argv.slice(3)) {\n  311      const m = arg.match(/^--changed-files=(.+)$/);\n  312      if (m) {\n  313        const p = m[1];\n  314        let content;\n  315        try {\n  316          content = readFileSync(p, 'utf-8');\n  317        } catch (err) {\n  318          process.stderr.write(",
        "omitted": "已截取 301-318 行，原始范围到 525 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "UA-009",
    "conclusion": "`TreeSitterPlugin` 加载 web-tree-sitter WASM grammar，提供结构分析、import resolution、call graph；`PluginRegistry` 按语言/文件分发 analyzer；`extract-structure.mjs` 用 registry 输出结构事实和 metrics",
    "type": "source fact",
    "location": "`understand-anything-plugin/packages/core/src/plugins/tree-sitter-plugin.ts:19-30`, `understand-anything-plugin/packages/core/src/plugins/tree-sitter-plugin.ts:120-197`, `understand-anything-plugin/packages/core/src/plugins/tree-sitter-plugin.ts:221-298`, `understand-anything-plugin/packages/core/src/plugins/registry.ts:4-80`, `understand-anything-plugin/skills/understand/extract-structure.mjs:65-135`, `understand-anything-plugin/skills/understand/extract-structure.mjs:146-280`",
    "confidence": "高",
    "verified": "",
    "note": "结构抽取",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "@understand-anything/core",
        "sub": "types / schema / parser / search",
        "role": "library",
        "status": "source-verified",
        "detail": "core 定义 KnowledgeGraph、schema、Tree-sitter plugin、registry、GraphBuilder、搜索和增量能力。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "图谱生产流水线 -> @understand-anything/core",
        "sub": "复用分析库",
        "role": "dependency",
        "status": "",
        "detail": "关系语义：复用分析库。",
        "relation": "图谱生产流水线 到 @understand-anything/core"
      },
      {
        "kind": "节点",
        "viewId": "extension-model",
        "viewLabel": "扩展机制",
        "viewDescription": "回答：Understand Anything 的扩展点分别位于哪些层？",
        "title": "Parser Registry",
        "sub": "AnalyzerPlugin / Tree-sitter / non-code",
        "role": "parser-extension",
        "status": "source-verified",
        "detail": "新增语言或非代码格式应接入 AnalyzerPlugin/PluginRegistry，而不是上层流程硬编码。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "extension-model",
        "viewLabel": "扩展机制",
        "viewDescription": "回答：Understand Anything 的扩展点分别位于哪些层？",
        "title": "Language / Framework",
        "sub": "configs + framework addenda",
        "role": "language-framework-extension",
        "status": "source-verified",
        "detail": "语言配置驱动 parser 和 prompt context，框架识别影响 architecture analyzer 的语义判断。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "extension-model",
        "viewLabel": "扩展机制",
        "viewDescription": "回答：Understand Anything 的扩展点分别位于哪些层？",
        "title": "Skill 扩展 -> Parser Registry",
        "sub": "调用确定性解析",
        "role": "dependency",
        "status": "",
        "detail": "关系语义：调用确定性解析。",
        "relation": "Skill 扩展 到 Parser Registry"
      },
      {
        "kind": "连线",
        "viewId": "extension-model",
        "viewLabel": "扩展机制",
        "viewDescription": "回答：Understand Anything 的扩展点分别位于哪些层？",
        "title": "Parser Registry -> Language / Framework",
        "sub": "语言/框架配置",
        "role": "dependency",
        "status": "",
        "detail": "关系语义：语言/框架配置。",
        "relation": "Parser Registry 到 Language / Framework"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「@understand-anything/core」、架构总览 / 连线「图谱生产流水线 -> @understand-anything/core」、扩展机制 / 节点「Parser Registry」、扩展机制 / 节点「Language / Framework」。证据结论是：`TreeSitterPlugin` 加载 web-tree-sitter WASM grammar，提供结构分析、import resolution、call graph；`PluginRegistry` 按语言/文件分发 analyzer；`extract-structure.mjs` 用 registry 输出结构事实和 metrics。图中的具体解释是：core 定义 KnowledgeGraph、schema、Tree-sitter plugin、registry、GraphBuilder、搜索和增量能力。；关系语义：复用分析库。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "understand-anything-plugin/packages/core/src/plugins/tree-sitter-plugin.ts:19-30",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/packages/core/src/plugins/tree-sitter-plugin.ts",
        "relativePath": "understand-anything-plugin/packages/core/src/plugins/tree-sitter-plugin.ts",
        "start": 19,
        "end": 30,
        "snippet": "   19  /**\n   20   * Config-driven tree-sitter plugin.\n   21   *\n   22   * Accepts LanguageConfig objects to determine which languages to support\n   23   * and how to load their WASM grammars. Provides deep structural analysis\n   24   * (functions, classes, imports, exports, call graphs) for all languages\n   25   * with registered extractors: TypeScript, JavaScript, Python, Go, Rust,\n   26   * Java, Ruby, PHP, C/C++, and C#.\n   27   *\n   28   * Languages without tree-sitter configs are gracefully skipped (the LLM\n   29   * agent handles analysis for those).\n   30   */",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/packages/core/src/plugins/tree-sitter-plugin.ts:120-197",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/packages/core/src/plugins/tree-sitter-plugin.ts",
        "relativePath": "understand-anything-plugin/packages/core/src/plugins/tree-sitter-plugin.ts",
        "start": 120,
        "end": 197,
        "snippet": "  120    /**\n  121     * Initialize the plugin by loading the WASM module and all language grammars.\n  122     * Must be called (and awaited) before any synchronous methods.\n  123     */\n  124    async init(): Promise<void> {\n  125      if (this._initialized) return;\n  126  \n  127      const mod = await import(\"web-tree-sitter\");\n  128      const ParserCls = mod.Parser;\n  129      const LanguageCls = mod.Language;\n  130  \n  131      await ParserCls.init();\n  132      this._ParserClass = ParserCls as unknown as new () => TreeSitterParser;\n  133  \n  134      if (this.configs.length > 0) {\n  135        // Load grammars from configs\n  136        const loadPromises: Promise<void>[] = [];\n  137  ",
        "omitted": "已截取 120-137 行，原始范围到 197 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/packages/core/src/plugins/tree-sitter-plugin.ts:221-298",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/packages/core/src/plugins/tree-sitter-plugin.ts",
        "relativePath": "understand-anything-plugin/packages/core/src/plugins/tree-sitter-plugin.ts",
        "start": 221,
        "end": 298,
        "snippet": "  221    analyzeFile(\n  222      filePath: string,\n  223      content: string,\n  224    ): StructuralAnalysis {\n  225      const parser = this.getParser(filePath);\n  226      if (!parser) {\n  227        return { functions: [], classes: [], imports: [], exports: [] };\n  228      }\n  229  \n  230      const tree = parser.parse(content);\n  231      if (!tree) {\n  232        parser.delete();\n  233        return { functions: [], classes: [], imports: [], exports: [] };\n  234      }\n  235  \n  236      const langKey = this.languageKeyFromPath(filePath);\n  237      const extractor = langKey ? this.getExtractor(langKey) : null;\n  238  ",
        "omitted": "已截取 221-238 行，原始范围到 298 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/packages/core/src/plugins/registry.ts:4-80",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/packages/core/src/plugins/registry.ts",
        "relativePath": "understand-anything-plugin/packages/core/src/plugins/registry.ts",
        "start": 4,
        "end": 80,
        "snippet": "    4  /**\n    5   * Registry for analyzer plugins. Maps languages to plugins and provides\n    6   * a unified interface for analyzing files across languages.\n    7   *\n    8   * Uses LanguageRegistry for extension-to-language mapping instead of\n    9   * a hardcoded lookup table.\n   10   */\n   11  export class PluginRegistry {\n   12    private plugins: AnalyzerPlugin[] = [];\n   13    private languageMap = new Map<string, AnalyzerPlugin>();\n   14    private languageRegistry: LanguageRegistry;\n   15  \n   16    constructor(languageRegistry?: LanguageRegistry) {\n   17      this.languageRegistry = languageRegistry ?? LanguageRegistry.createDefault();\n   18    }\n   19  \n   20    register(plugin: AnalyzerPlugin): void {\n   21      this.plugins.push(plugin);",
        "omitted": "已截取 4-21 行，原始范围到 80 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/skills/understand/extract-structure.mjs:65-135",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/skills/understand/extract-structure.mjs",
        "relativePath": "understand-anything-plugin/skills/understand/extract-structure.mjs",
        "start": 65,
        "end": 135,
        "snippet": "   65    // Create tree-sitter plugin with all configs that have WASM grammars\n   66    const tsConfigs = builtinLanguageConfigs.filter(c => c.treeSitter);\n   67    const tsPlugin = new TreeSitterPlugin(tsConfigs);\n   68    await tsPlugin.init();\n   69  \n   70    // Create registry and register tree-sitter + all non-code parsers\n   71    const registry = new PluginRegistry();\n   72    registry.register(tsPlugin);\n   73    registerAllParsers(registry);\n   74  \n   75    const results = [];\n   76    const filesSkipped = [];\n   77  \n   78    for (const file of batchFiles) {\n   79      const absolutePath = join(projectRoot, file.path);\n   80  \n   81      // Read file content\n   82      let content;",
        "omitted": "已截取 65-82 行，原始范围到 135 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/skills/understand/extract-structure.mjs:146-280",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/skills/understand/extract-structure.mjs",
        "relativePath": "understand-anything-plugin/skills/understand/extract-structure.mjs",
        "start": 146,
        "end": 280,
        "snippet": "  146  export function buildResult(file, totalLines, nonEmptyLines, analysis, callGraph, batchImportData) {\n  147    const base = {\n  148      path: file.path,\n  149      language: file.language,\n  150      fileCategory: file.fileCategory,\n  151      totalLines,\n  152      nonEmptyLines,\n  153    };\n  154  \n  155    if (!analysis) {\n  156      // No parser matched — return basic metrics only\n  157      base.metrics = {};\n  158      return base;\n  159    }\n  160  \n  161    // Functions (code files)\n  162    if (analysis.functions && analysis.functions.length > 0) {\n  163      base.functions = analysis.functions.map(fn => ({",
        "omitted": "已截取 146-163 行，原始范围到 280 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "UA-010",
    "conclusion": "core 的 `KnowledgeGraph` 支持 21 类节点和 35 类边，覆盖代码、非代码、领域和知识图；schema 提供 alias、sanitize、autoFix、validateGraph",
    "type": "source fact",
    "location": "`understand-anything-plugin/packages/core/src/types.ts:1-99`, `understand-anything-plugin/packages/core/src/schema.ts:3-148`, `understand-anything-plugin/packages/core/src/schema.ts:196-230`, `understand-anything-plugin/packages/core/src/schema.ts:499-515`, `understand-anything-plugin/packages/core/src/analyzer/graph-builder.ts:60-336`",
    "confidence": "高",
    "verified": "",
    "note": "图谱契约",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "@understand-anything/core",
        "sub": "types / schema / parser / search",
        "role": "library",
        "status": "source-verified",
        "detail": "core 定义 KnowledgeGraph、schema、Tree-sitter plugin、registry、GraphBuilder、搜索和增量能力。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "KnowledgeGraph",
        "sub": ".understand-anything/knowledge-graph.json",
        "role": "intermediate-representation",
        "status": "source-verified",
        "detail": "统一中间表示：代码图、领域图和知识库图都复用同一节点/边/layer/tour 契约。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "图谱生产流水线 -> KnowledgeGraph",
        "sub": "写入图谱",
        "role": "read-write",
        "status": "",
        "detail": "关系语义：写入图谱。",
        "relation": "图谱生产流水线 到 KnowledgeGraph"
      },
      {
        "kind": "节点",
        "viewId": "understand-flow",
        "viewLabel": "/understand 主链路",
        "viewDescription": "回答：一次 /understand 如何从项目目录生成可消费知识图谱？",
        "title": "合并与标准化",
        "sub": "merge / review / validate",
        "role": "normalizer",
        "status": "source-verified",
        "detail": "合并 batch JSON，标准化 ID/类型/复杂度/方向，去重和清理 dangling edges，再进行审查。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "understand-flow",
        "viewLabel": "/understand 主链路",
        "viewDescription": "回答：一次 /understand 如何从项目目录生成可消费知识图谱？",
        "title": "合并与标准化 -> 保存图谱",
        "sub": "validation path",
        "role": "permission-check",
        "status": "",
        "detail": "关系语义：validation path。",
        "relation": "合并与标准化 到 保存图谱"
      },
      {
        "kind": "节点",
        "viewId": "graph-contract",
        "viewLabel": "图谱契约",
        "viewDescription": "回答：哪些生产端和消费端依赖同一个图谱契约？",
        "title": "Graph Types",
        "sub": "21 node types / 35 edge types",
        "role": "schema-model",
        "status": "source-verified",
        "detail": "types.ts 定义 code/non-code/domain/knowledge 节点与关系类型。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "graph-contract",
        "viewLabel": "图谱契约",
        "viewDescription": "回答：哪些生产端和消费端依赖同一个图谱契约？",
        "title": "Schema + AutoFix",
        "sub": "aliases / sanitize / validate",
        "role": "validation-policy",
        "status": "source-verified",
        "detail": "schema.ts 用 alias 和 autoFix 吸收 LLM 输出的不稳定格式。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "graph-contract",
        "viewLabel": "图谱契约",
        "viewDescription": "回答：哪些生产端和消费端依赖同一个图谱契约？",
        "title": "GraphBuilder",
        "sub": "structure -> nodes/edges",
        "role": "graph-builder",
        "status": "source-verified",
        "detail": "GraphBuilder 将结构事实转成 file/function/class/non-code 节点和关系。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "graph-contract",
        "viewLabel": "图谱契约",
        "viewDescription": "回答：哪些生产端和消费端依赖同一个图谱契约？",
        "title": "KnowledgeGraph JSON",
        "sub": "version / project / nodes / edges / layers / tour",
        "role": "ir",
        "status": "source-verified",
        "detail": "图谱是中心契约，既承载结构事实，也承载语义摘要、layers 和 tour。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "graph-contract",
        "viewLabel": "图谱契约",
        "viewDescription": "回答：哪些生产端和消费端依赖同一个图谱契约？",
        "title": "Graph Types -> KnowledgeGraph JSON",
        "sub": "定义数据模型",
        "role": "dependency",
        "status": "",
        "detail": "关系语义：定义数据模型。",
        "relation": "Graph Types 到 KnowledgeGraph JSON"
      },
      {
        "kind": "连线",
        "viewId": "graph-contract",
        "viewLabel": "图谱契约",
        "viewDescription": "回答：哪些生产端和消费端依赖同一个图谱契约？",
        "title": "Schema + AutoFix -> KnowledgeGraph JSON",
        "sub": "校验/修复",
        "role": "permission-check",
        "status": "",
        "detail": "关系语义：校验/修复。",
        "relation": "Schema + AutoFix 到 KnowledgeGraph JSON"
      },
      {
        "kind": "连线",
        "viewId": "graph-contract",
        "viewLabel": "图谱契约",
        "viewDescription": "回答：哪些生产端和消费端依赖同一个图谱契约？",
        "title": "GraphBuilder -> KnowledgeGraph JSON",
        "sub": "构造节点边",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：构造节点边。",
        "relation": "GraphBuilder 到 KnowledgeGraph JSON"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「@understand-anything/core」、架构总览 / 节点「KnowledgeGraph」、架构总览 / 连线「图谱生产流水线 -> KnowledgeGraph」、/understand 主链路 / 节点「合并与标准化」。证据结论是：core 的 `KnowledgeGraph` 支持 21 类节点和 35 类边，覆盖代码、非代码、领域和知识图；schema 提供 alias、sanitize、autoFix、validateGraph。图中的具体解释是：core 定义 KnowledgeGraph、schema、Tree-sitter plugin、registry、GraphBuilder、搜索和增量能力。；统一中间表示：代码图、领域图和知识库图都复用同一节点/边/layer/tour 契约。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "understand-anything-plugin/packages/core/src/types.ts:1-99",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/packages/core/src/types.ts",
        "relativePath": "understand-anything-plugin/packages/core/src/types.ts",
        "start": 1,
        "end": 99,
        "snippet": "    1  // Node types (21 total: 5 code + 8 non-code + 3 domain + 5 knowledge)\n    2  export type NodeType =\n    3    | \"file\" | \"function\" | \"class\" | \"module\" | \"concept\"\n    4    | \"config\" | \"document\" | \"service\" | \"table\" | \"endpoint\"\n    5    | \"pipeline\" | \"schema\" | \"resource\"\n    6    | \"domain\" | \"flow\" | \"step\"\n    7    | \"article\" | \"entity\" | \"topic\" | \"claim\" | \"source\";\n    8  \n    9  // Edge types (35 total in 8 categories: Structural, Behavioral, Data flow, Dependencies, Semantic, Infrastructure/Schema, Domain, Knowledge)\n   10  export type EdgeType =\n   11    | \"imports\" | \"exports\" | \"contains\" | \"inherits\" | \"implements\"  // Structural\n   12    | \"calls\" | \"subscribes\" | \"publishes\" | \"middleware\"              // Behavioral\n   13    | \"reads_from\" | \"writes_to\" | \"transforms\" | \"validates\"         // Data flow\n   14    | \"depends_on\" | \"tested_by\" | \"configures\"                       // Dependencies\n   15    | \"related\" | \"similar_to\"                                         // Semantic\n   16    | \"deploys\" | \"serves\" | \"provisions\" | \"triggers\"                // Infrastructure\n   17    | \"migrates\" | \"documents\" | \"routes\" | \"defines_schema\"          // Schema/Data\n   18    | \"contains_flow\" | \"flow_step\" | \"cross_domain\"                  // Domain",
        "omitted": "已截取 1-18 行，原始范围到 99 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/packages/core/src/schema.ts:3-148",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/packages/core/src/schema.ts",
        "relativePath": "understand-anything-plugin/packages/core/src/schema.ts",
        "start": 3,
        "end": 148,
        "snippet": "    3  // Edge types (35 values across 8 categories)\n    4  export const EdgeTypeSchema = z.enum([\n    5    \"imports\", \"exports\", \"contains\", \"inherits\", \"implements\",  // Structural\n    6    \"calls\", \"subscribes\", \"publishes\", \"middleware\",             // Behavioral\n    7    \"reads_from\", \"writes_to\", \"transforms\", \"validates\",        // Data flow\n    8    \"depends_on\", \"tested_by\", \"configures\",                     // Dependencies\n    9    \"related\", \"similar_to\",                                      // Semantic\n   10    \"deploys\", \"serves\", \"provisions\", \"triggers\",               // Infrastructure\n   11    \"migrates\", \"documents\", \"routes\", \"defines_schema\",         // Schema/Data\n   12    \"contains_flow\", \"flow_step\", \"cross_domain\",                // Domain\n   13    \"cites\", \"contradicts\", \"builds_on\", \"exemplifies\", \"categorized_under\", \"authored_by\", // Knowledge\n   14  ]);\n   15  \n   16  // Aliases that LLMs commonly generate instead of canonical node types\n   17  export const NODE_TYPE_ALIASES: Record<string, string> = {\n   18    func: \"function\",\n   19    fn: \"function\",\n   20    method: \"function\",",
        "omitted": "已截取 3-20 行，原始范围到 148 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/packages/core/src/schema.ts:196-230",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/packages/core/src/schema.ts",
        "relativePath": "understand-anything-plugin/packages/core/src/schema.ts",
        "start": 196,
        "end": 230,
        "snippet": "  196  export function autoFixGraph(data: Record<string, unknown>): {\n  197    data: Record<string, unknown>;\n  198    issues: GraphIssue[];\n  199  } {\n  200    const issues: GraphIssue[] = [];\n  201    const result = { ...data };\n  202  \n  203    if (Array.isArray(data.nodes)) {\n  204      result.nodes = (data.nodes as Record<string, unknown>[]).map((node, i) => {\n  205        if (typeof node !== \"object\" || node === null) return node;\n  206        const n = { ...node };\n  207        const name = (n.name as string) || (n.id as string) || `index ${i}`;\n  208  \n  209        // Missing or empty type\n  210        if (!n.type || typeof n.type !== \"string\") {\n  211          n.type = \"file\";\n  212          issues.push({\n  213            level: \"auto-corrected\",",
        "omitted": "已截取 196-213 行，原始范围到 230 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/packages/core/src/schema.ts:499-515",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/packages/core/src/schema.ts",
        "relativePath": "understand-anything-plugin/packages/core/src/schema.ts",
        "start": 499,
        "end": 515,
        "snippet": "  499  export function validateGraph(data: unknown): ValidationResult {\n  500    // Tier 4: Fatal — not even an object\n  501    if (typeof data !== \"object\" || data === null) {\n  502      const fatal = \"Invalid input: not an object\";\n  503      return { success: false, issues: [], fatal, errors: buildErrors([], fatal) };\n  504    }\n  505  \n  506    const raw = data as Record<string, unknown>;\n  507  \n  508    // Tier 1: Sanitize\n  509    const sanitized = sanitizeGraph(raw);\n  510  \n  511    // Existing: Normalize type aliases\n  512    const normalized = normalizeGraph(sanitized) as Record<string, unknown>;\n  513  \n  514    // Tier 2: Auto-fix defaults and coercion\n  515    const { data: fixed, issues } = autoFixGraph(normalized);",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/packages/core/src/analyzer/graph-builder.ts:60-336",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/packages/core/src/analyzer/graph-builder.ts",
        "relativePath": "understand-anything-plugin/packages/core/src/analyzer/graph-builder.ts",
        "start": 60,
        "end": 336,
        "snippet": "   60  export class GraphBuilder {\n   61    private readonly nodes: GraphNode[] = [];\n   62    private readonly edges: GraphEdge[] = [];\n   63    private readonly languages = new Set<string>();\n   64    private readonly nodeIds = new Set<string>();\n   65    private readonly edgeKeys = new Set<string>();\n   66    private readonly projectName: string;\n   67    private readonly gitHash: string;\n   68    private readonly languageRegistry: LanguageRegistry;\n   69  \n   70    constructor(projectName: string, gitHash: string, languageRegistry?: LanguageRegistry) {\n   71      this.projectName = projectName;\n   72      this.gitHash = gitHash;\n   73      this.languageRegistry = languageRegistry ?? LanguageRegistry.createDefault();\n   74    }\n   75  \n   76    private detectLanguage(filePath: string): string {\n   77      return this.languageRegistry.getForFile(filePath)?.id ?? \"unknown\";",
        "omitted": "已截取 60-77 行，原始范围到 336 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "UA-011",
    "conclusion": "Agent prompt 文件覆盖 project/file/architecture/tour/review/domain/article 等角色，`/understand` 指定 file-analyzer 最多 5 并发并通过 intermediate batch JSON 交接",
    "type": "source fact",
    "location": "`understand-anything-plugin/agents/project-scanner.md:17-19`, `understand-anything-plugin/agents/file-analyzer.md:292-317`, `understand-anything-plugin/agents/architecture-analyzer.md:413-468`, `understand-anything-plugin/agents/tour-builder.md:265-277`, `understand-anything-plugin/agents/graph-reviewer.md:227-227`, `understand-anything-plugin/skills/understand/SKILL.md:299-337`",
    "confidence": "高",
    "verified": "",
    "note": "多 Agent 协作",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "图谱生产流水线",
        "sub": "scan / batch / agents / merge",
        "role": "orchestrator",
        "status": "source-verified",
        "detail": "/understand 编排确定性脚本和 LLM Agent，把项目转成 assembled graph。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "understand-flow",
        "viewLabel": "/understand 主链路",
        "viewDescription": "回答：一次 /understand 如何从项目目录生成可消费知识图谱？",
        "title": "File Analyzer 并发",
        "sub": "up to 5 subagents",
        "role": "llm-agent-pool",
        "status": "source-verified",
        "detail": "每个 batch 由 file-analyzer 产出 GraphNode 和 GraphEdge JSON，最多 5 个并发。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "understand-flow",
        "viewLabel": "/understand 主链路",
        "viewDescription": "回答：一次 /understand 如何从项目目录生成可消费知识图谱？",
        "title": "合并与标准化",
        "sub": "merge / review / validate",
        "role": "normalizer",
        "status": "source-verified",
        "detail": "合并 batch JSON，标准化 ID/类型/复杂度/方向，去重和清理 dangling edges，再进行审查。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "understand-flow",
        "viewLabel": "/understand 主链路",
        "viewDescription": "回答：一次 /understand 如何从项目目录生成可消费知识图谱？",
        "title": "分层与导览",
        "sub": "architecture-analyzer / tour-builder",
        "role": "semantic-agent",
        "status": "source-verified",
        "detail": "在 assembled graph 基础上补充 layers 和 guided tour。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "understand-flow",
        "viewLabel": "/understand 主链路",
        "viewDescription": "回答：一次 /understand 如何从项目目录生成可消费知识图谱？",
        "title": "语义批处理 -> File Analyzer 并发",
        "sub": "batch context",
        "role": "context-build",
        "status": "",
        "detail": "关系语义：batch context。",
        "relation": "语义批处理 到 File Analyzer 并发"
      },
      {
        "kind": "连线",
        "viewId": "understand-flow",
        "viewLabel": "/understand 主链路",
        "viewDescription": "回答：一次 /understand 如何从项目目录生成可消费知识图谱？",
        "title": "File Analyzer 并发 -> 合并与标准化",
        "sub": "batch JSON",
        "role": "result-return",
        "status": "",
        "detail": "关系语义：batch JSON。",
        "relation": "File Analyzer 并发 到 合并与标准化"
      },
      {
        "kind": "连线",
        "viewId": "understand-flow",
        "viewLabel": "/understand 主链路",
        "viewDescription": "回答：一次 /understand 如何从项目目录生成可消费知识图谱？",
        "title": "合并与标准化 -> 分层与导览",
        "sub": "assembled graph",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：assembled graph。",
        "relation": "合并与标准化 到 分层与导览"
      },
      {
        "kind": "节点",
        "viewId": "extension-model",
        "viewLabel": "扩展机制",
        "viewDescription": "回答：Understand Anything 的扩展点分别位于哪些层？",
        "title": "Agent 扩展",
        "sub": "semantic analysis roles",
        "role": "semantic-agent-extension",
        "status": "source-verified",
        "detail": "新增语义任务表现为新增 agent prompt，并通过 intermediate JSON 交接。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "extension-model",
        "viewLabel": "扩展机制",
        "viewDescription": "回答：Understand Anything 的扩展点分别位于哪些层？",
        "title": "Skill 扩展 -> Agent 扩展",
        "sub": "调度语义角色",
        "role": "async-event",
        "status": "",
        "detail": "关系语义：调度语义角色。",
        "relation": "Skill 扩展 到 Agent 扩展"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「图谱生产流水线」、/understand 主链路 / 节点「File Analyzer 并发」、/understand 主链路 / 节点「合并与标准化」、/understand 主链路 / 节点「分层与导览」。证据结论是：Agent prompt 文件覆盖 project/file/architecture/tour/review/domain/article 等角色，`/understand` 指定 file-analyzer 最多 5 并发并通过 intermediate batch JSON 交接。图中的具体解释是：/understand 编排确定性脚本和 LLM Agent，把项目转成 assembled graph。；每个 batch 由 file-analyzer 产出 GraphNode 和 GraphEdge JSON，最多 5 个并发。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "understand-anything-plugin/agents/project-scanner.md:17-19",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/agents/project-scanner.md",
        "relativePath": "understand-anything-plugin/agents/project-scanner.md",
        "start": 17,
        "end": 19,
        "snippet": "   17  - **LLM** (reading README + manifests for the narrative `name` / `description` / `frameworks` / `languages` story) is what you contribute.\n   18  \n   19  **Language directive:** If the dispatch prompt includes a language directive (e.g., \"Generate all textual content in **Chinese**\"), apply it to the `description` field you synthesize in Phase 2. Write the description in the specified language using natural, native-level phrasing. Keep technical terms in English when no standard translation exists (e.g., \"middleware\", \"hook\", \"barrel\").",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/agents/file-analyzer.md:292-317",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/agents/file-analyzer.md",
        "relativePath": "understand-anything-plugin/agents/file-analyzer.md",
        "start": 292,
        "end": 317,
        "snippet": "  292  The `batchImportData` values contain only resolved project-internal paths — external packages have already been filtered out, so every path is safe to emit. Do NOT attempt to re-resolve imports from source. Do NOT skip imports because the target lives in another batch (cross-batch references are explicitly allowed for `imports` edges, since the project-scanner already verified the path exists).\n  293  \n  294  **Self-check before writing the batch JSON:** sum `batchImportData[file].length` across every code file in your batch. The number of `imports` edges in your output MUST equal that sum. If it doesn't, you dropped some during enumeration — go back and add them. (A deterministic post-processing pass in `merge-batch-graphs.py` will recover anything you still miss, but it is your job to get this right at emission time so the recovery report stays empty.)\n  295  \n  296  **Non-code edge creation guidance:**\n  297  - **Config files:** Look at the config file's purpose. `tsconfig.json` configures all `.ts` files; `package.json` configures the build. Create `configures` edges to the most relevant entry points or directories.\n  298  - **Doc files:** If the doc mentions specific files, components, or modules by name, create `documents` edges. README.md typically documents the project entry point.\n  299  - **Dockerfiles:** Create `deploys` edges to the main application entry point or the directory being COPY'd into the container.\n  300  - **SQL files:** Create `migrates` edges between migration files and the table nodes they modify. Create `defines_schema` edges from schema files to API handlers that serve that data.\n  301  - **CI configs:** Create `triggers` edges to the deployment targets or test suites they invoke.\n  302  - **GraphQL/Protobuf schemas:** Create `defines_schema` edges to the code files that implement the resolvers or service handlers.\n  303  - **K8s manifests:** Create `serves` edges when a Service/Deployment exposes an endpoint or routes to a container. Create `deploys` edges to the application code that runs inside the container.\n  304  - **Terraform files:** Create `provisions` edges from Terraform resource/module definitions to the infrastructure they create (e.g., database resources, VM instances).\n  305  - **Routing configs (nginx, API gateway, ingress):** Create `routes` edges from routing configuration to the services they direct traffic to.\n  306  \n  307  Do NOT use edge types not listed in the tables above.\n  308  \n  309  ## Node Types and ID Conventions",
        "omitted": "已截取 292-309 行，原始范围到 317 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/agents/architecture-analyzer.md:413-468",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/agents/architecture-analyzer.md",
        "relativePath": "understand-anything-plugin/agents/architecture-analyzer.md",
        "start": 413,
        "end": 468,
        "snippet": "  413      \"description\": \"HTTP endpoints, route handlers, and request/response processing\",\n  414      \"nodeIds\": [\"file:src/routes/index.ts\", \"file:src/controllers/auth.ts\"]\n  415    },\n  416    {\n  417      \"id\": \"layer:service\",\n  418      \"name\": \"Service Layer\",\n  419      \"description\": \"Core business logic, domain services, and orchestration\",\n  420      \"nodeIds\": [\"file:src/services/auth.ts\", \"file:src/services/user.ts\"]\n  421    },\n  422    {\n  423      \"id\": \"layer:infrastructure\",\n  424      \"name\": \"Infrastructure\",\n  425      \"description\": \"Container definitions, deployment configurations, and CI/CD pipelines\",\n  426      \"nodeIds\": [\"service:Dockerfile\", \"service:docker-compose.yml\", \"pipeline:.github/workflows/ci.yml\"]\n  427    },\n  428    {\n  429      \"id\": \"layer:documentation\",\n  430      \"name\": \"Documentation\",",
        "omitted": "已截取 413-430 行，原始范围到 468 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/agents/tour-builder.md:265-277",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/agents/tour-builder.md",
        "relativePath": "understand-anything-plugin/agents/tour-builder.md",
        "start": 265,
        "end": 277,
        "snippet": "  265  The `layers` list gives you the project's architectural groupings. Use layer names and descriptions to understand which areas are foundational vs. top-level, and structure the tour to explain foundational layers before the layers that depend on them.\n  266  \n  267  ### Step 6 -- Write Step Descriptions\n  268  \n  269  For each step, use the `nodeSummaryIndex` to access node summaries and names without re-reading files. Each description must:\n  270  \n  271  - Explain WHAT this area does and WHY it matters to the project\n  272  - Connect to previous steps (e.g., \"Building on the User types from Step 2, this service implements...\")\n  273  - Highlight key design decisions or patterns\n  274  - Be written for someone who has never seen this codebase before\n  275  - Be 2-4 sentences long\n  276  \n  277  **For non-code stops, adapt the description style:**",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/agents/graph-reviewer.md:227-227",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/agents/graph-reviewer.md",
        "relativePath": "understand-anything-plugin/agents/graph-reviewer.md",
        "start": 227,
        "end": 227,
        "snippet": "  227  - ALWAYS provide specific, actionable issue descriptions. \"Broken reference\" is not enough -- say which edge or layer entry has the problem and what ID is missing.",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/skills/understand/SKILL.md:299-337",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/skills/understand/SKILL.md",
        "relativePath": "understand-anything-plugin/skills/understand/SKILL.md",
        "start": 299,
        "end": 337,
        "snippet": "  299  Load `.understand-anything/intermediate/batches.json` (produced by Phase 1.5). Iterate the `batches[]` array.\n  300  \n  301  Report: `[Phase 2/7] Analyzing files — <totalFiles> files in <totalBatches> batches (up to 5 concurrent)...`\n  302  \n  303  For each batch, dispatch a subagent using the `file-analyzer` agent definition (at `agents/file-analyzer.md`). Run up to **5 subagents concurrently**. Append the following additional context:\n  304  \n  305  > **Additional context from main session:**\n  306  >\n  307  > Project: `<projectName>` — `<projectDescription>`\n  308  > Languages: `<languages from Phase 1>`\n  309  >\n  310  > $LANGUAGE_DIRECTIVE\n  311  \n  312  Dispatch prompt template (fill in batch-specific values from `batches.json[i]`):\n  313  \n  314  > Analyze these files and produce GraphNode and GraphEdge objects.\n  315  > Project root: `$PROJECT_ROOT`\n  316  > Project: `<projectName>`",
        "omitted": "已截取 299-316 行，原始范围到 337 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "UA-012",
    "conclusion": "增量更新依赖 git diff、staleness、fingerprint store 和 NONE/COSMETIC/STRUCTURAL 分类；auto-update hook 原则是 cosmetic 变化零 LLM token",
    "type": "source fact",
    "location": "`understand-anything-plugin/packages/core/src/staleness.ts:13-90`, `understand-anything-plugin/packages/core/src/fingerprint.ts:67-150`, `understand-anything-plugin/packages/core/src/fingerprint.ts:230-350`, `understand-anything-plugin/hooks/auto-update-prompt.md:1-30`, `understand-anything-plugin/hooks/auto-update-prompt.md:94-149`",
    "confidence": "高",
    "verified": "",
    "note": "未实测 hook",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "增量与成本控制",
        "sub": "fingerprint / staleness / hook",
        "role": "cost-policy",
        "status": "partially-verified",
        "detail": "Fingerprint 和 auto-update hook 先判断结构变化，避免 cosmetic 变更消耗 LLM token。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "增量与成本控制 -> 图谱生产流水线",
        "sub": "控制重跑范围",
        "role": "permission-check",
        "status": "",
        "detail": "关系语义：控制重跑范围。",
        "relation": "增量与成本控制 到 图谱生产流水线"
      },
      {
        "kind": "节点",
        "viewId": "understand-flow",
        "viewLabel": "/understand 主链路",
        "viewDescription": "回答：一次 /understand 如何从项目目录生成可消费知识图谱？",
        "title": "保存图谱",
        "sub": "graph / meta / fingerprints",
        "role": "persistence",
        "status": "source-verified",
        "detail": "保存 knowledge-graph.json，生成 fingerprints baseline，写 meta.json，并清理 intermediate/tmp。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "understand-flow",
        "viewLabel": "/understand 主链路",
        "viewDescription": "回答：一次 /understand 如何从项目目录生成可消费知识图谱？",
        "title": "分层与导览 -> 保存图谱",
        "sub": "final graph",
        "role": "read-write",
        "status": "",
        "detail": "关系语义：final graph。",
        "relation": "分层与导览 到 保存图谱"
      },
      {
        "kind": "节点",
        "viewId": "extension-model",
        "viewLabel": "扩展机制",
        "viewDescription": "回答：Understand Anything 的扩展点分别位于哪些层？",
        "title": "Auto-update Hook",
        "sub": "post-commit + fingerprint gate",
        "role": "automation-extension",
        "status": "partially-verified",
        "detail": "Hook 基于 fingerprint 变更分类决定是否跳过、局部更新或提示全量重建。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "extension-model",
        "viewLabel": "扩展机制",
        "viewDescription": "回答：Understand Anything 的扩展点分别位于哪些层？",
        "title": "Auto-update Hook -> Skill 扩展",
        "sub": "触发增量路径",
        "role": "async-event",
        "status": "",
        "detail": "关系语义：触发增量路径。",
        "relation": "Auto-update Hook 到 Skill 扩展"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「增量与成本控制」、架构总览 / 连线「增量与成本控制 -> 图谱生产流水线」、/understand 主链路 / 节点「保存图谱」、/understand 主链路 / 连线「分层与导览 -> 保存图谱」。证据结论是：增量更新依赖 git diff、staleness、fingerprint store 和 NONE/COSMETIC/STRUCTURAL 分类；auto-update hook 原则是 cosmetic 变化零 LLM token。图中的具体解释是：Fingerprint 和 auto-update hook 先判断结构变化，避免 cosmetic 变更消耗 LLM token。；关系语义：控制重跑范围。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "understand-anything-plugin/packages/core/src/staleness.ts:13-90",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/packages/core/src/staleness.ts",
        "relativePath": "understand-anything-plugin/packages/core/src/staleness.ts",
        "start": 13,
        "end": 90,
        "snippet": "   13  export function getChangedFiles(\n   14    projectDir: string,\n   15    lastCommitHash: string,\n   16  ): string[] {\n   17    try {\n   18      const output = execFileSync('git', ['diff', `${lastCommitHash}..HEAD`, '--name-only'], {\n   19        cwd: projectDir,\n   20        encoding: \"utf-8\",\n   21      });\n   22      return output\n   23        .split(\"\\n\")\n   24        .map((line) => line.trim())\n   25        .filter((line) => line.length > 0);\n   26    } catch {\n   27      return [];\n   28    }\n   29  }\n   30  ",
        "omitted": "已截取 13-30 行，原始范围到 90 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/packages/core/src/fingerprint.ts:67-150",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/packages/core/src/fingerprint.ts",
        "relativePath": "understand-anything-plugin/packages/core/src/fingerprint.ts",
        "start": 67,
        "end": 150,
        "snippet": "   67  /**\n   68   * Compute SHA-256 content hash for a file's content.\n   69   */\n   70  export function contentHash(content: string): string {\n   71    return createHash(\"sha256\").update(content).digest(\"hex\");\n   72  }\n   73  \n   74  /**\n   75   * Extract a structural fingerprint from a file using its tree-sitter analysis.\n   76   * The fingerprint captures only the elements that affect the knowledge graph\n   77   * (function/class/import/export signatures), not implementation details.\n   78   */\n   79  export function extractFileFingerprint(\n   80    filePath: string,\n   81    content: string,\n   82    analysis: StructuralAnalysis,\n   83  ): FileFingerprint {\n   84    const hash = contentHash(content);",
        "omitted": "已截取 67-84 行，原始范围到 150 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/packages/core/src/fingerprint.ts:230-350",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/packages/core/src/fingerprint.ts",
        "relativePath": "understand-anything-plugin/packages/core/src/fingerprint.ts",
        "start": 230,
        "end": 350,
        "snippet": "  230    const newExports = [...newFp.exports].sort();\n  231  \n  232    if (JSON.stringify(oldExports) !== JSON.stringify(newExports)) {\n  233      details.push(\"exports changed\");\n  234    }\n  235  \n  236    if (details.length > 0) {\n  237      return { filePath: newFp.filePath, changeLevel: \"STRUCTURAL\", details };\n  238    }\n  239  \n  240    // Content changed but structure is identical\n  241    return {\n  242      filePath: newFp.filePath,\n  243      changeLevel: \"COSMETIC\",\n  244      details: [\"internal logic changed (no structural impact)\"],\n  245    };\n  246  }\n  247  ",
        "omitted": "已截取 230-247 行，原始范围到 350 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/hooks/auto-update-prompt.md:1-30",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/hooks/auto-update-prompt.md",
        "relativePath": "understand-anything-plugin/hooks/auto-update-prompt.md",
        "start": 1,
        "end": 30,
        "snippet": "    1  # Auto-Update Knowledge Graph (Internal — Hook-Triggered)\n    2  \n    3  Incrementally update the knowledge graph using deterministic structural fingerprinting to minimize token usage. This prompt is triggered automatically by the post-commit hook when `autoUpdate` is enabled. It is NOT a user-facing skill.\n    4  \n    5  **Key principle:** Spend zero LLM tokens when changes are cosmetic (formatting, internal logic). Only invoke LLM agents when structural changes (new/removed functions, classes, imports, exports) are detected.\n    6  \n    7  ---\n    8  \n    9  ## Phase 0 — Pre-flight (Zero Token Cost)\n   10  \n   11  1. Set `PROJECT_ROOT` to the current working directory.\n   12  \n   13  2. Check that `$PROJECT_ROOT/.understand-anything/knowledge-graph.json` exists.\n   14     - If not: report \"No existing knowledge graph found. Run `/understand` first to create one.\" and **STOP**.\n   15  \n   16  3. Check that `$PROJECT_ROOT/.understand-anything/meta.json` exists and read `gitCommitHash`.\n   17     - If not: report \"No analysis metadata found. Run `/understand` to create a baseline.\" and **STOP**.\n   18  ",
        "omitted": "已截取 1-18 行，原始范围到 30 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/hooks/auto-update-prompt.md:94-149",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/hooks/auto-update-prompt.md",
        "relativePath": "understand-anything-plugin/hooks/auto-update-prompt.md",
        "start": 94,
        "end": 149,
        "snippet": "   94  ## Phase 1 — Structural Fingerprint Check (Zero LLM Tokens)\n   95  \n   96  This phase runs a deterministic Node.js script that compares file structures against stored fingerprints. It costs **zero LLM tokens** — only the script execution cost.\n   97  \n   98  1. Write and execute a Node.js script (`$PROJECT_ROOT/.understand-anything/intermediate/fingerprint-check.mjs`):\n   99  \n  100  ```javascript\n  101  // The script should:\n  102  // 1. Read fingerprints.json from .understand-anything/fingerprints.json\n  103  // 2. For each changed source file:\n  104  //    a. Read the file content\n  105  //    b. Compute SHA-256 content hash\n  106  //    c. If content hash matches stored hash → NONE (skip)\n  107  //    d. Extract structural elements via regex:\n  108  //       - Functions: match patterns like `function NAME(`, `const NAME = (`, `export function NAME(`\n  109  //       - Classes: match `class NAME`, `export class NAME`\n  110  //       - Imports: match `import ... from '...'`, `import '...'`\n  111  //       - Exports: match `export { ... }`, `export default`, `export function`, `export class`, `export const`",
        "omitted": "已截取 94-111 行，原始范围到 149 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "UA-013",
    "conclusion": "Dashboard 从 URL/sessionStorage 获取 token，加载 meta/config/knowledge-graph/diff/domain，使用 `validateGraph`，并在 store 中建立 graph indexes、search engine 和视图状态",
    "type": "source fact",
    "location": "`understand-anything-plugin/packages/dashboard/src/App.tsx:49-105`, `understand-anything-plugin/packages/dashboard/src/App.tsx:117-205`, `understand-anything-plugin/packages/dashboard/src/store.ts:100-150`, `understand-anything-plugin/packages/dashboard/src/store.ts:365-394`",
    "confidence": "高",
    "verified": "",
    "note": "Dashboard 消费端",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "Dashboard",
        "sub": "React Flow / Zustand / token gate",
        "role": "consumer-ui",
        "status": "source-verified",
        "detail": "Dashboard 加载并校验图谱，建立索引和视图状态，通过受控端点读取源码。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "KnowledgeGraph -> Dashboard",
        "sub": "加载/校验/展示",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：加载/校验/展示。",
        "relation": "KnowledgeGraph 到 Dashboard"
      },
      {
        "kind": "节点",
        "viewId": "graph-contract",
        "viewLabel": "图谱契约",
        "viewDescription": "回答：哪些生产端和消费端依赖同一个图谱契约？",
        "title": "Dashboard",
        "sub": "validate + indexes + views",
        "role": "ui-consumer",
        "status": "source-verified",
        "detail": "Dashboard 通过 validateGraph 加载图谱，再在 store 中建立节点/layer/search/view 状态。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "graph-contract",
        "viewLabel": "图谱契约",
        "viewDescription": "回答：哪些生产端和消费端依赖同一个图谱契约？",
        "title": "KnowledgeGraph JSON -> Dashboard",
        "sub": "可视化",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：可视化。",
        "relation": "KnowledgeGraph JSON 到 Dashboard"
      },
      {
        "kind": "节点",
        "viewId": "dashboard-security",
        "viewLabel": "Dashboard 与源码访问",
        "viewDescription": "回答：Dashboard 如何读取图谱和源码，同时避免任意文件读取？",
        "title": "一次性 Token",
        "sub": "?token=ACCESS_TOKEN",
        "role": "access-token",
        "status": "source-verified",
        "detail": "服务启动时生成 token，React 从 URL/sessionStorage 使用，所有数据端点都校验 token。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "dashboard-security",
        "viewLabel": "Dashboard 与源码访问",
        "viewDescription": "回答：Dashboard 如何读取图谱和源码，同时避免任意文件读取？",
        "title": "图谱数据文件",
        "sub": "graph / domain / diff / meta / config",
        "role": "data-files",
        "status": "source-verified",
        "detail": "Dashboard 加载 knowledge、domain、diff、meta、config，并对 graph/domain 调用 validateGraph。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "dashboard-security",
        "viewLabel": "Dashboard 与源码访问",
        "viewDescription": "回答：Dashboard 如何读取图谱和源码，同时避免任意文件读取？",
        "title": "Zustand Store",
        "sub": "indexes / search / view mode",
        "role": "client-state",
        "status": "source-verified",
        "detail": "setGraph 建立 nodesById、layer map、SearchEngine、视图模式和缓存状态。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "dashboard-security",
        "viewLabel": "Dashboard 与源码访问",
        "viewDescription": "回答：Dashboard 如何读取图谱和源码，同时避免任意文件读取？",
        "title": "一次性 Token -> 图谱数据文件",
        "sub": "授权读取",
        "role": "permission-check",
        "status": "",
        "detail": "关系语义：授权读取。",
        "relation": "一次性 Token 到 图谱数据文件"
      },
      {
        "kind": "连线",
        "viewId": "dashboard-security",
        "viewLabel": "Dashboard 与源码访问",
        "viewDescription": "回答：Dashboard 如何读取图谱和源码，同时避免任意文件读取？",
        "title": "图谱数据文件 -> Zustand Store",
        "sub": "校验后建索引",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：校验后建索引。",
        "relation": "图谱数据文件 到 Zustand Store"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Dashboard」、架构总览 / 连线「KnowledgeGraph -> Dashboard」、图谱契约 / 节点「Dashboard」、图谱契约 / 连线「KnowledgeGraph JSON -> Dashboard」。证据结论是：Dashboard 从 URL/sessionStorage 获取 token，加载 meta/config/knowledge-graph/diff/domain，使用 `validateGraph`，并在 store 中建立 graph indexes、search engine 和视图状态。图中的具体解释是：Dashboard 加载并校验图谱，建立索引和视图状态，通过受控端点读取源码。；关系语义：加载/校验/展示。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "understand-anything-plugin/packages/dashboard/src/App.tsx:49-105",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/packages/dashboard/src/App.tsx",
        "relativePath": "understand-anything-plugin/packages/dashboard/src/App.tsx",
        "start": 49,
        "end": 105,
        "snippet": "   49  /** Resolve data file URL — in demo mode, use env var URLs; otherwise use local paths with token. */\n   50  function dataUrl(fileName: string, token: string | null): string {\n   51    if (DEMO_MODE) {\n   52      const envMap: Record<string, string | undefined> = {\n   53        \"knowledge-graph.json\": import.meta.env.VITE_GRAPH_URL,\n   54        \"domain-graph.json\": import.meta.env.VITE_DOMAIN_GRAPH_URL,\n   55        \"meta.json\": import.meta.env.VITE_META_URL,\n   56        \"diff-overlay.json\": import.meta.env.VITE_DIFF_OVERLAY_URL,\n   57        \"config.json\": import.meta.env.VITE_CONFIG_URL,\n   58      };\n   59      const url = envMap[fileName];\n   60      if (url) return url;\n   61    }\n   62    const path = `/${fileName}`;\n   63    return token ? `${path}?token=${encodeURIComponent(token)}` : path;\n   64  }\n   65  \n   66  /**",
        "omitted": "已截取 49-66 行，原始范围到 105 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/packages/dashboard/src/App.tsx:117-205",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/packages/dashboard/src/App.tsx",
        "relativePath": "understand-anything-plugin/packages/dashboard/src/App.tsx",
        "start": 117,
        "end": 205,
        "snippet": "  117    useEffect(() => {\n  118      fetch(dataUrl(\"meta.json\", accessToken))\n  119        .then((r) => (r.ok ? r.json() : null))\n  120        .then((meta) => {\n  121          if (meta?.theme) setMetaTheme(meta.theme);\n  122        })\n  123        .catch(() => {});\n  124      fetch(dataUrl(\"config.json\", accessToken))\n  125        .then((r) => (r.ok ? r.json() : null))\n  126        .then((config) => {\n  127          if (config?.outputLanguage) setOutputLanguage(config.outputLanguage);\n  128        })\n  129        .catch(() => {});\n  130    }, []);\n  131  \n  132    useEffect(() => {\n  133      fetch(dataUrl(\"knowledge-graph.json\", accessToken))\n  134        .then((res) => res.json())",
        "omitted": "已截取 117-134 行，原始范围到 205 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/packages/dashboard/src/store.ts:100-150",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/packages/dashboard/src/store.ts",
        "relativePath": "understand-anything-plugin/packages/dashboard/src/store.ts",
        "start": 100,
        "end": 150,
        "snippet": "  100  interface DashboardStore {\n  101    graph: KnowledgeGraph | null;\n  102    /** id → node lookup, rebuilt by setGraph. Empty before any graph loads. */\n  103    nodesById: Map<string, GraphNode>;\n  104    /** id → layer id (first-matching-layer wins), rebuilt by setGraph. Empty before any graph loads. */\n  105    nodeIdToLayerId: Map<string, string>;\n  106    /** id → set of every layer the node belongs to, rebuilt by setGraph. Empty before any graph loads. */\n  107    nodeIdToLayerIds: Map<string, Set<string>>;\n  108    selectedNodeId: string | null;\n  109    searchQuery: string;\n  110    searchResults: SearchResult[];\n  111    searchEngine: SearchEngine | null;\n  112    searchMode: \"fuzzy\" | \"semantic\";\n  113    setSearchMode: (mode: \"fuzzy\" | \"semantic\") => void;\n  114  \n  115    // Lens navigation\n  116    navigationLevel: NavigationLevel;\n  117    activeLayerId: string | null;",
        "omitted": "已截取 100-117 行，原始范围到 150 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/packages/dashboard/src/store.ts:365-394",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/packages/dashboard/src/store.ts",
        "relativePath": "understand-anything-plugin/packages/dashboard/src/store.ts",
        "start": 365,
        "end": 394,
        "snippet": "  365    setGraph: (graph) => {\n  366      const searchEngine = new SearchEngine(graph.nodes);\n  367      const query = get().searchQuery;\n  368      const searchResults = query.trim() ? searchEngine.search(query) : [];\n  369      const { viewMode, domainGraph, activeDomainId } = get();\n  370      // Preserve domain view if a domain graph is already loaded\n  371      const keepDomainView = viewMode === \"domain\" && domainGraph !== null;\n  372      const { nodesById, nodeIdToLayerId, nodeIdToLayerIds } = buildGraphIndexes(graph);\n  373      set({\n  374        graph,\n  375        nodesById,\n  376        nodeIdToLayerId,\n  377        nodeIdToLayerIds,\n  378        searchEngine,\n  379        searchResults,\n  380        navigationLevel: \"overview\",\n  381        activeLayerId: null,\n  382        selectedNodeId: null,",
        "omitted": "已截取 365-382 行，原始范围到 394 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "UA-014",
    "conclusion": "Vite middleware 为 knowledge/domain/diff/meta/config/file-content 端点要求一次性 token；源码读取拒绝绝对路径、路径逃逸、非图谱文件、大文件和二进制，并脱敏绝对 filePath",
    "type": "source fact",
    "location": "`understand-anything-plugin/packages/dashboard/vite.config.ts:9-23`, `understand-anything-plugin/packages/dashboard/vite.config.ts:114-177`, `understand-anything-plugin/packages/dashboard/vite.config.ts:240-360`",
    "confidence": "高",
    "verified": "",
    "note": "本地安全边界",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "Dashboard",
        "sub": "React Flow / Zustand / token gate",
        "role": "consumer-ui",
        "status": "source-verified",
        "detail": "Dashboard 加载并校验图谱，建立索引和视图状态，通过受控端点读取源码。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "KnowledgeGraph -> Dashboard",
        "sub": "加载/校验/展示",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：加载/校验/展示。",
        "relation": "KnowledgeGraph 到 Dashboard"
      },
      {
        "kind": "节点",
        "viewId": "dashboard-security",
        "viewLabel": "Dashboard 与源码访问",
        "viewDescription": "回答：Dashboard 如何读取图谱和源码，同时避免任意文件读取？",
        "title": "Vite 本地服务",
        "sub": "GRAPH_DIR + protected endpoints",
        "role": "local-server",
        "status": "source-verified",
        "detail": "Vite 通过 GRAPH_DIR 或 cwd 查找 .understand-anything，并为数据端点加 token 保护。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "dashboard-security",
        "viewLabel": "Dashboard 与源码访问",
        "viewDescription": "回答：Dashboard 如何读取图谱和源码，同时避免任意文件读取？",
        "title": "一次性 Token",
        "sub": "?token=ACCESS_TOKEN",
        "role": "access-token",
        "status": "source-verified",
        "detail": "服务启动时生成 token，React 从 URL/sessionStorage 使用，所有数据端点都校验 token。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "dashboard-security",
        "viewLabel": "Dashboard 与源码访问",
        "viewDescription": "回答：Dashboard 如何读取图谱和源码，同时避免任意文件读取？",
        "title": "图谱数据文件",
        "sub": "graph / domain / diff / meta / config",
        "role": "data-files",
        "status": "source-verified",
        "detail": "Dashboard 加载 knowledge、domain、diff、meta、config，并对 graph/domain 调用 validateGraph。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "dashboard-security",
        "viewLabel": "Dashboard 与源码访问",
        "viewDescription": "回答：Dashboard 如何读取图谱和源码，同时避免任意文件读取？",
        "title": "源码预览请求",
        "sub": "/file-content.json?path=",
        "role": "file-preview-request",
        "status": "source-verified",
        "detail": "用户点击文件节点后请求源码内容，但请求必须走 file-content endpoint。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "dashboard-security",
        "viewLabel": "Dashboard 与源码访问",
        "viewDescription": "回答：Dashboard 如何读取图谱和源码，同时避免任意文件读取？",
        "title": "路径与图谱白名单",
        "sub": "no absolute / no escape / graph filePath only",
        "role": "path-policy",
        "status": "source-verified",
        "detail": "endpoint 拒绝绝对路径、路径逃逸、未出现在 knowledge graph 的文件。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "dashboard-security",
        "viewLabel": "Dashboard 与源码访问",
        "viewDescription": "回答：Dashboard 如何读取图谱和源码，同时避免任意文件读取？",
        "title": "受限源码内容",
        "sub": "max 1MB / no binary",
        "role": "source-content",
        "status": "source-verified",
        "detail": "源码读取限制大小并拒绝二进制，返回相对 path、language、content、size 和 lineCount。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "dashboard-security",
        "viewLabel": "Dashboard 与源码访问",
        "viewDescription": "回答：Dashboard 如何读取图谱和源码，同时避免任意文件读取？",
        "title": "Vite 本地服务 -> 一次性 Token",
        "sub": "生成并要求",
        "role": "permission-check",
        "status": "",
        "detail": "关系语义：生成并要求。",
        "relation": "Vite 本地服务 到 一次性 Token"
      },
      {
        "kind": "连线",
        "viewId": "dashboard-security",
        "viewLabel": "Dashboard 与源码访问",
        "viewDescription": "回答：Dashboard 如何读取图谱和源码，同时避免任意文件读取？",
        "title": "一次性 Token -> 图谱数据文件",
        "sub": "授权读取",
        "role": "permission-check",
        "status": "",
        "detail": "关系语义：授权读取。",
        "relation": "一次性 Token 到 图谱数据文件"
      },
      {
        "kind": "连线",
        "viewId": "dashboard-security",
        "viewLabel": "Dashboard 与源码访问",
        "viewDescription": "回答：Dashboard 如何读取图谱和源码，同时避免任意文件读取？",
        "title": "源码预览请求 -> 路径与图谱白名单",
        "sub": "路径校验",
        "role": "permission-check",
        "status": "",
        "detail": "关系语义：路径校验。",
        "relation": "源码预览请求 到 路径与图谱白名单"
      },
      {
        "kind": "连线",
        "viewId": "dashboard-security",
        "viewLabel": "Dashboard 与源码访问",
        "viewDescription": "回答：Dashboard 如何读取图谱和源码，同时避免任意文件读取？",
        "title": "路径与图谱白名单 -> 受限源码内容",
        "sub": "读取源码",
        "role": "request-flow",
        "status": "",
        "detail": "关系语义：读取源码。",
        "relation": "路径与图谱白名单 到 受限源码内容"
      },
      {
        "kind": "连线",
        "viewId": "dashboard-security",
        "viewLabel": "Dashboard 与源码访问",
        "viewDescription": "回答：Dashboard 如何读取图谱和源码，同时避免任意文件读取？",
        "title": "图谱数据文件 -> 路径与图谱白名单",
        "sub": "提供 filePath 白名单",
        "role": "read-write",
        "status": "",
        "detail": "关系语义：提供 filePath 白名单。",
        "relation": "图谱数据文件 到 路径与图谱白名单"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Dashboard」、架构总览 / 连线「KnowledgeGraph -> Dashboard」、Dashboard 与源码访问 / 节点「Vite 本地服务」、Dashboard 与源码访问 / 节点「一次性 Token」。证据结论是：Vite middleware 为 knowledge/domain/diff/meta/config/file-content 端点要求一次性 token；源码读取拒绝绝对路径、路径逃逸、非图谱文件、大文件和二进制，并脱敏绝对 filePath。图中的具体解释是：Dashboard 加载并校验图谱，建立索引和视图状态，通过受控端点读取源码。；关系语义：加载/校验/展示。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "understand-anything-plugin/packages/dashboard/vite.config.ts:9-23",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/packages/dashboard/vite.config.ts",
        "relativePath": "understand-anything-plugin/packages/dashboard/vite.config.ts",
        "start": 9,
        "end": 23,
        "snippet": "    9  // Generate a one-time token when the server process starts.\n   10  // This token is printed to the terminal and must be in the URL\n   11  // to fetch knowledge-graph.json or diff-overlay.json.\n   12  const ACCESS_TOKEN = process.env.UNDERSTAND_ACCESS_TOKEN || crypto.randomBytes(16).toString(\"hex\");\n   13  const MAX_SOURCE_FILE_BYTES = 1024 * 1024;\n   14  \n   15  function graphFileCandidates(fileName: string): string[] {\n   16    const graphDir = process.env.GRAPH_DIR;\n   17    return [\n   18      ...(graphDir\n   19        ? [path.resolve(graphDir, `.understand-anything/${fileName}`)]\n   20        : []),\n   21      path.resolve(process.cwd(), `.understand-anything/${fileName}`),\n   22      path.resolve(process.cwd(), `../../../.understand-anything/${fileName}`),\n   23    ];",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/packages/dashboard/vite.config.ts:114-177",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/packages/dashboard/vite.config.ts",
        "relativePath": "understand-anything-plugin/packages/dashboard/vite.config.ts",
        "start": 114,
        "end": 177,
        "snippet": "  114  function readSourceFile(url: URL) {\n  115    const requestedPath = url.searchParams.get(\"path\") ?? \"\";\n  116    if (!requestedPath) return rejectFileRequest(\"Missing path\");\n  117    if (requestedPath.includes(\"\\0\")) return rejectFileRequest(\"Invalid path\");\n  118    if (path.isAbsolute(requestedPath)) return rejectFileRequest(\"Absolute paths are not allowed\");\n  119  \n  120    const normalizedPath = path.normalize(requestedPath);\n  121    if (\n  122      normalizedPath === \".\" ||\n  123      normalizedPath.startsWith(`..${path.sep}`) ||\n  124      normalizedPath === \"..\" ||\n  125      path.isAbsolute(normalizedPath)\n  126    ) {\n  127      return rejectFileRequest(\"Path must stay inside the project\");\n  128    }\n  129  \n  130    const graphFile = findGraphFile(\"knowledge-graph.json\");\n  131    if (!graphFile) {",
        "omitted": "已截取 114-131 行，原始范围到 177 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/packages/dashboard/vite.config.ts:240-360",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/packages/dashboard/vite.config.ts",
        "relativePath": "understand-anything-plugin/packages/dashboard/vite.config.ts",
        "start": 240,
        "end": 360,
        "snippet": "  240            const address = server.httpServer?.address();\n  241            const port = typeof address === \"object\" && address ? address.port : 5173;\n  242            console.log(\n  243              `\\n  🔑  Dashboard URL: http://127.0.0.1:${port}/?token=${ACCESS_TOKEN}\\n`\n  244            );\n  245          });\n  246  \n  247          server.middlewares.use((req, res, next) => {\n  248            const url = new URL(req.url ?? \"/\", \"http://127.0.0.1:5173\");\n  249            const pathname = url.pathname;\n  250            const isProtectedEndpoint =\n  251              pathname === \"/knowledge-graph.json\" ||\n  252              pathname === \"/domain-graph.json\" ||\n  253              pathname === \"/diff-overlay.json\" ||\n  254              pathname === \"/meta.json\" ||\n  255              pathname === \"/config.json\" ||\n  256              pathname === \"/file-content.json\";\n  257  ",
        "omitted": "已截取 240-257 行，原始范围到 360 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "UA-015",
    "conclusion": "Chat/Explain/Onboard 都消费 `KnowledgeGraph`：Chat 搜索并扩展 1-hop，Explain 定位节点/child/connected/layer，Onboard 从 graph 生成 Markdown guide",
    "type": "source fact",
    "location": "`understand-anything-plugin/src/context-builder.ts:20-80`, `understand-anything-plugin/src/context-builder.ts:85-140`, `understand-anything-plugin/src/explain-builder.ts:18-103`, `understand-anything-plugin/src/explain-builder.ts:122-190`, `understand-anything-plugin/src/onboard-builder.ts:1-124`",
    "confidence": "高",
    "verified": "",
    "note": "图谱二次消费",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "Skills 命令面",
        "sub": "/understand / dashboard / chat",
        "role": "command-surface",
        "status": "source-verified",
        "detail": "Skill 文件定义用户命令、参数、输入输出路径和调度流程。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "辅助理解技能",
        "sub": "chat / explain / diff / onboard",
        "role": "graph-consumer",
        "status": "source-verified",
        "detail": "辅助技能不重新扫描项目，而是消费 KnowledgeGraph 构造 LLM 上下文或 Markdown 输出。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "KnowledgeGraph -> 辅助理解技能",
        "sub": "构造问答上下文",
        "role": "context-build",
        "status": "",
        "detail": "关系语义：构造问答上下文。",
        "relation": "KnowledgeGraph 到 辅助理解技能"
      },
      {
        "kind": "节点",
        "viewId": "graph-contract",
        "viewLabel": "图谱契约",
        "viewDescription": "回答：哪些生产端和消费端依赖同一个图谱契约？",
        "title": "Chat / Explain",
        "sub": "search + 1-hop + layer",
        "role": "llm-context-consumer",
        "status": "source-verified",
        "detail": "Chat 和 Explain 从图谱构造 LLM prompt 上下文，不重新扫描源码。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "graph-contract",
        "viewLabel": "图谱契约",
        "viewDescription": "回答：哪些生产端和消费端依赖同一个图谱契约？",
        "title": "Onboard / Diff",
        "sub": "markdown / overlay",
        "role": "document-consumer",
        "status": "source-verified",
        "detail": "Onboard 从 graph 生成学习文档，Diff 基于 graph 节点和关系生成影响叠加。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "graph-contract",
        "viewLabel": "图谱契约",
        "viewDescription": "回答：哪些生产端和消费端依赖同一个图谱契约？",
        "title": "KnowledgeGraph JSON -> Chat / Explain",
        "sub": "LLM 上下文",
        "role": "context-build",
        "status": "",
        "detail": "关系语义：LLM 上下文。",
        "relation": "KnowledgeGraph JSON 到 Chat / Explain"
      },
      {
        "kind": "连线",
        "viewId": "graph-contract",
        "viewLabel": "图谱契约",
        "viewDescription": "回答：哪些生产端和消费端依赖同一个图谱契约？",
        "title": "KnowledgeGraph JSON -> Onboard / Diff",
        "sub": "文档/影响",
        "role": "result-return",
        "status": "",
        "detail": "关系语义：文档/影响。",
        "relation": "KnowledgeGraph JSON 到 Onboard / Diff"
      },
      {
        "kind": "节点",
        "viewId": "extension-model",
        "viewLabel": "扩展机制",
        "viewDescription": "回答：Understand Anything 的扩展点分别位于哪些层？",
        "title": "Skill 扩展",
        "sub": "user-facing commands",
        "role": "command-extension",
        "status": "source-verified",
        "detail": "新增用户能力通常表现为新增 skill，定义命令、参数、输入和输出。",
        "relation": ""
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Skills 命令面」、架构总览 / 节点「辅助理解技能」、架构总览 / 连线「KnowledgeGraph -> 辅助理解技能」、图谱契约 / 节点「Chat / Explain」。证据结论是：Chat/Explain/Onboard 都消费 `KnowledgeGraph`：Chat 搜索并扩展 1-hop，Explain 定位节点/child/connected/layer，Onboard 从 graph 生成 Markdown guide。图中的具体解释是：Skill 文件定义用户命令、参数、输入输出路径和调度流程。；辅助技能不重新扫描项目，而是消费 KnowledgeGraph 构造 LLM 上下文或 Markdown 输出。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "understand-anything-plugin/src/context-builder.ts:20-80",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/src/context-builder.ts",
        "relativePath": "understand-anything-plugin/src/context-builder.ts",
        "start": 20,
        "end": 80,
        "snippet": "   20  /**\n   21   * Build a ChatContext by searching the knowledge graph for nodes relevant\n   22   * to the user's query, expanding 1 hop via edges, and collecting the\n   23   * associated layers.\n   24   */\n   25  export function buildChatContext(\n   26    graph: KnowledgeGraph,\n   27    query: string,\n   28    maxNodes?: number,\n   29  ): ChatContext {\n   30    const limit = maxNodes ?? 15;\n   31  \n   32    // 1. Use SearchEngine to find relevant nodes\n   33    const engine = new SearchEngine(graph.nodes);\n   34    const searchResults = engine.search(query, { limit });\n   35  \n   36    // Build a set of matched node IDs\n   37    const matchedIds = new Set(searchResults.map((r) => r.nodeId));",
        "omitted": "已截取 20-37 行，原始范围到 80 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/src/context-builder.ts:85-140",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/src/context-builder.ts",
        "relativePath": "understand-anything-plugin/src/context-builder.ts",
        "start": 85,
        "end": 140,
        "snippet": "   85  export function formatContextForPrompt(context: ChatContext): string {\n   86    const lines: string[] = [];\n   87  \n   88    // Project header\n   89    lines.push(`# Project: ${context.projectName}`);\n   90    lines.push(\"\");\n   91    lines.push(context.projectDescription);\n   92    lines.push(\"\");\n   93    lines.push(`**Languages:** ${context.languages.join(\", \")}`);\n   94    lines.push(`**Frameworks:** ${context.frameworks.join(\", \")}`);\n   95    lines.push(\"\");\n   96  \n   97    // Layers section\n   98    if (context.relevantLayers.length > 0) {\n   99      lines.push(\"## Relevant Layers\");\n  100      lines.push(\"\");\n  101      for (const layer of context.relevantLayers) {\n  102        lines.push(`### ${layer.name}`);",
        "omitted": "已截取 85-102 行，原始范围到 140 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/src/explain-builder.ts:18-103",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/src/explain-builder.ts",
        "relativePath": "understand-anything-plugin/src/explain-builder.ts",
        "start": 18,
        "end": 103,
        "snippet": "   18  /**\n   19   * Build a context for explaining a specific file or function.\n   20   * Supports file paths (\"src/auth.ts\") and path:function (\"src/auth.ts:login\").\n   21   */\n   22  export function buildExplainContext(\n   23    graph: KnowledgeGraph,\n   24    path: string,\n   25  ): ExplainContext {\n   26    const { nodes, edges, layers } = graph;\n   27  \n   28    let targetNode: GraphNode | null = null;\n   29  \n   30    // Check for path:function format (e.g. \"src/auth.ts:login\")\n   31    const colonIdx = path.lastIndexOf(\":\");\n   32    if (colonIdx > 0 && !path.includes(\"://\")) {\n   33      const filePath = path.slice(0, colonIdx);\n   34      const funcName = path.slice(colonIdx + 1);\n   35      targetNode =",
        "omitted": "已截取 18-35 行，原始范围到 103 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/src/explain-builder.ts:122-190",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/src/explain-builder.ts",
        "relativePath": "understand-anything-plugin/src/explain-builder.ts",
        "start": 122,
        "end": 190,
        "snippet": "  122    const { targetNode, childNodes, connectedNodes, relevantEdges, layer } = ctx;\n  123    const lines: string[] = [];\n  124  \n  125    lines.push(`# Deep Dive: ${targetNode.name}`);\n  126    lines.push(\"\");\n  127    lines.push(\n  128      `**Type:** ${targetNode.type} | **Complexity:** ${targetNode.complexity}`,\n  129    );\n  130    if (targetNode.filePath)\n  131      lines.push(`**File:** \\`${targetNode.filePath}\\``);\n  132    if (targetNode.lineRange)\n  133      lines.push(\n  134        `**Lines:** ${targetNode.lineRange[0]}-${targetNode.lineRange[1]}`,\n  135      );\n  136    lines.push(\"\");\n  137    lines.push(`**Summary:** ${targetNode.summary}`);\n  138    lines.push(\"\");\n  139  ",
        "omitted": "已截取 122-139 行，原始范围到 190 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/src/onboard-builder.ts:1-124",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/src/onboard-builder.ts",
        "relativePath": "understand-anything-plugin/src/onboard-builder.ts",
        "start": 1,
        "end": 124,
        "snippet": "    1  import type { KnowledgeGraph } from \"@understand-anything/core\";\n    2  \n    3  /**\n    4   * Generate a structured onboarding guide from the knowledge graph.\n    5   * Output is standalone markdown suitable for a README, wiki, or docs.\n    6   */\n    7  export function buildOnboardingGuide(graph: KnowledgeGraph): string {\n    8    const { project, nodes, edges, layers, tour } = graph;\n    9    const lines: string[] = [];\n   10  \n   11    // --- Project Overview ---\n   12    lines.push(`# ${project.name}`);\n   13    lines.push(\"\");\n   14    lines.push(`> ${project.description}`);\n   15    lines.push(\"\");\n   16    lines.push(`| | |`);\n   17    lines.push(`|---|---|`);\n   18    lines.push(`| **Languages** | ${project.languages.join(\", \")} |`);",
        "omitted": "已截取 1-18 行，原始范围到 124 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "UA-016",
    "conclusion": "Domain 模式可从现有 graph 派生或 lightweight scan；Knowledge 模式解析 Karpathy wiki，最终保存 `kind: \"knowledge\"` 的图谱",
    "type": "source fact",
    "location": "`understand-anything-plugin/skills/understand-domain/SKILL.md:1-15`, `understand-anything-plugin/skills/understand-domain/SKILL.md:89-140`, `understand-anything-plugin/skills/understand-knowledge/SKILL.md:1-20`, `understand-anything-plugin/skills/understand-knowledge/SKILL.md:41-131`, `understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py:35-115`, `understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py:334-370`",
    "confidence": "高",
    "verified": "",
    "note": "领域/知识模式",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "Skills 命令面",
        "sub": "/understand / dashboard / chat",
        "role": "command-surface",
        "status": "source-verified",
        "detail": "Skill 文件定义用户命令、参数、输入输出路径和调度流程。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "领域 / 知识模式",
        "sub": "domain-graph / kind=knowledge",
        "role": "graph-mode",
        "status": "source-verified",
        "detail": "Domain 和 Knowledge 模式扩展节点/边语义，但仍保存为 KnowledgeGraph 家族产物。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "领域 / 知识模式 -> KnowledgeGraph",
        "sub": "复用图谱契约",
        "role": "dependency",
        "status": "",
        "detail": "关系语义：复用图谱契约。",
        "relation": "领域 / 知识模式 到 KnowledgeGraph"
      },
      {
        "kind": "节点",
        "viewId": "graph-contract",
        "viewLabel": "图谱契约",
        "viewDescription": "回答：哪些生产端和消费端依赖同一个图谱契约？",
        "title": "Domain / Knowledge",
        "sub": "domain graph / kind=knowledge",
        "role": "mode-consumer",
        "status": "source-verified",
        "detail": "领域图和知识库图通过扩展节点/边类型复用同一 KnowledgeGraph 家族。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "graph-contract",
        "viewLabel": "图谱契约",
        "viewDescription": "回答：哪些生产端和消费端依赖同一个图谱契约？",
        "title": "KnowledgeGraph JSON -> Domain / Knowledge",
        "sub": "模式扩展",
        "role": "dependency",
        "status": "",
        "detail": "关系语义：模式扩展。",
        "relation": "KnowledgeGraph JSON 到 Domain / Knowledge"
      },
      {
        "kind": "节点",
        "viewId": "extension-model",
        "viewLabel": "扩展机制",
        "viewDescription": "回答：Understand Anything 的扩展点分别位于哪些层？",
        "title": "Skill 扩展",
        "sub": "user-facing commands",
        "role": "command-extension",
        "status": "source-verified",
        "detail": "新增用户能力通常表现为新增 skill，定义命令、参数、输入和输出。",
        "relation": ""
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「Skills 命令面」、架构总览 / 节点「领域 / 知识模式」、架构总览 / 连线「领域 / 知识模式 -> KnowledgeGraph」、图谱契约 / 节点「Domain / Knowledge」。证据结论是：Domain 模式可从现有 graph 派生或 lightweight scan；Knowledge 模式解析 Karpathy wiki，最终保存 `kind: \"knowledge\"` 的图谱。图中的具体解释是：Skill 文件定义用户命令、参数、输入输出路径和调度流程。；Domain 和 Knowledge 模式扩展节点/边语义，但仍保存为 KnowledgeGraph 家族产物。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "understand-anything-plugin/skills/understand-domain/SKILL.md:1-15",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/skills/understand-domain/SKILL.md",
        "relativePath": "understand-anything-plugin/skills/understand-domain/SKILL.md",
        "start": 1,
        "end": 15,
        "snippet": "    1  ---\n    2  name: understand-domain\n    3  description: Extract business domain knowledge from a codebase and generate an interactive domain flow graph. Works standalone (lightweight scan) or derives from an existing /understand knowledge graph.\n    4  argument-hint: [--full]\n    5  ---\n    6  \n    7  # /understand-domain\n    8  \n    9  Extracts business domain knowledge — domains, business flows, and process steps — from a codebase and produces an interactive horizontal flow graph in the dashboard.\n   10  \n   11  ## How It Works\n   12  \n   13  - If a knowledge graph already exists (`.understand-anything/knowledge-graph.json`), derives domain knowledge from it (cheap, no file scanning)\n   14  - If no knowledge graph exists, performs a lightweight scan: file tree + entry point detection + sampled files\n   15  - Use `--full` flag to force a fresh scan even if a knowledge graph exists",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/skills/understand-domain/SKILL.md:89-140",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/skills/understand-domain/SKILL.md",
        "relativePath": "understand-anything-plugin/skills/understand-domain/SKILL.md",
        "start": 89,
        "end": 140,
        "snippet": "   89  ### Phase 1: Detect Existing Graph\n   90  \n   91  1. Check if `$PROJECT_ROOT/.understand-anything/knowledge-graph.json` exists\n   92  2. If it exists AND `--full` was NOT passed → proceed to Phase 3 (derive from graph)\n   93  3. Otherwise → proceed to Phase 2 (lightweight scan)\n   94  \n   95  ### Phase 2: Lightweight Scan (Path 1)\n   96  \n   97  The preprocessing script does NOT produce a domain graph — it produces **raw material** (file tree, entry points, exports/imports) so the domain-analyzer agent can focus on the actual domain analysis instead of spending dozens of tool calls exploring the codebase. Think of it as a cheat sheet: cheap Python preprocessing → expensive LLM gets a clean, small input → better results for less cost.\n   98  \n   99  1. Run the preprocessing script bundled with this skill, passing `$PROJECT_ROOT` from Phase 0:\n  100     ```\n  101     python ./extract-domain-context.py \"$PROJECT_ROOT\"\n  102     ```\n  103     This outputs `$PROJECT_ROOT/.understand-anything/intermediate/domain-context.json` containing:\n  104     - File tree (respecting `.gitignore`)\n  105     - Detected entry points (HTTP routes, CLI commands, event handlers, cron jobs, exported handlers)\n  106     - File signatures (exports, imports per file)",
        "omitted": "已截取 89-106 行，原始范围到 140 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/skills/understand-knowledge/SKILL.md:1-20",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/skills/understand-knowledge/SKILL.md",
        "relativePath": "understand-anything-plugin/skills/understand-knowledge/SKILL.md",
        "start": 1,
        "end": 20,
        "snippet": "    1  ---\n    2  name: understand-knowledge\n    3  description: Analyze a Karpathy-pattern LLM wiki knowledge base and generate an interactive knowledge graph with entity extraction, implicit relationships, and topic clustering.\n    4  argument-hint: [wiki-directory]\n    5  ---\n    6  \n    7  # /understand-knowledge\n    8  \n    9  Analyzes a Karpathy-pattern LLM wiki — a three-layer knowledge base with raw sources, wiki markdown, and a schema file — and produces an interactive knowledge graph dashboard.\n   10  \n   11  ## What It Detects\n   12  \n   13  The **Karpathy LLM wiki pattern** (see https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f):\n   14  - **Raw sources** — immutable source documents (articles, papers, data files)\n   15  - **Wiki** — LLM-generated markdown files with wikilinks (`[[target]]` syntax)\n   16  - **Schema** — CLAUDE.md, AGENTS.md, or similar configuration file\n   17  - **index.md** — content catalog organized by categories\n   18  - **log.md** — chronological operation log",
        "omitted": "已截取 1-18 行，原始范围到 20 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/skills/understand-knowledge/SKILL.md:41-131",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/skills/understand-knowledge/SKILL.md",
        "relativePath": "understand-anything-plugin/skills/understand-knowledge/SKILL.md",
        "start": 41,
        "end": 131,
        "snippet": "   41  ### Phase 2: SCAN (already done)\n   42  \n   43  The parse script in Phase 1 already performed the deterministic scan. The scan-manifest.json contains:\n   44  - Article nodes (one per wiki .md file) with extracted wikilinks, headings, frontmatter\n   45  - Source nodes (one per raw/ file)\n   46  - Topic nodes (from index.md section headings)\n   47  - `related` edges (from wikilinks)\n   48  - `categorized_under` edges (from index.md sections)\n   49  \n   50  No additional scanning is needed. Proceed to Phase 3.\n   51  \n   52  ### Phase 3: ANALYZE\n   53  \n   54  Dispatch `article-analyzer` subagents to extract implicit knowledge:\n   55  \n   56  1. Read the scan-manifest.json to get the article list\n   57  \n   58  2. Prepare batches of 10-15 articles each, grouped by category when possible (articles in the same category are more likely to have implicit cross-references)",
        "omitted": "已截取 41-58 行，原始范围到 131 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py:35-115",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py",
        "relativePath": "understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py",
        "start": 35,
        "end": 115,
        "snippet": "   35  # Detection: is this a Karpathy-pattern wiki?\n   36  # ---------------------------------------------------------------------------\n   37  \n   38  def detect_format(root: Path) -> dict:\n   39      \"\"\"Detect if directory follows the Karpathy LLM wiki three-layer pattern.\"\"\"\n   40      signals = {\n   41          \"has_index\": (root / \"index.md\").is_file() or (root / \"wiki\" / \"index.md\").is_file(),\n   42          \"has_log\": (root / \"log.md\").is_file() or (root / \"wiki\" / \"log.md\").is_file(),\n   43          \"has_raw\": (root / \"raw\").is_dir(),\n   44          \"has_schema\": any(\n   45              (root / f).is_file() or (root / \"wiki\" / f).is_file()\n   46              for f in [\"CLAUDE.md\", \"AGENTS.md\"]\n   47          ),\n   48      }\n   49  \n   50      # Find the wiki root — could be the directory itself or a wiki/ subdirectory\n   51      if (root / \"wiki\").is_dir():\n   52          wiki_root = root / \"wiki\"",
        "omitted": "已截取 35-52 行，原始范围到 115 行。"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py:334-370",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py",
        "relativePath": "understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py",
        "start": 334,
        "end": 370,
        "snippet": "  334      # --- Assemble final graph ---\n  335      graph = {\n  336          \"version\": \"1.0.0\",\n  337          \"kind\": \"knowledge\",\n  338          \"project\": {\n  339              \"name\": project_name,\n  340              \"languages\": [\"markdown\"],\n  341              \"frameworks\": [\"karpathy-wiki\"],\n  342              \"description\": f\"Knowledge graph for {project_name}\",\n  343              \"analyzedAt\": datetime.now(timezone.utc).isoformat(),\n  344              \"gitCommitHash\": \"\",\n  345          },\n  346          \"nodes\": list(nodes.values()),\n  347          \"edges\": final_edges,\n  348          \"layers\": layers,\n  349          \"tour\": tour,\n  350      }\n  351  ",
        "omitted": "已截取 334-351 行，原始范围到 370 行。"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "UA-017",
    "conclusion": "安装脚本维护多平台表并用 per-skill/folder symlink 复用同一 skills；Claude/Copilot/Cursor manifest 指向同一 plugin/skills/agents",
    "type": "source fact",
    "location": "`install.sh:20-44`, `install.sh:91-198`, `.claude-plugin/plugin.json:2-6`, `.copilot-plugin/plugin.json:2-13`, `.cursor-plugin/plugin.json:2-14`, `.claude-plugin/marketplace.json:9-12`",
    "confidence": "高",
    "verified": "",
    "note": "多平台包装",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "平台接入",
        "sub": "Claude / Codex / Copilot / Cursor",
        "role": "adapter",
        "status": "source-verified",
        "detail": "多平台 manifest 和 install.sh 将同一组 skills/agents 链接到不同 AI coding 平台。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "平台接入 -> Skills 命令面",
        "sub": "安装/暴露命令",
        "role": "registration",
        "status": "",
        "detail": "关系语义：安装/暴露命令。",
        "relation": "平台接入 到 Skills 命令面"
      },
      {
        "kind": "节点",
        "viewId": "extension-model",
        "viewLabel": "扩展机制",
        "viewDescription": "回答：Understand Anything 的扩展点分别位于哪些层？",
        "title": "平台 Manifest",
        "sub": ".claude / .copilot / .cursor",
        "role": "platform-manifest",
        "status": "source-verified",
        "detail": "不同平台 manifest 和 marketplace 指向同一 plugin 源码、skills 和 agents。",
        "relation": ""
      },
      {
        "kind": "节点",
        "viewId": "extension-model",
        "viewLabel": "扩展机制",
        "viewDescription": "回答：Understand Anything 的扩展点分别位于哪些层？",
        "title": "安装脚本",
        "sub": "per-skill / folder symlink",
        "role": "installer",
        "status": "source-verified",
        "detail": "install.sh 用平台表选择目标 skills 目录和 symlink 风格。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "extension-model",
        "viewLabel": "扩展机制",
        "viewDescription": "回答：Understand Anything 的扩展点分别位于哪些层？",
        "title": "平台 Manifest -> 安装脚本",
        "sub": "安装/发现",
        "role": "registration",
        "status": "",
        "detail": "关系语义：安装/发现。",
        "relation": "平台 Manifest 到 安装脚本"
      },
      {
        "kind": "连线",
        "viewId": "extension-model",
        "viewLabel": "扩展机制",
        "viewDescription": "回答：Understand Anything 的扩展点分别位于哪些层？",
        "title": "安装脚本 -> Skill 扩展",
        "sub": "链接 skills",
        "role": "registration",
        "status": "",
        "detail": "关系语义：链接 skills。",
        "relation": "安装脚本 到 Skill 扩展"
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「平台接入」、架构总览 / 连线「平台接入 -> Skills 命令面」、扩展机制 / 节点「平台 Manifest」、扩展机制 / 节点「安装脚本」。证据结论是：安装脚本维护多平台表并用 per-skill/folder symlink 复用同一 skills；Claude/Copilot/Cursor manifest 指向同一 plugin/skills/agents。图中的具体解释是：多平台 manifest 和 install.sh 将同一组 skills/agents 链接到不同 AI coding 平台。；关系语义：安装/暴露命令。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "install.sh:20-44",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/install.sh",
        "relativePath": "install.sh",
        "start": 20,
        "end": 44,
        "snippet": "   20  \n   21  REPO_URL=\"${UA_REPO_URL:-https://github.com/Lum1104/Understand-Anything.git}\"\n   22  REPO_DIR=\"${UA_DIR:-$HOME/.understand-anything/repo}\"\n   23  PLUGIN_LINK=\"$HOME/.understand-anything-plugin\"\n   24  \n   25  # Platform table — id|skills-target-dir|style\n   26  # style \"per-skill\": one symlink per skill into the target dir\n   27  # style \"folder\":    one symlink for the whole skills/ dir into the target,\n   28  #                    named \"understand-anything\"\n   29  platforms_table() {\n   30    cat <<EOF\n   31  gemini|$HOME/.agents/skills|per-skill\n   32  codex|$HOME/.agents/skills|per-skill\n   33  opencode|$HOME/.agents/skills|per-skill\n   34  pi|$HOME/.agents/skills|per-skill\n   35  openclaw|$HOME/.openclaw/skills|folder\n   36  antigravity|$HOME/.gemini/antigravity/skills|folder\n   37  vibe|$HOME/.vibe/skills|per-skill",
        "omitted": "已截取 20-37 行，原始范围到 44 行。"
      },
      {
        "kind": "file",
        "display": "install.sh:91-198",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/install.sh",
        "relativePath": "install.sh",
        "start": 91,
        "end": 198,
        "snippet": "   91  clone_or_update() {\n   92    if [[ -d \"$REPO_DIR/.git\" ]]; then\n   93      printf -- '→ Updating existing checkout at %s\\n' \"$REPO_DIR\"\n   94      git -C \"$REPO_DIR\" pull --ff-only\n   95    else\n   96      printf -- '→ Cloning %s → %s\\n' \"$REPO_URL\" \"$REPO_DIR\"\n   97      mkdir -p \"$(dirname \"$REPO_DIR\")\"\n   98      git clone \"$REPO_URL\" \"$REPO_DIR\"\n   99    fi\n  100  }\n  101  \n  102  skills_root() { printf '%s\\n' \"$REPO_DIR/understand-anything-plugin/skills\"; }\n  103  \n  104  list_skills() {\n  105    local root\n  106    root=\"$(skills_root)\"\n  107    if [[ ! -d \"$root\" ]]; then\n  108      printf 'Skills directory not found: %s\\n' \"$root\" >&2",
        "omitted": "已截取 91-108 行，原始范围到 198 行。"
      },
      {
        "kind": "file",
        "display": ".claude-plugin/plugin.json:2-6",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/.claude-plugin/plugin.json",
        "relativePath": ".claude-plugin/plugin.json",
        "start": 2,
        "end": 6,
        "snippet": "    2    \"name\": \"understand-anything\",\n    3    \"description\": \"AI-powered codebase understanding — analyze, visualize, and explain any project\",\n    4    \"version\": \"2.7.5\",\n    5    \"author\": {\n    6      \"name\": \"Lum1104\"",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": ".copilot-plugin/plugin.json:2-13",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/.copilot-plugin/plugin.json",
        "relativePath": ".copilot-plugin/plugin.json",
        "start": 2,
        "end": 13,
        "snippet": "    2    \"name\": \"understand-anything\",\n    3    \"description\": \"AI-powered codebase understanding — analyze, visualize, and explain any project\",\n    4    \"version\": \"2.7.5\",\n    5    \"author\": {\n    6      \"name\": \"Lum1104\"\n    7    },\n    8    \"homepage\": \"https://github.com/Lum1104/Understand-Anything\",\n    9    \"repository\": \"https://github.com/Lum1104/Understand-Anything\",\n   10    \"license\": \"MIT\",\n   11    \"keywords\": [\"codebase-analysis\", \"knowledge-graph\", \"architecture\", \"onboarding\", \"dashboard\"],\n   12    \"skills\": \"./understand-anything-plugin/skills/\",\n   13    \"agents\": \"./understand-anything-plugin/agents/\"",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": ".cursor-plugin/plugin.json:2-14",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/.cursor-plugin/plugin.json",
        "relativePath": ".cursor-plugin/plugin.json",
        "start": 2,
        "end": 14,
        "snippet": "    2    \"name\": \"understand-anything\",\n    3    \"displayName\": \"Understand Anything\",\n    4    \"description\": \"AI-powered codebase understanding — analyze, visualize, and explain any project\",\n    5    \"version\": \"2.7.5\",\n    6    \"author\": {\n    7      \"name\": \"Lum1104\"\n    8    },\n    9    \"homepage\": \"https://github.com/Lum1104/Understand-Anything\",\n   10    \"repository\": \"https://github.com/Lum1104/Understand-Anything\",\n   11    \"license\": \"MIT\",\n   12    \"keywords\": [\"codebase-analysis\", \"knowledge-graph\", \"architecture\", \"onboarding\", \"dashboard\"],\n   13    \"skills\": \"./understand-anything-plugin/skills/\",\n   14    \"agents\": \"./understand-anything-plugin/agents/\"",
        "omitted": ""
      },
      {
        "kind": "file",
        "display": ".claude-plugin/marketplace.json:9-12",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/.claude-plugin/marketplace.json",
        "relativePath": ".claude-plugin/marketplace.json",
        "start": 9,
        "end": 12,
        "snippet": "    9    \"plugins\": [\n   10      {\n   11        \"name\": \"understand-anything\",\n   12        \"source\": \"./understand-anything-plugin\"",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "INF-001",
    "conclusion": "README 的 hybrid 说法和源码里的 scan/importMap/batch/structure/Agent 分工一致，说明架构核心是确定性事实先行、LLM 只补语义",
    "type": "inference",
    "location": "UA-001, UA-006, UA-007, UA-008, UA-009, UA-011",
    "confidence": "",
    "verified": "",
    "note": "用真实项目输出对比 import/call 边准确率",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "UA-001",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/UA-001",
        "relativePath": "UA-001",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "UA-006",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/UA-006",
        "relativePath": "UA-006",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "UA-007",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/UA-007",
        "relativePath": "UA-007",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "UA-008",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/UA-008",
        "relativePath": "UA-008",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "UA-009",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/UA-009",
        "relativePath": "UA-009",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "UA-011",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/UA-011",
        "relativePath": "UA-011",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "INF-002",
    "conclusion": "Core 类型、Dashboard、Chat/Explain/Onboard、Domain/Knowledge 全部围绕 `KnowledgeGraph`，说明它是全系统 IR",
    "type": "inference",
    "location": "UA-010, UA-013, UA-015, UA-016",
    "confidence": "",
    "verified": "",
    "note": "验证旧版本 graph 兼容性",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "KnowledgeGraph",
        "sub": ".understand-anything/knowledge-graph.json",
        "role": "intermediate-representation",
        "status": "source-verified",
        "detail": "统一中间表示：代码图、领域图和知识库图都复用同一节点/边/layer/tour 契约。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "领域 / 知识模式 -> KnowledgeGraph",
        "sub": "复用图谱契约",
        "role": "dependency",
        "status": "",
        "detail": "关系语义：复用图谱契约。",
        "relation": "领域 / 知识模式 到 KnowledgeGraph"
      },
      {
        "kind": "节点",
        "viewId": "graph-contract",
        "viewLabel": "图谱契约",
        "viewDescription": "回答：哪些生产端和消费端依赖同一个图谱契约？",
        "title": "KnowledgeGraph JSON",
        "sub": "version / project / nodes / edges / layers / tour",
        "role": "ir",
        "status": "source-verified",
        "detail": "图谱是中心契约，既承载结构事实，也承载语义摘要、layers 和 tour。",
        "relation": ""
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「KnowledgeGraph」、架构总览 / 连线「领域 / 知识模式 -> KnowledgeGraph」、图谱契约 / 节点「KnowledgeGraph JSON」。证据结论是：Core 类型、Dashboard、Chat/Explain/Onboard、Domain/Knowledge 全部围绕 `KnowledgeGraph`，说明它是全系统 IR。图中的具体解释是：统一中间表示：代码图、领域图和知识库图都复用同一节点/边/layer/tour 契约。；关系语义：复用图谱契约。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "UA-010",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/UA-010",
        "relativePath": "UA-010",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "UA-013",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/UA-013",
        "relativePath": "UA-013",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "UA-015",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/UA-015",
        "relativePath": "UA-015",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "UA-016",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/UA-016",
        "relativePath": "UA-016",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "INF-003",
    "conclusion": "图谱可提交、可问答、可增量更新，说明项目想把“代码理解”做成持续资产而不是一次性报告",
    "type": "inference",
    "location": "UA-001, UA-012, UA-015",
    "confidence": "",
    "verified": "",
    "note": "需要观察团队协作场景",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "增量与成本控制",
        "sub": "fingerprint / staleness / hook",
        "role": "cost-policy",
        "status": "partially-verified",
        "detail": "Fingerprint 和 auto-update hook 先判断结构变化，避免 cosmetic 变更消耗 LLM token。",
        "relation": ""
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「增量与成本控制」。证据结论是：图谱可提交、可问答、可增量更新，说明项目想把“代码理解”做成持续资产而不是一次性报告。图中的具体解释是：Fingerprint 和 auto-update hook 先判断结构变化，避免 cosmetic 变更消耗 LLM token。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "UA-001",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/UA-001",
        "relativePath": "UA-001",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "UA-012",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/UA-012",
        "relativePath": "UA-012",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "UA-015",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/UA-015",
        "relativePath": "UA-015",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "INF-004",
    "conclusion": "文件系统 intermediate + batch 命名约束降低上下文压力，但把正确性转移到命名契约和 merge 脚本",
    "type": "inference",
    "location": "UA-005, UA-008, UA-011",
    "confidence": "",
    "verified": "",
    "note": "需要压测并发失败和恢复",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "UA-005",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/UA-005",
        "relativePath": "UA-005",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "UA-008",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/UA-008",
        "relativePath": "UA-008",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "UA-011",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/UA-011",
        "relativePath": "UA-011",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "INF-005",
    "conclusion": "多平台安装复用同一 skills/agents，说明项目本质是 portable AI coding skill package",
    "type": "inference",
    "location": "UA-017",
    "confidence": "",
    "verified": "",
    "note": "需要逐平台实装验证",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "extension-model",
        "viewLabel": "扩展机制",
        "viewDescription": "回答：Understand Anything 的扩展点分别位于哪些层？",
        "title": "安装脚本",
        "sub": "per-skill / folder symlink",
        "role": "installer",
        "status": "source-verified",
        "detail": "install.sh 用平台表选择目标 skills 目录和 symlink 风格。",
        "relation": ""
      }
    ],
    "explanation": "这条证据在架构图中支撑 扩展机制 / 节点「安装脚本」。证据结论是：多平台安装复用同一 skills/agents，说明项目本质是 portable AI coding skill package。图中的具体解释是：install.sh 用平台表选择目标 skills 目录和 symlink 风格。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "UA-017",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/UA-017",
        "relativePath": "UA-017",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EXT-UA-001",
    "conclusion": "官方 GitHub 仓库/README 把 Understand Anything 定位为 interactive knowledge graph 工具",
    "type": "official fact",
    "location": "https://github.com/Lum1104/Understand-Anything",
    "confidence": "高",
    "verified": "是",
    "note": "对应 UA-001",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "url",
        "display": "https://github.com/Lum1104/Understand-Anything",
        "url": "https://github.com/Lum1104/Understand-Anything"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EXT-UA-002",
    "conclusion": "官方主页和 Demo 强调图谱式探索体验",
    "type": "official fact",
    "location": "https://understand-anything.com, https://understand-anything.com/demo/",
    "confidence": "中",
    "verified": "部分",
    "note": "对应 UA-013，未实测 Demo",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "url",
        "display": "https://understand-anything.com",
        "url": "https://understand-anything.com"
      },
      {
        "kind": "url",
        "display": "https://understand-anything.com/demo/",
        "url": "https://understand-anything.com/demo/"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EXT-UA-003",
    "conclusion": "远程 tag 查询可见最新 tag 为 `v2.7.3`，本地插件版本为 `2.7.5`",
    "type": "official/source fact",
    "location": "`git ls-remote --tags --refs https://github.com/Lum1104/Understand-Anything.git`, `understand-anything-plugin/package.json:2-3`",
    "confidence": "高",
    "verified": "是",
    "note": "版本差异需关注",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "command",
        "display": "git ls-remote --tags --refs https://github.com/Lum1104/Understand-Anything.git"
      },
      {
        "kind": "file",
        "display": "understand-anything-plugin/package.json:2-3",
        "path": "/Users/cheng/IdeaProjects/Understand-Anything/understand-anything-plugin/package.json",
        "relativePath": "understand-anything-plugin/package.json",
        "start": 2,
        "end": 3,
        "snippet": "    2    \"name\": \"@understand-anything/skill\",\n    3    \"version\": \"2.7.5\",",
        "omitted": ""
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EXT-UA-004",
    "conclusion": "Claude Code 官方文档存在 Plugin 机制，README 的 Claude Code Plugin 语境成立",
    "type": "official fact",
    "location": "https://code.claude.com/docs/en/plugins-reference",
    "confidence": "中",
    "verified": "不适用",
    "note": "插件平台背景",
    "graphRefs": [],
    "explanation": "这条证据当前没有被可视化架构图直接引用，主要用于支撑证据索引中的结论或后续推断。",
    "sourceRefs": [
      {
        "kind": "url",
        "display": "https://code.claude.com/docs/en/plugins-reference",
        "url": "https://code.claude.com/docs/en/plugins-reference"
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "EXT-UA-005",
    "conclusion": "`/understand-knowledge` 引用 Karpathy-pattern LLM wiki",
    "type": "community fact",
    "location": "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f",
    "confidence": "中",
    "verified": "是",
    "note": "对应 UA-016",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "overview",
        "viewLabel": "架构总览",
        "viewDescription": "回答：Understand Anything 由哪些核心模块组成，它们如何围绕 KnowledgeGraph 协作？",
        "title": "领域 / 知识模式",
        "sub": "domain-graph / kind=knowledge",
        "role": "graph-mode",
        "status": "source-verified",
        "detail": "Domain 和 Knowledge 模式扩展节点/边语义，但仍保存为 KnowledgeGraph 家族产物。",
        "relation": ""
      }
    ],
    "explanation": "这条证据在架构图中支撑 架构总览 / 节点「领域 / 知识模式」。证据结论是：`/understand-knowledge` 引用 Karpathy-pattern LLM wiki。图中的具体解释是：Domain 和 Knowledge 模式扩展节点/边语义，但仍保存为 KnowledgeGraph 家族产物。",
    "sourceRefs": [
      {
        "kind": "url",
        "display": "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f",
        "url": "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f"
      }
    ],
    "sourceLimitNote": ""
  }
];
