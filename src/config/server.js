os = require('os')
const host = 'localhost'// os.hostname()
const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({ extended : true}))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, host, () => {
    console.log(`BAKEND is running on http://${host}:${port}`)    
    //console.log(app._router.stack)
})

module.exports = server