/***  
 * @param container {Node} ссылка на DOM-node, в которую нужно вписать строку ‘str‘  
 * @param str {string} строка, которую необходимо вписать. Максимальная длина равняется 100 символам  
 * @param min {number} минимальный размер шрифта (целое число, min >= 1)  
 * @param max {number} максимальный размер шрифта (целое число, max >= min >= 1)  
 * @return {number | null} искомый размер шрифта (целое число) или null, если текст вписать нельзя  
 */
function calcFontSize(container, str, min, max) {
    const width = parseInt(container.style.width);
    const height = parseInt(container.style.height);
    container.innerText = str;
    let first = min;
    let last = max;
    let found = false;
    let middle;

    while (found === false && first <= last) {
        middle = Math.floor((first + last) / 2);
        container.style.fontSize = middle + 'px';
        textSize = inlineSize(container);
        if (textSize.width == width) {
            found = true;
        } else if (textSize.width > width) {
            last = middle - 1;
        } else {
            first = middle + 1;
        }
    }
    container.style.fontSize = middle + 'px';
        textSize = inlineSize(container);
    // if (textSize.width > width) {
    //     middle = null;
    // }

    if (middle && textSize.height > height) {
        while (textSize.height > height && middle >= min) {
            middle -= 1;
            container.style.fontSize = middle + 'px';
            textSize = inlineSize(container);
        }
        if (middle < min) {
            middle = null
        }
    }


    return middle
}

function inlineSize(el) {
    let hiddenStyle = "left:-10000px;top:-10000px;height:auto;width:auto;position:absolute;display:flex;";
    let clone = document.createElement('div');
    clone.setAttribute('style', hiddenStyle)
    for (let i in el.style) {
        try {
            if (i == 'fontSize') {
                clone.style[i] = el.style[i];
                console.log(clone.style[i])
            }

        } catch (e) {}
    }
    clone.innerHTML = el.innerHTML
    parent.document.body.appendChild(clone);
    let rect = {
        width: clone.clientWidth,
        height: clone.clientHeight
    };
    parent.document.body.removeChild(clone);
    return rect;
}



console.log(calcFontSize(document.getElementById("container"), "Топ-10 jQuery-плагинов недели", 10, 100));