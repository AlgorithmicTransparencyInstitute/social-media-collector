const generic = require('./generic');
const shortSha = require('../shortSha');
const makeManifestGenerator = require('../makeManifestGenerator');

const { version, description } = require('../../package.json');

const generateManifest = makeManifestGenerator({ version, description, shortSha });

const backgroundAndManifest = (data, copyAssetFolder) => {
  const { plugins, ...base } = {
    ...generic(data, 'background', ['regenerator-runtime/runtime', './background/index.js'])
  }

  return {
    ...base,
    plugins: [
      ...plugins,
      generateManifest(data),
      copyAssetFolder('common', '.')
    ]
  }
}

module.exports = backgroundAndManifest;
