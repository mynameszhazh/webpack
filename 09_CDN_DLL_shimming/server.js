const express = require("express");
const webpack = require("webpack");
const WebpackDevMiddleware = require("webpack-dev-middleware");
const config = require("./webpack.config.js");

const app = express();
const compiler = webpack(config);
app.use(WebpackDevMiddleware(compiler));

app.listen(3000, () => {
  console.log("running...");
});
