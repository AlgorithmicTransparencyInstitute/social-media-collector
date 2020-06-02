const childProcess = require('child_process');

const shortSha = childProcess
  .execSync('git rev-parse --short HEAD')
  .toString()
  .trim();

module.exports = shortSha;
