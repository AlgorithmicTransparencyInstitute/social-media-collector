const { resolve } = require('path');
const Copy = require('copy-webpack-plugin');

const makeAssetCopier = (buildFolder, buildKey, assetsPath) => (source, target) =>
  new Copy([
    {
      from: `${source}/${assetsPath}/`,
      to: resolve(__dirname, '..', buildFolder, buildKey, target || source, 'assets')
    }
  ]);

module.exports = makeAssetCopier;
