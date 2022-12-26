const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "build.js",
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
              importLoaders: 1
            }
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
              importLoaders: 2
            }
          },
          "postcss-loader",
          {
            loader: "less-loader",
          },
        ],
        // loader: 'css-loader'
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        use: ['file-loader']
      }
    ],
  },
};
