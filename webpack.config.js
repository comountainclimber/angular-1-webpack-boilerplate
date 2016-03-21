var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, './entry.js')
  ],
  devtool: '#eval-source-map',
  output: {
    publicPath: 'http://localhost:8080/',
    path: path.resolve(__dirname, 'build'),
    filename: "build.js"
  }
};
