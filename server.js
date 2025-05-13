// Import modules
const express = require("express")

// Define server variables
const server = express()
const port = 3000


// Define parsing middlewares
server.use(express.urlencoded({extended: true}))
server.use(express.json())

// Define static folder
server.use(express.static("static"))

// Root GET request handler
server.get("/", function (request, response) {
    // response.render("index")
    response.send("test")
})


// Start listening for connections
server.listen(port, function () {
    console.log("[Server]", "Server started on port", port)
})