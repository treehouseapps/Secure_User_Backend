const express = require('express')
const server = express()
const bodyParser = require("body-parser")
const cors = require('cors');
require('dotenv').config()
const Model = requre('./model/model')

server.use(bodyParser.json())

const routes = require('./route/routes')


server.get('/', (req, res) => {
    res.json({ msg: 'Hello World ' })
})

server.get('/find', async (req, res) => {
    const data = await Model.find()
    res.json(data)
})
server.use(cors());
server.use('/', routes)

server.listen(process.env.PORT, () => {
    console.log('Server Running in port ' + process.env.PORT)
})
