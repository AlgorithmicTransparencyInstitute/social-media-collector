const { readdirSync } = require('fs');
const { join } = require('path');
const { resolve } = require('path');

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

const getAliases = (sourceFolder = 'src') =>
  getDirectories(join(__dirname, '..', sourceFolder)).reduce((acc, elem) => {
    acc[elem] = resolve(__dirname, '..', sourceFolder, elem);
    return acc;
  }, {});

module.exports = getAliases;
