const generic = require('./generic');

const generateHtmlFiles = require('../generateHtmlFiles');
const linkLessFiles = require('../linkLessFiles');

const webpage = (data, copyAssetFolder) => {
  const { plugins, ...base } = generic(data, 'webpage', ['regenerator-runtime/runtime', './webpage/index.js']);

  return {
    ...base,
    plugins: [
      ...plugins,
      generateHtmlFiles(
        data.config.title,
        'webpage/index.ejs',
        'index.html',
        'webpage',
        data.isDebug
      ),
      linkLessFiles(),
      copyAssetFolder('webpage')
    ]
  }
};

module.exports = webpage;
