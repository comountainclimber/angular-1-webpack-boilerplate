var webpack = require("webpack");

module.exports = {
  entry: {
    "bundle": "./entry.js",
    "bundle.min": "./entry.js",
  },
  devtool: "source-map",
  output: {
    path: __dirname + "/public/javascripts",
    filename: "build.min.js"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
};
