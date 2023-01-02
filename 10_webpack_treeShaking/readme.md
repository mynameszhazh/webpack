# tree shaking

## 含义

### tree shaking 来源
- lisp 第一次提供了这样的写法
- 纯函数 可以更好的支持 tree shaking

### js tree shaking 来源
- 在 rollup 中第一次出现
- 最好进行一个 es module 进行操作
- 也可以进行 commonjs 汇总进行

## 实现

### usedExports
> 通过标记某个函数, 之后通过 terser 进行优化
- webpack5内部是自动配置的

### sideEffect 
> 通过一个webpack中副作用的查找进行相关的操作这样
- package.json 中
  - 'sideEffect'
    - 进行一些 路径上的配置
    - '**.css'

### css Tree Shaking
- purgeCss 的插件
- 通过 node glob 的属性 就可以使用 **/** 这样的属性 
```js
new PurgeCssPlugin({
  paths: glob.sync(`${resolveApp('./src')}/**/*`, {nodir: true}),
  safelist: function() {
    return : {
      stand: ['body']
    }
  }
})
```

## 压缩

### http 压缩
> 就是请求数据文件的时候,请求的文件, 类似boundjs 这样的文件 
- 通过webpack 上面的插件进行相关的操作 

### html 压缩
- html-webpack-plugin 文件中的minify 的属性进行控制
- inline-webpack-html-plugin 注入 js到 html 的一个插件
