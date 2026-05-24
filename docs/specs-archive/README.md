# Archived Specs

本目录用于归档已完成且不再作为当前契约维护的历史 spec。

推荐结构：

```text
docs/specs-archive/
  2026/
    <feature-name>/
      README.md
      requirements.md
      design.md
      tasks.md
```

## 归档条件

满足以下任一条件时，可以归档：

- 已完成上线，短期不会继续改。
- 已被新的 spec 替代。
- 只需要保留历史依据。
- 不再作为当前开发、联调或验收契约。

## 归档要求

- 原 spec 的 `README.md` 应标注 `Status: archived` 或 `Status: superseded`。
- 如果是被替代，注明替代 spec 路径。
- 不要归档到 `output/`；`output/` 只放运行产物。
