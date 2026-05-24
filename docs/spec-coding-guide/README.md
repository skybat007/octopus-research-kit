# Spec Coding Guide

本目录用于维护 AI Coding 前的 Spec Coding 规范、模板和角色边界。

## 怎么用

1. 开发人员先读 `AI_CODING_QUICKSTART.md`, 明确如何给 AI 输入材料、确认范围和推进实现。
2. 复杂开发任务再读 `SPEC_CODING_GUIDE.md`。
3. 为需求创建 `docs/specs/<feature-name>/`。
4. 从 `templates/` 复制需要的模板，至少包含 `requirements.md`、`design.md`、`tasks.md`。
5. 进入 Coding 前，按 `SPEC_CODING_GUIDE.md` 做 Coding Readiness Check。

简单小修、小型配置修正、明确 bug 修复不需要单独建 spec，但仍应明确改动范围和验证方式。

## 目录说明

- `SPEC_CODING_GUIDE.md`：Spec Coding 总规范。
- `AI_CODING_QUICKSTART.md`：开发人员与 AI 协作完成 Spec Coding 和实现的快速上手说明。
- `GLOSSARY.md`：全局术语表。
- `templates/`：专项 spec 可复用模板。
- `roles/`：生成不同文档时的角色边界说明。

## 边界

Spec Coding 只判断需求、设计、任务和验收是否足够支撑编码。  
具体工程对象的运行、输出、打包、发布和质量检查，继续遵守对应工程范式。
