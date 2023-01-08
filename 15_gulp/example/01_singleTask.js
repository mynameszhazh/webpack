const gulp = require("gulp");
function defaultTask(cb) {
  // place code for your default task here
  console.log("defaultTask");
  cb();
}

function foo(cb) {
  // place code for your default task here
  console.log("fooooooooooooooooooooo");
  cb();
}

gulp.task("bar", (cb) => {
  console.log("bar");
  cb();
});

module.exports = {
  defaultTask,
  foo,
};