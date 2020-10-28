# F. Точки входа (60 баллов)
Точка входа

В руки инженеров космического корабля AVOS попала документация системы жизнеобеспечения.
В документации перечислены модули системы жизнеобеспечения и их зависимости, определяющие порядок. Если модули будут запущены в неправильной последовательности, корабль самоуничтожится.
Для того, чтобы инженерам запустить систему жизнеобеспечения, необходимо найти модули, которые можно запустить первыми.

## Формат ввода
Декларативное описание документа выглядит следующим образом:
{  
    // абсолютный путь до дирректории проекта в файловой системе  
    absoluteRepoPath: "/var/www/projects/project1",  
    // список алиасов по путям из исходной системы сборки  
    aliases: {  
        "@": "/var/www/projects/project1/src",  
    },  
    // информация обо всех модулях данного проекта  
    modules: [  
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
            file: "./src/pages/b.js",  
            deps: [  
                "@/pages/с.js",  
            ],  
        },  
        {  
            file: "./src/pages/c.js",  
            deps: [ ],  
        },  
        {  
            file: "./src/pages/d.js",  
            deps: [ ],  
        },  
    ],  
}
## Формат вывода
Результатом работы алгоритма должен быть лексикографически упорядоченный массив из модулей, с которых можно начать запуск, где каждый модуль описывается через абсолютный путь в файловой системе:
[  
    "/var/www/projects/project1/src/pages/c.js",  
    "/var/www/projects/project1/src/pages/d.js"  
]
Следует понимать, что размерность массива эквивалентна количеству компонент связности в исходном графе. В случае, если для конкретной компоненты связности допустимы несколько модулей для старта, следует выбирать при помощи лексикографического порядка.

## Примечания
Файл с решением требуется оформить по шаблону:

module.exports = function (input) {  
    // ...  
    return result;  
}