function* sort(arr, first = 1, last = arr['length']) {
    if (first < last) {
        var sort = yield* whatTheFunc(arr, first, last);
        yield* sort(arr, first, sort - 1);
        yield* sort(arr, sort + 1, last);
    }
    return arr;

    function* whatTheFunc(mas, first, last) {
        var el1 = mas[last];
        var j = first;
        for (var i = first; i < last; i++) {
            if (mas[i] < el1) {
                yield noFunc(mas, ++j, i);
            }
        }
        yield noFunc(mas, j + 1, last);
        return j;
    }

    function noFunc(data, el, newEl) {
        [data[el], data[newEl]] = [data[newEl], data[el]];
        return data;
    }
}

module.exports = sort;

