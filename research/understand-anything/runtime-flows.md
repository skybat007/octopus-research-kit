# 运行流程

## 1. `/understand` 完整分析流程

```text
用户调用 /understand [path] [flags]
  ↓
Phase 0: 解析 PROJECT_ROOT、worktree redirect、定位 PLUGIN_ROOT、必要时 build core
  ↓
创建 .understand-anything/intermediate 和 tmp，处理 autoUpdate/outputLanguage
  ↓
Phase 0.5: 生成或读取 .understandignore
  ↓
Phase 1: project-scanner + scan-project.mjs + extract-import-map.mjs
  ↓
Phase 1.5: compute-batches.mjs 生成 batches 和 neighborMap
  ↓
Phase 2: 最多 5 个 file-analyzer 并发分析 batch
  ↓
merge-batch-graphs.py 合并、标准化、去重、清理 dangling edges
  ↓
Phase 3: assemble-reviewer 复核 assembled graph
  ↓
Phase 4: architecture-analyzer 生成 layers
  ↓
Phase 5: tour-builder 生成 guided tour
  ↓
Phase 6: graph-reviewer 或 deterministic validation
  ↓
Phase 7: 保存 knowledge-graph.json，生成 fingerprints，写 meta.json，清理 intermediate
  ↓
验证通过后自动触发 /understand-dashboard
```

证据：[UA-005][UA-006][UA-007][UA-008][UA-009][UA-011][UA-012]

## 2. 扫描与 batching 流程

`scan-project.mjs` 优先使用 `git ls-files -z -co --exclude-standard` 枚举项目文件，失败时退回递归 walk。随后通过 ignore filter、语言检测、文件类别、行数统计和复杂度估算生成 scan result。[UA-006]

`extract-import-map.mjs` 使用 `TreeSitterPlugin + PluginRegistry + registerAllParsers` 解析内部 imports。它在 Tree-sitter 初始化失败时不会中断整个 pipeline，而是写空 importMap 并发出 warning，让后续语义分析仍可继续。[UA-007]

`compute-batches.mjs` 将 import graph 送入 Louvain community detection，失败时使用确定性 count-based fallback。它会为跨 batch 文件构造 `neighborMap`，把相邻文件和 exported symbols 传给 file-analyzer，降低跨 batch 关系丢失风险。[UA-008]

## 3. 结构抽取流程

`extract-structure.mjs` 对 batch 内文件读取内容，通过 registry 分发 Tree-sitter 和非代码 parser，输出函数、类、exports、sections、definitions、services、endpoints、steps、resources、callGraph 和 metrics。它是 LLM file-analyzer 的结构事实输入，避免每个 Agent 自己重新做解析。[UA-009]

## 4. Dashboard 启动与数据加载

```text
/understand-dashboard
  ↓
定位 plugin root，build core/dashboard
  ↓
GRAPH_DIR=<project-dir> 启动 Vite
  ↓
Vite 打印 http://127.0.0.1:<port>/?token=<ACCESS_TOKEN>
  ↓
React 从 URL/sessionStorage 取 token
  ↓
fetch meta/config/knowledge-graph/diff/domain
  ↓
validateGraph
  ↓
Zustand setGraph 建立索引、搜索引擎、视图状态
  ↓
GraphView / sidebar / source viewer 展示
```

证据：[UA-013][UA-014]

## 5. Chat / Explain / Onboard 消费流程

这些命令不重新扫描项目：

- Chat 使用 `SearchEngine` 搜索相关节点，沿边扩展 1-hop，收集相关 layer，再格式化为 LLM prompt。[UA-015]
- Explain 支持 file path 或 `path:function`，找到目标节点、child nodes、connected nodes、relevant edges 和 layer，生成深潜 prompt。[UA-015]
- Onboard 从 `KnowledgeGraph` 直接生成 project overview、layer、concept、tour、file map 和复杂度热点。[UA-015]

## 6. Domain / Knowledge 扩展流程

Domain 模式优先从已有 `knowledge-graph.json` 派生业务域图；没有图谱时做 lightweight scan 给 domain-analyzer。最终保存 `domain-graph.json`，Dashboard 会检测并进入 domain view。[UA-016]

Knowledge 模式面向 Karpathy-pattern wiki。它先确定性解析 index、wikilinks、headings、frontmatter、topic、article 和 source，再用 article-analyzer 提取 implicit relationships、entity、claim，最后合并成 `kind: "knowledge"` 的 `KnowledgeGraph`。[UA-016]

## 7. Auto-update 流程

auto-update hook 的核心原则是：cosmetic 或内部实现变化不花 LLM token，只有结构变化才进入 partial update。它读取 meta commit、git diff changed files、ignore filter、fingerprints，分类为 `SKIP`、`PARTIAL_UPDATE`、`ARCHITECTURE_UPDATE` 或 `FULL_UPDATE`。[UA-012]

