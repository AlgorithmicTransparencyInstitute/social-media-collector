const generic = require('./generic');

const content = data => generic(data, 'content', './content/index.js');

module.exports = content;
