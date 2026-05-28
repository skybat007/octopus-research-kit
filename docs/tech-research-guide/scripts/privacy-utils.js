const path = require('path');

const PERSONAL_PATH_PATTERN = /\/Users\/[^/\s`'"<>()|,]+(?:\/[^\s`'"<>()|,]*)?/g;
const IDEA_PROJECT_PATH_PATTERN = /\/Users\/[^/\s`'"<>()|,]+\/IdeaProjects\/([^/\s`'"<>()|,:]+)(\/[^\s`'"<>()|,]*)?/g;

function sanitizePersonalPaths(value) {
  if (value === undefined || value === null) return value;
  let out = String(value);

  out = out.replace(IDEA_PROJECT_PATH_PATTERN, (_, projectName, suffix = '') => {
    const relPath = suffix.replace(/^\//, '');
    return relPath || projectName;
  });

  out = out.replace(PERSONAL_PATH_PATTERN, localPath => {
    const base = path.basename(localPath);
    return base || '[local-path]';
  });

  return out;
}

function hasPersonalPath(value) {
  return /\/Users\/[^/\s`'"<>()|,]+/.test(String(value || ''));
}

module.exports = {
  sanitizePersonalPaths,
  hasPersonalPath
};
