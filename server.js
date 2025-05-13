// Import modules
const express = require("express")
const path = require("path")

// Define server variables
const server = express()
const port = 3000


// Define parsing middlewares
server.use(express.urlencoded({extended: true}))
server.use(express.json())

// Define client as static folder
server.use(express.static(path.join(__dirname, 'client/build')))

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

// Start listening for connections
server.listen(port, function () {
    console.log("[Server]","Server started on port", port)
})
