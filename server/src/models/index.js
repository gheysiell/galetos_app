const Sequelize = require('sequelize')
const config = require('../config')

const sequelize = new Sequelize(config.db_name, config.db_user, config.db_pass, {
    host: config.db_host,
    dialect: 'mysql'
})

sequelize.authenticate()
.then(() => console.log('conectado com sucesso!'))
.catch(err => console.log("Erro: "+err))

module.exports = { sequelize: sequelize, Sequelize: Sequelize }