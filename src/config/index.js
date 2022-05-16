require('dotenv').config()

const config = {
    db_host: process.env.DB_HOST,
    db_user: process.env.DB_USER,
    db_pass: process.env.DB_PASS,
    db_name: process.env.DB_NAME,
    app_port: process.env.PORT,
}

module.exports = config