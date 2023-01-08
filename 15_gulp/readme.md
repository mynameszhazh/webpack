# gulp

## 基础知识

### 基本概念

- gulp 的核心理念是 task runner
  - 可以自定义自己的 `一系列任务`, 等待任务被执行;
  - 基于 `文件Stream` 的构建流
  - 我们可以使用 gulp 的插件体系来完成某些任务

### 和 webpack 的区别

- webpack 是一个静态模块化的打包工具
- gulp 是一个事件流

## 基本使用

### init

- 通过直接调用 `gulp` or `gulp foo`
- default 会执行了里面所有的操作

### 统一执行

- series
- palallel

### 读取和写入文件

- src()
  - 接受 glop 的 * 接受文件的手段
- dest()
- 其它的一些 插件协助 
  - babel 的一套流程
  - gulp-uglify
  - gulp-babel
  - gulp-terser

### gulp 的文件监听
- watch()
  - 指定文件的改变,然后进行重新的打包啥的
   
### 练习案列