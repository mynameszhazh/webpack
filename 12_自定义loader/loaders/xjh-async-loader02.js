module.exports = function (content) {
  console.log("async 22");
  const callback = this.async();
  setTimeout(() => {
    callback(null, content);
  }, 2000);
  // this.callback(null, content)
  // return content;
};
