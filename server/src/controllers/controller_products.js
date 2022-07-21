const model_products = require('../models/model_products')
const controller_log_errors = require('./controller_log_errors')

const listProducts = async (req, res) => {
    const fetchProducts = await model_products.findAll()

    try {
        res.status(200)
        res.send(fetchProducts)
    } catch(err) {
        res.status(404)
        res.send("Error in search")
        console.log(`Error: ${err}`)
        controller_log_errors.insertLogErrors(err)
    }
}

module.exports =  {
    listProducts 
}