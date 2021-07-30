const readline = require('readline');
let direction = '';
let coords = {};
let robotPlaced = false;

const placeRobot = (instructions) => {
    const validInputs = ['NORTH', 'SOUTH', 'EAST', 'WEST'];
    let instructArray = instructions.split(",");
    let x = instructArray[0];
    let y = instructArray[1];
    let f = instructArray[2];
    if (x >= 0 && x < 5 && y >= 0 && y < 5 && validInputs.includes(f)) {
        direction = f;
        coords = {'x': x, 'y': y};
    } else {
        robotPlaced = false;
    }
}

const robotMove = () => {
    switch (direction) {
        case 'NORTH': {
            if (coords.y < 4) {
                coords.y++
            }
            break;
        }
        case 'SOUTH': {
            if (coords.y > 0) {
                coords.y--
            }
            break;
        }
        case 'EAST': {
            if (coords.x < 4) {
                coords.x++
            }
            break;
        }
        case 'WEST': {
            if (coords.x > 0) {
                coords.x--
            }
            break;
        }
    }
}

const robotTurn = (modifier) => {
    const directionToNum = {'NORTH': 0, 'EAST': 1, 'SOUTH': 2, 'WEST': 3};
    const numToDirection = {0: 'NORTH', 1: 'EAST', 2: 'SOUTH', 3: 'WEST'}
    let directionIndex = directionToNum[direction] + modifier;
    if (directionIndex == -1) directionIndex = 3
    if (directionIndex == 4) directionIndex = 0
    direction = numToDirection[directionIndex];
}

const action = (command, instructions) => {
    switch (command) {
        case 'PLACE': {
            placeRobot(instructions);
            break;
        }
        case 'MOVE': {
            robotMove();
            break;
        }
        case 'LEFT': {
            robotTurn(-1);
            break;
        }
        case 'RIGHT': {
            robotTurn(1);
            break;
        }
        case 'REPORT': {
            console.log('output: ' + Object.values(coords) + ',' + direction);
            break;
        }
    }
}

const readInput = (totalInput) => {
    let instructions = null;
    const validInputs = ['MOVE', 'LEFT', 'RIGHT', 'PLACE', 'REPORT'];
    totalInput.forEach((inputLine) => {
        if (inputLine.startsWith("PLACE")) {
            robotPlaced = true;
            let inputs = inputLine.split(" ");
            inputLine = inputs[0];
            instructions = inputs[1];
        }
        if (!robotPlaced && !validInputs.includes(inputLine)) return;
        action(inputLine, instructions)
    });
}

const input = (rl) => {
    let totalInput = [];

    rl.prompt();

    rl.on('line', (input) => {
        totalInput.push(input);
    })
    
    rl.on('close', () => {
        readInput(totalInput);
    });
}

const main = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    input(rl);
}

main();