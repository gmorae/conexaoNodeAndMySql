const Sequelize = require('sequelize');
const sequelize = new Sequelize('barbearia', 'root', '', {
    host: "localhost",
    dialect: 'mysql',
    port: '5050'
});

sequelize.authenticate().then(function() {
    console.log("conectado com sucesso")
}).catch(function(erro) {
    console.log("erro : " + erro)
});