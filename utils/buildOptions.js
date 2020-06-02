const buildOptions = ({ build }) =>
  [
    {
      name: 'Debug',
      code: 'debug',
      isDebug: true
    },
    {
      name: 'Release',
      code: 'release',
      isDebug: false
    }
  ].filter(({ code }) => !build || build === code);

module.exports = buildOptions;
