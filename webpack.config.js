var webpack = require("webpack");

// new webpack.optimize.UglifyJsPlugin({
//     compress: {
//         warnings: false
//     }
// });

// module.exports = {
//     entry: "./entry.js",
//     output: {
//         path: __dirname + "/public/javascripts",
//         filename: "build.js"
//     }
// };

// new webpack.optimize.UglifyJsPlugin({
//     compress: {
//         warnings: false
//     }
// })

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