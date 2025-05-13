// Item class
class Item {
    constructor(name, value, chance) {
        this.id = name.toLowerCase().replace(/\s/g, "_")
        this.name = name
        this.value = value
        this.chance = chance
        this.icon = `./client/public/uploads/${this.id}.png`
    }
}

// Initialize user variables
var credits = 200

// Initialize slot machine variables
var jackpot = 0
var bets = [100, 200, 300]

// Initialize items array
var items = []

// Add items to the array
items.push(new Item("Jager", 20, 15))
items.push(new Item("Malibu", 10, 30))

console.log(items)


// Exports
module.exports = {credits, jackpot, bets, items}
