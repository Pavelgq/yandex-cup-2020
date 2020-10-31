const lines = ["4", "0", "0", "0", "0"]

let b = false;
let N;
let prev;
let count = 0;
let max = 0;
lines.forEach(line => {
    if (!b) {
        N = line;
        b = true;
    } else {
        if (line * 1) {
            count += 1;
            max = Math.max(count, max);
        } else {
            count = 0;
        }
    }
})
console.log(max)