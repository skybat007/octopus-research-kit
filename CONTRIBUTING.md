# 贡献指南

欢迎改进这套技术调研框架。这个仓库的核心目标是帮助研究者把开源框架理解过程沉淀成可追溯、可复查、可复用的技术文档。

## 可以贡献什么

- 调研流程、质量门禁和证据标准
- `docs/tech-research-guide/templates/` 下的模板
- `docs/tech-research-guide/roles/` 下的角色边界
- `docs/tech-research-guide/scripts/` 下的生成和校验脚本
- `skills/open-source-tech-research/` 下的 Skill 工作流
- 脱敏后的示例调研产物

## 贡献原则

- Markdown 是知识源，HTML/Dashboard/visual data 只做展示和导航。
- 重要结论必须能回到证据：官方资料、源码、测试、配置、示例、Issue、PR、Release Note 或明确标注的推断。
- 不要提交个人本机绝对路径、令牌、私钥、账号信息或未脱敏的内部项目内容。
- 不要把后续工程实施方案混入技术调研规范；调研产物聚焦理解、验证、架构抽象和学习借鉴。
- 生成物如果包含第三方源码片段，应控制范围，并保留来源、版本和用途说明。

## 本地校验

提交前建议运行：

```bash
npm run research:sanitize
npm run research:dashboard
npm run research:validate
npm run release:check
git diff --check
```

如果你正在准备公开发布，也建议运行：

```bash
npm run research:validate:strict
```

## 新增调研目录

新增一次调研时，目录应放在：

```text
research/<framework-name>/
```

建议使用 `docs/tech-research-guide/templates/` 作为起点，并保证 `evidence-index.md` 能支撑主要结论。
