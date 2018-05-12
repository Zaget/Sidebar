const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.resolve(__dirname, '.', 'server/serverPostgres.js'),
  output: {
    path: path.resolve(__dirname, '.', 'dist'),
    publicPath: '/dist/',
    filename: 'server.js',
  },
  target: 'node',
  externals: nodeExternals(),
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
};
