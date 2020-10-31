'use strict'
var fs = require('fs');

let line = fs.readFileSync('input.txt', (e, line) => {

});

function taskline(line) {
    let newLine = line.toString();
    const arr = newLine.split('')
    let countUp = (arr[0] === arr[0].toUpperCase()) * 1;
    let countDown = (arr[0] === arr[0].toLowerCase()) * 1;
    let count = 0;
    const chain = []
    let shift = false;
    let prevShift = (arr[0] === arr[0].toUpperCase());
    for (let i = 1; i < arr.length; i++) {
        const el = arr[i];

        if (el === el.toUpperCase() && el !== ' ') {
            shift = true;
        } else {
            if (el === el.toLowerCase() && el !== ' ') {
                shift = false;
            }
        }
        if (shift) {
            countUp += 1;
        } else {
            countDown += 1
        }
        if (shift !== prevShift) {
            if (shift) {
                if (countDown >= 3) {
                    count += 2;
                } else {
                    count += 1;
                }
                chain.push(countDown)
                countDown = 0;
            } else {
                if (countUp >= 3) {
                    count += 2;
                } else {
                    count = 0;
                }
                chain.push(countUp)
                countUp = 0;
            }
        }
        prevShift = shift;
    }
    if (countDown) {
        chain.push(countDown)
    } else {
        if (countUp) {
            chain.push(countUp)
        }
    }
    if (chain.length % 2 === 0) {
        shift = !shift;
    }
    count = 0;
    for (let j = 0; j < chain.length; j++) {
        const el = chain[j];
        if (shift && el > 4) {
            if (j < chain.length - 1) {
                count += 4 + el;
            } else {
                count += 2 + el;
            }
           
        } else {
            if (shift) {
                count += el*2;
            } else {
                count += el
            }
        }
        shift = !shift;
    }
    console.log(chain, count)
    const result = count;

    return result + '';
}

const res = taskline(line);

fs.writeFileSync('output.txt', res, (err) => {
    if (err) throw err;

});