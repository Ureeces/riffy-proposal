function diceTotal(diceAmount, maxDie) {
    let diceRolls = [];
    let total = 0;

    for(let i = 0; i < diceAmount; i++) {
        let die = diceRoll(maxDie);

        diceRolls.push(die);
        total += die;
    }

    const diceMessage = printRolls(diceRolls, total);
    return diceMessage;
}

// Method for Individual Dice Roll
function diceRoll(maxDie) {
    const roll = Math.floor((Math.random() * maxDie) + 1);
    return roll;
}

// Method for creating message for dice roll
function printRolls(diceRolls, rollTotal) {
    let message = '';
    
    for(let i = 0; i < diceRolls.length; i++) {
        message += diceRolls[i] + " + ";
    }

    const last = message.length - 2;

    message = message.slice(0, last);
    message += "= " + rollTotal;

    return message 
}

module.exports = diceTotal;