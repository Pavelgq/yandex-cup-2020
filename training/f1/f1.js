/**
 * @param {User|Task} data - последний отредактированный объект в кеше,
 * из которого нужно восстановить все возможные данные  (User или Task)
 * @return {string}
 */
module.exports = function (data) {
    // ваш код
    let ref = data;

    // Коллекции для пользователей и задач
    const users = [];
    const tasks = [];

    // ref в начале — ссылка на переданный узел
    traverse({
        ref
    }, {
        user(user, deeper) {
            users.push(user);
            deeper(user.tasks); // to task.assignee
            deeper(user.spectating); // to task.spectators
        },
        task(task, deeper) {
            tasks.push(task);
            deeper(task.assignee); // to user.tasks
            deeper(task.spectators); // to user.spectating
            deeper(task.parent); // to task.subtasks
            deeper(task.subtasks); // to task.parent
        }
    })

    users.sort((u1, u2) => u1.login < u2.login ? -1 : (u1.login > u2.login ? 1 : 0));
    tasks.sort((t1, t2) => t1.title < t2.title ? -1 : (t1.title > t2.title ? 1 : 0));

    const taskLine = t => `${
        t.title
    }${	
        t.assignee ? `, делает ${t.assignee.login}` : ''
    }${
        t.spectators.length ? `, наблюдают: ${t.spectators.map(u => u.login).join(', ')}` : ''
    }`;

    function renderTasks(parent = null, indent = 0) {
        return tasks
            .filter(t => t.parent === parent)
            .map(t => [
                '\n',
                ' '.repeat(indent), // отбивка
                '- ', taskLine(t), // вывод названия задачи
                t.subtasks.length ? renderTasks(t, indent + 2) : '' // подзадачи рекурсивно
            ].join(''))
            .join('');
    }

    function renderUsers() {
        return `${users.map(u => `\n- ${u.login}${u.tasks.map(t => `\n  * ${t.title}`).join('')}`).join('')}`
    }
        

    const result = (`
    ## Задачи
    ${renderTasks()} \n` +
    `\n## Пользователи
    ${renderUsers()}
    `).trim();

    return result;
}


/**
 * Абстрактный обходчик, подходящий для всех вариантов
 * @param {{ref: object, visited: ?boolean}} ctx
 * @param {object} handlers — обработчики для каждого типа
 */
function traverse(ctx, handlers) {
    // Не падаем в случае, если ctx.ref пустой, — например, в случае вызова с task.parent
    if (!ctx.ref) {
        return;
    }

    // Предотвращаем обход узлов, сохраняя все посещенные узлы, используя контекст и набор уже посещенных
    const visited = ctx.visited || new Set();
    if (visited.has(ctx.ref)) {
        return;
    }
    visited.add(ctx.ref);

    // Вызываем обработчик для исходного типа узла
    handlers[ctx.ref.type](ctx.ref, goDeeper);

    // Промежуточная функция, позволяющая рекурсивно пойти глубже в обработчиках
    function goDeeper(subrefs) {
        // Запускаем для каждого подузла нужный обработчик
        for (const subref of [].concat(subrefs)) {
            traverse({
                visited,
                ref: subref
            }, handlers);
        }
    }
}