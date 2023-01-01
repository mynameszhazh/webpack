# cdn_dll_shimming

## cdn

### 通过 publicPath

- 通过 这样配置一些 cdn 文件的前缀 然后打包的时候进行一个处理
  - 需要我有自己的 cdn 资源
  - 所有的资源都在 cdn 中

### 只有第三方的库进行 cdn

- externals
  - 注意 这个一定要在 index.html 中引入 cdn 的脚本文件

## ejs

- [参考文章](https://blog.csdn.net/weixin_53125457/article/details/115013629)
- 这样就可以对我的 模板进行一些更好的代码处理这样
- 注意,在此时执行的时候,是可以获取到 process.env.NODE_ENV

## shimming

- 可以自动导入一个 库
- webpack 自带的 providePlugin
- 直接 去 官方文档才是更好的选择
- 不推荐使用
  - 除非没有办法了
