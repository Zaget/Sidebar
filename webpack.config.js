const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = [{
  entry: path.resolve(__dirname, '.', 'server/server.js'),
  output: {
    path: path.resolve(__dirname, '.', 'dist'),
    publicPath: '/dist/',
    filename: 'server.js',
  },
  node: {
    __dirname: false,
    __filename: false,
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
        ],
      },
    ],
  }
},
{
  entry: `${SRC_DIR}/index.jsx`,
  node: {
    __dirname: false,
    __filename: false,
  },
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, 'node_modules', 'react'),
    },
  },
},
];
