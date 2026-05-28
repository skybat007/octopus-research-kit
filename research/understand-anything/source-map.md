# 源码地图

## 0. 结构化源码清单

本轮已生成 `references/source-inventory.json`，覆盖 `Understand-Anything` 当前快照的 411 个文件。该文件用于辅助定位入口、测试、示例、构建和配置，不替代下文的模块职责判断。

## 1. 顶层结构

| 路径 | 职责 |
|---|---|
| `README.md` | 产品定位、安装、命令、Under the Hood |
| `CLAUDE.md` | 仓库内部架构说明、Dashboard 约束、Agent Pipeline 说明 |
| `package.json` | 顶层 workspace、构建、测试、dashboard dev 命令 |
| `pnpm-workspace.yaml` | workspace 包：plugin packages、plugin、homepage |
| `install.sh` / `install.ps1` | 多平台安装和 skill symlink |
| `.claude-plugin/`, `.cursor-plugin/`, `.copilot-plugin/` | 平台插件 manifest |
| `understand-anything-plugin/` | 核心插件源码 |
| `homepage/` | 产品主页 |

## 2. Plugin 包结构

| 路径 | 职责 |
|---|---|
| `understand-anything-plugin/package.json` | `@understand-anything/skill` 包，依赖 core、graphology、louvain |
| `understand-anything-plugin/skills/` | 用户可调用技能：`understand`、dashboard、chat、diff、explain、onboard、domain、knowledge |
| `understand-anything-plugin/agents/` | subagent prompt：project-scanner、file-analyzer、architecture-analyzer、tour-builder、graph-reviewer 等 |
| `understand-anything-plugin/src/` | chat、explain、onboard 等技能的 TypeScript 上下文构造逻辑 |
| `understand-anything-plugin/hooks/` | auto-update hook 配置和内部 prompt |
| `understand-anything-plugin/packages/core/` | 分析引擎、图谱类型、schema、parser registry、搜索、增量更新 |
| `understand-anything-plugin/packages/dashboard/` | React/Vite Dashboard |

## 3. Core 包重点文件

| 文件 | 阅读重点 |
|---|---|
| `src/types.ts` | `KnowledgeGraph`、21 类节点、35 类边、domain/knowledge 扩展 |
| `src/schema.ts` | Zod 校验、LLM alias 修复、autoFixGraph、validateGraph |
| `src/plugins/tree-sitter-plugin.ts` | web-tree-sitter WASM 初始化、语言 extractor、结构/导入/call graph 抽取 |
| `src/plugins/registry.ts` | AnalyzerPlugin 注册、按语言/文件分发 |
| `src/analyzer/graph-builder.ts` | 将结构分析转成 file/function/class/non-code 节点和边 |
| `src/fingerprint.ts` | 文件结构指纹和 NONE/COSMETIC/STRUCTURAL 分类 |
| `src/staleness.ts` | git diff changed-files 和 graph merge update |
| `src/search.ts` / `src/embedding-search.ts` | Dashboard/Chat 搜索能力 |
| `src/languages/` | 语言配置、框架识别、具体 parser 配置 |

## 4. `/understand` 主流程文件

| 文件 | 阅读重点 |
|---|---|
| `skills/understand/SKILL.md` | 7 阶段总编排、并发策略、增量逻辑、保存和 dashboard 启动 |
| `skills/understand/scan-project.mjs` | git ls-files/fallback walk、ignore、语言和类别检测、行数统计 |
| `skills/understand/extract-import-map.mjs` | Tree-sitter + resolver 预解析内部 importMap |
| `skills/understand/compute-batches.mjs` | Louvain 社区检测、非代码分组、small batch 合并、neighborMap |
| `skills/understand/extract-structure.mjs` | 批内结构抽取、callGraph、metrics、非代码结构透传 |
| `skills/understand/merge-batch-graphs.py` | batch graph 合并、标准化、去重、dangling edge 清理 |
| `skills/understand/build-fingerprints.mjs` | 生成后续增量更新 baseline |

## 5. Dashboard 重点文件

| 文件 | 阅读重点 |
|---|---|
| `packages/dashboard/src/App.tsx` | token gate、图谱/config/meta/diff/domain 加载、schema validation |
| `packages/dashboard/src/store.ts` | Zustand 状态、节点索引、搜索、视图模式、diff、focus、tour |
| `packages/dashboard/vite.config.ts` | GRAPH_DIR、受保护 JSON 端点、file-content allowlist、路径脱敏 |
| `packages/dashboard/src/components/GraphView.tsx` | React Flow 图展示、层级视图和布局 |

## 6. 推荐阅读顺序

1. `README.md` + `CLAUDE.md`：先固定产品定位和仓库自述架构。
2. `skills/understand/SKILL.md`：理解真正的生命周期。
3. `scan-project.mjs`、`extract-import-map.mjs`、`compute-batches.mjs`、`extract-structure.mjs`：理解确定性流水线。
4. `types.ts`、`schema.ts`、`graph-builder.ts`：理解图谱契约和标准化。
5. `agents/*.md`：理解 LLM Agent 的语义职责。
6. `App.tsx`、`store.ts`、`vite.config.ts`：理解图谱消费和安全边界。
7. `fingerprint.ts`、`staleness.ts`、`hooks/auto-update-prompt.md`：理解增量更新。
