const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/dist/plugin');
const { DefinePlugin } = require("webpack");

module.exports = {
  mode: "development",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "build.js",
    // assetModuleFilename: "img/[name].[hash:6].[ext]",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // 排除一些文件的处理
        use: [
          {
            loader: "babel-loader",
            options: {
              exclude: /node_modules/,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
        // loader: 'css-loader'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "123",
      template: "./public/index.html",
    }),
    new VueLoaderPlugin.default(),
    new DefinePlugin({
      BASE_URL: '"./"',
    }),
  ],
};
