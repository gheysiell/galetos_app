const db = require('../models')

const pedidos = db.sequelize.define('pedidos', {
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    status: {
        type: db.Sequelize.BOOLEAN
    },
    name: {
        type: db.Sequelize.STRING
    }
},
{timestamps: false})

module.exports = pedidos