const defaultBuildConfig = require('./build-config');
const apiOption = require('./utils/apiOption');
const browserOptions = require('./utils/browserOptions');
const buildOptions = require('./utils/buildOptions');
const configOptions = require('./utils/configOptions');
const makeAssetCopier = require('./utils/makeAssetCopier');
const makeKey = require('./utils/makeKey');
const templates = require('./utils/templates');

const backgroundAndManifest = require('./utils/build/backgroundAndManifest');
const facebookPreloader = require('./utils/build/facebookPreloader');
const youtubePreloader = require('./utils/build/youtubePreloader');
const content = require('./utils/build/content');
const toolbar = require('./utils/build/toolbar');
const locales = require('./utils/build/locales');
const webpage = require('./utils/build/webpage');

// Input and output folders
const sourceFolder = 'src';
const buildFolder = 'build';

// --- Build templates ---------------------------------------------------------

const { debugTemplate, releaseTemplate } = templates(sourceFolder);

const doIt = async (env = {}) => {
  console.log('******* STARTING: ', env || 'All (default)');
  const givenEnv = Object.keys(env).length !== 0;

  const browserOpt = browserOptions(env);
  const configOpt = configOptions(env);
  const buildOpt = buildOptions(env);

  const buildDefs = [];
  browserOpt.forEach(({ isFirefox, isChrome, code: browserCode }) => {
    configOpt.forEach(({ isQA, code: configCode }) => {
      buildOpt.forEach(({ isDebug, code: buildCode }) => {
        const key = makeKey(browserCode, configCode, buildCode);
        const makeConfig = givenEnv && env.file ? require(env.file) : defaultBuildConfig;

        const config = makeConfig(isDebug);

        const copyAssetFolder = makeAssetCopier(buildFolder, key, config.assetsPath);
        const buildTemplate = isDebug ? debugTemplate : releaseTemplate;

        const apiUrl = env.api ? apiOption(env).url : config.apiUrl;

        const data = {
          buildTemplate,
          buildFolder,
          key,
          isFirefox,
          isChrome,
          isQA,
          isDebug,
          apiUrl,
          config
        };

        [
          backgroundAndManifest,
          facebookPreloader,
          youtubePreloader,
          content,
          toolbar,
          locales.en,
          locales.de,
          locales.es,
          webpage
        ].forEach(fn => {
          buildDefs.push(fn(data, copyAssetFolder));
        });
      });
    });
  });

  return buildDefs;
};

module.exports = doIt;
