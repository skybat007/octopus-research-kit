#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { hasPersonalPath } = require('./privacy-utils');

const root = process.cwd();
const args = process.argv.slice(2);
const strict = args.includes('--strict');
const dirArgs = args.filter(arg => arg !== '--strict' && arg !== '--help');

if (args.includes('--help')) {
  console.log('Usage: node docs/tech-research-guide/scripts/validate-research.js [--strict] [research/<name> ...]');
  process.exit(0);
}

const targetDirs = dirArgs.length ? dirArgs : discoverResearchDirs();
let totalErrors = 0;
let totalWarnings = 0;

for (const dir of targetDirs) {
  const result = validateDir(path.resolve(root, dir));
  totalErrors += result.errors.length;
  totalWarnings += result.warnings.length;
  printResult(result);
}

const indexResult = validateResearchIndex();
totalErrors += indexResult.errors.length;
totalWarnings += indexResult.warnings.length;
printResult(indexResult);

if (totalErrors || (strict && totalWarnings)) {
  process.exitCode = 1;
}

function discoverResearchDirs() {
  const researchRoot = path.join(root, 'research');
  if (!fs.existsSync(researchRoot)) return [];
  return fs.readdirSync(researchRoot)
    .map(name => path.join('research', name))
    .filter(dir => fs.statSync(path.join(root, dir)).isDirectory());
}

function validateDir(researchDir) {
  const result = {
    dir: rel(researchDir),
    errors: [],
    warnings: [],
    info: []
  };

  if (!fs.existsSync(researchDir)) {
    result.errors.push('research directory does not exist');
    return result;
  }

  validateRequiredDocs(researchDir, result);
  validateInventory(researchDir, result);
  validateNoPersonalPaths(researchDir, result);
  validateMermaidSyntaxHints(researchDir, result);

  const evidencePath = path.join(researchDir, 'evidence-index.md');
  const evidenceIds = fs.existsSync(evidencePath)
    ? parseEvidenceIds(fs.readFileSync(evidencePath, 'utf8'))
    : new Set();

  if (!evidenceIds.size) {
    result.warnings.push('evidence-index.md has no anchor ids like <a id="EVD-001"></a>');
  }

  const visualDir = path.join(researchDir, 'visual');
  validateVisualHtml(path.join(researchDir, 'dashboard.html'), result);
  validateVisualHtml(path.join(researchDir, 'docs.html'), result);
  validateVisualHtml(path.join(visualDir, 'architecture.html'), result);
  validateVisualHtml(path.join(visualDir, 'evidence.html'), result);
  validateArchitectureVisual(path.join(visualDir, 'architecture.visual.js'), evidenceIds, result);
  validateEvidenceVisual(path.join(visualDir, 'evidence.visual.js'), evidenceIds, result);

  return result;
}

function validateResearchIndex() {
  const result = {
    dir: 'research/index.html',
    errors: [],
    warnings: [],
    info: []
  };
  const indexPath = path.join(root, 'research', 'index.html');
  if (!fs.existsSync(indexPath)) {
    result.errors.push('missing research/index.html');
    return result;
  }
  const html = fs.readFileSync(indexPath, 'utf8');
  const expected = discoverResearchDirs()
    .filter(dir => fs.existsSync(path.join(root, dir, 'README.md')))
    .map(dir => path.basename(dir));
  for (const name of expected) {
    const href = `./${name}/dashboard.html`;
    if (!html.includes(href)) {
      result.errors.push(`research/index.html missing dashboard link for research/${name}`);
    }
  }
  result.info.push(`${expected.length} research dashboard link(s) expected`);
  return result;
}

function validateRequiredDocs(researchDir, result) {
  const required = [
    'README.md',
    'research-brief.md',
    'source-map.md',
    'architecture.md',
    'runtime-flows.md',
    'key-abstractions.md',
    'design-philosophy.md',
    'adoption-notes.md',
    'evidence-index.md',
    'research-review.md'
  ];
  const recommended = [
    'external-research.md',
    'research-questions.md',
    'extension-points.md',
    'comparison.md'
  ];

  for (const file of required) {
    if (!fs.existsSync(path.join(researchDir, file))) {
      result.errors.push(`missing required document: ${file}`);
    }
  }
  for (const file of recommended) {
    if (!fs.existsSync(path.join(researchDir, file))) {
      result.warnings.push(`missing recommended document: ${file}`);
    }
  }
}

function validateInventory(researchDir, result) {
  const inventoryPath = path.join(researchDir, 'references', 'source-inventory.json');
  const legacyPath = path.join(researchDir, 'source-inventory.json');
  if (fs.existsSync(legacyPath)) {
    result.warnings.push('legacy source-inventory.json found at research root; move it to references/source-inventory.json');
  }
  if (!fs.existsSync(inventoryPath)) {
    result.warnings.push('missing references/source-inventory.json; run build-source-inventory.js when a local source tree is available');
    return;
  }
  let inventory;
  try {
    inventory = JSON.parse(fs.readFileSync(inventoryPath, 'utf8'));
  } catch (error) {
    result.errors.push(`references/source-inventory.json is not valid JSON: ${error.message}`);
    return;
  }
  for (const field of ['schemaVersion', 'generatedAt', 'researchName', 'researchDir', 'status']) {
    if (inventory[field] === undefined || inventory[field] === '') {
      result.warnings.push(`references/source-inventory.json missing field: ${field}`);
    }
  }
  if (inventory.status === 'ok') {
    for (const field of ['projectRoot', 'fileCount', 'languages', 'topLevel']) {
      if (inventory[field] === undefined || inventory[field] === '') {
        result.warnings.push(`references/source-inventory.json missing field for ok status: ${field}`);
      }
    }
    if (!Array.isArray(inventory.languages) || !inventory.languages.length) {
      result.warnings.push('references/source-inventory.json has no language summary');
    }
  }
}

function validateNoPersonalPaths(researchDir, result) {
  const extensions = new Set(['.md', '.html', '.js', '.json']);
  for (const file of listResearchFiles(researchDir, extensions)) {
    const content = fs.readFileSync(file, 'utf8');
    if (hasPersonalPath(content)) {
      result.errors.push(`${rel(file)} contains a personal local path; use project name or repository-relative paths instead`);
    }
  }
}

function validateMermaidSyntaxHints(researchDir, result) {
  const reservedAliases = new Set([
    'loop',
    'alt',
    'opt',
    'par',
    'and',
    'else',
    'break',
    'critical',
    'option',
    'rect',
    'end',
    'note',
    'activate',
    'deactivate',
    'create',
    'destroy',
    'participant',
    'actor'
  ]);
  for (const file of listResearchFiles(researchDir, new Set(['.md']))) {
    const content = fs.readFileSync(file, 'utf8');
    for (const block of mermaidBlocks(content)) {
      if (!/^\s*sequenceDiagram\b/m.test(block.code)) continue;
      for (const line of block.code.split(/\r?\n/)) {
        const match = line.match(/^\s*(?:participant|actor)\s+([A-Za-z][\w-]*)\b/);
        if (!match) continue;
        const alias = match[1];
        if (reservedAliases.has(alias.toLowerCase())) {
          result.errors.push(`${rel(file)} Mermaid sequenceDiagram uses reserved participant alias "${alias}" near line ${block.startLine}; rename it, for example "${alias}Node"`);
        }
      }
    }
  }
}

function mermaidBlocks(content) {
  const blocks = [];
  const lines = String(content || '').split(/\r?\n/);
  let inBlock = false;
  let startLine = 0;
  let lang = '';
  let code = [];
  for (let i = 0; i < lines.length; i += 1) {
    const fence = lines[i].match(/^\s*```(\S*)/);
    if (!inBlock && fence) {
      inBlock = true;
      startLine = i + 1;
      lang = (fence[1] || '').toLowerCase();
      code = [];
      continue;
    }
    if (inBlock && /^\s*```/.test(lines[i])) {
      if (lang === 'mermaid') blocks.push({ startLine, code: code.join('\n') });
      inBlock = false;
      continue;
    }
    if (inBlock) code.push(lines[i]);
  }
  return blocks;
}

function listResearchFiles(dir, extensions, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      listResearchFiles(fullPath, extensions, out);
      continue;
    }
    if (entry.isFile() && extensions.has(path.extname(entry.name))) out.push(fullPath);
  }
  return out;
}

function validateVisualHtml(file, result) {
  if (!fs.existsSync(file)) {
    result.warnings.push(`missing visual HTML: ${rel(file)}`);
    return;
  }
  const html = fs.readFileSync(file, 'utf8');
  const scripts = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)]
    .map(match => match[1])
    .filter(script => script.trim());
  for (let i = 0; i < scripts.length; i += 1) {
    try {
      new Function(scripts[i]);
    } catch (error) {
      result.errors.push(`${rel(file)} inline script ${i + 1} has syntax error: ${error.message}`);
    }
  }
}

function validateArchitectureVisual(file, evidenceIds, result) {
  if (!fs.existsSync(file)) {
    result.warnings.push(`missing architecture visual data: ${rel(file)}`);
    return;
  }
  const data = loadWindowData(file, result);
  if (!data) return;

  const views = Array.isArray(data.ARCHITECTURE_VIEWS) ? data.ARCHITECTURE_VIEWS : [];
  if (!views.length) {
    result.errors.push(`${rel(file)} has no ARCHITECTURE_VIEWS`);
    return;
  }

  const graphEvidence = new Set();
  for (const view of views) {
    if (!view.id || !view.label) result.warnings.push(`${rel(file)} has a view without id or label`);
    if ((view.nodes || []).length > 10) {
      result.warnings.push(`${rel(file)} view ${view.id || view.label} has more than 10 nodes`);
    }
    const nodeIds = new Set();
    for (const node of view.nodes || []) {
      validateFields(`${rel(file)} node ${node.id || node.title || '<unknown>'}`, node, ['id', 'type', 'role', 'title', 'sub', 'ev', 'doc', 'tip'], result);
      if (node.id) nodeIds.add(node.id);
      addEvidence(graphEvidence, node);
    }
    for (const edge of view.edges || []) {
      validateFields(`${rel(file)} edge ${edge.from || '?'} -> ${edge.to || '?'}`, edge, ['from', 'to', 'label', 'kind', 'ev', 'doc'], result);
      if (edge.from && nodeIds.size && !nodeIds.has(edge.from)) {
        result.errors.push(`${rel(file)} edge references missing from node: ${edge.from}`);
      }
      if (edge.to && nodeIds.size && !nodeIds.has(edge.to)) {
        result.errors.push(`${rel(file)} edge references missing to node: ${edge.to}`);
      }
      addEvidence(graphEvidence, edge);
    }
    for (const layer of view.layers || []) {
      addEvidence(graphEvidence, layer);
    }
  }

  for (const id of graphEvidence) {
    if (!evidenceIds.has(id)) {
      result.errors.push(`${rel(file)} references evidence id not found in evidence-index.md: ${id}`);
    }
  }
  result.info.push(`${views.length} architecture view(s), ${graphEvidence.size} evidence id(s) referenced`);
}

function validateEvidenceVisual(file, evidenceIds, result) {
  if (!fs.existsSync(file)) {
    result.warnings.push(`missing evidence visual data: ${rel(file)}`);
    return;
  }
  const data = loadWindowData(file, result);
  if (!data) return;
  const items = Array.isArray(data.EVIDENCE_ITEMS) ? data.EVIDENCE_ITEMS : [];
  if (!items.length) {
    result.warnings.push(`${rel(file)} has no EVIDENCE_ITEMS`);
    return;
  }
  const visualIds = new Set(items.map(item => item.id).filter(Boolean));
  for (const id of visualIds) {
    if (!evidenceIds.has(id)) {
      result.errors.push(`${rel(file)} contains evidence id not found in evidence-index.md: ${id}`);
    }
  }
  result.info.push(`${items.length} evidence explanation item(s)`);
}

function validateFields(label, obj, fields, result) {
  for (const field of fields) {
    if (obj[field] === undefined || obj[field] === '') {
      result.errors.push(`${label} missing required field: ${field}`);
    }
  }
}

function loadWindowData(file, result) {
  const previousWindow = global.window;
  try {
    delete require.cache[require.resolve(file)];
    global.window = {};
    require(file);
    const data = global.window;
    return data;
  } catch (error) {
    result.errors.push(`${rel(file)} cannot be loaded: ${error.message}`);
    return null;
  } finally {
    global.window = previousWindow;
  }
}

function parseEvidenceIds(md) {
  const ids = new Set();
  for (const match of md.matchAll(/<a\s+id="([^"]+)"><\/a>/g)) {
    ids.add(match[1]);
  }
  return ids;
}

function addEvidence(target, obj) {
  for (const id of evidenceIdsFrom(obj)) {
    target.add(id);
  }
}

function evidenceIdsFrom(obj) {
  const ids = new Set();
  const evText = String(obj.ev || '');
  const docText = String(obj.doc || '');
  for (const match of evText.matchAll(/[A-Z]+-[A-Z]*-?\d+|[A-Z]+-\d+/g)) {
    ids.add(match[0]);
  }
  const hash = docText.includes('#') ? docText.slice(docText.indexOf('#') + 1) : '';
  if (hash) ids.add(hash);
  return [...ids];
}

function printResult(result) {
  const status = result.errors.length ? 'ERROR' : (result.warnings.length ? 'WARN' : 'OK');
  console.log(`\n[${status}] ${result.dir}`);
  for (const line of result.info) console.log(`  info: ${line}`);
  for (const line of result.warnings) console.log(`  warn: ${line}`);
  for (const line of result.errors) console.log(`  error: ${line}`);
}

function rel(value) {
  return path.relative(root, value) || '.';
}
