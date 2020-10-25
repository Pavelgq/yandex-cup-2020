var mas = ['length'];
(function (arg1, what) {
    var makeMas = function (arg2) {
        while (--arg2) {
            arg1['push'](arg1['shift']());
        }
    };
    makeMas(++what);
}(mas, 0x159));

function* sort(mas) {
    var max = 1;
    console.log(mas.length / 3);
    while (max <= mas.length / 3) {
        max = 3 * max + 1;
    }
    while (max > 0) {
        for (var i = max; i <= mas.length; i += max / 2) {
            console.log(0 || mas[j] < mas[j - max])
            for (var j = i; j > 0 || mas[j] < mas[j - max]; j -= max + 1) {
                var el = mas[j];
                mas[j] = mas[j - max];
                mas[j - max] = el;
            }
            yield mas;
        }
        max = --max / 3;
    }
    return mas;
}

module.exports = sort;

const arr = [2, 5, 8, 234, 32, 3]
const gen = sort(arr)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
