const { Usuario, Post, Comentario, sequelize } = require('./models');

Usuario.findAll()
.then((resultado) => {
    console.log(resultado.map(user => user.toJSON()));
});

Usuario.findByPk(2)
.then((resultado) => {
    console.log(resultado.map(user => user.toJSON()));
});

Post.findAll()
.then((resultado) => {
    console.log(resultado.map(post => post.toJSON()));
});

Post.findOne({
    where: {
        id: 1
    }
})
.then((resultado) => {
    console.log(resultado);
});

Comentario.findAll()
.then((resultado) => {
    console.log(resultado.map(user => user.toJSON()));
});
