/**
 * @param {Good|Comment} data - ссылка на товар, отзыв или ответ на отзыв,
 * из которой нужно восстановить все возможные данные
 * @return {string}
 */
module.exports = function (data) {
    const ref = data;

    const goods = [];
    const comments = [];

    traverse({
        ref
    }, {
        comment(comment, deeper) {
            comments.push(comment);
            deeper(comment.parent);
            deeper(comment.comments);
        },
        good(good, deeper) {
            goods.push(good);
            deeper(good.related);
            deeper(good.comments);
        }
    });



    goods.sort((g1, g2) => g1.name > g2.name ? 1 : (g1.name < g2.name ? -1 : 0));
    comments.sort((g1, g2) => g1.text > g2.text ? 1 : (g1.text < g2.text ? -1 : 0));

    const commentLine = t => `${
        t.text
    }${	
        t.parent.type === 'good' ? ` - про ${t.parent.name}` : ''
    }`;



    const result =
        `## Отзывы
    ${renderComments()} \n` +
        `\n## Товары 
    ${renderGoods()}`




    function renderComments(parent = null, indent = 0) {

        return comments
            .filter(t => {
                if (parent) {
                    return t.parent === parent
                } else {
                    return t.parent.type === 'good';
                }
            })
            .map(t => [
                '\n',
                ' '.repeat(indent),
                '- ', commentLine(t),
                t.comments.length ? renderComments(t, indent + 2) : ''
            ].join(''))
            .join('');
    }


    function renderGoods() {
        return `${goods.map(el => `\n- ${el.name}${el.related.sort((g1,g2) => g1.name > g2.name ? 1 : (g1.name < g2.name ? -1 : 0)).map(t => `\n  * ${t.name}`).join('')}`).join('')}`
    }

    function traverse(cfx, handlers) {
        if (!cfx.ref) {
            return
        }

        const visited = cfx.visited || new Set();
        if (visited.has(cfx.ref)) {
            return
        }
        visited.add(cfx.ref);

        handlers[cfx.ref.type](cfx.ref, goDeeper);

        function goDeeper(subrefs) {
            for (const subref of [].concat(subrefs)) {
                traverse({
                    visited,
                    ref: subref
                }, handlers);
            }
        }
    }

    return result;
}