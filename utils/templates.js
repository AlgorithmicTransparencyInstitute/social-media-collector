const { resolve } = require('path');
const getAliases = require('./getAliases');
const getWatchOptions = require('./getWatchOptions');
const getModuleRules = require('./getModuleRules');

const baseTemplate = sourceFolder => ({
  context: resolve(__dirname, '..', sourceFolder),
  module: { rules: getModuleRules() },
  resolve: {
    alias: getAliases(sourceFolder)
  }
});

const debugTemplate = sourceFolder => ({
  ...baseTemplate(sourceFolder),
  mode: 'development',
  devtool: 'inline-source-map',
  watch: false,
  watchOptions: getWatchOptions()
});

const releaseTemplate = sourceFolder => ({
  ...baseTemplate(sourceFolder),
  mode: 'production'
});

const templates = sourceFolder => ({
  baseTemplate: baseTemplate(sourceFolder),
  debugTemplate: debugTemplate(sourceFolder),
  releaseTemplate: releaseTemplate(sourceFolder)
});

module.exports = templates;
