# 证据索引

## 1. 版本信息

本文件也可以理解为 Evidence Log，用于约束关键结论必须有证据。

| 项 | 内容 |
|---|---|
| 代码来源 | `https://github.com/Lum1104/Understand-Anything.git` |
| 项目标识 | `Understand-Anything` |
| branch/tag/commit | branch `main`, commit `26edf61856fa476e466bda1814819a266a293c47` |
| 调研日期 | 2026-05-28 |

## 2. 证据索引

| 结论编号 | 结论 | 证据类型 | 位置 | 置信度 | 备注 |
|---|---|---|---|---|---|
| <a id="UA-001"></a>UA-001 | README 将项目定位为把 codebase、knowledge base、docs 转成 interactive knowledge graph，并提供 `/understand`、dashboard、chat、diff、domain、knowledge 等命令 | repository doc fact | `README.md:4-6`, `README.md:46-48`, `README.md:119-168`, `README.md:274-297` | 高 | 官方仓库 README |
| <a id="UA-002"></a>UA-002 | 本地快照 remote 为官方 GitHub 仓库，branch `main`，commit `26edf61856fa476e466bda1814819a266a293c47`；本地只有未跟踪 `.idea/` | source fact | `git remote get-url origin`, `git branch --show-current`, `git rev-parse HEAD`, `git status --short` | 高 | 固定本轮调研版本 |
| <a id="UA-003"></a>UA-003 | 仓库自述架构为 pnpm monorepo，plugin 下含 core、dashboard、src、skills、agents；Dashboard 源码预览受 token 和 graph allowlist 控制 | repository doc fact | `CLAUDE.md:10-18`, `CLAUDE.md:19-31`, `CLAUDE.md:50-52` | 高 | 仓库内部架构说明 |
| <a id="UA-004"></a>UA-004 | 顶层 workspace 覆盖 plugin packages、plugin、homepage；插件包版本 `2.7.5`，core/dashboard 版本 `0.1.0`，core 提供 browser-safe subpath exports | source fact | `package.json:2-12`, `pnpm-workspace.yaml:1-4`, `understand-anything-plugin/package.json:2-15`, `understand-anything-plugin/packages/core/package.json:2-28`, `understand-anything-plugin/packages/dashboard/package.json:2-30` | 高 | 包边界 |
| <a id="UA-005"></a>UA-005 | `/understand` Skill 定义 7 阶段流程：preflight、ignore、scan、batch、analyze、review、architecture、tour、validation、save，并处理 worktree redirect、插件根目录、语言、auto-update 等 | source fact | `understand-anything-plugin/skills/understand/SKILL.md:1-18`, `understand-anything-plugin/skills/understand/SKILL.md:42-172`, `understand-anything-plugin/skills/understand/SKILL.md:278-357`, `understand-anything-plugin/skills/understand/SKILL.md:734-790` | 高 | 主流程 |
| <a id="UA-006"></a>UA-006 | `scan-project.mjs` 优先 `git ls-files -z -co --exclude-standard`，失败退回 deterministic walk，并通过 ignore、语言、类别、行数和复杂度生成 scan result | source fact | `understand-anything-plugin/skills/understand/scan-project.mjs:455-559`, `understand-anything-plugin/skills/understand/scan-project.mjs:668-764` | 高 | 确定性扫描 |
| <a id="UA-007"></a>UA-007 | `extract-import-map.mjs` 使用 TreeSitterPlugin、PluginRegistry、registerAllParsers 预解析内部 importMap；Tree-sitter 初始化失败会输出空 importMap 而不是中断全流程 | source fact | `understand-anything-plugin/skills/understand/extract-import-map.mjs:1397-1427`, `understand-anything-plugin/skills/understand/extract-import-map.mjs:1431-1527` | 高 | importMap |
| <a id="UA-008"></a>UA-008 | `compute-batches.mjs` 用 Louvain 在 import graph 上分组，失败时 count fallback；非代码文件按语义分组；输出 batchImportData 和 cross-batch neighborMap | source fact | `understand-anything-plugin/skills/understand/compute-batches.mjs:1-13`, `understand-anything-plugin/skills/understand/compute-batches.mjs:90-130`, `understand-anything-plugin/skills/understand/compute-batches.mjs:197-229`, `understand-anything-plugin/skills/understand/compute-batches.mjs:301-525` | 高 | batching |
| <a id="UA-009"></a>UA-009 | `TreeSitterPlugin` 加载 web-tree-sitter WASM grammar，提供结构分析、import resolution、call graph；`PluginRegistry` 按语言/文件分发 analyzer；`extract-structure.mjs` 用 registry 输出结构事实和 metrics | source fact | `understand-anything-plugin/packages/core/src/plugins/tree-sitter-plugin.ts:19-30`, `understand-anything-plugin/packages/core/src/plugins/tree-sitter-plugin.ts:120-197`, `understand-anything-plugin/packages/core/src/plugins/tree-sitter-plugin.ts:221-298`, `understand-anything-plugin/packages/core/src/plugins/registry.ts:4-80`, `understand-anything-plugin/skills/understand/extract-structure.mjs:65-135`, `understand-anything-plugin/skills/understand/extract-structure.mjs:146-280` | 高 | 结构抽取 |
| <a id="UA-010"></a>UA-010 | core 的 `KnowledgeGraph` 支持 21 类节点和 35 类边，覆盖代码、非代码、领域和知识图；schema 提供 alias、sanitize、autoFix、validateGraph | source fact | `understand-anything-plugin/packages/core/src/types.ts:1-99`, `understand-anything-plugin/packages/core/src/schema.ts:3-148`, `understand-anything-plugin/packages/core/src/schema.ts:196-230`, `understand-anything-plugin/packages/core/src/schema.ts:499-515`, `understand-anything-plugin/packages/core/src/analyzer/graph-builder.ts:60-336` | 高 | 图谱契约 |
| <a id="UA-011"></a>UA-011 | Agent prompt 文件覆盖 project/file/architecture/tour/review/domain/article 等角色，`/understand` 指定 file-analyzer 最多 5 并发并通过 intermediate batch JSON 交接 | source fact | `understand-anything-plugin/agents/project-scanner.md:17-19`, `understand-anything-plugin/agents/file-analyzer.md:292-317`, `understand-anything-plugin/agents/architecture-analyzer.md:413-468`, `understand-anything-plugin/agents/tour-builder.md:265-277`, `understand-anything-plugin/agents/graph-reviewer.md:227-227`, `understand-anything-plugin/skills/understand/SKILL.md:299-337` | 高 | 多 Agent 协作 |
| <a id="UA-012"></a>UA-012 | 增量更新依赖 git diff、staleness、fingerprint store 和 NONE/COSMETIC/STRUCTURAL 分类；auto-update hook 原则是 cosmetic 变化零 LLM token | source fact | `understand-anything-plugin/packages/core/src/staleness.ts:13-90`, `understand-anything-plugin/packages/core/src/fingerprint.ts:67-150`, `understand-anything-plugin/packages/core/src/fingerprint.ts:230-350`, `understand-anything-plugin/hooks/auto-update-prompt.md:1-30`, `understand-anything-plugin/hooks/auto-update-prompt.md:94-149` | 高 | 未实测 hook |
| <a id="UA-013"></a>UA-013 | Dashboard 从 URL/sessionStorage 获取 token，加载 meta/config/knowledge-graph/diff/domain，使用 `validateGraph`，并在 store 中建立 graph indexes、search engine 和视图状态 | source fact | `understand-anything-plugin/packages/dashboard/src/App.tsx:49-105`, `understand-anything-plugin/packages/dashboard/src/App.tsx:117-205`, `understand-anything-plugin/packages/dashboard/src/store.ts:100-150`, `understand-anything-plugin/packages/dashboard/src/store.ts:365-394` | 高 | Dashboard 消费端 |
| <a id="UA-014"></a>UA-014 | Vite middleware 为 knowledge/domain/diff/meta/config/file-content 端点要求一次性 token；源码读取拒绝绝对路径、路径逃逸、非图谱文件、大文件和二进制，并脱敏绝对 filePath | source fact | `understand-anything-plugin/packages/dashboard/vite.config.ts:9-23`, `understand-anything-plugin/packages/dashboard/vite.config.ts:114-177`, `understand-anything-plugin/packages/dashboard/vite.config.ts:240-360` | 高 | 本地安全边界 |
| <a id="UA-015"></a>UA-015 | Chat/Explain/Onboard 都消费 `KnowledgeGraph`：Chat 搜索并扩展 1-hop，Explain 定位节点/child/connected/layer，Onboard 从 graph 生成 Markdown guide | source fact | `understand-anything-plugin/src/context-builder.ts:20-80`, `understand-anything-plugin/src/context-builder.ts:85-140`, `understand-anything-plugin/src/explain-builder.ts:18-103`, `understand-anything-plugin/src/explain-builder.ts:122-190`, `understand-anything-plugin/src/onboard-builder.ts:1-124` | 高 | 图谱二次消费 |
| <a id="UA-016"></a>UA-016 | Domain 模式可从现有 graph 派生或 lightweight scan；Knowledge 模式解析 Karpathy wiki，最终保存 `kind: "knowledge"` 的图谱 | source fact | `understand-anything-plugin/skills/understand-domain/SKILL.md:1-15`, `understand-anything-plugin/skills/understand-domain/SKILL.md:89-140`, `understand-anything-plugin/skills/understand-knowledge/SKILL.md:1-20`, `understand-anything-plugin/skills/understand-knowledge/SKILL.md:41-131`, `understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py:35-115`, `understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py:334-370` | 高 | 领域/知识模式 |
| <a id="UA-017"></a>UA-017 | 安装脚本维护多平台表并用 per-skill/folder symlink 复用同一 skills；Claude/Copilot/Cursor manifest 指向同一 plugin/skills/agents | source fact | `install.sh:20-44`, `install.sh:91-198`, `.claude-plugin/plugin.json:2-6`, `.copilot-plugin/plugin.json:2-13`, `.cursor-plugin/plugin.json:2-14`, `.claude-plugin/marketplace.json:9-12` | 高 | 多平台包装 |

## 3. 推断链路

| 推断编号 | 依赖证据 | 推断过程 | 待验证点 |
|---|---|---|---|
| <a id="INF-001"></a>INF-001 | UA-001, UA-006, UA-007, UA-008, UA-009, UA-011 | README 的 hybrid 说法和源码里的 scan/importMap/batch/structure/Agent 分工一致，说明架构核心是确定性事实先行、LLM 只补语义 | 用真实项目输出对比 import/call 边准确率 |
| <a id="INF-002"></a>INF-002 | UA-010, UA-013, UA-015, UA-016 | Core 类型、Dashboard、Chat/Explain/Onboard、Domain/Knowledge 全部围绕 `KnowledgeGraph`，说明它是全系统 IR | 验证旧版本 graph 兼容性 |
| <a id="INF-003"></a>INF-003 | UA-001, UA-012, UA-015 | 图谱可提交、可问答、可增量更新，说明项目想把“代码理解”做成持续资产而不是一次性报告 | 需要观察团队协作场景 |
| <a id="INF-004"></a>INF-004 | UA-005, UA-008, UA-011 | 文件系统 intermediate + batch 命名约束降低上下文压力，但把正确性转移到命名契约和 merge 脚本 | 需要压测并发失败和恢复 |
| <a id="INF-005"></a>INF-005 | UA-017 | 多平台安装复用同一 skills/agents，说明项目本质是 portable AI coding skill package | 需要逐平台实装验证 |

## 4. 待确认

- 每个语言 extractor 的准确性、覆盖率和 edge 质量。
- auto-update hook 在真实平台上的触发与权限行为。
- Dashboard 大图性能、layout 稳定性和源码预览体验。
- 本地 `2.7.5` 与远程最新 tag `v2.7.3` 的发布关系。

## 5. 外部资料证据补充

| 结论编号 | 结论 | 证据类型 | 可信度等级 | 来源 | 是否已源码验证 | 置信度 | 备注 |
|---|---|---|---|---|---|---|---|
| <a id="EXT-UA-001"></a>EXT-UA-001 | 官方 GitHub 仓库/README 把 Understand Anything 定位为 interactive knowledge graph 工具 | official fact | A | https://github.com/Lum1104/Understand-Anything | 是 | 高 | 对应 UA-001 |
| <a id="EXT-UA-002"></a>EXT-UA-002 | 官方主页和 Demo 强调图谱式探索体验 | official fact | A | https://understand-anything.com, https://understand-anything.com/demo/ | 部分 | 中 | 对应 UA-013，未实测 Demo |
| <a id="EXT-UA-003"></a>EXT-UA-003 | 远程 tag 查询可见最新 tag 为 `v2.7.3`，本地插件版本为 `2.7.5` | official/source fact | A/S | `git ls-remote --tags --refs https://github.com/Lum1104/Understand-Anything.git`, `understand-anything-plugin/package.json:2-3` | 是 | 高 | 版本差异需关注 |
| <a id="EXT-UA-004"></a>EXT-UA-004 | Claude Code 官方文档存在 Plugin 机制，README 的 Claude Code Plugin 语境成立 | official fact | A | https://code.claude.com/docs/en/plugins-reference | 不适用 | 中 | 插件平台背景 |
| <a id="EXT-UA-005"></a>EXT-UA-005 | `/understand-knowledge` 引用 Karpathy-pattern LLM wiki | community fact | C | https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f | 是 | 中 | 对应 UA-016 |

