# webpack 源码分析

## webpack 的启动流程

- tabable

  - 就好像类似和 emitter 这样的一个东西
  - tab 触发
  - call 调用
    - 里面的方法通过 callasync
  - 里面所有的插件进行一个 tap 的挂载
    - 这个时候所有执行了这个操作的代码都会加入到一个队列中
    - 然后在调用 `call` 的时候进行依次的触发

- entryPlugin

  - 所有代码编译的入口

- 处理`entry` 的时候就会执行所有的 loader ?
  - loader 就是对我的代码进行一个处理这样
