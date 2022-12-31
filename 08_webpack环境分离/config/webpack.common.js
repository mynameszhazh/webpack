const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const prodConfig = require("./webpack.prod.js");
const devConfig = require("./webpack.dev.js");
const { merge } = require('webpack-merge');

const commonWebpckConfig = {
  // context: path.resolve(__dirname, "./"),
  // 这个获取路径 都是根据一个 context 的属性进行相关的资源获取的
  entry: "./src/index.js",
  output: {
    filename: "bounder.js",
    path: path.resolve(__dirname, "../dist"),
  },
  resolve: {
    extensions: [".js", ".json", ".wasm"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = function (env) {
  const isProduction = env.production;
  // 保留一些代码的环境状态
  process.env.NODE_ENV = isProduction ? "production" : "development";

  const config = isProduction ? prodConfig : devConfig;
  const mergeConfig = merge(commonWebpckConfig, config);
  return mergeConfig;
};
