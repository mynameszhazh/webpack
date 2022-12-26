# webpack 的基本配置

## 文件的打包配置

- entry
- output

## loader

### loader 的基本使用

#### 内联方式

> 直接在我导入的地方添加 loader 前缀

#### cli 方式

> 文档中可以查找

#### 配置方式

> 常规手段,进行 loader 配置, module -> rules 中进行 loader 的配置

### postcss-loader

#### 怎么使用

- 注意需要进行 postcss-cli 的下载才能进行进一步的使用

### file-loader 和 url-loader

> 静态资源的一些处理方式

- 不过在 webpack5 之后,就有内置的一些 静态资源的加载方式了
- type: 'asset/resource'
  - output 中进行一些其他的配置
  ```js
  assetModuleFilename: "img/[name].[hash:6].[ext]";
  ```
- type: 'asset/inline'
  - 这个冲上去 干就完事了
- type: 'asset'
  - 在 rules 中还是进行一些其他的配置
  ```js
  generator: {
    filename: 'img/[name].[hash:6].[ext]'
  },
  parser: {
    // 静态资源的 大小设置
    dataUrlCondition: {
      maxSize: 10*1024
    }
  }
  ```
