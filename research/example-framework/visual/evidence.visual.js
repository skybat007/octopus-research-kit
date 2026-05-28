window.EVIDENCE_META = {
  "title": "Example Framework 证据解释",
  "description": "从架构图回到证据解释：展示架构语境、证据结论、源码/文档片段和原始索引位置。",
  "source": "../evidence-index.md",
  "projectRoot": "/Users/cheng/IdeaProjects/octopus-tec/research/example-framework"
};

window.EVIDENCE_ITEMS = [
  {
    "id": "TPL-001",
    "conclusion": "调研应先定义目标、范围、问题和交付物",
    "type": "repository doc fact",
    "location": "`research-brief.md`",
    "confidence": "高",
    "verified": "",
    "note": "模板约束",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "researchFlow",
        "viewLabel": "调研流程",
        "viewDescription": "这个视图展示新版技术调研方式：先建立外部认知，再转成可验证问题，最后用源码和证据索引支撑架构文档。",
        "title": "调研简报",
        "sub": "research-brief.md",
        "role": "adapter",
        "status": "pending",
        "detail": "定义目标、范围、问题和交付物。",
        "relation": ""
      }
    ],
    "explanation": "这条证据在架构图中支撑 调研流程 / 节点「调研简报」。证据结论是：调研应先定义目标、范围、问题和交付物。图中的具体解释是：定义目标、范围、问题和交付物。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "research-brief.md",
        "path": "/Users/cheng/IdeaProjects/octopus-tec/research/example-framework/research-brief.md",
        "relativePath": "research-brief.md",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "TPL-002",
    "conclusion": "外部资料调研应区分官方资料、协作资料和社区资料",
    "type": "repository doc fact",
    "location": "`external-research.md`",
    "confidence": "高",
    "verified": "",
    "note": "模板约束",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "researchFlow",
        "viewLabel": "调研流程",
        "viewDescription": "这个视图展示新版技术调研方式：先建立外部认知，再转成可验证问题，最后用源码和证据索引支撑架构文档。",
        "title": "外部资料调研",
        "sub": "external-research.md",
        "role": "adapter",
        "status": "pending",
        "detail": "收集官方、协作和社区资料，标记可信度。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "researchFlow",
        "viewLabel": "调研流程",
        "viewDescription": "这个视图展示新版技术调研方式：先建立外部认知，再转成可验证问题，最后用源码和证据索引支撑架构文档。",
        "title": "调研简报 -> 外部资料调研",
        "sub": "确定范围",
        "role": "sync-call",
        "status": "",
        "detail": "关系语义：确定范围。",
        "relation": "调研简报 到 外部资料调研"
      }
    ],
    "explanation": "这条证据在架构图中支撑 调研流程 / 节点「外部资料调研」、调研流程 / 连线「调研简报 -> 外部资料调研」。证据结论是：外部资料调研应区分官方资料、协作资料和社区资料。图中的具体解释是：收集官方、协作和社区资料，标记可信度。；关系语义：确定范围。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "external-research.md",
        "path": "/Users/cheng/IdeaProjects/octopus-tec/research/example-framework/external-research.md",
        "relativePath": "external-research.md",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "TPL-003",
    "conclusion": "外部观点和用户目标应转成可源码验证的问题",
    "type": "repository doc fact",
    "location": "`research-questions.md`",
    "confidence": "高",
    "verified": "",
    "note": "模板约束",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "researchFlow",
        "viewLabel": "调研流程",
        "viewDescription": "这个视图展示新版技术调研方式：先建立外部认知，再转成可验证问题，最后用源码和证据索引支撑架构文档。",
        "title": "研究问题",
        "sub": "research-questions.md",
        "role": "module",
        "status": "pending",
        "detail": "把外部资料中的关键说法转成源码验证问题。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "researchFlow",
        "viewLabel": "调研流程",
        "viewDescription": "这个视图展示新版技术调研方式：先建立外部认知，再转成可验证问题，最后用源码和证据索引支撑架构文档。",
        "title": "外部资料调研 -> 研究问题",
        "sub": "形成问题",
        "role": "sync-call",
        "status": "",
        "detail": "关系语义：形成问题。",
        "relation": "外部资料调研 到 研究问题"
      }
    ],
    "explanation": "这条证据在架构图中支撑 调研流程 / 节点「研究问题」、调研流程 / 连线「外部资料调研 -> 研究问题」。证据结论是：外部观点和用户目标应转成可源码验证的问题。图中的具体解释是：把外部资料中的关键说法转成源码验证问题。；关系语义：形成问题。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "research-questions.md",
        "path": "/Users/cheng/IdeaProjects/octopus-tec/research/example-framework/research-questions.md",
        "relativePath": "research-questions.md",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "TPL-004",
    "conclusion": "源码地图用于定位入口、模块边界和阅读顺序",
    "type": "repository doc fact",
    "location": "`source-map.md`, `references/source-inventory.json`",
    "confidence": "高",
    "verified": "",
    "note": "模板约束",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "researchFlow",
        "viewLabel": "调研流程",
        "viewDescription": "这个视图展示新版技术调研方式：先建立外部认知，再转成可验证问题，最后用源码和证据索引支撑架构文档。",
        "title": "源码地图",
        "sub": "source-map.md",
        "role": "runtime-object",
        "status": "pending",
        "detail": "定位入口、模块边界和阅读顺序。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "researchFlow",
        "viewLabel": "调研流程",
        "viewDescription": "这个视图展示新版技术调研方式：先建立外部认知，再转成可验证问题，最后用源码和证据索引支撑架构文档。",
        "title": "研究问题 -> 源码地图",
        "sub": "源码验证",
        "role": "sync-call",
        "status": "",
        "detail": "关系语义：源码验证。",
        "relation": "研究问题 到 源码地图"
      }
    ],
    "explanation": "这条证据在架构图中支撑 调研流程 / 节点「源码地图」、调研流程 / 连线「研究问题 -> 源码地图」。证据结论是：源码地图用于定位入口、模块边界和阅读顺序。图中的具体解释是：定位入口、模块边界和阅读顺序。；关系语义：源码验证。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "source-map.md",
        "path": "/Users/cheng/IdeaProjects/octopus-tec/research/example-framework/source-map.md",
        "relativePath": "source-map.md",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "references/source-inventory.json",
        "path": "/Users/cheng/IdeaProjects/octopus-tec/research/example-framework/references/source-inventory.json",
        "relativePath": "references/source-inventory.json",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "TPL-005",
    "conclusion": "架构和运行流程应沉淀模块关系、依赖方向和主链路",
    "type": "repository doc fact",
    "location": "`architecture.md`, `runtime-flows.md`",
    "confidence": "高",
    "verified": "",
    "note": "模板约束",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "researchFlow",
        "viewLabel": "调研流程",
        "viewDescription": "这个视图展示新版技术调研方式：先建立外部认知，再转成可验证问题，最后用源码和证据索引支撑架构文档。",
        "title": "架构与流程",
        "sub": "architecture.md / runtime-flows.md",
        "role": "module",
        "status": "pending",
        "detail": "沉淀模块关系、依赖方向和运行主链路。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "researchFlow",
        "viewLabel": "调研流程",
        "viewDescription": "这个视图展示新版技术调研方式：先建立外部认知，再转成可验证问题，最后用源码和证据索引支撑架构文档。",
        "title": "源码地图 -> 架构与流程",
        "sub": "支撑架构",
        "role": "sync-call",
        "status": "",
        "detail": "关系语义：支撑架构。",
        "relation": "源码地图 到 架构与流程"
      }
    ],
    "explanation": "这条证据在架构图中支撑 调研流程 / 节点「架构与流程」、调研流程 / 连线「源码地图 -> 架构与流程」。证据结论是：架构和运行流程应沉淀模块关系、依赖方向和主链路。图中的具体解释是：沉淀模块关系、依赖方向和运行主链路。；关系语义：支撑架构。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "architecture.md",
        "path": "/Users/cheng/IdeaProjects/octopus-tec/research/example-framework/architecture.md",
        "relativePath": "architecture.md",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "runtime-flows.md",
        "path": "/Users/cheng/IdeaProjects/octopus-tec/research/example-framework/runtime-flows.md",
        "relativePath": "runtime-flows.md",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "TPL-006",
    "conclusion": "核心抽象和扩展点应单独记录",
    "type": "repository doc fact",
    "location": "`key-abstractions.md`, `extension-points.md`",
    "confidence": "高",
    "verified": "",
    "note": "模板约束",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "researchFlow",
        "viewLabel": "调研流程",
        "viewDescription": "这个视图展示新版技术调研方式：先建立外部认知，再转成可验证问题，最后用源码和证据索引支撑架构文档。",
        "title": "核心抽象与扩展点",
        "sub": "key-abstractions / extension-points",
        "role": "extension-point",
        "status": "pending",
        "detail": "提炼核心对象、接口、插件、Hook、Provider 等扩展机制。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "researchFlow",
        "viewLabel": "调研流程",
        "viewDescription": "这个视图展示新版技术调研方式：先建立外部认知，再转成可验证问题，最后用源码和证据索引支撑架构文档。",
        "title": "源码地图 -> 核心抽象与扩展点",
        "sub": "支撑抽象",
        "role": "sync-call",
        "status": "",
        "detail": "关系语义：支撑抽象。",
        "relation": "源码地图 到 核心抽象与扩展点"
      }
    ],
    "explanation": "这条证据在架构图中支撑 调研流程 / 节点「核心抽象与扩展点」、调研流程 / 连线「源码地图 -> 核心抽象与扩展点」。证据结论是：核心抽象和扩展点应单独记录。图中的具体解释是：提炼核心对象、接口、插件、Hook、Provider 等扩展机制。；关系语义：支撑抽象。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "key-abstractions.md",
        "path": "/Users/cheng/IdeaProjects/octopus-tec/research/example-framework/key-abstractions.md",
        "relativePath": "key-abstractions.md",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "extension-points.md",
        "path": "/Users/cheng/IdeaProjects/octopus-tec/research/example-framework/extension-points.md",
        "relativePath": "extension-points.md",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "TPL-007",
    "conclusion": "关键结论应通过证据索引和调研审查保持可追溯",
    "type": "repository doc fact",
    "location": "`evidence-index.md`, `research-review.md`",
    "confidence": "高",
    "verified": "",
    "note": "模板约束",
    "graphRefs": [
      {
        "kind": "节点",
        "viewId": "researchFlow",
        "viewLabel": "调研流程",
        "viewDescription": "这个视图展示新版技术调研方式：先建立外部认知，再转成可验证问题，最后用源码和证据索引支撑架构文档。",
        "title": "证据索引与审查",
        "sub": "evidence-index / research-review",
        "role": "state",
        "status": "pending",
        "detail": "所有关键结论回到源码、官方资料或明确推断。",
        "relation": ""
      },
      {
        "kind": "连线",
        "viewId": "researchFlow",
        "viewLabel": "调研流程",
        "viewDescription": "这个视图展示新版技术调研方式：先建立外部认知，再转成可验证问题，最后用源码和证据索引支撑架构文档。",
        "title": "架构与流程 -> 证据索引与审查",
        "sub": "记录证据",
        "role": "read-write",
        "status": "",
        "detail": "关系语义：记录证据。",
        "relation": "架构与流程 到 证据索引与审查"
      },
      {
        "kind": "连线",
        "viewId": "researchFlow",
        "viewLabel": "调研流程",
        "viewDescription": "这个视图展示新版技术调研方式：先建立外部认知，再转成可验证问题，最后用源码和证据索引支撑架构文档。",
        "title": "核心抽象与扩展点 -> 证据索引与审查",
        "sub": "记录证据",
        "role": "read-write",
        "status": "",
        "detail": "关系语义：记录证据。",
        "relation": "核心抽象与扩展点 到 证据索引与审查"
      }
    ],
    "explanation": "这条证据在架构图中支撑 调研流程 / 节点「证据索引与审查」、调研流程 / 连线「架构与流程 -> 证据索引与审查」、调研流程 / 连线「核心抽象与扩展点 -> 证据索引与审查」。证据结论是：关键结论应通过证据索引和调研审查保持可追溯。图中的具体解释是：所有关键结论回到源码、官方资料或明确推断。；关系语义：记录证据。",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "evidence-index.md",
        "path": "/Users/cheng/IdeaProjects/octopus-tec/research/example-framework/evidence-index.md",
        "relativePath": "evidence-index.md",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "research-review.md",
        "path": "/Users/cheng/IdeaProjects/octopus-tec/research/example-framework/research-review.md",
        "relativePath": "research-review.md",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  }
];
