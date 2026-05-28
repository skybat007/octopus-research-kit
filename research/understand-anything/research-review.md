# 调研审查

## 1. 版本固定

- 已固定项目标识、remote、branch、commit 和调研日期。
- 已记录本地版本 `2.7.5` 与远程 tag `v2.7.3` 的差异。

## 2. 外部资料

- 已覆盖官方 GitHub README、官方主页、Demo、Claude Code plugin 文档和 Karpathy wiki pattern。
- 未深入第三方社区实践文章；当前结论主要依赖官方/仓库资料和本地源码。

## 3. 源码覆盖

已生成 `references/source-inventory.json`，覆盖 411 个文件；它用于辅助定位入口、测试、示例、构建和配置，不作为架构结论来源。

已覆盖：

- 顶层 workspace 和插件 manifest。
- `/understand` 主 Skill。
- scan/importMap/batch/extract/fingerprint/staleness。
- core types/schema/TreeSitterPlugin/PluginRegistry/GraphBuilder。
- Dashboard App/store/Vite middleware。
- Chat/Explain/Onboard context builders。
- Domain/Knowledge skills。

未覆盖：

- 每个语言 extractor 的完整实现和测试。
- Dashboard 全部 React 组件布局细节。
- homepage 实现。

## 4. 研究问题状态

| 问题 | 状态 |
|---|---|
| `/understand` 是否是多阶段多 Agent 流水线 | 已验证 |
| Tree-sitter 和 LLM 边界是否清晰 | 已验证 |
| `KnowledgeGraph` 是否是中心契约 | 已验证 |
| 增量更新是否避免无意义 LLM 调用 | 部分验证，未实测 hook |
| Dashboard 源码读取是否有安全边界 | 已验证 |
| Domain/Knowledge 是否复用图谱契约 | 已验证 |

## 5. 风险和残留问题

- 本轮没有运行测试和真实 `/understand` 分析任务，因此图谱质量、性能和 LLM 输出稳定性仍需实测。
- 本地源码存在未跟踪 `.idea/`，本轮忽略该用户/IDE 文件，没有修改目标仓库。
- 远程发布状态需要后续确认；调研结论不代表 npm/marketplace 当前可安装版本。

## 6. 质量结论

本轮已满足架构级调研要求：有外部资料、研究问题、结构化源码清单、源码地图、架构、运行流程、关键抽象、扩展点、设计思想、证据索引、可视化架构图和 Dashboard 阅读入口。关键结论均绑定 evidence ID，视觉图不作为新结论来源。`validate-research.js research/understand-anything` 已通过。
