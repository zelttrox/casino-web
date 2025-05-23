// Import modules
const express = require("express")
const cors = require("cors")
const path = require("path")

// Import scripts
const data = require("./api/data")

// Define server variables
const server = express()
const port = 8080


// Define parsing middlewares
server.use(express.urlencoded({extended: true}))
server.use(express.json())

// Use CORS to allow Frontend requests
server.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

// Define client as static folder
server.use(express.static(path.join(__dirname, "client/public")))

server.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "client/public/index.html"))
})

server.get("/api", (request, response) => {
    response.json(data)
})

// Start listening for connections
server.listen(port, function () {
    console.log("[Server]","Server started on port", port)
})
