const db = require('./index')

const model_users = db.galetos.define('users', {
    id: {
        type: db.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: db.DataTypes.STRING,
    nasc: db.DataTypes.DATE
})

module.exports = model_users