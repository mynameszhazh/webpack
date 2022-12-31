const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bounder.js",
    path: path.resolve(__dirname, "./dist"),
  },
  resolve: {
    extensions: [".js", ".json", ".wasm"],
  },
  devServer: {
    hot: true,
    hotOnly: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: {
          "": "",
        },
        // 如果需要 https
        secure: false,
        // 后端设置了 请求源头设置
        changeOrign: true,
      },
    },
    // 通过这个属性, 页面刷新 直接获取 index.html, 可以通过更多的东西进行操作
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
