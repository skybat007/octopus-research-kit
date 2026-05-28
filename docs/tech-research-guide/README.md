# Tech Research Guide

本目录定义开源技术调研的工作方式和模板。

## 入口

- [TECH_RESEARCH_GUIDE.md](./TECH_RESEARCH_GUIDE.md)：完整调研规范
- [AI_TECH_RESEARCH_QUICKSTART.md](./AI_TECH_RESEARCH_QUICKSTART.md)：快速启动一次调研
- [GLOSSARY.md](./GLOSSARY.md)：调研术语表
- [roles/](./roles/)：调研角色边界
- [templates/](./templates/)：每次调研可复制的文档模板
- [scripts/](./scripts/)：结构化清单、证据解释页和调研产物校验脚本

## 使用方式

1. 为调研对象创建 `research/<framework-name>/`。
2. 从 `templates/` 复制需要的模板。
3. 先完成 `research-brief.md`。它也可以理解为 Research Charter。
4. 先完成 `external-research.md`，收集必要的官方资料、协作资料和社区资料；如果跳过，记录原因。
5. 再完成 `research-questions.md`，把外部资料和用户目标转成源码验证问题。
6. 如果有本地源码，先生成结构化清单：`node docs/tech-research-guide/scripts/build-source-inventory.js research/<framework-name> --source-root /absolute/path/to/source`。本机路径只作为运行时输入，不写入调研产物。
7. 按源码地图、核心抽象、运行链路、架构、扩展点、设计思想、学习借鉴的顺序推进。
8. 将关键结论同步记录到 `evidence-index.md`。
9. 如果需要 HTML 可视化图，优先复制 `visual-architecture-template.html` 为 `visual/architecture.html`，并用 `architecture.visual.js` 维护图数据；同时复制 `evidence-viewer-template.html` 为 `visual/evidence.html`，用 `evidence.visual.js` 维护证据解释数据。
10. 生成证据解释数据：`node docs/tech-research-guide/scripts/build-evidence-visual.js research/<framework-name>`。
11. 生成阅读入口和 UTF-8 文档阅读器：`node docs/tech-research-guide/scripts/build-research-dashboard.js research/<framework-name>`。
12. 最终校验产物：`node docs/tech-research-guide/scripts/validate-research.js research/<framework-name>`。

## 脚本

```bash
# 通过运行时参数扫描源码，生成 references/source-inventory.json
node docs/tech-research-guide/scripts/build-source-inventory.js research/<framework-name> --source-root /absolute/path/to/source

# 从 evidence-index.md 和 visual/architecture.visual.js 生成可点击证据解释页数据
node docs/tech-research-guide/scripts/build-evidence-visual.js research/<framework-name>

# 生成 dashboard.html、docs.html 和 research/index.html 阅读入口
node docs/tech-research-guide/scripts/build-research-dashboard.js research/<framework-name>

# 校验文档、Dashboard、结构化清单、visual data、证据编号和 HTML 内联脚本
node docs/tech-research-guide/scripts/validate-research.js research/<framework-name>

# 发布前检查个人路径、常见令牌和私钥形态
node docs/tech-research-guide/scripts/check-release-safety.js
```

## 边界

`tech-research-guide` 用于理解技术和沉淀研究结论。

本仓库不维护开发实现类 spec 规范；如果调研结论后续要进入其他项目应用，应在对应项目内另行建立计划、设计和验收材料。
