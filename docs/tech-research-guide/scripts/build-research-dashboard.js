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
    ['README.md', '总览', '调研摘要、当前结论和文件导航', 'primary'],
    ['research-brief.md', '调研简报', '目标、范围、问题和验收标准', 'plan'],
    ['external-research.md', '外部资料', '官方、协作和社区资料', 'research'],
    ['research-questions.md', '研究问题', '待验证问题和验证状态', 'research'],
    ['source-map.md', '源码地图', '仓库结构、入口和阅读顺序', 'source'],
    ['architecture.md', '架构文档', '模块职责、边界和依赖方向', 'architecture'],
    ['runtime-flows.md', '运行流程', '主链路和关键状态变化', 'flow'],
    ['key-abstractions.md', '核心抽象', '接口、对象和生命周期', 'architecture'],
    ['extension-points.md', '扩展点', '插件、Hook、Provider 和 Registry', 'extension'],
    ['design-philosophy.md', '设计思想', '设计取舍和可学习模式', 'thinking'],
    ['comparison.md', '横向对比', '相邻框架或同类方案对照', 'compare'],
    ['adoption-notes.md', '学习借鉴', '可学习、需适配和不建议照搬的设计', 'adoption'],
    ['evidence-index.md', '证据索引', '关键结论和证据锚点', 'evidence'],
    ['research-review.md', '调研审查', '质量门禁、风险和开放问题', 'review'],
    ['visual/architecture.html', '可视化架构图', '专门的交互式架构图查看器', 'visual'],
    ['visual/evidence.html', '证据查看器', '从架构图回到证据解释', 'visual'],
    ['references/source-inventory.json', '源码清单', '机器生成的过程性源码索引', 'reference']
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
  const mainDocs = data.docs.filter(doc => doc.group !== 'reference');
  const referenceDocs = data.docs.filter(doc => doc.group === 'reference');
  const actionLinks = [
    linkButton('README', './docs.html?doc=README.md', true),
    linkButton('架构图', './visual/architecture.html', exists(data.docs, 'visual/architecture.html')),
    linkButton('证据查看器', './visual/evidence.html', exists(data.docs, 'visual/evidence.html')),
    linkButton('证据索引', './docs.html?doc=evidence-index.md', exists(data.docs, 'evidence-index.md'))
  ].join('');

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
    .shell { max-width: 1180px; margin: 0 auto; padding: 32px 20px 52px; }
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
    .actions { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 18px; }
    .button {
      display: inline-flex;
      align-items: center;
      min-height: 36px;
      padding: 7px 12px;
      border-radius: 6px;
      border: 1px solid var(--line);
      background: #fff;
      color: var(--text);
      font-weight: 600;
      font-size: 14px;
    }
    .button.primary { background: var(--accent); color: #fff; border-color: var(--accent); }
    .button.disabled { color: #9aa6b8; pointer-events: none; background: #f2f5f9; }
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
    .grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
    }
    .doc {
      min-height: 116px;
      border: 1px solid var(--line);
      border-radius: var(--radius);
      background: var(--panel);
      padding: 14px;
    }
    .doc.missing { opacity: 0.58; background: #f8fafc; }
    .doc-title { display: flex; justify-content: space-between; gap: 8px; font-weight: 700; }
    .doc-desc { margin-top: 8px; color: var(--muted); font-size: 13px; }
    .tag { color: var(--ok); background: #e9f7f4; border-radius: 999px; padding: 2px 8px; font-size: 12px; white-space: nowrap; }
    .missing .tag { color: var(--warn); background: #fff7df; }
    .columns { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .panel {
      border: 1px solid var(--line);
      border-radius: var(--radius);
      background: var(--panel);
      padding: 16px;
    }
    ul { margin: 0; padding-left: 20px; }
    li { margin: 8px 0; color: #33415c; }
    .footer { margin-top: 28px; color: var(--muted); font-size: 13px; }
    @media (max-width: 900px) {
      .meta, .grid, .columns { grid-template-columns: 1fr; }
      h1 { font-size: 24px; }
    }
  </style>
</head>
<body>
  <main class="shell">
    <section class="hero">
      <div class="eyebrow">Tech Research Dashboard · ${escapeHtml(data.name)}</div>
      <h1>${escapeHtml(data.title)}</h1>
      <div class="summary">${escapeHtml(shortText(data.summary, 700))}</div>
      <div class="actions">${actionLinks}</div>
      <div class="meta">
        <div class="metric"><div class="label">状态</div><div class="value">${escapeHtml(data.status)}</div></div>
        <div class="metric"><div class="label">更新日期</div><div class="value">${escapeHtml(data.updated || '未记录')}</div></div>
        <div class="metric"><div class="label">源码文件</div><div class="value">${escapeHtml(formatCount(data.inventory.fileCount))}</div></div>
        <div class="metric"><div class="label">主要语言</div><div class="value">${escapeHtml(data.inventory.primaryLanguage || '未生成')}</div></div>
      </div>
    </section>

    <h2>推荐阅读入口</h2>
    <section class="grid">
      ${mainDocs.map(renderDocCard).join('\n')}
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

    <h2>辅助材料</h2>
    <section class="grid">
      ${referenceDocs.map(renderDocCard).join('\n')}
    </section>

    <div class="footer">Dashboard 只做阅读导航。Markdown 是知识源，visual/architecture.html 是专门的架构图查看器，references/ 放机器生成或过程性材料。</div>
  </main>
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

function renderDocCard(doc) {
  const tag = doc.exists ? '已生成' : '缺失';
  const href = doc.exists ? docHref(doc.file) : '#';
  const cls = doc.exists ? 'doc' : 'doc missing';
  return `<article class="${cls}">
  <div class="doc-title"><a href="${escapeAttr(href)}">${escapeHtml(doc.label)}</a><span class="tag">${tag}</span></div>
  <div class="doc-desc">${escapeHtml(doc.desc)}</div>
  <div class="doc-desc">${escapeHtml(doc.file)}</div>
</article>`;
}

function docHref(file) {
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

function linkButton(label, href, enabled) {
  const cls = enabled ? (label === '架构图' ? 'button primary' : 'button') : 'button disabled';
  return `<a class="${cls}" href="${enabled ? escapeAttr(href) : '#'}">${escapeHtml(label)}</a>`;
}

function exists(docs, file) {
  return docs.some(doc => doc.file === file && doc.exists);
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
    .layout { display: grid; grid-template-columns: 270px minmax(0, 1fr); min-height: 100vh; }
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
    .nav-link {
      display: block;
      padding: 8px 9px;
      border-radius: 6px;
      color: #33415c;
      font-size: 14px;
      margin-bottom: 3px;
    }
    .nav-link.active { background: #e8f0ff; color: #1d4ed8; font-weight: 700; }
    .toolbar {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      align-items: center;
      margin-bottom: 14px;
    }
    .button {
      display: inline-flex;
      align-items: center;
      min-height: 34px;
      padding: 6px 10px;
      border: 1px solid var(--line);
      border-radius: 6px;
      background: #fff;
      color: var(--text);
      font-weight: 650;
      font-size: 13px;
    }
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
    <aside>
      <div class="brand">${escapeHtml(data.title)}</div>
      <div class="sub">Markdown 文档阅读器</div>
      <a class="nav-link" href="./dashboard.html">返回 Dashboard</a>
      ${readableDocs.map(doc => `<a class="nav-link" data-doc="${escapeAttr(doc.file)}" href="?doc=${encodeURIComponent(doc.file)}">${escapeHtml(doc.label)}</a>`).join('\n')}
    </aside>
    <main>
      <div class="toolbar">
        <a class="button" href="./dashboard.html">Dashboard</a>
        <a class="button" href="./visual/architecture.html">架构图</a>
        <a class="button" href="./visual/evidence.html">证据查看器</a>
      </div>
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
    document.querySelectorAll('[data-doc]').forEach(link => {
      if (current && link.dataset.doc === current.file) link.classList.add('active');
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
