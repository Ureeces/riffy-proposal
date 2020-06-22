// Reference other functions from files
const diceRoller = require('./diceroller.js');
// const printComment = require('./comments.js');

// Get Input from user
const diceAmount = getInput(0);
const diceSides = getInput(1);
const bonus = getInput(2);
let diceMessage = "";

// Handle for single input
if(!diceSides){
    diceMessage = "You need to enter at least 2 numbers my guy.";
}

// Handle for no number input
else if(isNaN(parseInt(diceAmount)) || isNaN(parseInt(diceSides))) {
    diceMessage = "Bro, they need to be NUMBERS";
}

// Process for double input
else if(diceAmount && diceSides && !bonus) {
    diceMessage = diceRoller(diceAmount, diceSides, 0);
    
}

// Handle for both bonus AND bad input
else if(bonus && isNaN(parseInt(bonus))) {
    diceMessage = "Bro, they need to be NUMBERS";
}

// Process for triple input
else if(diceAmount && diceSides && bonus) {
    diceMessage = diceRoller(diceAmount, diceSides, bonus);
}

// Print out feedback to User
console.log(diceMessage);

// Get Input Function
function getInput(i) {
    return process.argv[i + 2];
}