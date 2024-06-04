const readline = require('readline');
const GameController = require('./GameController');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const controller = new GameController('Player1');

console.log('Welcome to the game! Type commands to play.');

rl.on('line', (input) => {
    controller.parseCommand(input);
});