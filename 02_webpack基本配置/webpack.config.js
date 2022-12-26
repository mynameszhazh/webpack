const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "build.js",
    // assetModuleFilename: "img/[name].[hash:6].[ext]",
  },
  module: {
    rules: [
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
};
