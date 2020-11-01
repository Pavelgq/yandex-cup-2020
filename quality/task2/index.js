module.exports = function (input) {

    const reg = /^[A-Z]{2,8}\-[0-9]{2,8}\/[A-Z]+(\-?[A-Z]+)*\/([A-Z]+)\:\{(.*)\}/
    const find = /@(.+?)@/;

    const arr = input.filter((el, index, array) => {
        let ans = reg.test(el);
        if (ans) {
            let res = el.match(reg);
            console.log(res);
            if (repeatChars(res[2])) {
                while (find.test(array[index])) {
                    array[index] = array[index].replace(find, '<spam>$1</spam>');
                }

                return ans
            }
        }

    });


    // for (let j = 0; j < arr.length; j++) {
    //     while (find.test(arr[j])) {
    //         arr[j] = arr[j].replace(find, '<spam>$1</spam>');
    //     }
    // }

    const result = arr;
    arr.forEach(element => {
        console.log(element)
    });
    return result;
}

function repeatChars(str) {
    let arr = str.split('');

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return false;
            }
        }
    }
    return true;
}