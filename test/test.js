var mocha = require('mocha');
var should = require('chai').should();
const assert = require('chai').assert;
const {
    expect
} = require('chai');


const task = require("../trial/task2/index");
const data = require("../trial/task2/test");

// const myArray = task(data.input);
// const testArray = data.output;

describe('test members', function () {
    function makeTest(x) {
        it('should pass', function () {
            assert.deepEqual(data.output[x], task(data.input[x]));
        });
    }
    for (let x = 0; x < data.input.length; x++) {
        makeTest(x);
    }
});