const Game = require('./Game');

class GameController {
    constructor(playerName) {
        this.game = new Game(playerName);
    }

    parseCommand(command) {
        const args = command.split(' ');
        switch (args[0]) {
            case 'add_enemy':
                this.game.addEnemy(args[1]);
                break;
            case 'attack':
                this.game.playerAttack(parseInt(args[1]));
                break;
            default:
                console.log('Unknown command.');
        }
    }
}

module.exports = GameController;