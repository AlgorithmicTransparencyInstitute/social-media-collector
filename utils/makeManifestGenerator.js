const GenerateJsonFile = require('generate-json-file-webpack-plugin');

const FB_MATCHES = ['*://*.facebook.com/*'];
const FB_EXCLUDES = ['*://*.facebook.com/ads/archive*', '*://*.facebook.com/ads/library*'];
const YT_MATCHES = ['*://*.youtube.com/*'];
const BASE_MANIFEST = {
  homepage_url: 'https://github.com/AlgorithmicTransparencyInstitute/social-media-collector',
  icons: {
    '16': 'assets/icon16.png',
    '32': 'assets/icon32.png',
    '48': 'assets/icon48.png',
    '64': 'assets/icon64.png',
    '128': 'assets/icon128.png'
  }
};

const FACEBOOK_CONTENT_SCRIPT = [
  {
    // Facebook specific preloader to add `isTrusted` to events.
    js: ['preload/bundle.js'],
    matches: FB_MATCHES,
    exclude_globs: FB_EXCLUDES,
    run_at: 'document_start'
  }
];
const YOUTUBE_CONTENT_SCRIPT = [
  {
    // Youtube specific preloader to monkeypatch XHR.
    js: ['ytpreload/bundle.js'],
    matches: YT_MATCHES,
    run_at: 'document_start'
  }
];

const makeManifestGenerator = ({ shortSha }) => ({ isFirefox, apiUrl, config }) => {
  const versionName = `${config.version} (${shortSha})`;
  const permissions = ['storage', 'unlimitedStorage'];

  const BUNDLE_CONTENT_SCRIPT = [
    {
      js: ['content/bundle.js'],
      matches: [...FB_MATCHES, ...(config.includeYoutube ? YT_MATCHES : [])],
      exclude_globs: FB_EXCLUDES,
      run_at: 'document_start'
    }
  ];

  // Used for Chrome.
  const baseManifest = {
    ...BASE_MANIFEST,
    manifest_version: 3,
    name: config.name,
    short_name: config.name,
    description: config.description,
    version: config.version,
    version_name: versionName,
    default_locale: 'en',
    action: {
      default_popup: 'toolbar/index.html',
      default_title: config.title,
      default_icon: `assets/${config.defaultIcon}`
    },
    homepage_url: config.homepage,
    content_scripts: [
      ...FACEBOOK_CONTENT_SCRIPT,
      ...(config.includeYoutube ? YOUTUBE_CONTENT_SCRIPT : []),
      ...BUNDLE_CONTENT_SCRIPT
    ],
    background: {
      service_worker: 'bundle.js'
    },
    permissions,
    web_accessible_resources: [{
      "resources": [ 'webpage/*', 'assets/runs_on_fb.js' ],
      "matches": ["<all_urls>"],
      "extension_ids": []
    }],
    "content_security_policy": {
      "extension_pages": "script-src 'self'; object-src 'self'",
    }
  };

  const firefoxManifest = {
    ...baseManifest,
    manifest_version: 2,
    browser_action: {
      default_popup: 'toolbar/index.html',
      default_icon: {
        '16': 'images/icon16.png',
        '24': 'images/icon24.png',
        '32': 'images/icon32.png'
      }
    },
    applications: {
      gecko: {
        id: config.geckoId
      }
    },
    background: {
      scripts: ['bundle.js']
    },
    web_accessible_resources: ['webpage/*', 'assets/runs_on_fb.js'],
    content_security_policy: "script-src 'self' 'unsafe-eval'; object-src 'self'"
  };

  return new GenerateJsonFile({
    filename: 'manifest.json',
    value: isFirefox ? firefoxManifest : baseManifest
  });
};

module.exports = makeManifestGenerator;
