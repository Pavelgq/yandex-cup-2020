// обязательно используйте этот парсер для построения дерева  
const parser = require('@babel/parser');  
// для обхода дерева можете использовать данную библиотеку  
// или написать свой обход  
// подробнее тут: https://babeljs.io/docs/en/babel-traverse  
const traverse = require('@babel/traverse').default;  
// обязательно используйте генератор для формирования ответа  
const generate = require('@babel/generator').default;  
 
module.exports = function (filesInfo, entrypoints) {  
    const result = {};  
 
    for (const [filePath, fileText] of Object.entries(filesInfo)) {  
        // подробнее https://babeljs.io/docs/en/babel-parser  
        // однако дополнительных опций не требуется  
        const ast = parser.parse(fileText, {  
            sourceType: 'module',  
        });  
 
        // какие-то манипуляции с деревом исходного файла  
 
        // генерируем новый код из дерева, не добавляйте дополнительных опций  
        // подробнее https://babeljs.io/docs/en/babel-generator  
        const new_code = generate(ast).code;  
 
        result[filePath] = new_code;  
    }  
 
    return result;  
}