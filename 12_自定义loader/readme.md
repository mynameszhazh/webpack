# 自定义 loader

## loader 的加载顺序

## loader 参数的验证啥的

- schema-utils
  - 通过 loader-uilts 进行参数的获取啥的
  - 通过一个 json 文件进行对应的验证

## loader 工具

- loader-uilts
  - 这个东西的使用一定要建立在 一些构建的 已经可以使用的 loader 上面

## babel/core

## md 文件自动加载到浏览器

- 通过 marker 的库自动生成 md -> html
- html-loader 进行生成 js 文档
- 一般 import 获取的文件
  - 获取的返回值 都是通过 loader 处理完成之后生成的 js 的代码知兴替
- hignlight 进行一些文件的高亮
  - 注意里面是有一些文字默认 css 处理文件这样
