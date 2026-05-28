# 外部资料调研

## 1. 官方资料

| 资料 | 链接 / 路径 | 主要内容 | 价值 | 可信度 |
|---|---|---|---|---|
| GitHub 仓库 | https://github.com/Lum1104/Understand-Anything | 项目 README、安装方式、命令、特性、Under the Hood | 确认官方定位、命令面和设计目标 | A |
| README 本地快照 | `README.md` | 多平台支持、`/understand`、Dashboard、Tree-sitter + LLM hybrid、multi-agent pipeline | 形成初始研究问题，并和源码互证 | A |
| 官方主页 | https://understand-anything.com | 产品主页与 Demo 入口 | 辅助理解产品展示目标 | A |
| Live Demo | https://understand-anything.com/demo/ | 可交互 Dashboard 展示 | 辅助理解 Dashboard 作为阅读界面的定位 | A |
| Claude Code Plugin 文档 | https://code.claude.com/docs/en/plugins-reference | Claude Code 插件机制参考 | 验证 README 中“Claude Code Plugin”语境 | A |
| Karpathy LLM wiki pattern | https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f | `/understand-knowledge` 引用的知识库形态 | 理解 knowledge graph 模式的外部来源 | C |

## 2. 版本与发布资料

| 资料 | 观察 | 判断 |
|---|---|---|
| 本地 git remote | `https://github.com/Lum1104/Understand-Anything.git` | 与官方仓库一致 |
| 本地 commit | `26edf61856fa476e466bda1814819a266a293c47` | 本轮调研固定快照 |
| 远程 tag | `git ls-remote --tags --refs` 可见最新 tag `v2.7.3` | 本地 `2.7.5` 可能领先 tag 或尚未发布，结论以本地源码为准 |
| 本地 package | `@understand-anything/skill` version `2.7.5` | 插件 manifest 与 package 版本一致 |

## 3. 外部资料关键观点

### 观点 1：Understand Anything 是交互式知识图谱工具

来源：
- GitHub README：把任意 codebase、knowledge base 或 docs 转成可探索、搜索、提问的 interactive knowledge graph。
- 本地 README：`/understand` 生成 `.understand-anything/knowledge-graph.json`，Dashboard 用于探索。

源码验证：
- 已验证。`KnowledgeGraph` 类型、Dashboard 加载、Chat/Explain/Onboard 上下文构造都围绕该 JSON 契约。

### 观点 2：主分析流程是 Tree-sitter + LLM hybrid

来源：
- README Under the Hood 明确区分 Tree-sitter deterministic 与 LLM semantic。

源码验证：
- 已验证。`scan-project.mjs`、`extract-import-map.mjs`、`extract-structure.mjs`、`TreeSitterPlugin`、Agent prompts 分别承担确定性和语义阶段。

### 观点 3：多 Agent pipeline 负责不同语义任务

来源：
- README 列出 `project-scanner`、`file-analyzer`、`architecture-analyzer`、`tour-builder`、`graph-reviewer`、`domain-analyzer`、`article-analyzer`。

源码验证：
- 已验证。`understand-anything-plugin/agents/*.md` 和 `/understand` skill 明确调度这些 agent，并通过中间 JSON 文件协调。

### 观点 4：图谱可以提交给团队并增量维护

来源：
- README Share the Graph 与 auto-update 描述。

源码验证：
- 部分验证。源码有 fingerprint/staleness、hook prompt、`--auto-update` 配置；未实际运行 post-commit hook。

### 观点 5：Dashboard 源码预览有访问控制

来源：
- 仓库 `CLAUDE.md` 提到 `/file-content.json` 使用 access token 和 graph-derived path allowlist。

源码验证：
- 已验证。Vite middleware 对图谱和源码端点要求 token，源码读取拒绝绝对路径、路径逃逸、非图谱文件、大文件和二进制文件。

## 4. 外部资料与源码不一致或需注意处

| 外部资料说法 | 源码实际情况 | 判断 |
|---|---|---|
| README/主页呈现为通用多平台工具 | 本地实现仍保留 Claude Code plugin 语境，但安装脚本和 manifest 已覆盖多平台 | 不是冲突，是产品定位扩展 |
| README 说 `/understand` orchestrates 5 agents | 源码还存在 `assemble-reviewer`、domain/knowledge 额外 agent 和确定性脚本阶段 | README 是概括，源码流程更细 |
| 本地版本 `2.7.5` | 远程 tag 查询可见最新 tag `v2.7.3` | 以本地快照为准，发布状态待确认 |

## 5. 对调研方向的影响

- 不能只画“Dashboard + Graph”的产品图，必须拆出生产流水线、图谱契约、消费端和扩展点。
- 关键结论必须区分确定性源码事实和 LLM/Agent 语义产物。
- 增量更新、token 控制、受限源码读取是比 UI 更值得学习的工程点。

