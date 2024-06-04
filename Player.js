class Player {
    constructor(name) {
        this.name = name;
        this.health = 200;
    }

    takeDamage(amount) {
        this.health -= amount;
        console.log(`${this.name} has ${this.health} health remaining.`);
    }
}

module.exports = Player;