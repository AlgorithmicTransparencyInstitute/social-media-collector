const getModuleRules = () => [
  {
    enforce: 'pre',
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
    options: {
      failOnError: true
    }
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  },
  {
    test: /\.less$/,
    use: ['style-loader', 'css-loader', 'less-loader']
  },
  {
    test: /\.html$/,
    use: ['raw-loader']
  },
  {
    test: /\.(gif|png|jpe?g|svg)$/i,
    use: ['file-loader']
  }
];

module.exports = getModuleRules;
