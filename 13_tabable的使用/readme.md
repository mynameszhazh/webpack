# tabable 的使用

## syncHook

### 类型

- SyncHook
  - 标准
- SyncBailHook
  - 一个函数如果返回是 ture 后续将不会执行
- SyncLoopHook
  - 一个函数如果返回是 ture 就会一直 `重复执行`
- SyncWaterfallHook
  - 两个相同的数据传递, 会接受到一些上一次执行的数据

## asyncHook

> note 这样的也会串行执行

- 通过 `callback` 进行数据传递
  - tapAsync
- 通过 `promise` 进行数据传递
  - tapPromise
  - 里面通过 .then 进行数据的接受这样

## AsyncParallelHook

> 并行执行

- 用法和上面类型
