const configOptions = ({ config }) =>
  [
    {
      name: 'QA',
      code: 'qa',
      isQA: true
    },
    {
      name: 'Standard',
      code: 'std',
      isQA: false
    }
  ].filter(({ code }) => !config || config === code);

module.exports = configOptions;
