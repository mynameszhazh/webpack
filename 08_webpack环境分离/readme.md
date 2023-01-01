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
const TerserPlugin = require("terser-webpack-plugin")
```
- 通过配置文件, entry 的一些妙用

### 动态导入
- 使用插件 `splitChunks`
  - 官方的文档有非常多的解释


## 懒加载
### import
-  函数的一些处理
- 注意里面会有一个 magic commend
  - WebpackChunkName
  - WebpackPreload
  - WebpackPrefetch