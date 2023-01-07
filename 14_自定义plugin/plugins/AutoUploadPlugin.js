class AutoUploadPlugin {
  // constructor() {}
  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync(
      "AutoUploadPlugin",
      (compilation, callback) => {
        console.log("内容上床了哦");
        callback();
      }
    );
  }
}

module.exports = AutoUploadPlugin;
