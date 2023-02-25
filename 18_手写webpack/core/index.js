// import fs from "fs";
const fs = require("fs");
const babylon = require("babylon");

function createAsset() {
  // 1.获取文件内容
  const source = fs.readFileSync("./main.js", "utf-8");
  // 2.获取文件依赖关系
  const ast = babylon.parse(source, {
    sourceType: "module",
  });
  console.log(ast);
}

createAsset();
