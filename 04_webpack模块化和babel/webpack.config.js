const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "build.js",
    // assetModuleFilename: "img/[name].[hash:6].[ext]",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
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
        test: /\.less$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          "postcss-loader",
          {
            loader: "less-loader",
          },
        ],
        // loader: 'css-loader'
      },
      {
        test: /\.(png|jpe?g|svg|webp)$/,
        use: [
          {
            // loader: 'file-loader',
            loader: "url-loader",
            options: {
              name: "img/[name].[hash:6].[ext]",
              limit: 5 * 1024,
              // esModule: false,
            },
          },
        ],
      },
      {
        test: /\.(ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name].[hash:6][ext]",
        },
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
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: "public",
    //       globOptions: {
    //         ignore: [
    //           "**/file.*",
    //           "**/ignored-directory/**",
    //           "**/index.html",
    //           "**/.DS_Store",
    //         ]
    //       },
    //     },
    //   ],
    // }),
  ],
};
