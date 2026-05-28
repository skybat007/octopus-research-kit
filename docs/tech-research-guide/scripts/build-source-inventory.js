#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { sanitizePersonalPaths } = require('./privacy-utils');

const root = process.cwd();
const { args, sourceRoot } = parseArgs(process.argv.slice(2).filter(arg => arg !== '--help'));

if (process.argv.includes('--help')) {
  console.log('Usage: node docs/tech-research-guide/scripts/build-source-inventory.js [research/<name> ...] [--source-root /absolute/path]');
  process.exit(0);
}

const targetDirs = args.length ? args : discoverResearchDirs();
let failures = 0;

if (sourceRoot && targetDirs.length !== 1) {
  console.error('--source-root can only be used with one research directory.');
  process.exit(1);
}

for (const dir of targetDirs) {
  try {
    buildForDir(path.resolve(root, dir), { sourceRoot });
  } catch (error) {
    failures += 1;
    console.error(`${dir}: ${error.message}`);
  }
}

if (failures) process.exitCode = 1;

function parseArgs(rawArgs) {
  const args = [];
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
    args.push(arg);
  }
  return { args, sourceRoot };
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
  const md = fs.existsSync(evidencePath) ? fs.readFileSync(evidencePath, 'utf8') : '';
  const projectRoot = options.sourceRoot || readTableValue(md, 'Local source path') || readTableValue(md, 'Source root');
  const remoteHint = readTableValue(md, 'Code source') || readTableValue(md, 'remote');
  const versionHint = readTableValue(md, 'branch/tag/commit');
  const researchName = path.basename(researchDir);
  const referencesDir = path.join(researchDir, 'references');
  const outPath = path.join(referencesDir, 'source-inventory.json');
  fs.mkdirSync(referencesDir, { recursive: true });

  if (!projectRoot || !fs.existsSync(projectRoot)) {
    const inventory = {
      schemaVersion: 1,
      generatedAt: new Date().toISOString(),
      researchName,
      researchDir: rel(researchDir),
      status: 'missing-project-root',
      projectRoot: sanitizePersonalPaths(projectRoot || ''),
      remote: remoteHint || '',
      versionHint: versionHint || '',
      message: 'No readable local project root was found in evidence-index.md.'
    };
    fs.writeFileSync(outPath, `${JSON.stringify(inventory, null, 2)}\n`);
    console.log(`${rel(researchDir)}: wrote references/source-inventory.json (missing project root)`);
    return;
  }

  const gitRoot = git(projectRoot, ['rev-parse', '--show-toplevel']) || projectRoot;
  const files = listFiles(gitRoot);
  const packageData = collectPackageData(gitRoot, files);
  const inventory = {
    schemaVersion: 1,
    generatedAt: new Date().toISOString(),
    researchName,
    researchDir: rel(researchDir),
    status: 'ok',
    projectRoot: sanitizePersonalPaths(gitRoot),
    remote: git(gitRoot, ['remote', 'get-url', 'origin']) || remoteHint || '',
    branch: git(gitRoot, ['branch', '--show-current']) || '',
    commit: git(gitRoot, ['rev-parse', 'HEAD']) || '',
    versionHint: versionHint || '',
    fileCount: files.length,
    languages: languageSummary(files),
    topLevel: topLevelSummary(files),
    buildFiles: pickPaths(files, isBuildFile, 80),
    packageFiles: pickPaths(files, isPackageFile, 80),
    entryCandidates: entryCandidates(files, packageData),
    testFiles: pickPaths(files, isTestFile, 120),
    exampleFiles: pickPaths(files, isExampleFile, 120),
    docsFiles: pickPaths(files, isDocsFile, 120),
    configFiles: pickPaths(files, isConfigFile, 120),
    largeFiles: largeFiles(gitRoot, files),
    notes: [
      'This inventory is a deterministic source-reading aid, not an architecture conclusion.',
      'Use source-map.md and evidence-index.md for interpreted research conclusions.'
    ]
  };

  fs.writeFileSync(outPath, `${JSON.stringify(inventory, null, 2)}\n`);
  console.log(`${rel(researchDir)}: ${files.length} files indexed`);
}

function readTableValue(md, key) {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = md.match(new RegExp(`\\|\\s*${escaped}\\s*\\|\\s*([^|\\n]+?)\\s*\\|`));
  if (!match) return '';
  return cleanCell(match[1]);
}

function cleanCell(value) {
  return String(value || '')
    .replace(/`/g, '')
    .replace(/<br\s*\/?>/gi, ' ')
    .trim();
}

function git(cwd, args) {
  try {
    return execFileSync('git', args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return '';
  }
}

function listFiles(projectRoot) {
  const gitFiles = gitFilesList(projectRoot);
  if (gitFiles.length) return gitFiles;
  const out = [];
  walk(projectRoot, '', out);
  return out.sort();
}

function gitFilesList(projectRoot) {
  try {
    const output = execFileSync('git', ['ls-files', '-co', '--exclude-standard', '-z'], {
      cwd: projectRoot,
      encoding: 'buffer',
      stdio: ['ignore', 'pipe', 'ignore']
    });
    return output.toString('utf8').split('\0').filter(Boolean).sort();
  } catch {
    return [];
  }
}

function walk(base, relDir, out) {
  const dir = path.join(base, relDir);
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const relPath = path.posix.join(relDir.split(path.sep).join(path.posix.sep), entry.name);
    if (entry.isDirectory()) {
      if (shouldSkipDir(entry.name)) continue;
      walk(base, relPath, out);
      continue;
    }
    if (entry.isFile()) out.push(relPath);
  }
}

function shouldSkipDir(name) {
  return new Set([
    '.git',
    '.idea',
    '.vscode',
    'node_modules',
    'dist',
    'build',
    'target',
    '.next',
    '.nuxt',
    '.cache',
    'coverage',
    '__pycache__',
    '.venv',
    'venv'
  ]).has(name);
}

function languageSummary(files) {
  const counts = new Map();
  for (const file of files) {
    const lang = languageFor(file);
    counts.set(lang, (counts.get(lang) || 0) + 1);
  }
  return [...counts.entries()]
    .map(([language, count]) => ({ language, count }))
    .sort((a, b) => b.count - a.count || a.language.localeCompare(b.language));
}

function languageFor(file) {
  const base = path.basename(file).toLowerCase();
  const ext = path.extname(base).toLowerCase();
  if (['makefile', 'dockerfile'].includes(base)) return base;
  const map = {
    '.ts': 'TypeScript',
    '.tsx': 'TypeScript React',
    '.js': 'JavaScript',
    '.jsx': 'JavaScript React',
    '.mjs': 'JavaScript',
    '.cjs': 'JavaScript',
    '.py': 'Python',
    '.java': 'Java',
    '.kt': 'Kotlin',
    '.go': 'Go',
    '.rs': 'Rust',
    '.rb': 'Ruby',
    '.php': 'PHP',
    '.cs': 'C#',
    '.cpp': 'C++',
    '.cc': 'C++',
    '.c': 'C',
    '.h': 'C/C++ Header',
    '.md': 'Markdown',
    '.mdx': 'MDX',
    '.json': 'JSON',
    '.yaml': 'YAML',
    '.yml': 'YAML',
    '.toml': 'TOML',
    '.xml': 'XML',
    '.html': 'HTML',
    '.css': 'CSS',
    '.scss': 'SCSS',
    '.sh': 'Shell',
    '.sql': 'SQL'
  };
  return map[ext] || (ext ? ext.slice(1).toUpperCase() : 'Other');
}

function topLevelSummary(files) {
  const map = new Map();
  for (const file of files) {
    const key = file.includes('/') ? file.split('/')[0] : '.';
    if (!map.has(key)) map.set(key, { path: key, fileCount: 0, samples: [] });
    const item = map.get(key);
    item.fileCount += 1;
    if (item.samples.length < 8) item.samples.push(file);
  }
  return [...map.values()].sort((a, b) => b.fileCount - a.fileCount || a.path.localeCompare(b.path));
}

function pickPaths(files, predicate, limit) {
  return files.filter(predicate).slice(0, limit);
}

function isBuildFile(file) {
  const base = path.basename(file);
  return /^(package-lock|pnpm-lock|yarn.lock|package|pnpm-workspace|pom|build\.gradle|settings\.gradle|Cargo|go|pyproject|setup|requirements|Makefile|Dockerfile)/.test(base)
    || /(^|\/)(vite|webpack|rollup|tsup|turbo|nx|babel|jest|vitest|pytest|maven|gradle)\.config\./.test(file);
}

function isPackageFile(file) {
  const base = path.basename(file);
  return ['package.json', 'pyproject.toml', 'setup.py', 'setup.cfg', 'Cargo.toml', 'go.mod', 'pom.xml', 'build.gradle', 'requirements.txt'].includes(base);
}

function isTestFile(file) {
  return /(^|\/)(test|tests|__tests__|spec|specs)\//i.test(file)
    || /\.(test|spec)\.(ts|tsx|js|jsx|mjs|py|java|kt|go|rs)$/i.test(file);
}

function isExampleFile(file) {
  return /(^|\/)(example|examples|demo|demos|sample|samples)\//i.test(file);
}

function isDocsFile(file) {
  return /(^|\/)(doc|docs|website|site)\//i.test(file)
    || /\.(md|mdx|rst)$/i.test(file);
}

function isConfigFile(file) {
  const base = path.basename(file);
  return /^\./.test(base)
    || /\.(config|conf|rc)\.(js|ts|mjs|cjs|json|yaml|yml)$/i.test(file)
    || /\.(env|ini|properties|yaml|yml|toml)$/i.test(file);
}

function collectPackageData(projectRoot, files) {
  const packages = [];
  for (const file of files.filter(f => path.basename(f) === 'package.json').slice(0, 50)) {
    try {
      const json = JSON.parse(fs.readFileSync(path.join(projectRoot, file), 'utf8'));
      packages.push({ file, json });
    } catch {
      packages.push({ file, json: {} });
    }
  }
  return packages;
}

function entryCandidates(files, packageData) {
  const candidates = new Set();
  for (const file of files) {
    if (/(^|\/)(bin|cmd|cli)\//i.test(file)) candidates.add(file);
    if (/(^|\/)(src|app|lib)\/(main|index|cli|server|bootstrap|entry)\.(ts|tsx|js|jsx|mjs|py|go|rs|java|kt)$/i.test(file)) {
      candidates.add(file);
    }
    if (/src\/main\//.test(file)) candidates.add(file);
    if (/(^|\/)(main|index|cli|server)\.(ts|tsx|js|mjs|py|go|rs)$/i.test(file)) candidates.add(file);
  }
  for (const pkg of packageData) {
    addPackageRef(candidates, path.dirname(pkg.file), pkg.json.main);
    addPackageRef(candidates, path.dirname(pkg.file), pkg.json.module);
    addPackageRef(candidates, path.dirname(pkg.file), pkg.json.types);
    if (typeof pkg.json.bin === 'string') addPackageRef(candidates, path.dirname(pkg.file), pkg.json.bin);
    if (pkg.json.bin && typeof pkg.json.bin === 'object') {
      for (const value of Object.values(pkg.json.bin)) addPackageRef(candidates, path.dirname(pkg.file), value);
    }
    if (pkg.json.exports && typeof pkg.json.exports === 'object') {
      for (const value of Object.values(pkg.json.exports)) {
        if (typeof value === 'string') addPackageRef(candidates, path.dirname(pkg.file), value);
        if (value && typeof value === 'object') {
          for (const nested of Object.values(value)) {
            if (typeof nested === 'string') addPackageRef(candidates, path.dirname(pkg.file), nested);
          }
        }
      }
    }
  }
  return [...candidates].filter(Boolean).slice(0, 120).sort();
}

function addPackageRef(set, dir, value) {
  if (!value || typeof value !== 'string') return;
  const normalized = path.posix.normalize(path.posix.join(dir === '.' ? '' : dir, value));
  set.add(normalized.replace(/^\.\//, ''));
}

function largeFiles(projectRoot, files) {
  const out = [];
  for (const file of files) {
    try {
      const size = fs.statSync(path.join(projectRoot, file)).size;
      if (size > 512 * 1024) out.push({ path: file, bytes: size });
    } catch {
      // Ignore files that disappeared while scanning.
    }
  }
  return out.sort((a, b) => b.bytes - a.bytes).slice(0, 40);
}

function rel(value) {
  return path.relative(root, value) || '.';
}
