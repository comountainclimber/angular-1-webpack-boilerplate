var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
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
    path.resolve(__dirname, './entry.js')
  ],
  devtool: '#eval-source-map',
  output: {
    publicPath: 'http://localhost:8080/',
    path: path.resolve(__dirname, 'build'),
    filename: "build.js"
  }
  // module: {
  //   loaders: [
  //     {
  //       test: /\.scss$/,
  //       loaders: ["style", "css", "sass"]
  //     }
  //   ]
  // },
  // sassLoader: {
  //   includePaths: [path.resolve(__dirname, "./public/sass/main.scss")]
  // }
};



// module.exports = {
//   entry: {
//    app: [path.resolve(__dirname, './entry.js')]
//   },
  
//   output: {
//     path: path.resolve(__dirname),
//     publicPath: "/public/",
//     filename: "bundle.js"
//   }
// };

