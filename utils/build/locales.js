const generic = require('./generic');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');

const locale_en = (data, copyAssetFolder) => {
  const { plugins, ...base } = generic(data, '_locales/en', ['regenerator-runtime/runtime', './_locales/en']);

  return {
    ...base,
    plugins: [
      ...plugins,
      new GenerateJsonPlugin('messages.json', {
        "appName": {
          "message": "Ad Observer",
          // "description": "The title of the application, displayed in the web store."
        },
        "appDesc": {
          "message": "Installing our browser plugin sends us the ads you see on Facebook and YouTube without compromising your privacy.",
          // "description":"The description of the application, displayed in the web store."
        }
      }),
    ]
  }
};

const locale_de = (data, copyAssetFolder) => {
  const { plugins, ...base } = generic(data, '_locales/de', ['regenerator-runtime/runtime', './_locales/de']);

  return {
    ...base,
    plugins: [
      ...plugins,
      new GenerateJsonPlugin('messages.json', {
        "appName": {
          "message": "Ad Observer",
          // "description": "German"
        },
        "appDesc": {
          "message": "Das Plugin meldet uns die Werbungen, die Sie auf Facebook oder YouTube sehen.",
          // "description":"German"
        }
      }),
    ]
  }
};

module.exports = {
  en: locale_en,
  de: locale_de
}
