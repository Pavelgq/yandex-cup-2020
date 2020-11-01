
const task = require("./quality/task2/index");
const test = require("./quality/task2/test");


const myArray = task(test.input);
const testArray = test.output;

console.log(myArray, testArray)