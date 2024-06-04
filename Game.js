const Player = require('./Player');
const Enemy = require('./Enemy');

class Game {
    constructor(playerName) {
        this.player = new Player(playerName);
        this.enemies = [];
    }

    addEnemy(enemyType) {
        const enemy = new Enemy(enemyType);
        this.enemies.push(enemy);
        console.log(`${enemyType} has entered the game!`);
    }

    playerAttack(attackDamage) {
        if (this.isGameOver()) {
            console.log('Game over. No more actions can be performed.');
            return;
        }

        const enemy = this.findActiveEnemy();
        if (!enemy) {
            console.log('No enemies to attack.');
            return;
        }

        // Random game events during the attack
        if (Math.random() <= 0.2) {
            const counterDamage = Math.round(Math.random() * 10) * 10;
            this.player.takeDamage(counterDamage);
            console.log(`Enemy strikes back causing ${counterDamage} damage!`);
        }

        if (Math.random() <= 0.2) {
            console.log('Player missed the attack.');
            return;
        }

        if (Math.random() <= 0.2) {
            console.log('Enemy dodged the attack.');
            return;
        }

        enemy.takeDamage(attackDamage);
        this.isGameOver(); // Check if game is over after the attack
    }

    findActiveEnemy() {
        return this.enemies.find(enemy => enemy.health > 0);
    }

    isGameOver() {
        if (this.player.health <= 0) {
            console.log('Player is dead.');
            return true;
        } else if (this.enemies.every(enemy => enemy.health <= 0)) {
            console.log('All enemies are defeated. You win!');
            return true;
        }
        return false;
    }

    // displayGameState() {
    //     console.log(`Player Health: ${this.player.health}`);
    //     this.enemies.forEach((enemy, index) => {
    //         console.log(`Enemy ${index + 1} (${enemy.type}) Health: ${enemy.health}`);
    //     });
    // }
}

module.exports = Game;