const generic = require('./generic');

const generateHtmlFiles = require('../generateHtmlFiles');
const linkLessFiles = require('../linkLessFiles');

const toolbar = (data, copyAssetFolder) => {
  const { plugins, ...base } = generic(data, 'toolbar', ['regenerator-runtime/runtime', './toolbar/index.js']);

  return {
    ...base,
    plugins: [
      ...plugins,
      generateHtmlFiles(
        data.config.title,
        'toolbar/index.ejs',
        'index.html',
        'toolbar',
        data.isDebug
      ),
      linkLessFiles(),
      copyAssetFolder('toolbar')
    ]
  }
};

module.exports = toolbar;
