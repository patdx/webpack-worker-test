const path = require("path");
const ThreadsPlugin = require("threads-plugin");

/** @type {import("webpack").Configuration} */
module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devtool: false,
  target: "node",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  // plugins: [new ThreadsPlugin()],
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //     minChunks: 2,
  //   },
  // },
};
