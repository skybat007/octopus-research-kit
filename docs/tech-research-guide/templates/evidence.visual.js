window.EVIDENCE_META = {
  title: "Evidence Explanation",
  description: "Trace from the architecture diagram back to evidence: architecture context, evidence conclusions, source/doc snippets, and original index locations.",
  source: "../evidence-index.md",
  projectRoot: "/path/to/project"
};

window.EVIDENCE_ITEMS = [
  {
    id: "EVD-001",
    conclusion: "Replace with a conclusion already captured in evidence-index.md.",
    type: "source fact",
    location: "path/to/source.ts:1-20",
    confidence: "high",
    verified: "yes",
    note: "Sample evidence. Copy and replace.",
    explanation: "Explain which architecture node, edge, or layer this evidence supports.",
    graphRefs: [
      {
        kind: "node",
        viewId: "overview",
        viewLabel: "Architecture Overview",
        title: "Core Module",
        sub: "module boundary",
        role: "module",
        status: "source-verified",
        detail: "Explain this node's responsibility in the architecture diagram."
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
