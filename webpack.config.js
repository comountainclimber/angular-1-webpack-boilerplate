var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var path = require('path');
// var config = require('./webpack.config');

// new WebpackDevServer(webpack(config), {
//   publicPath: config.output.publicPath,
//   hot: true,
//   headers: { 'Access-Control-Allow-Origin': '*' }
// })

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    // "bundle": "./entry.js",
    // "bundle.min": "./entry.js"
    path.resolve(__dirname, './entry.js')
  ],
  devtool: '#eval-source-map',
  output: {
    publicPath: 'http://localhost:8080/',
    path: path.resolve(__dirname, 'build'),
    filename: "build.js"
  },
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     include: /\.min\.js$/,
  //     minimize: false
  //   })
  // ]
};