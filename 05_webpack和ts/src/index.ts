const { sum, reduce } = require("./utils/sum.ts");
const formatTime2 = require("./utils/format.ts");

function tet(nihao: string) {
  return '123' + nihao
}

console.log(sum(1, 2));
console.log(reduce('2', 1));
// console.log(tet(12))
console.log(formatTime2.formatTime("123"));
