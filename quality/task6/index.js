// const input = {
//     // абсолютный путь до дирректории проекта в файловой системе
//     absoluteRepoPath: "/var/www/projects/project1",
//     // список алиасов по путям из исходной системы сборки
//     aliases: {
//         "@": "/var/www/projects/project1/src",
//     },
//     // список всех входных точек приложения
//     entrypoints: [
//         "/var/www/projects/project1/src/pages/a.js",
//         "/var/www/projects/project1/src/pages/b.js",
//     ],
//     // информация о всех модулях данного проекта
//     modules: [{
//             // относительный от корня путь
//             file: "./src/pages/a.js",
//             deps: [
//                 // валидная для исходной системы сборки строка, описывающая путь до модуля
//                 // гарантируется, что такой модуль существует и описан в данной секции
//                 "/var/www/projects/project1/src/a.js",
//             ],
//         },
//         {
//             file: "./src/pages/b.js",
//             deps: [
//                 "@/a.js",
//             ],
//         },
//         {
//             file: "./src/a.js",
//             deps: [],
//         },
//         {
//             file: "./src/f.js",
//             deps: [],
//         },
//         {
//             file: "./src/g.js",
//             deps: [],
//         },
//     ],
// }

// function parsePath(path) {
//     let arr = path.split('/');

//     return arr;
// }

// //aliases = [{simbol: '', path: ''}]
// function allPath(path, aliases) {
//     let arr = [];
//     arr= path.slice();
//     if (arr[0]) {
//         aliases.some(el => {
//             if (arr[0] === el.simbol) {
//                 arr[0] = el.path
//                 return true
//             }
//         })
//     }
//     return arr.join('/')
// }

// function findNotUsed(input) {
//     let aliases = [];
//     let use = new Set();
//     let notUse = new Set();

//     aliases.push({
//         simbol: '.',
//         path: input.absoluteRepoPath
//     });

//     for (const key in input.aliases) {
//         const element = input.aliases[key];
//         aliases.push({
//             simbol: key,
//             path: element
//         }); 
//     }

//     input.entrypoints.forEach(el => {
//         use.push(checkPath(el));
//     });

//     input.modules.forEach(el => {
//         if (el.deps.length) {
//             el.deps.forEach(el => {
//                 use.push(checkPath(el))
//             })
//         } else {
//             let path = checkPath(el.file)
//             if (!use.has(path)) {
//                 notUse.push(path)
//             }
//         }
//     })

//     function checkPath(el) {
//         if (el[0] === '/') {
//             return el;
//         } else {
//             let path = parsePath(el);
//             return allPath(path, aliases);
//         }
//     }

//     return Array.from(notUse) ;
// }
// module.exports = 
const use = function (input) {
    let aliases = [];
    let wait = new Set();
    let res = new Set();

    aliases.push({
        simbol: '.',
        path: input.absoluteRepoPath
    });

    for (const key in input.aliases) {
        const element = input.aliases[key];
        aliases.push({
            simbol: key,
            path: element
        });
    }

    input.modules.forEach(el => {
        let path = checkPath(el.file)
        wait.add(path)
         if (el.deps.length) {
            el.deps.forEach(el => {
                let elPath = checkPath(el);
                let index = res.has(path)
                if (!index) {
                	res.add(elPath)
                } else {
                    res.delete(path);
                    res.add(elPath)
                }
            })
        } else {
            	if (!~res.has(path)) {
                	res.add(path)
                }
        }
    })

    function parsePath(path) {
        let arr = path.split('/');

        return arr;
    }

    //aliases = [{simbol: '', path: ''}]
    function allPath(path, aliases) {
        let arr = [];
        arr = path.slice();
        if (arr[0]) {
            aliases.some(el => {
                if (arr[0] === el.simbol) {
                    arr[0] = el.path
                    return true
                }
            })
        }
        return arr.join('/')
    }

    function checkPath(el) {
        if (el[0] === '/') {
            return el;
        } else {
            let path = parsePath(el);
            return allPath(path, aliases);
        }
    }
    let result = Array.from(res)
    result.sort();
    return result;
}

const input = {
    // абсолютный путь до дирректории проекта в файловой системе  
    absoluteRepoPath: "/var/www/projects/project1",
    // список алиасов по путям из исходной системы сборки  
    aliases: {
        "@": "/var/www/projects/project1/src",
    },
    // информация обо всех модулях данного проекта  
    modules: [{
            file: "./src/pages/f.js",
            deps: [
                "./src/pages/c.js"
            ],
        },
        {
            file: "./src/pages/b.js",
            deps: ["./src/pages/d.js"],
        }, {
            file: "./src/pages/d.js",
            deps: ['./src/pages/k.js'],
        },

        {
            // относительный от корня путь  
            file: "./src/pages/a.js",
            deps: [
                // валидная для исходной системы сборки строка, описывающая путь до модуля  
                // гарантируется, что такой модуль существует и описан в данной секции  
                "/var/www/projects/project1/src/b.js",
                "./b.js"
            ],
        },
        {
            file: "./src/pages/c.js",
            deps: [],
        },
        {
            file: "./src/pages/k.js",
            deps: [],
        },
        {
            file: "./k.js",
            deps: [],
        },
        {
            file: "./src/k.js",
            deps: [],
        },

    ],
}

console.log(use(input));