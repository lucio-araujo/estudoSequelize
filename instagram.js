const { Usuario, Post, Comentario, sequelize } = require('./models');
const { Op } = require('sequelize');

// Usuario.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Usuario.findByPk(2)
// .then((resultado) => {
//     console.table(resultado.toJSON());
// });

Usuario.findAll({
    where: {
        nome: {[Op.like]: '%a%'}
    }
})
.then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
});

Usuario.findAll({
    where: {
        nome: {[Op.notLike]: '%a%'}
    }
})
.then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
});

// Post.findAll()
// .then((resultado) => {
//     console.log(resultado.map(post => post.toJSON()));
// });

Post.findAll({
    limit: 1,
    offset: 1
})
.then((resultado) => {
    console.log(resultado.map(post => post.toJSON()));
});

// Comentario.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });
