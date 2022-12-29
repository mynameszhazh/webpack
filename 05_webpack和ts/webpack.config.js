const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.ts",
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
        test: /\.tsx?$/,
        // 排除一些文件的处理
        use: [
          {
            loader: "ts-loader",
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
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "123",
      // template: "./public/index.html",
    }),
    new DefinePlugin({
      BASE_URL: '"./"',
    }),
  ],
};
