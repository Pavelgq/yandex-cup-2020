
const task = require("./training/f1/f1");
const test = require("./training/f1/test");


const ans = task(test.input);
// const testAns = test.output[0];

console.log(ans)