class Enemy {
    constructor(type) {
        this.type = type;
        this.health = 50;
    }

    takeDamage(amount) {
        this.health -= amount;
        console.log(`The ${this.type} enemy has ${this.health} health remaining.`);
    }
}

module.exports = Enemy;
