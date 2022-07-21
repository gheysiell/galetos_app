const model_pedido = require('../models/model_pedido')

const select_all_pedidos = async (req, res) => {
    const pedidos = await model_pedido.findAll()
    if(pedidos.length > 0) {
        res.send(pedidos)
        res.status(200)
    } else {
        res.send("no data")
        res.status(404)
    }
}

const insert_pedidos = (req, res) => {
    res.send("new pedido")
}

const update_pedidos = async(req, res) => {

    const update = model_pedido.update({nome: nome, status: status})
}

const delete_pedidos = async(req, res) => {
    res.send("deleted")
}

module.exports = {
    select_all_pedidos,
    update_pedidos,
    delete_pedidos,
    insert_pedidos
}