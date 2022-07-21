const { Sequelize, DataTypes } = require('sequelize')
const config = require('../config')

const galetos = new Sequelize(config.db_name, config.db_user, config.db_pass, {
    host: config.db_host,
    dialect: 'mysql'
})
galetos.authenticate()
.then(() => console.log('Connected in galetos db'))
.catch(err => console.log(`Error: ${err}`))

module.exports = { 
    galetos,
    DataTypes
}