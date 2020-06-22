// returns list of comments for good rolls
function goodComments() {
    const positiveComments = [
        "Congrats on the good roll!",
        "Ayy that's a good roll.",
        "Someone get the camera",
        "MLG Pro.",
        "RNG Jesus smiles upon you!"
    ];

    return positiveComments;
}

// returns list of comments for average rolls
function avgComments() {
    const averageComments = [
        "Could be worse I guess.",
        "Average.",
        "I mean, at least its not bad."
    ];

    return averageComments;
}


// returns list of comments for bad rolls
function badComments() {
    const badComments = [
        "You have my sympathies.",
        "That's a yikes.",
        "That's not cash money.",
        "Gonna need some ointment for that burn.",
        "Pressing F to pay respects.",
        "Mission failed, we'll get 'em next time."
    ];

    return badComments;
}

// Returns a comment based on rolls
function getComment(total, maxDie, diceAmount) {
    // Comment Lists:
    const positiveComments = goodComments();
    
    const okComments = avgComments();
    
    const negativeComments = badComments();

    // Function starts here:
    
    // Randomly generated index of comment based on dice rolls
    let index = 0;
    let comment = "";

    const status = calculateAvg(total, maxDie, diceAmount);

    if(status === "good") {
        index = Math.floor(Math.random() * (positiveComments.length - 1));
        comment = positiveComments[index];
    }

    else if(status === "bad") {
        index = Math.floor(Math.random() * (negativeComments.length - 1));
        comment = negativeComments[index];
    }

    else {
        comment = okComments[index];
    }

    return comment;  
}


function calculateAvg(total, diceAmount, maxDie){
    // Calculate the average for the dice used
    const avgRoll = Math.floor(maxDie / 2) + 1; 
    
    // Calculate average total using the avgRoll
    // The average area will be within a range I haven't calculated yet
    const avgTotal = avgRoll * diceAmount;

    let status = "avg";

    if(total > avgTotal) {
        status = "good";
    }

    else if(total < avgTotal) {
        status = "bad";
    }

    return status;
}

function printComment(total, diceAmount, maxDie) {
   const comment = getComment(total, maxDie, diceAmount);
   return comment;
}

module.exports = printComment;