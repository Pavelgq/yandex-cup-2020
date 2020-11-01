var mocha = require('mocha');
var should = require('chai').should();
const assert = require('chai').assert;
const {
    expect
} = require('chai');


const task = require("../quality/task2/index");
const data = require("../quality/task2/test");

// const myArray = task(data.input);
// const testArray = data.output;

describe('test members', function() {
    it('should pass', function() {
        data.output.should.have.members(task(data.input));
    });
});