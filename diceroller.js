// Reference for other functions
const printComment = require('./comments.js');

function diceTotal(diceAmount, maxDie, bonus) {
    let diceRolls = [];
    let rollTotal = 0;

    for(let i = 0; i < diceAmount; i++) {
        let die = diceRoll(maxDie);

        diceRolls.push(die);
        rollTotal += die;
    }

    total = parseInt(rollTotal) + parseInt(bonus);
    let rollMessage = printRolls(diceRolls, total, rollTotal, bonus);
    let commentMessage = '\n' + printComment(rollTotal, maxDie, diceAmount);

    const diceMessage = rollMessage + commentMessage;
    return diceMessage;
}

// Method for Individual Dice Roll
function diceRoll(maxDie) {
    const roll = Math.floor((Math.random() * maxDie) + 1);
    return roll;
}

// Method for creating message for dice roll
function printRolls(diceRolls, total, rollTotal, bonus,) {
    let message = '';
    
    for(let i = 0; i < diceRolls.length; i++) {
        message += diceRolls[i] + " + ";
    }

    // Reformat the rolls
    const last = message.length - 2;
    message = message.slice(0, last);
    
    message += "= " + rollTotal;
    
    if(bonus !== 0) {
        message +="\nYou have a modifier of " + bonus + ", so the actual total = " + total;   
    }

    return message;
}

module.exports = diceTotal;