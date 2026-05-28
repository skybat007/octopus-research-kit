#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { sanitizePersonalPaths } = require('./privacy-utils');

const root = process.cwd();
const { dirs, sourceRoot } = parseArgs(process.argv.slice(2));
const targetDirs = dirs.length ? dirs : discoverResearchDirs();

if (sourceRoot && targetDirs.length !== 1) {
  console.error('--source-root can only be used with one research directory.');
  process.exit(1);
}

for (const dir of targetDirs) {
  buildForDir(path.resolve(root, dir), { sourceRoot });
}

function parseArgs(rawArgs) {
  const dirs = [];
  let sourceRoot = '';
  for (let i = 0; i < rawArgs.length; i += 1) {
    const arg = rawArgs[i];
    if (arg.startsWith('--source-root=')) {
      sourceRoot = arg.slice('--source-root='.length);
      continue;
    }
    if (arg === '--source-root') {
      sourceRoot = rawArgs[i + 1] || '';
      i += 1;
      continue;
    }
    dirs.push(arg);
  }
  return { dirs, sourceRoot };
}

function discoverResearchDirs() {
  const researchRoot = path.join(root, 'research');
  if (!fs.existsSync(researchRoot)) return [];
  return fs.readdirSync(researchRoot)
    .map(name => path.join('research', name))
    .filter(dir => fs.existsSync(path.join(root, dir, 'evidence-index.md')));
}

function buildForDir(researchDir, options = {}) {
  const evidencePath = path.join(researchDir, 'evidence-index.md');
  const visualDir = path.join(researchDir, 'visual');
  const archPath = path.join(visualDir, 'architecture.visual.js');
  const viewerTemplate = path.join(root, 'docs/tech-research-guide/templates/evidence-viewer-template.html');
  const viewerOut = path.join(visualDir, 'evidence.html');
  const dataOut = path.join(visualDir, 'evidence.visual.js');

  fs.mkdirSync(visualDir, { recursive: true });
  if (fs.existsSync(viewerTemplate)) {
    fs.copyFileSync(viewerTemplate, viewerOut);
  }

  const md = fs.existsSync(evidencePath) ? fs.readFileSync(evidencePath, 'utf8') : '';
  const projectRoot = options.sourceRoot || readProjectRoot(md) || researchDir;
  const evidenceItems = parseEvidenceMarkdown(md);
  const graphRefs = fs.existsSync(archPath) ? collectGraphRefs(archPath) : new Map();
  const sourceMeta = buildSourceMeta(evidenceItems, projectRoot);

  const enriched = evidenceItems.map(item => {
    const refs = graphRefs.get(item.id) || [];
    const sourceRefs = sourceMeta.get(item.id) || [];
    return {
      ...item,
      graphRefs: refs,
      explanation: buildExplanation(item, refs),
      sourceRefs,
      sourceLimitNote: sourceRefs.limitNote || ''
    };
  });

  const name = frameworkName(researchDir);
  const meta = {
    title: `${name} Evidence Explanation`,
    description: 'Trace from the architecture diagram back to evidence: architecture context, evidence conclusions, source/doc snippets, and original index locations.',
    source: '../evidence-index.md',
    projectRoot: sanitizePersonalPaths(projectRoot)
  };
  const out = `window.EVIDENCE_META = ${JSON.stringify(meta, null, 2)};\n\nwindow.EVIDENCE_ITEMS = ${JSON.stringify(enriched, null, 2)};\n`;
  fs.writeFileSync(dataOut, sanitizePersonalPaths(out));
  console.log(`${path.relative(root, researchDir)}: ${enriched.length} evidence items`);
}

function frameworkName(researchDir) {
  const base = path.basename(researchDir);
  if (base === 'openclaw') return 'OpenClaw';
  return base.split(/[-_]/).map(part => part ? part[0].toUpperCase() + part.slice(1) : part).join(' ');
}

function readProjectRoot(md) {
  const match = md.match(/\|\s*(?:Local source path|Source root)\s*\|\s*`?([^`|\n]+)`?\s*\|/);
  return match ? match[1].trim() : '';
}

function splitMdRow(line) {
  let s = line.trim();
  if (s.startsWith('|')) s = s.slice(1);
  if (s.endsWith('|')) s = s.slice(0, -1);
  const cells = [];
  let cur = '';
  let escaping = false;
  for (const ch of s) {
    if (escaping) {
      cur += ch;
      escaping = false;
      continue;
    }
    if (ch === '\\') {
      escaping = true;
      cur += ch;
      continue;
    }
    if (ch === '|') {
      cells.push(cur.trim());
      cur = '';
    } else {
      cur += ch;
    }
  }
  cells.push(cur.trim());
  return cells;
}

function isSeparator(line) {
  return /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(line.trim());
}

function clean(value) {
  return String(value || '')
    .replace(/<a\s+id="[^"]+"><\/a>/g, '')
    .replace(/\\\|/g, '|')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/&nbsp;/g, ' ')
    .trim();
}

function pick(row, names) {
  for (const name of names) {
    if (row[name]) return row[name];
  }
  return '';
}

function parseEvidenceMarkdown(md) {
  const lines = md.split(/\r?\n/);
  let headers = null;
  const items = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim().startsWith('|')) continue;
    if (isSeparator(line)) continue;
    const cells = splitMdRow(line);
    if (i + 1 < lines.length && isSeparator(lines[i + 1])) {
      headers = cells.map(clean);
      continue;
    }
    if (!headers || cells.length < 2) continue;
    const idCell = cells.find(c => /<a\s+id="[^"]+"><\/a>/.test(c)) || '';
    const match = idCell.match(/<a\s+id="([^"]+)"><\/a>\s*([^\s|]*)/);
    if (!match) continue;
    const row = {};
    headers.forEach((h, idx) => row[h] = clean(cells[idx] || ''));
    const id = match[1] || clean(idCell);
    items.push({
      id,
      conclusion: pick(row, ['Conclusion', 'Reasoning', 'Inference']),
      type: pick(row, ['Evidence type', 'Type']) || (id.startsWith('INF-') ? 'inference' : 'evidence'),
      location: pick(row, ['Location', 'Source', 'Depends on evidence']),
      confidence: pick(row, ['Confidence', 'Credibility level']),
      verified: pick(row, ['Source verified', 'Verified']),
      note: pick(row, ['Notes', 'Pending validation'])
    });
  }
  return items;
}

function collectGraphRefs(archPath) {
  delete require.cache[require.resolve(archPath)];
  global.window = {};
  require(archPath);
  const views = Array.isArray(global.window.ARCHITECTURE_VIEWS) ? global.window.ARCHITECTURE_VIEWS : [];
  const refs = new Map();

  for (const view of views) {
    const nodes = Object.fromEntries((view.nodes || []).map(node => [node.id, node]));
    for (const node of view.nodes || []) {
      addRef(refs, evidenceIds(node), {
        kind: 'node',
        viewId: view.id,
        viewLabel: view.label,
        viewDescription: view.description || view.desc || view.purpose || '',
        title: node.title,
        sub: node.sub,
        role: node.role,
        status: node.status,
        detail: node.tip,
        relation: ''
      });
    }
    for (const layer of view.layers || []) {
      addRef(refs, evidenceIds(layer), {
        kind: 'layer',
        viewId: view.id,
        viewLabel: view.label,
        viewDescription: view.description || view.desc || view.purpose || '',
        title: layer.title,
        sub: layer.sub,
        role: layer.role,
        status: layer.status,
        detail: layer.tip || layer.sub,
        relation: (layer.items || []).join(' / ')
      });
    }
    for (const edge of view.edges || []) {
      const fromTitle = nodes[edge.from] ? nodes[edge.from].title : edge.from;
      const toTitle = nodes[edge.to] ? nodes[edge.to].title : edge.to;
      addRef(refs, evidenceIds(edge), {
        kind: 'edge',
        viewId: view.id,
        viewLabel: view.label,
        viewDescription: view.description || view.desc || view.purpose || '',
        title: `${fromTitle} -> ${toTitle}`,
        sub: edge.label,
        role: edge.kind,
        status: '',
        detail: `Relationship semantics: ${edge.label || edge.kind || 'related'}.`,
        relation: `${fromTitle} to ${toTitle}`
      });
    }
  }

  for (const [id, list] of refs.entries()) {
    const seen = new Set();
    refs.set(id, list.filter(ref => {
      const key = [ref.kind, ref.viewId, ref.title, ref.sub, ref.detail].join('|');
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    }));
  }
  return refs;
}

function evidenceIds(obj) {
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

function addRef(refs, ids, ref) {
  for (const id of ids) {
    if (!refs.has(id)) refs.set(id, []);
    refs.get(id).push(ref);
  }
}

function buildExplanation(item, refs) {
  if (!refs.length) {
    return 'The current visual architecture does not directly reference this evidence. It mainly supports conclusions or later inferences in the evidence index.';
  }
  const targets = refs.slice(0, 4).map(ref => `${ref.viewLabel || ref.viewId} / ${ref.kind} "${ref.title}"`).join(', ');
  const tips = refs.map(ref => ref.detail).filter(Boolean).slice(0, 2).join('; ');
  const suffix = tips ? `The diagram explanation says: ${tips}` : 'It helps explain the responsibility and boundary of this architecture object.';
  return `This evidence supports ${targets} in the architecture diagram. Evidence conclusion: ${item.conclusion || 'see evidence index'}. ${suffix}`;
}

function buildSourceMeta(items, projectRoot) {
  const map = new Map();
  for (const item of items) {
    const refs = parseLocationRefs(item.location, projectRoot);
    const limited = refs.slice(0, 8).map(ref => enrichSourceRef(ref));
    if (refs.length > limited.length) {
      limited.limitNote = `${refs.length - limited.length} additional locations are not expanded here. See evidence-index.md for the full list.`;
    }
    map.set(item.id, limited);
  }
  return map;
}

function parseLocationRefs(location, projectRoot) {
  const refs = [];
  const raw = String(location || '');
  const backtickValues = [...raw.matchAll(/`([^`]+)`/g)].map(m => m[1]);
  const values = backtickValues.length ? backtickValues : raw.split(',').map(v => v.trim()).filter(Boolean);
  for (const value of values) {
    const token = value.trim();
    if (!token) continue;
    if (/^https?:\/\//.test(token)) {
      refs.push({ kind: 'url', display: token, url: token });
      continue;
    }
    if (/^(git|rg|find|ls|wc)\s+/.test(token)) {
      refs.push({ kind: 'command', display: token });
      continue;
    }
    const parsed = token.match(/^(.+?):(\d+)(?:-(\d+))?$/);
    const rawPath = parsed ? parsed[1] : token;
    const start = parsed ? Number(parsed[2]) : null;
    const end = parsed ? Number(parsed[3] || parsed[2]) : null;
    const absolute = path.isAbsolute(rawPath) ? rawPath : path.join(projectRoot, rawPath);
    refs.push({ kind: 'file', display: token, path: absolute, relativePath: rawPath, start, end });
  }
  return refs;
}

function enrichSourceRef(ref) {
  if (ref.kind !== 'file' || !fs.existsSync(ref.path) || !ref.start) return ref;
  const lines = fs.readFileSync(ref.path, 'utf8').split(/\r?\n/);
  const start = Math.max(ref.start, 1);
  const requestedEnd = ref.end || ref.start;
  const end = Math.min(requestedEnd, start + 17, lines.length);
  const snippet = [];
  for (let lineNo = start; lineNo <= end; lineNo++) {
    snippet.push(`${String(lineNo).padStart(5, ' ')}  ${lines[lineNo - 1] || ''}`);
  }
  const omitted = requestedEnd > end ? `Showing lines ${start}-${end}; original range ended at ${requestedEnd}.` : '';
  return { ...ref, snippet: snippet.join('\n'), omitted };
}
