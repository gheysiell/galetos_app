const db = require('./index')

const model_pedidos = db.galetos.define('pedidos', {
    id: {
        type: db.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    status: db.DataTypes.BOOLEAN,
    name: db.DataTypes.STRING
}, {
    freezeTableName: true,
    timestamps: false
})

async function synchronizeModel() {
    await model_pedidos.sync()
    .then(() => console.log("Table pedidos sincronized."))
    .catch(err => console.log(`Error: ${err}`))
}
synchronizeModel()

module.exports = model_pedidos