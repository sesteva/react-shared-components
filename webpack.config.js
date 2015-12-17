var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.web.js',
  output: { path: './web', filename: 'bundle.js' },
  module: {
    loaders: [
      { test: /.js?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
};
