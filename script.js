"use strict";
console.log("Rock Paper Scissors");
function getComputerChoice() {
    return "Random: Rock Paper Scissors";
}

function playOneRound(playerSelection, computerSelection) {
    return "You Lose! Paper beats Rock";
}

function game() {
    // 5 rounds
    for (let x=0; x<5; x++) {
        playOneRound();    
    }
}