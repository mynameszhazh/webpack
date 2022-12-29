# 模块四

## webpack 模块化操作

- webpack 他会自己生成一种模块化的格式,进行对应的模块化处理

## babel

### 编译器的原理

```js
源代码 -> 词法分析 -> tokens数组 -> 语法分析 -> ast基本树 -> 遍历树 -> 进行节点分析 -> 特定节点进行对应plugin执行 -> 生成新的ast -> es5代码生成
```

### babel 的配置文件

- babelrc.json

  - 老版本使用的 babel 的包管理系统

- babel.config.json (babel.config.js) (babel7)
  - 推荐使用, 可以直接作用于 Monnorepos 项目的子包

### polyfill

> 通过 polyfill 可以更好的使用 js 增强我的 js

- 通过引入 core-js 3 版本, 等进行一个 polyfill 的引入
- 可以通过 plugin-transform-runtime 进行处理...

### react

> 通过 present-react-env,

- 预设的一个加载就可以使用
