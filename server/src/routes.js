const router = require('express').Router()
const controller = require('./controllers/controller_pedido.js')

router.get('/todos', controller.getPedido)
router.post('/todos', controller.addPedido)
router.put('/todos', controller.putPedido)
router.delete('/todos/:id', controller.delPedido)

module.exports = router