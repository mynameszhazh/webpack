module.exports = {
  mode: "development",
  devServer: {
    hot: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: {
          "^/api": "",
        },
        // 如果需要 https
        secure: false,
        // 后端设置了 请求源头设置
        changeOrign: true,
      },
    },
  },
};
