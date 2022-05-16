const router = require('express').Router()
const controller = require('./controllers/controller_pedido.js')

router.get('/', controller.home)

module.exports = router