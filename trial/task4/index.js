/**
 * На выходе должна получиться строка с markdown-разметкой:

    | Command | Description | **Is implemented** |  
    | ---: | :--- | :---: |  
    | **git status** | List all new or modified files | **Yes** |  
    | **git diff** | Show file differences that haven’t been staged | No |
    Первая встретившаяся строка в таблице должна всегда превращаться в строку-заголовок в markdown-разметке. 
    Все остальные строки идут в тело таблицы. 
    Разделитель заголовка выводится всегда.
    Содержимое td вставляется как есть, содержимое th как **bold**.
    Между содержимым ячейки в markdown-разметке и разделителями ячеек (|) всегда один пробел.
    Пробелы по краям содержимого тегов td и th должны быть удалены. 
    Переносы строк в содержимом ячеек должны быть удалены. 
    Более одного пробела подряд в содержимом ячеек должны быть заменены одним пробелом.
    За выравнивание в ячейках столбцов markdown-таблицы отвечает форматирование разделителя заголовка: 
    | :--- | значит выравнивание по левому краю 
    | :---: | значит выравнивание по центру 
    | ---: | значит выравнивание по правому краю
    При отсутствии заданного в теге col атрибута align выравнивание должно быть задано влево.

    Примечания
    Для перевода строки нужно использовать символ \n.
    Решение будет проверяться в браузерном окружении (Chrome 78) с доступом к объектам document и window.
    Можно использовать синтаксис до es2018 включительно.
    */

const input = `<table>  

<thead>  
    <tr>  
        <td>Command         </td>  
       
    </tr>  
</thead>  
<tbody>  
    <tr>  
        <th>git status</th>  
        
    </tr>  
    <tr>  
        <th>git diff</th>  
    
    </tr>  
</tbody>  
</table>`

function solution(input) {
    const div = document.createElement('div');
    div.innerHTML = input;
    const table = div.firstChild;

    const nodesType = {
        'colgroup': colgroupElements,
        'thead': theadElements,
        'tbody': tbodyElements
    }

    const nodes = table.children;
    let markdown = []
    let col = '';
    for (let child of nodes) {
        
        if (child.tagName.toLowerCase() === 'colgroup') {
            col = nodesType[child.tagName.toLowerCase()](child);
        } else {
            const mas = nodesType[child.tagName.toLowerCase()](child)

            if (Array.isArray(mas)) {
                mas.forEach(element => {
                    markdown.push(element);
                });

            } else {
                markdown.push(mas)
            }
        }
    }
    let result = '';
    const endChar = '\n';
    for (let i = 0; i < markdown.length; i++) {
        const element = markdown[i];
        result += element;
        if (i === 0) {
            if (!col) {
                const helper = result.split(' | ');
                for (let j = 0; j < helper.length; j++) {
                    col += '| :--- ';
                }
                col += '|';
            }
            result += endChar;
            result += col;
        }
        result += endChar;
    }
    return result;
}

function colgroupElements(child) {
    const defoldAlign = ' :--- ';
    const align = {
        left: ` :--- `,
        center: ` :---: `,
        right: ` ---: `
    }
    let result = `|`;
    for (let i = 0; i < child.children.length; i++) {
        const node = child.children[i]
        result += node.align ? align[node.align] : defoldAlign;
        result += `|`;
    }
    return result;
}


function theadElements(child) {
    const result = [];
    for (let i = 0; i < child.children.length; i++) {
        const node = child.children[i];
        result.push(field(node));
    }
    return result;
}

function tbodyElements(child) {
    const result = [];
    for (let i = 0; i < child.children.length; i++) {
        const node = child.children[i];
        result.push(field(node));
    }
    return result;
}

const fieldContext = (content) => {
    content = clearString(content)
    return {
        'td': content,
        'th': `**${content}**`,
    }
}

const clearLineBreaks = (str) => str.replace(/\r?\n|\r/g, '');
const clearSpaces = (str) => str.replace(/\s+/g, ' ');
const clearString = (str) => clearSpaces(clearLineBreaks(str)).trim();

function field(child) {
    let result = `|`;
    for (let i = 0; i < child.children.length; i++) {
        const node = child.children[i]
        result += ` ${fieldContext(node.innerText)[node.tagName.toLowerCase()]} `;
        result += `|`;
    }
    return result;
}




function pasceToMarkdown() {
    const nodesType = {
        'colgroup': colgroupElements,
        'thead': theadElements,
        'tbody': tbodyElements
    }
    const nodes = root.children[0].children;


}


console.log(solution(input));