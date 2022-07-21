const model_log_errors = require('../models/model_log_errors')

const insertLogErrors = async (errorMessage) => {
    await model_log_errors.insert({error_message: errorMessage})
    .then(() => console.log('Inserted in log_errors'))
    .catch(err => console.log(`Error: ${err}`))
}

module.exports = {
    insertLogErrors 
}