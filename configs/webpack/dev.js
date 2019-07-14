// development config
const { resolve } = require('path');

const merge = require('webpack-merge');
const webpack = require('webpack');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: ['webpack-hot-middleware/client', resolve('src/index.tsx')],

  devServer: {
    hot: true // enable HMR on the server
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new webpack.HotModuleReplacementPlugin()
  ]
});
