const db = require('./index')

const model_log_errors = db.galetos.define('log_errors', {
    id: {
        type: db.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    error_message: db.DataTypes.STRING,
    date: db.DataTypes.DATE
}, {
    freezeTableName: true,
    timestamps: false
})

async function synchronizeModel() {
    await model_log_errors.sync()
    .then(() => console.log("Table log_errors sincronized."))
    .catch(err => console.log(`Error: ${err}`))
}
synchronizeModel()

module.exports = model_log_errors