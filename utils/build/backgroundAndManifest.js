const generic = require('./generic');
const shortSha = require('../shortSha');
const makeManifestGenerator = require('../makeManifestGenerator');

const { version, description } = require('../../package.json');

const generateManifest = makeManifestGenerator({ version, description, shortSha });

const backgroundAndManifest = (data, copyAssetFolder) => {
  // By setting subfolder='', we put the generated bundle.js in the top-level
  // folder of the chrome extension.
  // This used to be subfolder='background'.
  // Unfortunately, we MUST put the generated background js script in the
  // top-level for manifest v3 -- v3 requires a "service worker" for the
  // background script, and you can only pass in a file that's in the top-level.
  // TODO: above requirement will expire in Chrome 93.
  // Further reading: https://stackoverflow.com/a/66115801/3325787
  const subfolder = '';
  const { plugins, ...base } = {
    ...generic(data, subfolder, ['regenerator-runtime/runtime', './background/index.js'])
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
