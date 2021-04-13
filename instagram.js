const { Usuario, Post, Comentario, sequelize } = require('./models');
const { Op } = require('sequelize');

// Usuario.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Usuario.findByPk(1, {
//     include: [
//         'posts'
//     ]
// })
// .then((usuario) => {
//     console.log(usuario.toJSON());
// });

// Usuario.findAll({
//     where: {
//         nome: {[Op.like]: '%a%'}
//     }
// })
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Usuario.findAll({
//     where: {
//         nome: {[Op.notLike]: '%a%'}
//     }
// })
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Post.findAll()
// .then((resultado) => {
//     console.log(resultado.map(post => post.toJSON()));
// });

// Post.findByPk(1, {
//     include: [
//         'comentarios'
//     ]
// })
// .then((post) => {
//     console.log(post.toJSON());
// });

Post.findByPk(1, {
    include: [
        'curtiu'
    ]
})
.then((post) => {
    console.log(post.toJSON());
});

// Comentario.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// for (let i = 0; i < 6; i += 2) {
//     Comentario.findAll({
//       order: [['id', 'DESC']],
//       offset: i,
//       limit: 2,
//     }).then((resultado) => {
//       console.table(resultado.map((comment) => comment.toJSON()));
//     });
//   }

//   Usuario.create({
//     nome: 'Lucio Araujo',
//     email: 'lucio.araujo@digitalhouse.com',
//     senha: 'maravilhosaaaa123'
//   }).then((resultado) => {
//     console.table(resultado.toJSON());
// });

// Usuario.update({
//     email: 'sergio@digitalhouse.com'
// }, {
//     where: {
//         id: 2
//     }
// }).then((resultado) => {
//     console.table(resultado);
// });

// Usuario.destroy({
//     where: {
//         id: 3
//     }
// }).then((resultado) => {
//     console.table(resultado);
// });

// Post.create({
//     texto: 'Teste!',
//     img: null,
//     usuario_id: 9,
//     n_likes: 100
// }).then((resultado) => {
//     console.table(resultado.toJSON());
// });

// Usuario.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });
