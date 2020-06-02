const generic = require('./generic');

const youtubePreloader = data => generic(data, 'ytpreload', './ytpreload/monkeypatchXhr.js');

module.exports = youtubePreloader;
