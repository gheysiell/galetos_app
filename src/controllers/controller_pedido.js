const model_pedido = require('../models/model_pedido')

const home = (req, res) => {
    res.render('home', { title: 'Home Page'})
}

module.exports = { home }