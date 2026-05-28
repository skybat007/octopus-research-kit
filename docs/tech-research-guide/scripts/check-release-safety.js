#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { hasPersonalPath } = require('./privacy-utils');

const root = process.cwd();
const findings = [];

for (const file of listFiles(root)) {
  const relPath = path.relative(root, file);
  const content = fs.readFileSync(file, 'utf8');
  checkFile(relPath, content);
}

if (findings.length) {
  console.error('Release safety check failed:');
  for (const finding of findings) {
    console.error(`- ${finding.file}: ${finding.message}`);
  }
  process.exit(1);
}

console.log('release safety check passed');

function checkFile(file, content) {
  const text = String(content || '');
  const withoutSelfEscapes = file === 'docs/tech-research-guide/scripts/privacy-utils.js'
    ? text.replace(/\\\/Users\\\//g, '')
    : text;

  if (hasPersonalPath(withoutSelfEscapes)) {
    findings.push({ file, message: 'contains a personal local path' });
  }
  if (/Owner:\s*cheng\b/i.test(text)) {
    findings.push({ file, message: 'contains personal owner metadata' });
  }
  if (new RegExp('sk-[A-Za-z0-9]{20,}').test(text)) {
    findings.push({ file, message: 'looks like an OpenAI-style API key' });
  }
  if (new RegExp('ghp_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}').test(text)) {
    findings.push({ file, message: 'looks like a GitHub token' });
  }
  if (/BEGIN (RSA |OPENSSH |EC |DSA )?PRIVATE KEY/.test(text)) {
    findings.push({ file, message: 'looks like a private key' });
  }
  if (/Bearer\s+(?!<|\$\{|TOKEN|token|REDACTED|redacted|xxx)[A-Za-z0-9._~+/=-]{20,}/.test(text)) {
    findings.push({ file, message: 'looks like an inline bearer token' });
  }
}

function listFiles(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(root, fullPath);
    if (entry.isDirectory()) {
      if (shouldSkipDir(relPath, entry.name)) continue;
      listFiles(fullPath, out);
      continue;
    }
    if (entry.isFile() && shouldScanFile(entry.name, fullPath)) out.push(fullPath);
  }
  return out;
}

function shouldSkipDir(relPath, name) {
  return new Set([
    '.git',
    '.idea',
    '.vscode',
    'node_modules',
    'dist',
    'build',
    'coverage',
    'output',
    'tmp'
  ]).has(name) || relPath.includes(`${path.sep}.git${path.sep}`);
}

function shouldScanFile(name, fullPath) {
  if (name === '.git') return false;
  const stat = fs.statSync(fullPath);
  if (stat.size > 5 * 1024 * 1024) return false;
  const ext = path.extname(name).toLowerCase();
  return new Set([
    '',
    '.md',
    '.txt',
    '.html',
    '.js',
    '.json',
    '.yml',
    '.yaml',
    '.toml',
    '.sh',
    '.gitignore'
  ]).has(ext);
}
