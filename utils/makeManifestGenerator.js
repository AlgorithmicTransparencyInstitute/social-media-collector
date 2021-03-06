const GenerateJsonFile = require('generate-json-file-webpack-plugin');

const FB_MATCHES = ['*://*.facebook.com/*'];
const FB_EXCLUDES = ['*://*.facebook.com/ads/archive*', '*://*.facebook.com/ads/library*'];
const YT_MATCHES = ['*://*.youtube.com/*'];
const BASE_MANIFEST = {
  manifest_version: 2,
  homepage_url: 'https://github.com/AlgorithmicTransparencyInstitute/social-media-collector',
  background: {
    scripts: ['background/bundle.js']
  },
  icons: {
    '16': 'assets/icon16.png',
    '64': 'assets/icon64.png',
    '128': 'assets/icon128.png'
  },
  browser_action: {
    default_popup: 'toolbar/index.html'
  },
  content_scripts: [
    {
      // Facebook specific preloader to add `isTrusted` to events.
      js: ['preload/bundle.js'],
      matches: FB_MATCHES,
      exclude_globs: FB_EXCLUDES,
      run_at: 'document_start'
    },
    {
      // Youtube specific preloader to monkeypatch XHR.
      js: ['ytpreload/bundle.js'],
      matches: YT_MATCHES,
      run_at: 'document_start'
    },
    {
      js: ['content/bundle.js'],
      matches: [...FB_MATCHES, ...YT_MATCHES],
      exclude_globs: FB_EXCLUDES,
      run_at: 'document_start'
    }
  ],
  web_accessible_resources: ['webpage/*'],
  externally_connectable: {
    matches: [...FB_MATCHES, ...YT_MATCHES]
  }
};

const makeManifestGenerator = ({ shortSha }) => ({ isFirefox, apiUrl, config }) => {
  const versionName = `${config.version} (${shortSha})`;
  const permissions = ['storage', 'unlimitedStorage', '*://*.facebook.com/*'];
  if (apiUrl) permissions.push(`${apiUrl}/`);

  const baseManifest = {
    ...BASE_MANIFEST,
    name: config.name,
    short_name: config.name,
    description: config.description,
    version: config.version,
    version_name: versionName,
    browser_action: {
      ...BASE_MANIFEST.browser_action,
      default_title: config.title,
      default_icon: `assets/${config.defaultIcon}`
    },
    homepage_url: config.homepage,
    permissions
  };

  const firefoxManifest = {
    ...baseManifest,
    applications: {
      gecko: {
        id: config.geckoId
      }
    }
  };

  return new GenerateJsonFile({
    filename: '../manifest.json',
    value: isFirefox ? firefoxManifest : baseManifest
  });
};

module.exports = makeManifestGenerator;
