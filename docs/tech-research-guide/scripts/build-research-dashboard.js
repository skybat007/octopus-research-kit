#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const root = process.cwd();
const args = process.argv.slice(2).filter(arg => arg !== '--help');

if (process.argv.includes('--help')) {
  console.log('Usage: node docs/tech-research-guide/scripts/build-research-dashboard.js [research/<name> ...]');
  process.exit(0);
}

const targetDirs = args.length ? args : discoverResearchDirs();
const generated = [];

const NAV_GROUPS = [
  { id: 'overview', label: '总览' },
  { id: 'prep', label: '调研准备' },
  { id: 'source-architecture', label: '源码与架构' },
  { id: 'design', label: '设计沉淀' },
  { id: 'evidence', label: '证据' },
  { id: 'support', label: '辅助材料' }
];

for (const dir of targetDirs) {
  const researchDir = path.resolve(root, dir);
  if (!fs.existsSync(researchDir)) continue;
  generated.push(buildDashboard(researchDir));
}

buildIndex(generated.filter(Boolean));

function discoverResearchDirs() {
  const researchRoot = path.join(root, 'research');
  if (!fs.existsSync(researchRoot)) return [];
  return fs.readdirSync(researchRoot)
    .map(name => path.join('research', name))
    .filter(dir => fs.statSync(path.join(root, dir)).isDirectory());
}

function buildDashboard(researchDir) {
  const name = path.basename(researchDir);
  const readmePath = path.join(researchDir, 'README.md');
  const readme = fs.existsSync(readmePath) ? fs.readFileSync(readmePath, 'utf8') : '';
  const title = firstHeading(readme) || titleCase(name);
  const status = readField(readme, 'Status') || 'draft';
  const updated = readField(readme, 'Last Updated') || '';
  const summary = sectionText(readme, '调研摘要') || sectionText(readme, '当前结论') || '暂无摘要。';
  const conclusions = bulletSection(readme, '当前结论').slice(0, 5);
  const todos = bulletSection(readme, '待确认').slice(0, 5);
  const inventory = readInventory(path.join(researchDir, 'references', 'source-inventory.json'));
  const docs = documentList(researchDir);
  const outPath = path.join(researchDir, 'dashboard.html');
  const html = renderDashboard({ name, title, status, updated, summary, conclusions, todos, inventory, docs });
  fs.writeFileSync(outPath, html);
  fs.writeFileSync(path.join(researchDir, 'docs.html'), renderDocsViewer({ name, title, docs, researchDir }));
  console.log(`${rel(researchDir)}: wrote dashboard.html`);
  return { name, title, status, updated, summary: shortText(summary, 180), path: rel(outPath), inventory };
}

function buildIndex(items) {
  const outPath = path.join(root, 'research', 'index.html');
  const html = renderIndex(items);
  fs.writeFileSync(outPath, html);
  console.log('research: wrote index.html');
}

function documentList(researchDir) {
  const specs = [
    ['README.md', '总览文档', '调研摘要、当前结论和文件导航', 'overview'],
    ['research-brief.md', '调研简报', '目标、范围、问题和验收标准', 'prep'],
    ['external-research.md', '外部资料', '官方、协作和社区资料', 'prep'],
    ['research-questions.md', '研究问题', '待验证问题和验证状态', 'prep'],
    ['source-map.md', '源码地图', '仓库结构、入口和阅读顺序', 'source-architecture'],
    ['architecture.md', '架构文档', '模块职责、边界和依赖方向', 'source-architecture'],
    ['visual/architecture.html', '可视化架构图', '专门的交互式架构图查看器', 'source-architecture'],
    ['runtime-flows.md', '运行流程', '主链路和关键状态变化', 'source-architecture'],
    ['key-abstractions.md', '核心抽象', '接口、对象和生命周期', 'source-architecture'],
    ['extension-points.md', '扩展点', '插件、Hook、Provider 和 Registry', 'source-architecture'],
    ['design-philosophy.md', '设计思想', '设计取舍和可学习模式', 'design'],
    ['comparison.md', '横向对比', '相邻框架或同类方案对照', 'design'],
    ['adoption-notes.md', '学习借鉴', '可学习、需适配和不建议照搬的设计', 'design'],
    ['visual/evidence.html', '证据查看器', '从架构图回到证据解释', 'evidence'],
    ['evidence-index.md', '证据索引', '关键结论和证据锚点', 'evidence'],
    ['research-review.md', '调研审查', '质量门禁、风险和开放问题', 'support'],
    ['references/source-inventory.json', '源码清单', '机器生成的过程性源码索引', 'support']
  ];
  return specs.map(([file, label, desc, group]) => ({
    file,
    label,
    desc,
    group,
    exists: fs.existsSync(path.join(researchDir, file))
  }));
}

function renderDashboard(data) {
  const readingOrder = [
    'research-brief.md',
    'external-research.md',
    'research-questions.md',
    'source-map.md',
    'architecture.md',
    'visual/architecture.html',
    'runtime-flows.md',
    'design-philosophy.md',
    'evidence-index.md'
  ]
    .map(file => data.docs.find(doc => doc.file === file && doc.exists))
    .filter(Boolean);

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(data.title)} Dashboard</title>
  <style>
    :root {
      color-scheme: light;
      --bg: #f6f8fb;
      --panel: #ffffff;
      --text: #172033;
      --muted: #627089;
      --line: #d9e1ee;
      --accent: #2563eb;
      --accent-soft: #e8f0ff;
      --ok: #0f766e;
      --warn: #a16207;
      --radius: 8px;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.55;
    }
    a { color: var(--accent); text-decoration: none; }
    a:hover { text-decoration: underline; }
    .layout { display: grid; grid-template-columns: 280px minmax(0, 1fr); min-height: 100vh; }
    aside {
      border-right: 1px solid var(--line);
      background: #fff;
      padding: 18px 14px;
      position: sticky;
      top: 0;
      height: 100vh;
      overflow: auto;
    }
    main { padding: 28px 30px 56px; }
    .brand { font-weight: 800; margin-bottom: 4px; }
    .sub { color: var(--muted); font-size: 13px; margin-bottom: 18px; }
    .nav-group { margin: 15px 0 4px; }
    .nav-group-title {
      color: #7a879c;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0;
      margin: 0 0 5px;
    }
    .nav-link {
      display: block;
      padding: 8px 9px;
      border-radius: 6px;
      color: #33415c;
      font-size: 14px;
      margin-bottom: 3px;
    }
    .nav-link.active { background: #e8f0ff; color: #1d4ed8; font-weight: 700; }
    .nav-link.disabled { color: #a0aabc; pointer-events: none; background: #f8fafc; }
    .hero {
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      padding: 24px;
      box-shadow: 0 14px 36px rgba(23, 32, 51, 0.06);
    }
    .eyebrow { color: var(--muted); font-size: 13px; margin-bottom: 8px; }
    h1 { margin: 0 0 10px; font-size: 30px; line-height: 1.2; letter-spacing: 0; }
    h2 { margin: 28px 0 14px; font-size: 18px; letter-spacing: 0; }
    .summary { max-width: 920px; color: #33415c; white-space: pre-wrap; }
    .meta {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 12px;
      margin-top: 18px;
    }
    .metric {
      border: 1px solid var(--line);
      border-radius: var(--radius);
      background: #fbfdff;
      padding: 12px;
      min-height: 76px;
    }
    .metric .label { color: var(--muted); font-size: 12px; }
    .metric .value { margin-top: 4px; font-size: 18px; font-weight: 700; overflow-wrap: anywhere; }
    .columns { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .panel {
      border: 1px solid var(--line);
      border-radius: var(--radius);
      background: var(--panel);
      padding: 16px;
    }
    .reading-list {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 8px;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .reading-list a {
      display: block;
      border: 1px solid var(--line);
      border-radius: 6px;
      padding: 9px 10px;
      background: #fbfdff;
      font-weight: 700;
    }
    .reading-list span {
      display: block;
      color: var(--muted);
      font-size: 12px;
      font-weight: 400;
      margin-top: 3px;
    }
    ul { margin: 0; padding-left: 20px; }
    li { margin: 8px 0; color: #33415c; }
    .footer { margin-top: 28px; color: var(--muted); font-size: 13px; }
    @media (max-width: 900px) {
      .layout { grid-template-columns: 1fr; }
      aside { position: static; height: auto; border-right: 0; border-bottom: 1px solid var(--line); }
      main { padding: 18px 14px 36px; }
      .meta, .columns, .reading-list { grid-template-columns: 1fr; }
      h1 { font-size: 24px; }
    }
  </style>
</head>
<body>
  <div class="layout">
    ${renderSideNav({ title: data.title, subtitle: '调研导航', docs: data.docs, currentFile: 'dashboard.html' })}
  <main>
    <section class="hero">
      <div class="eyebrow">Tech Research Dashboard · ${escapeHtml(data.name)}</div>
      <h1>${escapeHtml(data.title)}</h1>
      <div class="summary">${escapeHtml(shortText(data.summary, 700))}</div>
      <div class="meta">
        <div class="metric"><div class="label">状态</div><div class="value">${escapeHtml(data.status)}</div></div>
        <div class="metric"><div class="label">更新日期</div><div class="value">${escapeHtml(data.updated || '未记录')}</div></div>
        <div class="metric"><div class="label">源码文件</div><div class="value">${escapeHtml(formatCount(data.inventory.fileCount))}</div></div>
        <div class="metric"><div class="label">主要语言</div><div class="value">${escapeHtml(data.inventory.primaryLanguage || '未生成')}</div></div>
      </div>
    </section>

    <h2>建议阅读顺序</h2>
    <section class="panel">
      <ol class="reading-list">
        ${readingOrder.map(doc => `<li><a href="${escapeAttr(docHref(doc.file))}">${escapeHtml(doc.label)}<span>${escapeHtml(doc.desc)}</span></a></li>`).join('\n')}
      </ol>
    </section>

    <h2>当前结论与待确认</h2>
    <section class="columns">
      <div class="panel">
        <h2 style="margin-top:0">当前结论</h2>
        ${renderList(data.conclusions, 'README.md 中暂未提取到当前结论。')}
      </div>
      <div class="panel">
        <h2 style="margin-top:0">待确认</h2>
        ${renderList(data.todos, 'README.md 中暂未提取到待确认项。')}
      </div>
    </section>

    <div class="footer">Dashboard 只做阅读导航。Markdown 是知识源，visual/architecture.html 是“源码与架构”下的专门架构图查看器，references/ 放机器生成或过程性材料。</div>
  </main>
  </div>
</body>
</html>
`;
}

function renderIndex(items) {
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Tech Research Dashboard</title>
  <style>
    body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif; background: #f6f8fb; color: #172033; }
    a { color: #2563eb; text-decoration: none; }
    a:hover { text-decoration: underline; }
    main { max-width: 1120px; margin: 0 auto; padding: 36px 20px 56px; }
    h1 { margin: 0 0 10px; font-size: 32px; letter-spacing: 0; }
    .intro { color: #627089; max-width: 760px; }
    .grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; margin-top: 28px; }
    .card { background: #fff; border: 1px solid #d9e1ee; border-radius: 8px; padding: 16px; min-height: 170px; box-shadow: 0 10px 28px rgba(23, 32, 51, 0.05); }
    .title { font-weight: 800; font-size: 17px; margin-bottom: 8px; }
    .summary { color: #47556e; font-size: 13px; line-height: 1.55; min-height: 62px; }
    .meta { margin-top: 12px; color: #627089; font-size: 12px; }
    .actions { display: flex; gap: 10px; margin-top: 14px; flex-wrap: wrap; }
    .button { border: 1px solid #d9e1ee; border-radius: 6px; padding: 6px 10px; font-weight: 700; font-size: 13px; }
    @media (max-width: 900px) { .grid { grid-template-columns: 1fr; } h1 { font-size: 25px; } }
  </style>
</head>
<body>
  <main>
    <h1>Tech Research Dashboard</h1>
    <div class="intro">这里是 research 目录的统一入口。每个框架的 Dashboard 负责导航 Markdown 调研文档、可视化架构图、证据查看器和 references 辅助材料。</div>
    <section class="grid">
      ${items.map(renderIndexCard).join('\n')}
    </section>
  </main>
</body>
</html>
`;
}

function renderSideNav({ title, subtitle, docs, currentFile = '' }) {
  const overviewItems = [
    {
      file: 'dashboard.html',
      label: 'Dashboard',
      desc: '调研摘要和阅读入口',
      group: 'overview',
      exists: true
    },
    ...docs.filter(doc => doc.group === 'overview')
  ];
  const docsByGroup = new Map(NAV_GROUPS.map(group => [group.id, []]));
  docsByGroup.set('overview', overviewItems);
  for (const doc of docs) {
    if (doc.group === 'overview') continue;
    if (!docsByGroup.has(doc.group)) docsByGroup.set(doc.group, []);
    docsByGroup.get(doc.group).push(doc);
  }

  return `<aside>
      <div class="brand">${escapeHtml(title)}</div>
      <div class="sub">${escapeHtml(subtitle)}</div>
      ${NAV_GROUPS.map(group => {
        const items = docsByGroup.get(group.id) || [];
        if (!items.length) return '';
        return `<div class="nav-group">
        <div class="nav-group-title">${escapeHtml(group.label)}</div>
        ${items.map(item => renderNavLink(item, currentFile)).join('\n')}
      </div>`;
      }).join('\n')}
    </aside>`;
}

function renderNavLink(item, currentFile) {
  const active = item.file === currentFile ? ' active' : '';
  const disabled = item.exists ? '' : ' disabled';
  const href = item.exists ? docHref(item.file) : '#';
  return `<a class="nav-link${active}${disabled}" data-nav-file="${escapeAttr(item.file)}" href="${escapeAttr(href)}" title="${escapeAttr(item.desc)}">${escapeHtml(item.label)}</a>`;
}

function docHref(file) {
  if (file === 'dashboard.html') return './dashboard.html';
  if (file.endsWith('.md') || file.endsWith('.json')) {
    return `./docs.html?doc=${encodeURIComponent(file)}`;
  }
  return `./${file}`;
}

function renderIndexCard(item) {
  return `<article class="card">
  <div class="title">${escapeHtml(item.title)}</div>
  <div class="summary">${escapeHtml(item.summary || '暂无摘要。')}</div>
  <div class="meta">Status: ${escapeHtml(item.status || 'draft')} · Updated: ${escapeHtml(item.updated || '未记录')} · Files: ${escapeHtml(formatCount(item.inventory.fileCount))}</div>
  <div class="actions">
    <a class="button" href="./${escapeAttr(item.name)}/dashboard.html">Dashboard</a>
  </div>
</article>`;
}

function renderList(items, emptyText) {
  if (!items.length) return `<p style="color:#627089">${escapeHtml(emptyText)}</p>`;
  return `<ul>${items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
}

function renderDocsViewer(data) {
  const readableDocs = data.docs
    .filter(doc => doc.exists && (doc.file.endsWith('.md') || doc.file.endsWith('.json')))
    .map(doc => ({
      ...doc,
      content: fs.readFileSync(path.join(data.researchDir, doc.file), 'utf8')
    }));
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(data.title)} Docs</title>
  <style>
    :root {
      color-scheme: light;
      --bg: #f6f8fb;
      --panel: #ffffff;
      --text: #172033;
      --muted: #627089;
      --line: #d9e1ee;
      --accent: #2563eb;
      --code: #f3f6fb;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.65;
    }
    a { color: var(--accent); text-decoration: none; }
    a:hover { text-decoration: underline; }
    .layout { display: grid; grid-template-columns: 280px minmax(0, 1fr); min-height: 100vh; }
    aside {
      border-right: 1px solid var(--line);
      background: #fff;
      padding: 18px 14px;
      position: sticky;
      top: 0;
      height: 100vh;
      overflow: auto;
    }
    main { padding: 28px 30px 56px; }
    .brand { font-weight: 800; margin-bottom: 4px; }
    .sub { color: var(--muted); font-size: 13px; margin-bottom: 18px; }
    .nav-group { margin: 15px 0 4px; }
    .nav-group-title {
      color: #7a879c;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0;
      margin: 0 0 5px;
    }
    .nav-link {
      display: block;
      padding: 8px 9px;
      border-radius: 6px;
      color: #33415c;
      font-size: 14px;
      margin-bottom: 3px;
    }
    .nav-link.active { background: #e8f0ff; color: #1d4ed8; font-weight: 700; }
    .nav-link.disabled { color: #a0aabc; pointer-events: none; background: #f8fafc; }
    .doc {
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 28px;
      max-width: 1120px;
      box-shadow: 0 14px 36px rgba(23, 32, 51, 0.05);
    }
    h1, h2, h3, h4 { line-height: 1.28; letter-spacing: 0; }
    h1 { font-size: 30px; margin: 0 0 20px; }
    h2 { font-size: 22px; margin: 30px 0 14px; padding-top: 8px; border-top: 1px solid #edf1f7; }
    h3 { font-size: 18px; margin: 22px 0 10px; }
    h4 { font-size: 16px; margin: 18px 0 8px; }
    p { margin: 10px 0; color: #33415c; }
    ul, ol { padding-left: 24px; }
    li { margin: 6px 0; color: #33415c; }
    code {
      background: var(--code);
      border: 1px solid #e2e8f0;
      border-radius: 5px;
      padding: 1px 5px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: 0.92em;
    }
    pre {
      background: #0f172a;
      color: #e5e7eb;
      border-radius: 8px;
      padding: 14px;
      overflow: auto;
      line-height: 1.5;
    }
    pre code { background: transparent; border: 0; padding: 0; color: inherit; }
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 14px 0;
      font-size: 14px;
    }
    th, td {
      border: 1px solid #d9e1ee;
      padding: 8px 10px;
      vertical-align: top;
      text-align: left;
    }
    th { background: #f3f6fb; }
    blockquote {
      margin: 12px 0;
      padding: 8px 14px;
      border-left: 4px solid #c7d2fe;
      background: #f8faff;
      color: #47556e;
    }
    .missing { color: var(--muted); }
    @media (max-width: 900px) {
      .layout { grid-template-columns: 1fr; }
      aside { position: static; height: auto; border-right: 0; border-bottom: 1px solid var(--line); }
      main { padding: 18px 14px 36px; }
      .doc { padding: 18px; }
    }
  </style>
</head>
<body>
  <div class="layout">
    ${renderSideNav({ title: data.title, subtitle: '调研导航', docs: data.docs })}
    <main>
      <article id="doc" class="doc"></article>
    </main>
  </div>
  <script>
    window.RESEARCH_DOCS = ${safeScriptJson(readableDocs.map(doc => ({
      file: doc.file,
      label: doc.label,
      content: doc.content
    })))};
    const docs = new Map(window.RESEARCH_DOCS.map(doc => [doc.file, doc]));
    const params = new URLSearchParams(window.location.search);
    const requested = params.get('doc') || 'README.md';
    const current = docs.get(requested) || window.RESEARCH_DOCS[0];
    const container = document.getElementById('doc');
    document.querySelectorAll('[data-nav-file]').forEach(link => {
      if (current && link.dataset.navFile === current.file) link.classList.add('active');
    });
    if (!current) {
      container.innerHTML = '<p class="missing">没有可展示的文档。</p>';
    } else {
      container.innerHTML = renderDocument(current);
      if (window.location.hash) {
        const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
        if (target) target.scrollIntoView();
      }
    }

    function renderDocument(doc) {
      if (doc.file.endsWith('.json')) {
        return '<h1>' + escapeHtml(doc.label) + '</h1><pre><code>' + escapeHtml(formatJson(doc.content)) + '</code></pre>';
      }
      return renderMarkdown(doc.content);
    }

    function renderMarkdown(markdown) {
      const lines = markdown.replace(/\\r\\n/g, '\\n').split('\\n');
      const out = [];
      let i = 0;
      while (i < lines.length) {
        const line = lines[i];
        if (!line.trim()) { i += 1; continue; }
        const fence = line.match(/^\\s*\\x60\\x60\\x60(.*)$/);
        if (fence) {
          const code = [];
          i += 1;
          while (i < lines.length && !/^\\s*\\x60\\x60\\x60/.test(lines[i])) {
            code.push(lines[i]);
            i += 1;
          }
          i += 1;
          out.push('<pre><code>' + escapeHtml(code.join('\\n')) + '</code></pre>');
          continue;
        }
        const heading = line.match(/^(#{1,4})\\s+(.+)$/);
        if (heading) {
          const level = heading[1].length;
          const text = stripAnchorText(heading[2]);
          const id = heading[2].match(/<a\\s+id="([^"]+)"><\\/a>/) || [];
          const headingId = id[1] || slug(text);
          out.push('<h' + level + ' id="' + escapeAttr(headingId) + '">' + inline(heading[2]) + '</h' + level + '>');
          i += 1;
          continue;
        }
        if (isTableStart(lines, i)) {
          const tableLines = [];
          while (i < lines.length && /^\\s*\\|/.test(lines[i])) {
            tableLines.push(lines[i]);
            i += 1;
          }
          out.push(renderTable(tableLines));
          continue;
        }
        if (/^\\s*[-*]\\s+/.test(line)) {
          const items = [];
          while (i < lines.length && /^\\s*[-*]\\s+/.test(lines[i])) {
            items.push(lines[i].replace(/^\\s*[-*]\\s+/, ''));
            i += 1;
          }
          out.push('<ul>' + items.map(item => '<li>' + inline(item) + '</li>').join('') + '</ul>');
          continue;
        }
        if (/^\\s*\\d+\\.\\s+/.test(line)) {
          const items = [];
          while (i < lines.length && /^\\s*\\d+\\.\\s+/.test(lines[i])) {
            items.push(lines[i].replace(/^\\s*\\d+\\.\\s+/, ''));
            i += 1;
          }
          out.push('<ol>' + items.map(item => '<li>' + inline(item) + '</li>').join('') + '</ol>');
          continue;
        }
        if (/^>\\s?/.test(line)) {
          const quote = [];
          while (i < lines.length && /^>\\s?/.test(lines[i])) {
            quote.push(lines[i].replace(/^>\\s?/, ''));
            i += 1;
          }
          out.push('<blockquote>' + quote.map(inline).join('<br>') + '</blockquote>');
          continue;
        }
        const para = [];
        while (i < lines.length && lines[i].trim() && !isBlockStart(lines, i)) {
          para.push(lines[i]);
          i += 1;
        }
        out.push('<p>' + inline(para.join(' ')) + '</p>');
      }
      return out.join('\\n');
    }

    function isBlockStart(lines, idx) {
      const line = lines[idx] || '';
      return /^\\s*\\x60\\x60\\x60/.test(line) || /^(#{1,4})\\s+/.test(line) || /^\\s*\\|/.test(line) || /^\\s*[-*]\\s+/.test(line) || /^\\s*\\d+\\.\\s+/.test(line) || /^>\\s?/.test(line);
    }

    function isTableStart(lines, idx) {
      return /^\\s*\\|/.test(lines[idx] || '') && idx + 1 < lines.length && /^\\s*\\|?\\s*:?-{3,}:?\\s*(\\|\\s*:?-{3,}:?\\s*)+\\|?\\s*$/.test(lines[idx + 1] || '');
    }

    function renderTable(tableLines) {
      const rows = tableLines.filter((_, idx) => idx !== 1).map(splitRow);
      if (!rows.length) return '';
      const header = rows[0].map(cell => '<th>' + inline(cell) + '</th>').join('');
      const body = rows.slice(1).map(row => '<tr>' + row.map(cell => '<td>' + inline(cell) + '</td>').join('') + '</tr>').join('');
      return '<table><thead><tr>' + header + '</tr></thead><tbody>' + body + '</tbody></table>';
    }

    function splitRow(row) {
      let value = row.trim();
      if (value.startsWith('|')) value = value.slice(1);
      if (value.endsWith('|')) value = value.slice(0, -1);
      return value.split('|').map(cell => cell.trim());
    }

    function inline(value) {
      let html = escapeHtml(value);
      html = html.replace(/&lt;a\\s+id=&quot;([^&]+)&quot;&gt;&lt;\\/a&gt;/g, '<a id="$1"></a>');
      html = html.replace(/\\[([^\\]]+)\\]\\(([^)]+)\\)/g, (_, text, href) => '<a href="' + escapeAttr(rewriteHref(href)) + '">' + escapeHtml(text) + '</a>');
      html = html.replace(/\\x60([^\\x60]+)\\x60/g, '<code>$1</code>');
      html = html.replace(/\\*\\*([^*]+)\\*\\*/g, '<strong>$1</strong>');
      return html;
    }

    function rewriteHref(href) {
      if (/^(https?:|mailto:|#)/.test(href)) return href;
      const hashIndex = href.indexOf('#');
      const hash = hashIndex >= 0 ? href.slice(hashIndex) : '';
      const clean = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
      if (docs.has(clean)) return './docs.html?doc=' + encodeURIComponent(clean) + hash;
      return href;
    }

    function stripAnchorText(value) {
      return value.replace(/<a\\s+id="[^"]+"><\\/a>/g, '').replace(new RegExp('[#\\\\x60*_]', 'g'), '').trim();
    }

    function slug(value) {
      return stripAnchorText(value).toLowerCase().replace(/\\s+/g, '-').replace(/[^\\w\\u4e00-\\u9fa5-]/g, '');
    }

    function formatJson(value) {
      try { return JSON.stringify(JSON.parse(value), null, 2); } catch { return value; }
    }

    function escapeHtml(value) {
      return String(value || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    function escapeAttr(value) {
      return escapeHtml(value).replace(new RegExp('\\\\x60', 'g'), '&#96;');
    }
  </script>
</body>
</html>`;
}

function readInventory(file) {
  try {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    const primary = Array.isArray(data.languages) && data.languages[0] ? data.languages[0].language : '';
    return { fileCount: data.fileCount || 0, primaryLanguage: primary };
  } catch {
    return { fileCount: 0, primaryLanguage: '' };
  }
}

function firstHeading(md) {
  const match = md.match(/^#\s+(.+)$/m);
  return match ? stripMarkdown(match[1]).trim() : '';
}

function readField(md, field) {
  const match = md.match(new RegExp(`^${field}:\\s*(.+)$`, 'm'));
  return match ? match[1].trim() : '';
}

function sectionText(md, title) {
  const section = readSection(md, title);
  return stripMarkdown(section).trim();
}

function bulletSection(md, title) {
  return readSection(md, title)
    .split(/\r?\n/)
    .map(line => line.match(/^\s*[-*]\s+(.+)$/))
    .filter(Boolean)
    .map(match => stripMarkdown(match[1]).trim())
    .filter(Boolean);
}

function readSection(md, title) {
  const lines = String(md || '').split(/\r?\n/);
  const header = `## ${title}`;
  const start = lines.findIndex(line => line.trim() === header);
  if (start < 0) return '';
  const out = [];
  for (let i = start + 1; i < lines.length; i += 1) {
    if (/^##\s+/.test(lines[i])) break;
    out.push(lines[i]);
  }
  return out.join('\n').trim();
}

function stripMarkdown(value) {
  return String(value || '')
    .replace(/\[[^\]]+\]\([^)]+\)/g, match => match.replace(/^\[([^\]]+)\].*$/, '$1'))
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/^\s{0,3}#+\s*/gm, '')
    .replace(/\[([^\]]+)\]\[[^\]]+\]/g, '$1')
    .replace(/\s+\n/g, '\n')
    .trim();
}

function shortText(value, limit) {
  const text = String(value || '').replace(/\s+/g, ' ').trim();
  if (text.length <= limit) return text;
  return `${text.slice(0, limit - 1)}...`;
}

function formatCount(value) {
  const n = Number(value || 0);
  return n ? String(n) : '未生成';
}

function safeScriptJson(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026');
}

function titleCase(name) {
  return name.split(/[-_]/).map(part => part ? part[0].toUpperCase() + part.slice(1) : part).join(' ');
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, '&#96;');
}

function rel(value) {
  return path.relative(root, value) || '.';
}
