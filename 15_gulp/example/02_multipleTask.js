const gulp = require("gulp");
const { series, parallel } = gulp;

const task1 = (cb) => {
  setTimeout(() => {
    console.log("task1");
    cb();
  }, 2000);
};
const task2 = (cb) => {
  setTimeout(() => {
    console.log("task2");
    cb();
  }, 2000);
};

const task3 = (cb) => {
  setTimeout(() => {
    console.log("task3");
    cb();
  }, 2000);
};
const seriesTask = series(task1, task2, task3);
const parallelTask = parallel(task1, task2, task3)

const taskMain = series(parallelTask, seriesTask)

module.exports.default = taskMain;