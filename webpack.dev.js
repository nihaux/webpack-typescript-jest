const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');

module.exports = merge(common, {
  context: __dirname, // to automatically find tsconfig.json in FortTsChecker
  mode: 'development',
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false, // inject error in webpack
    }),
    new ForkTsCheckerNotifierWebpackPlugin({ excludeWarnings: true }),
  ],
  devServer: {
    clientLogLevel: 'warning',
    contentBase: './dist',
    hot: true,
    stats: 'errors-only',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true,
        },
      },
    ],
  },
});
