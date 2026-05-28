window.EVIDENCE_META = {
  "title": "Example Framework Evidence Explanation",
  "description": "Trace from the architecture diagram back to evidence: architecture context, evidence conclusions, source/doc snippets, and original index locations.",
  "source": "../evidence-index.md",
  "projectRoot": "research/example-framework"
};

window.EVIDENCE_ITEMS = [
  {
    "id": "TPL-001",
    "conclusion": "Research should define goals, scope, questions, and deliverables first",
    "type": "repository doc fact",
    "location": "`research-brief.md`",
    "confidence": "high",
    "verified": "",
    "note": "Template constraint",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "researchFlow",
        "viewLabel": "Research Flow",
        "viewDescription": "Shows the recommended research flow: build external context, turn it into verifiable questions, then use source evidence and an evidence index to support architecture documents.",
        "title": "Research Brief",
        "sub": "research-brief.md",
        "role": "adapter",
        "status": "pending",
        "detail": "Define goals, scope, questions, and deliverables.",
        "relation": ""
      }
    ],
    "explanation": "This evidence supports Research Flow / node \"Research Brief\" in the architecture diagram. Evidence conclusion: Research should define goals, scope, questions, and deliverables first. The diagram explanation says: Define goals, scope, questions, and deliverables.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "research-brief.md",
        "path": "research/example-framework/research-brief.md",
        "relativePath": "research-brief.md",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "TPL-002",
    "conclusion": "External research should distinguish official, collaboration, and community references",
    "type": "repository doc fact",
    "location": "`external-research.md`",
    "confidence": "high",
    "verified": "",
    "note": "Template constraint",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "researchFlow",
        "viewLabel": "Research Flow",
        "viewDescription": "Shows the recommended research flow: build external context, turn it into verifiable questions, then use source evidence and an evidence index to support architecture documents.",
        "title": "External Research",
        "sub": "external-research.md",
        "role": "adapter",
        "status": "pending",
        "detail": "Collect official, collaboration, and community references and mark credibility.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "researchFlow",
        "viewLabel": "Research Flow",
        "viewDescription": "Shows the recommended research flow: build external context, turn it into verifiable questions, then use source evidence and an evidence index to support architecture documents.",
        "title": "Research Brief -> External Research",
        "sub": "scope",
        "role": "sync-call",
        "status": "",
        "detail": "Relationship semantics: scope.",
        "relation": "Research Brief to External Research"
      }
    ],
    "explanation": "This evidence supports Research Flow / node \"External Research\", Research Flow / edge \"Research Brief -> External Research\" in the architecture diagram. Evidence conclusion: External research should distinguish official, collaboration, and community references. The diagram explanation says: Collect official, collaboration, and community references and mark credibility.; Relationship semantics: scope.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "external-research.md",
        "path": "research/example-framework/external-research.md",
        "relativePath": "external-research.md",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "TPL-003",
    "conclusion": "External claims and user goals should become source-verifiable questions",
    "type": "repository doc fact",
    "location": "`research-questions.md`",
    "confidence": "high",
    "verified": "",
    "note": "Template constraint",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "researchFlow",
        "viewLabel": "Research Flow",
        "viewDescription": "Shows the recommended research flow: build external context, turn it into verifiable questions, then use source evidence and an evidence index to support architecture documents.",
        "title": "Research Questions",
        "sub": "research-questions.md",
        "role": "module",
        "status": "pending",
        "detail": "Turn key external claims into source-verification questions.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "researchFlow",
        "viewLabel": "Research Flow",
        "viewDescription": "Shows the recommended research flow: build external context, turn it into verifiable questions, then use source evidence and an evidence index to support architecture documents.",
        "title": "External Research -> Research Questions",
        "sub": "questions",
        "role": "sync-call",
        "status": "",
        "detail": "Relationship semantics: questions.",
        "relation": "External Research to Research Questions"
      }
    ],
    "explanation": "This evidence supports Research Flow / node \"Research Questions\", Research Flow / edge \"External Research -> Research Questions\" in the architecture diagram. Evidence conclusion: External claims and user goals should become source-verifiable questions. The diagram explanation says: Turn key external claims into source-verification questions.; Relationship semantics: questions.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "research-questions.md",
        "path": "research/example-framework/research-questions.md",
        "relativePath": "research-questions.md",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "TPL-004",
    "conclusion": "Source maps locate entries, module boundaries, and reading order",
    "type": "repository doc fact",
    "location": "`source-map.md`, `references/source-inventory.json`",
    "confidence": "high",
    "verified": "",
    "note": "Template constraint",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "researchFlow",
        "viewLabel": "Research Flow",
        "viewDescription": "Shows the recommended research flow: build external context, turn it into verifiable questions, then use source evidence and an evidence index to support architecture documents.",
        "title": "Source Map",
        "sub": "source-map.md",
        "role": "runtime-object",
        "status": "pending",
        "detail": "Locate entries, module boundaries, and reading order.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "researchFlow",
        "viewLabel": "Research Flow",
        "viewDescription": "Shows the recommended research flow: build external context, turn it into verifiable questions, then use source evidence and an evidence index to support architecture documents.",
        "title": "Research Questions -> Source Map",
        "sub": "verify in source",
        "role": "sync-call",
        "status": "",
        "detail": "Relationship semantics: verify in source.",
        "relation": "Research Questions to Source Map"
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layer Template",
        "viewDescription": "A compact template for horizontal modules, vertical dependencies, and evidence ownership.",
        "title": "Entry Layer",
        "sub": "CLI / API / UI / Channel",
        "role": "adapter",
        "status": "pending",
        "detail": "Replace with real entry evidence.",
        "relation": "entry adapter / protocol conversion / user interaction / external event"
      }
    ],
    "explanation": "This evidence supports Research Flow / node \"Source Map\", Research Flow / edge \"Research Questions -> Source Map\", Layer Template / layer \"Entry Layer\" in the architecture diagram. Evidence conclusion: Source maps locate entries, module boundaries, and reading order. The diagram explanation says: Locate entries, module boundaries, and reading order.; Relationship semantics: verify in source.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "source-map.md",
        "path": "research/example-framework/source-map.md",
        "relativePath": "source-map.md",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "references/source-inventory.json",
        "path": "research/example-framework/references/source-inventory.json",
        "relativePath": "references/source-inventory.json",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "TPL-005",
    "conclusion": "Architecture and runtime flows should preserve module relationships, dependency direction, and main paths",
    "type": "repository doc fact",
    "location": "`architecture.md`, `runtime-flows.md`",
    "confidence": "high",
    "verified": "",
    "note": "Template constraint",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "researchFlow",
        "viewLabel": "Research Flow",
        "viewDescription": "Shows the recommended research flow: build external context, turn it into verifiable questions, then use source evidence and an evidence index to support architecture documents.",
        "title": "Architecture and Flows",
        "sub": "architecture.md / runtime-flows.md",
        "role": "module",
        "status": "pending",
        "detail": "Capture module relationships, dependency direction, and main runtime paths.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "researchFlow",
        "viewLabel": "Research Flow",
        "viewDescription": "Shows the recommended research flow: build external context, turn it into verifiable questions, then use source evidence and an evidence index to support architecture documents.",
        "title": "Source Map -> Architecture and Flows",
        "sub": "supports architecture",
        "role": "sync-call",
        "status": "",
        "detail": "Relationship semantics: supports architecture.",
        "relation": "Source Map to Architecture and Flows"
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layer Template",
        "viewDescription": "A compact template for horizontal modules, vertical dependencies, and evidence ownership.",
        "title": "Control Layer",
        "sub": "Routing / Registry / Policy",
        "role": "module",
        "status": "pending",
        "detail": "Replace with real control-plane evidence.",
        "relation": "config loading / registry / policy / scheduling"
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layer Template",
        "viewDescription": "A compact template for horizontal modules, vertical dependencies, and evidence ownership.",
        "title": "Execution Layer",
        "sub": "Loop / Worker / Scheduler",
        "role": "runtime-object",
        "status": "pending",
        "detail": "Replace with real runtime evidence.",
        "relation": "main loop / task execution / error handling / result generation"
      }
    ],
    "explanation": "This evidence supports Research Flow / node \"Architecture and Flows\", Research Flow / edge \"Source Map -> Architecture and Flows\", Layer Template / layer \"Control Layer\", Layer Template / layer \"Execution Layer\" in the architecture diagram. Evidence conclusion: Architecture and runtime flows should preserve module relationships, dependency direction, and main paths. The diagram explanation says: Capture module relationships, dependency direction, and main runtime paths.; Relationship semantics: supports architecture.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "architecture.md",
        "path": "research/example-framework/architecture.md",
        "relativePath": "architecture.md",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "runtime-flows.md",
        "path": "research/example-framework/runtime-flows.md",
        "relativePath": "runtime-flows.md",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "TPL-006",
    "conclusion": "Key abstractions and extension points should be recorded separately",
    "type": "repository doc fact",
    "location": "`key-abstractions.md`, `extension-points.md`",
    "confidence": "high",
    "verified": "",
    "note": "Template constraint",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "researchFlow",
        "viewLabel": "Research Flow",
        "viewDescription": "Shows the recommended research flow: build external context, turn it into verifiable questions, then use source evidence and an evidence index to support architecture documents.",
        "title": "Abstractions and Extensions",
        "sub": "key-abstractions / extension-points",
        "role": "extension-point",
        "status": "pending",
        "detail": "Extract core objects, interfaces, plugins, hooks, providers, and other extension mechanisms.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "researchFlow",
        "viewLabel": "Research Flow",
        "viewDescription": "Shows the recommended research flow: build external context, turn it into verifiable questions, then use source evidence and an evidence index to support architecture documents.",
        "title": "Source Map -> Abstractions and Extensions",
        "sub": "supports abstractions",
        "role": "sync-call",
        "status": "",
        "detail": "Relationship semantics: supports abstractions.",
        "relation": "Source Map to Abstractions and Extensions"
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layer Template",
        "viewDescription": "A compact template for horizontal modules, vertical dependencies, and evidence ownership.",
        "title": "Capability Layer",
        "sub": "Plugin / Hook / Provider / Tool",
        "role": "extension-point",
        "status": "pending",
        "detail": "Replace with real extension evidence.",
        "relation": "tool / provider / hook / plugin"
      }
    ],
    "explanation": "This evidence supports Research Flow / node \"Abstractions and Extensions\", Research Flow / edge \"Source Map -> Abstractions and Extensions\", Layer Template / layer \"Capability Layer\" in the architecture diagram. Evidence conclusion: Key abstractions and extension points should be recorded separately. The diagram explanation says: Extract core objects, interfaces, plugins, hooks, providers, and other extension mechanisms.; Relationship semantics: supports abstractions.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "key-abstractions.md",
        "path": "research/example-framework/key-abstractions.md",
        "relativePath": "key-abstractions.md",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "extension-points.md",
        "path": "research/example-framework/extension-points.md",
        "relativePath": "extension-points.md",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  },
  {
    "id": "TPL-007",
    "conclusion": "Important conclusions should remain traceable through the evidence index and research review",
    "type": "repository doc fact",
    "location": "`evidence-index.md`, `research-review.md`",
    "confidence": "high",
    "verified": "",
    "note": "Template constraint",
    "graphRefs": [
      {
        "kind": "node",
        "viewId": "researchFlow",
        "viewLabel": "Research Flow",
        "viewDescription": "Shows the recommended research flow: build external context, turn it into verifiable questions, then use source evidence and an evidence index to support architecture documents.",
        "title": "Evidence and Review",
        "sub": "evidence-index / research-review",
        "role": "state",
        "status": "pending",
        "detail": "Trace every important conclusion back to source, official references, or explicit inference.",
        "relation": ""
      },
      {
        "kind": "edge",
        "viewId": "researchFlow",
        "viewLabel": "Research Flow",
        "viewDescription": "Shows the recommended research flow: build external context, turn it into verifiable questions, then use source evidence and an evidence index to support architecture documents.",
        "title": "Architecture and Flows -> Evidence and Review",
        "sub": "record evidence",
        "role": "read-write",
        "status": "",
        "detail": "Relationship semantics: record evidence.",
        "relation": "Architecture and Flows to Evidence and Review"
      },
      {
        "kind": "edge",
        "viewId": "researchFlow",
        "viewLabel": "Research Flow",
        "viewDescription": "Shows the recommended research flow: build external context, turn it into verifiable questions, then use source evidence and an evidence index to support architecture documents.",
        "title": "Abstractions and Extensions -> Evidence and Review",
        "sub": "record evidence",
        "role": "read-write",
        "status": "",
        "detail": "Relationship semantics: record evidence.",
        "relation": "Abstractions and Extensions to Evidence and Review"
      },
      {
        "kind": "layer",
        "viewId": "layers",
        "viewLabel": "Layer Template",
        "viewDescription": "A compact template for horizontal modules, vertical dependencies, and evidence ownership.",
        "title": "Evidence Layer",
        "sub": "Evidence Index / Research Review",
        "role": "state",
        "status": "pending",
        "detail": "Keep conclusions traceable.",
        "relation": "claim / evidence / confidence / review"
      }
    ],
    "explanation": "This evidence supports Research Flow / node \"Evidence and Review\", Research Flow / edge \"Architecture and Flows -> Evidence and Review\", Research Flow / edge \"Abstractions and Extensions -> Evidence and Review\", Layer Template / layer \"Evidence Layer\" in the architecture diagram. Evidence conclusion: Important conclusions should remain traceable through the evidence index and research review. The diagram explanation says: Trace every important conclusion back to source, official references, or explicit inference.; Relationship semantics: record evidence.",
    "sourceRefs": [
      {
        "kind": "file",
        "display": "evidence-index.md",
        "path": "research/example-framework/evidence-index.md",
        "relativePath": "evidence-index.md",
        "start": null,
        "end": null
      },
      {
        "kind": "file",
        "display": "research-review.md",
        "path": "research/example-framework/research-review.md",
        "relativePath": "research-review.md",
        "start": null,
        "end": null
      }
    ],
    "sourceLimitNote": ""
  }
];
