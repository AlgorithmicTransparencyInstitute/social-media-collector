const StyleLint = require('stylelint-webpack-plugin');

// Generate CSS files from LESS source
const linkLessFiles = () =>
  new StyleLint({
    configFile: '.stylelintrc',
    files: '**/*.less',
    syntax: 'less',
    failOnError: true
  });

module.exports = linkLessFiles;
