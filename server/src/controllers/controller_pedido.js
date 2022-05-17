const model_pedido = require('../models/model_pedido')

const getPedido = async (req, res) => {    
    const pedidos = await model_pedido.findAll()
    res.status(200).json(pedidos)
}

const addPedido = async (req, res) => {
    const pedido = req.body
    console.log(typeof(req.body.status))
    await model_pedido.create({status: pedido.status, name: pedido.name})
    res.status(201).send("inserted")
}

const putPedido = async (req, res) => {
    const pedido = req.body

    if(!pedido.id) {
        return res.status(400).json("Id is obrigatory")        
    }

    const pedidoExists = await model_pedido.findOne({where: {
        id: pedido.id
    }})

    if (pedidoExists == null) {
        return res.status(404).send(`Id ${pedido.id} not found`)
    }

    await model_pedido.update({status: pedido.status, name: pedido.name}, {where: {
        id: pedido.id
    }})
    .then(() => {
        res.status(200).send("updated")
    })
    .catch(err => {
        res.status(404).send("oops")
        console.log("Error: "+err)
    })    
}

const delPedido = async (req, res) => {
    const id = req.params

    if (id == null) {
        return res.status(404).send("Id is obrigatory")
    }

    const pedidoExists = await model_pedido.findOne({where: {
        id: id.id
    }})

    if (pedidoExists == null) {
        return res.status(404).send("Id not found")
    }

    await model_pedido.destroy({where: {
        id: id.id
    }})

    res.status(200).send("deleted")
}

module.exports = { getPedido, addPedido, putPedido, delPedido }