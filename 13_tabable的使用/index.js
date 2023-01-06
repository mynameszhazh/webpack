const { SyncHook, SyncBailHook, SyncLoopHook, SyncWaterfallHook, AsyncParallelBailHook } = require("tapable");
console.log(a);

class LeanrTabable {
  constructor() {
    this.hook = {
      syncHook: new SyncHook(["name", "age"]),
    };

    this.hook.syncHook.tap("event1", (name, age) => {
      console.log("event1", name, age);
    });

    this.hook.syncHook.tap("event2", (name, age) => {
      console.log("event2", name, age);
    });
  }

  emit() {
    this.hook.syncHook.call("xjh", 10);
    this.hook.syncHook.call("curry", 30);
  }
}

let temp = new LeanrTabable();

temp.emit()
