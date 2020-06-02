module.exports = {
  sourceDir: './build/firefox-std-debug/',
  ignoreFiles: ['.DS_Store'],
  build: {
    overwriteDest: true
  },
  run: {
    firefox: process.env.FIREFOX_BINARY || 'firefox',
    browserConsole: false,
    startUrl: ['about:addons', 'about:debugging'],
    pref: []
  }
};
