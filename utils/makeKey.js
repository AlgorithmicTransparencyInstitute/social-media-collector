const makeKey = (browser, config, release) => [browser, config, release].join('-');

module.exports = makeKey;
