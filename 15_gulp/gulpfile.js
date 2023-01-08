const gulp = require("gulp");
const gulpBabel = require("gulp-babel");
const gulpUglify = require("gulp-uglify");
const { src, dest } = gulp;

function taskMain(cb) {
  src("./src/index.js")
    .pipe(
      gulpBabel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(gulpUglify())
    .pipe(dest("./dist"));
  cb();
}

module.exports.default = taskMain;
