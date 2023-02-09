"use strict";
console.log("Rock Paper Scissors");
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)+1;
    let computerChoice = randomNumber == 1? "rock" : randomNumber == 2 ? "paper" : "scissors";
    return computerChoice;
}

function playOneRound(playerSelection, computerSelection) {
    if (String(playerSelection).length == String(computerSelection).length) {
        return `It's a draw! ${playerSelection} v ${computerSelection}`;
    } else if (String(playerSelection).length > String(computerSelection).length || 
    (String(playerSelection).length == 4 && String(computerSelection).length == 8 )) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${playerSelection} is beaten by ${computerSelection}`;
    }
}

function game() {
    // 5 rounds
    for (let x=0; x<5; x++) {
        let round = `Rock Paper Scissors: Round ${x+1}`;
        console.log(round);
        alert(round);

        let playerSelection = prompt("Choose your hand: Rock | Paper | Scissors").toLowerCase();
        let computerSelection = getComputerChoice();
        let result = playOneRound(playerSelection, computerSelection);    
        console.log(result);
        alert(result);
    }
}
