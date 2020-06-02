module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: '> 0.25%, not dead',
        useBuiltIns: 'entry',
        corejs: 3
      }
    ],
    '@babel/preset-react'
  ];
  const plugins = [
    '@babel/plugin-transform-arrow-functions',
    '@babel/plugin-proposal-export-default-from',
    ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }]
  ];

  return {
    presets,
    plugins,
    sourceType: 'unambiguous'
  };
};
