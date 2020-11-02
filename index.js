
const task = require("./training/a1/a1");
const test = require("./training/a1/test");


const ans = task(test.input[0]);
const testAns = test.output[0];

console.log(ans, testAns)