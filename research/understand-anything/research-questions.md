# 研究问题

## RQ-001：`/understand` 是否真的是多阶段、多 Agent 的知识图谱生产流水线？

来源：
- README 的 Quick Start、Under the Hood 和 Multi-Agent Pipeline。

重要性：
- 这是项目的核心承诺，决定架构图应以“生产流水线”而不是“单个分析函数”为中心。

验证方向：
- `understand-anything-plugin/skills/understand/SKILL.md`
- `understand-anything-plugin/agents/*.md`
- `skills/understand/*.mjs`

验证结果：
- 已验证。`/understand` 包含 preflight、scan、batch、file analyzer 并发、merge、review、architecture、tour、final validation、save 等阶段。[UA-005][UA-011]

## RQ-002：Tree-sitter 和 LLM 的边界是否清晰？

来源：
- README “Tree-sitter + LLM hybrid”。

重要性：
- 这决定它的图谱是否可复现，也决定哪些结论能当作结构事实。

验证方向：
- `TreeSitterPlugin`
- `scan-project.mjs`
- `extract-import-map.mjs`
- `extract-structure.mjs`
- `agents/file-analyzer.md`

验证结果：
- 已验证。确定性脚本负责文件枚举、importMap、结构抽取、callGraph、batching；LLM Agent 基于这些结构事实补充摘要、语义边和分层。[UA-006][UA-007][UA-009][INF-001]

## RQ-003：`KnowledgeGraph` 是否是全系统中心契约？

来源：
- README、Dashboard 描述、辅助命令说明。

重要性：
- 如果图谱契约稳定，后续工具才能围绕同一产物复用。

验证方向：
- `packages/core/src/types.ts`
- `packages/core/src/schema.ts`
- `packages/dashboard/src/App.tsx`
- `src/context-builder.ts`
- `src/explain-builder.ts`
- `src/onboard-builder.ts`

验证结果：
- 已验证。core 定义节点/边/层/导览，schema 校验和自动修复，Dashboard 与辅助技能都消费该结构。[UA-010][UA-013][UA-015]

## RQ-004：增量更新是否真的避免无意义 LLM 调用？

来源：
- README “incremental by default”、auto-update 描述。

重要性：
- 大型代码库分析成本高，增量策略是产品可用性的关键。

验证方向：
- `fingerprint.ts`
- `staleness.ts`
- `/understand` save 阶段
- `hooks/auto-update-prompt.md`

验证结果：
- 部分验证。源码有 fingerprint baseline、changed file diff、NONE/COSMETIC/STRUCTURAL 分类、auto-update prompt；未实测 hook 运行。[UA-012]

## RQ-005：Dashboard 的源码读取是否有安全边界？

来源：
- `CLAUDE.md` 的 access token + graph allowlist 描述。

重要性：
- Dashboard 运行在本地 dev server，源码预览如果无约束会变成本地文件读取入口。

验证方向：
- `packages/dashboard/vite.config.ts`
- `packages/dashboard/src/App.tsx`

验证结果：
- 已验证。数据端点要求一次性 token，`file-content.json` 禁止绝对路径和路径逃逸，只允许图谱中出现的 filePath，并限制大小和二进制。[UA-014]

## RQ-006：Domain 和 Knowledge 模式是独立系统还是复用同一图谱契约？

来源：
- README 的 `/understand-domain` 和 `/understand-knowledge`。

重要性：
- 决定图谱模型是否只是代码结构模型，还是可扩展到业务域和知识库。

验证方向：
- `types.ts` 的 domain/knowledge 节点和边。
- `skills/understand-domain/SKILL.md`
- `skills/understand-knowledge/SKILL.md`
- `parse-knowledge-base.py`
- `merge-knowledge-graph.py`

验证结果：
- 已验证。schema 支持 domain/flow/step、article/entity/topic/claim/source；Domain 和 Knowledge 模式复用 `KnowledgeGraph`，只是 `kind` 和布局/节点类型不同。[UA-016]

