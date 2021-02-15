const path = require('path');

/** @type {import("webpack").Configuration} */
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: false,
  target: 'node',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  experiments: {
    topLevelAwait: true,
  },
};
