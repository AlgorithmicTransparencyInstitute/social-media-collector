const generic = require('./generic');

const facebookPreloader = data => generic(data, 'preload', ['./preload/trust.js', './preload/coreDataGrab.js']);

module.exports = facebookPreloader;
