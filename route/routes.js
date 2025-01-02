const express = require("express")
const server = express.Router()

const { login, signup } = require('../controller/controller')

server.post('/login', login)
server.post('/signup', signup)


module.exports = server