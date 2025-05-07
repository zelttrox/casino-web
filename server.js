// Import modules
const express = require("express")

// Define server variables
const server = express()
const port = 3030


// Define parsing middlewares
server.use(express.urlencoded({extended: true}))
server.use(express.json())

// Define static folder
server.use(express.static("static"))
server.use(express.static("uploads"))

// Root GET request handler
server.get("/", function (request, response) {
    response.render("index", {user: user.data})
})

// Define routes
server.use("/browse", browse_router)
console.log("[Server]", "Using /browse route")
server.use("/artist", artist_router)
console.log("[Server]", "Using /artist route")

server.use("/login", login_router)
console.log("[Server]", "Using /login route")
server.use("/register", register_router)
console.log("[Server]", "Using /register route")
server.use("/profile", profile_router)
console.log("[Server]", "Using /profile route")

server.use("/apply", apply_router)
console.log("[Server]", "Using /apply route")
server.use("/upload", upload_router)
console.log("[Server]", "Using /upload route")

// Define admin route
server.use("/admin", admin_router)

// Set user as guest
user.Clear()

// Initialize the MySQL database
async function InitDatabase() {
    await database.Setup()
    database.songs = await database.GetSongs()
    database.applies = await database.GetApplies()
}

InitDatabase()

// Start listening for connections
server.listen(port, function () {
    console.log("[Server]", "Server started on port", port)
    console.log("[Server]", "Now listening..")
})