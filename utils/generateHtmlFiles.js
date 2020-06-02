const Html = require('html-webpack-plugin');

const generateHtmlFiles = (title, template, filename, chunk, isDebug) => {
  const baseOptions = {
    title,
    template,
    filename,
    inject: 'body',
    chunks: [chunk]
  };
  const minifyOptions = isDebug
    ? {}
    : {
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      };

  return new Html({
    ...baseOptions,
    ...minifyOptions
  });
};

module.exports = generateHtmlFiles;
