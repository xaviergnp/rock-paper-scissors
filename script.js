"use strict";
console.log("Rock Paper Scissors");
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*30)+1;
    let computerChoice = randomNumber == 1? "rock" : randomNumber == 2 ? "paper" : "scissors";
    return "Random: Rock Paper Scissors";
}

function playOneRound(playerSelection, computerSelection) {
    return "You Lose! Paper beats Rock";
}

function game() {
    // 5 rounds
    for (let x=0; x<5; x++) {
        let round = `Rock Paper Scissors: Round ${x+1}`;
        alert(round);
        console.log(round);

        let playerSelection = prompt("Choose your hand: Rock | Paper | Scissors");
        let computerSelection = getComputerChoice();
        playOneRound(playerSelection, computerSelection);    
    }
}
