const db = require('../models')

const pedidos = db.sequelize.define('pedidos', {
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descricao: {
        type: db.Sequelize.STRING
    },
    quantidade: {
        type: db.Sequelize.INTEGER
    },
    data: {
        type: db.Sequelize.DATE
    }
})

module.exports = pedidos