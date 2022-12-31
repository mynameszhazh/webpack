# hot module replacement

## react

- react-refresh
- babel
  - presets-react-env

## vue

- vue-loader
  - 内部直接定义了 vue-loader 的一些使用
  - 使用了 vue-loader-plugin 之后就可以直接使用 热更新了

## HMR 的原理

- 开启了两个服务
  - express
  - socket
    - socket 的链接中保存一个 json 数据, 前端通过 json 文件的通知,重洗执行更改的文件

## contentBase
