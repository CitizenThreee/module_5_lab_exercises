const express = require('express')

const webServer1 = express()
const webServer1Port = 3000

const webServer2 = express()
const webServer2Port = 3001

const webServer3 = express()
const webServer3Port = 3002

webServer1.get('/', (req, res) => {
    res.send('Hello World! This is web server 1')
})
    
webServer1.listen(webServer1Port, () => {
    console.log(`Web server started on port ${webServer1Port}`)
})

webServer2.get('/', (req, res) => {
    res.send('Hello World! This is web server 2')
})
    
webServer2.listen(webServer2Port, () => {
    console.log(`Web server started on port ${webServer2Port}`)
})

webServer3.get('/', (req, res) => {
    res.send('Hello World! This is web server 3')
})
    
webServer3.listen(webServer3Port, () => {
    console.log(`Web server started on port ${webServer3Port}`)
})