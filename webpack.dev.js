const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
  mode: 'development',
  devServer: {
    clientLogLevel: 'warning',
    contentBase: './dist',
    hot: true,
    stats: 'errors-only',
  },
});
