function* sort(array) {
    var index = 1;
    while (index <= array.length / 3) {
        index = 3 * index + 1;
    }
    while (index > 0) {
        for (var i = index; i <= array.length; i += index / 2) {
            for (var j = i; (j > 0) && (array[j] < array[j - index]); j -= index ) {
                var k = array[j];
                array[j] = array[j - index];
                array[j - index] = k;
            }
            yield array;
        }
        index = --index / 3;
    }
    return array;
}

module.exports = sort;


