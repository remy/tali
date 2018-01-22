const webpack = require('webpack');

module.exports = entry => ({
  devtool: 'cheap-module-source-map',
  entry,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              require.resolve('babel-preset-env'),
              require.resolve('babel-preset-stage-0'),
            ],
          },
        },
      },
    ],
  },
  output: {
    filename: entry,
  },
});
