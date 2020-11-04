// const input = {
//     type: 'comment',
//     text: 'Хорошая цена, у малыша не было аллергии на неё',
//     comments: [],
//     parent: {
//         type: 'good',
//         name: 'Смесь Friso Frisolaс Gold 2035',
//         comments: [

//         ],
//         related: [{
//             type: 'good',
//             name: 'Фигурка Funko POP!Vinyl: Overwatch Уинстон',
//             comments: [],
//             related: [
//                 {
//                     type: 'good',
//                     name: 'МакБук PRO 2035 13\' w / clickbar',
//                     comments: [{
//                         type: 'comment',
//                         text: 'Классный ноутбук!',
//                         comments: [{
//                             type: 'comment',
//                             text: 'Не понравился!Кликбар не работает совсем!',
//                             comments: [],
//                             parent: null
//                         }],
//                         parent: null
//                     }],
//                     related: [

//                     ]
//                 }
//             ]
//         }]
//     }
// }

// input.parent.related[0].related[0].related[0] = input.parent.related[0].related[0];
// input.parent.related[0].related[0].comments[0].parent = input.parent.related[0].related[0];
// input.parent.related[0].related[0].comments[0].comments[0].parent = input.parent.related[0].related[0].comments[0];


// Товары в памяти
const Good1 = {
    type: 'good',
    name: 'Смесь Friso Frisolaс Gold 2035',
    comments: [],
    related: []
};
const Good2 = {
    type: 'good',
    name: 'МакБук PRO 2035 13\' w/ clickbar',
    comments: [],
    related: []
};
const Good3 = {
    type: 'good',
    name: 'Фигурка Funko POP! Vinyl: Overwatch Уинстон',
    comments: [],
    related: []
};

// Отзывы в памяти
const Comment1 = {
    type: 'comment',
    text: 'Классный ноутбук!',
    comments: [],
    parent: null
};
const Comment3 = {
    type: 'comment',
    text: 'Отпадный ноутбук!',
    comments: [],
    parent: null
};
const Comment2 = {
    type: 'comment',
    text: 'Не понравился! Кликбар не работает совсем!',
    comments: [],
    parent: null
};
const input = {
    type: 'comment',
    text: 'Хорошая цена, у малыша не было аллергии на неё',
    comments: [],
    parent: null
};

// Похожие товары
Good3.related.push(Good1, Good2)
Good1.related.push(Good3)
Good2.related.push(Good3)

// Расставляем комментарии
Comment1.parent = Good2;
Good2.comments.push(Comment1);

Comment2.parent = Comment1;
Comment1.comments.push(Comment2);

Comment3.parent = Comment2;
Comment2.comments.push(Comment3);

input.parent = Good1;
Good1.comments.push(input);

// А ссылка осталась только на третий отзыв :-(

module.exports = {
    input
};