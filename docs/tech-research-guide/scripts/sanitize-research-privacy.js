#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { sanitizePersonalPaths } = require('./privacy-utils');

const root = process.cwd();
const args = process.argv.slice(2).filter(arg => arg !== '--help');

if (process.argv.includes('--help')) {
  console.log('Usage: node docs/tech-research-guide/scripts/sanitize-research-privacy.js [research/<name> ...]');
  process.exit(0);
}

const targetDirs = args.length ? args : discoverResearchDirs();
let changed = 0;

for (const dir of targetDirs) {
  const researchDir = path.resolve(root, dir);
  if (!fs.existsSync(researchDir)) continue;
  for (const file of listFiles(researchDir)) {
    const before = fs.readFileSync(file, 'utf8');
    let after = sanitizePersonalPaths(before);
    after = after.replace(/\|\s*本地路径\s*\|/g, '| 项目标识 |');
    if (after !== before) {
      fs.writeFileSync(file, after);
      changed += 1;
      console.log(`sanitized ${rel(file)}`);
    }
  }
}

console.log(`privacy sanitize complete: ${changed} file(s) changed`);

function discoverResearchDirs() {
  const researchRoot = path.join(root, 'research');
  if (!fs.existsSync(researchRoot)) return [];
  return fs.readdirSync(researchRoot)
    .map(name => path.join('research', name))
    .filter(dir => fs.statSync(path.join(root, dir)).isDirectory());
}

function listFiles(dir, out = []) {
  const extensions = new Set(['.md', '.html', '.js', '.json']);
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      listFiles(fullPath, out);
      continue;
    }
    if (entry.isFile() && extensions.has(path.extname(entry.name))) out.push(fullPath);
  }
  return out;
}

function rel(value) {
  return path.relative(root, value) || '.';
}
