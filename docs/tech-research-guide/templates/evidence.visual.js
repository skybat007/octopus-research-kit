window.EVIDENCE_META = {
  title: "证据解释",
  description: "从架构图回到证据解释：展示架构语境、证据结论、源码/文档片段和原始索引位置。",
  source: "../evidence-index.md",
  projectRoot: "/path/to/project"
};

window.EVIDENCE_ITEMS = [
  {
    id: "EVD-001",
    conclusion: "替换为 evidence-index.md 中已经沉淀的证据结论。",
    type: "source fact",
    location: "path/to/source.ts:1-20",
    confidence: "高",
    verified: "是",
    note: "示例证据，请复制后替换。",
    explanation: "说明这条证据在架构图中支撑了哪个节点、连线或分层判断。",
    graphRefs: [
      {
        kind: "节点",
        viewId: "overview",
        viewLabel: "架构总览",
        title: "核心模块",
        sub: "module boundary",
        role: "module",
        status: "source-verified",
        detail: "说明该节点在架构图中的职责。"
      }
    ],
    sourceRefs: [
      {
        kind: "file",
        display: "path/to/source.ts:1-20",
        path: "/path/to/project/path/to/source.ts",
        relativePath: "path/to/source.ts",
        start: 1,
        end: 20,
        snippet: "    1  // source preview",
        omitted: ""
      }
    ]
  }
];
