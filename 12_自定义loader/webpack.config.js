const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/main.js",
  output: {
    filename: "boundler.js",
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "xjh-loader01",
            options: {
              name: "23",
            },
          },
          "xjh-async-loader02",
          "xjh-loader03",
          {
            loader: "xjh-babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
        // loader: "xjh-loader01.js"
      },
    ],
  },
  resolveLoader: {
    modules: ["node_modules", "./loaders"],
  },
  plugins: [new HtmlWebpackPlugin()],
};
