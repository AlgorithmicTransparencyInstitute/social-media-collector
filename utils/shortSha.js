const childProcess = require('child_process');
let shortSha = null;
try {
  shortSha = childProcess
    .execSync('git rev-parse --short HEAD')
    .toString()
    .trim();
} catch (error) {
  shortSha = 'oneoff';
}

module.exports = shortSha;
