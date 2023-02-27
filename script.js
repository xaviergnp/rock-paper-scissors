"use strict";
console.log("Rock Paper Scissors Game");
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)+1;
    let computerChoice = randomNumber == 1? "rock" : randomNumber == 2 ? "paper" : "scissors";
    return computerChoice;
}

function playOneRound(playerSelection, computerSelection) {
    let p1 = String(playerSelection).toUpperCase();
    let comp1 = String(computerSelection).toUpperCase();
    if (p1 == comp1) {
        return `It's a draw! ${p1} v ${comp1}`;
    } else if ((p1 == "SCISSORS" && comp1 == "PAPER") || (p1 == "PAPER" && comp1 == "ROCK") || (p1 == "ROCK" && comp1 == "SCISSORS")) {
        return `You win! ${p1} beats ${comp1}`;
    } else {
        return `You lose! ${p1} is beaten by ${comp1}`;
    }
}

function getPlayerSelection() {
    const playerSelection = document.querySelectorAll(".selection > button");
    let selectionMessage = document.querySelector(".message");
    playerSelection.forEach(select => {
        select.addEventListener("click", e => {
            selectionMessage.textContent = `Choose your hand: ${e.target.textContent}`;
            return e.target.textContent;
        });
    });
}

function game() {
    // 5 rounds
    // for (let x=0; x<5; x++) {
        let x = 1;
        let round = `Rock Paper Scissors - Player vs AI - Round ${x}`;
        console.log(round);
        alert(round);

        // let playerSelection = prompt("Choose your hand: Rock | Paper | Scissors");
        // let playerSelection = document.querySelector
        let playerSelection = getPlayerSelection();
        if (playerSelection) {
            let computerSelection = getComputerChoice();
            let result = playOneRound(playerSelection, computerSelection);    
            console.log(result);
            alert(result)
        };
    // }
}

game();
