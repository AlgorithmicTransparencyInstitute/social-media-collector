const browserOptions = ({ browser }) =>
  [
    {
      name: 'Firefox',
      code: 'firefox',
      isFirefox: true,
      isChrome: false
    },
    {
      name: 'Chrome',
      code: 'chrome',
      isFirefox: false,
      isChrome: true
    }
  ].filter(({ code }) => !browser || browser === code);

module.exports = browserOptions;
