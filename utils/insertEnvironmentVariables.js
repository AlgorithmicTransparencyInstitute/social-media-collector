const { EnvironmentPlugin } = require('webpack');

// these values can be overwritten by actual environment variables
// and do not appear within the test context.
// see jest.init.js for these values in tests.
const insertEnvironmentVariables = ({ isFirefox, isChrome, isQA, isDebug, apiUrl, config }) =>
  new EnvironmentPlugin({
    IS_FIREFOX: isFirefox.toString(),
    IS_CHROME: isChrome.toString(),
    IS_QA: isQA.toString(),
    IS_DEBUG: isDebug.toString(),
    TITLE: config.title,
    LANGUAGE: config.language,
    PROVIDER_ID: config.extensionProviderId,
    API_URL: apiUrl,
    EXTENSION_NAME: config.name,
    EXTENSION_VERSION: config.version,
    CONSENT_TEXT: config.consentText,
    CONSENT_VERSION: config.consentVersion.toString(),
    HELP_TEXT: config.helpText,
    INCLUDE_YOUTUBE: config.includeYoutube,
    ABOUT_TEXT: config.aboutText,
    PRIVACY_TEXT: config.privacyText,
    PERMISSIONS: JSON.stringify(config.permissions),
    PREFERENCES_PAGE_FOOTER: config.preferencesPageFooter
  });

module.exports = insertEnvironmentVariables;
