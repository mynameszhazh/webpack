const {
  SyncHook,
  SyncBailHook,
  AsyncParallelHook,
  AsyncSeriesHook,
} = require("tapable");

console.log(SyncHook, SyncBailHook, AsyncParallelHook, AsyncSeriesHook);
