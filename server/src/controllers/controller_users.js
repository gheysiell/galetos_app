const model_users = require('../models/model_users')

const findAllUsers = async (req, res) => {
    const fetchUsers = model_users.findAll()

    try {
        console.log(fetchUsers[0].dataValues)
        res.status(200)
        res.send(fetchUsers[0].dataValues)
    } catch(err) {
        console.log(`Error: ${err}`)
        res.status(404)
        res.send('Not data for users')
    }
}

module.exports = findAllUsers