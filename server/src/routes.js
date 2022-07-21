const router = require('express').Router()
const controller_pedido = require('./controllers/controller_pedido.js')
const controller_products = require('./controllers/controller_products')

router.get('/pedidos', controller_pedido.select_all_pedidos)
router.post('/pedidos', controller_pedido.insert_pedidos)
router.put('/pedidos', controller_pedido.update_pedidos)
router.delete('/pedidos', controller_pedido.delete_pedidos)

router.get('/products', controller_products.listProducts)

module.exports = router