const db = require('./index')

const model_products = db.galetos.define('products', {
    id: {
        type: db.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: db.DataTypes.STRING,
    valor: db.DataTypes.FLOAT,
    estoque: db.DataTypes.INTEGER
}, {
    freezeTableName: true,
    timestamps: false
})

async function synchronizeModel() {
    await model_products.sync()
    .then(() => console.log("Table products sincronized."))
    .catch(err => console.log(`Error: ${err}`))
}
synchronizeModel()

module.exports = model_products