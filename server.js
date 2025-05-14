// Import modules
const express = require("express")
const path = require("path")

// Import scripts
const data = require("./api/data")

// Define server variables
const server = express()
const port = 3000


// Define parsing middlewares
server.use(express.urlencoded({extended: true}))
server.use(express.json())

// Define client as static folder
server.use(express.static(path.join(__dirname, "client/build")))

server.get("/", (request, response) => {
    
})

server.get("/api", (request, response) => {
    response.json(data)
})

// Start listening for connections
server.listen(port, function () {
    console.log("[Server]","Server started on port", port)
})
