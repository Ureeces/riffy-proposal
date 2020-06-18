// Reference other functions from files
const diceRoller = require('./diceroller.js');

// Get Input from user
const diceAmount = getInput(0);
const diceSides = getInput(1);

// Messages to Input to User
const diceMessage = diceRoller(diceAmount, diceSides);

// Print out feedback to User
console.log(diceMessage);

// Get Input Function
function getInput(i) {
    return process.argv[i + 2];
}