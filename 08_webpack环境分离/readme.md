# 分离

## 配置分离

### 如果通过 一个 --config webpack.dev.js

- 这样的方式对于一些公用的代码进行的编辑就会变得非常的麻烦了

### --config webpack.common.js

- 通过配置一些不一样的环境进行不一样的操作

## 代码分离

> 一些可以在只有进行了 特定操作之后才需要加载的代码的优化方案

### 多入口文件

- 通过 配置 entry 这个配置就可以很好的解决这样的问题

### 防止重复

- 使用插件

```js
const TerserPlugin = require("terser-webpack-plugin");
```

- 通过配置文件, entry 的一些妙用

### 动态导入

- 使用插件 `splitChunks`
  - 官方的文档有非常多的解释

## 懒加载

### import

- 函数的一些处理
- 注意里面会有一个 magic commend
  - WebpackChunkName
  - WebpackPreload
  - WebpackPrefetch

## css 代码分离

- 又是一个插件就可以解决问题 `MiniCssExtractPlugin`

  - 注意这个东西直接到 webpack 官网上找就完事了

- 不仅仅要使用 plugin
  - 里面还可以使用一个 loader 进行一个文件的处理

## hash contenthash chunkhash 的区别

- hash
  - 所有的内容都是统一的一个 hash 进行处理,所以会存在很多的问题 吧!
- contenthash
  - 根据每个包的内容单独进行处理
- chunhash
  - 根据打包的内容进行包的命名
    - 注意这个是 所有包含引用的文件都会发生改变
