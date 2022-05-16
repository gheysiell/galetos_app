const express = require('express')
const routes = require('./routes')
const expressLayouts = require('express-ejs-layouts')
const app = express()

app.use(expressLayouts)
app.use(express.static('public'))
app.use('/css', express.static('public/css'))
app.use('/js', express.static('public/js'))
app.use('/img', express.static('public/img'))
app.use(express.json())
app.use(routes)

app.set('views', './src/views/')
app.set('view engine', 'ejs')
app.set('layout', './layouts/layout')

module.exports = app