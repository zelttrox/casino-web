// Import scripts
const data = require("./model")

// Initialize API content
var content = {
    "credits": data.credits,
    "jackpot": data.jackpot,
    "bets": data.bets,
    "items": data.items
}

// Exports
module.exports = content
