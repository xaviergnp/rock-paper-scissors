"use strict";
// console.log("Rock Paper Scissors Game");
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)+1;
    let computerChoice = randomNumber == 1? "rock" : randomNumber == 2 ? "paper" : "scissors";
    return computerChoice;
}

function playOneRound(playerSelection, computerSelection) {
    let p1 = String(playerSelection).toUpperCase();
    let comp1 = String(computerSelection).toUpperCase();
    // Your Hand: ${p1}\nAI's Hand: ${comp1}\n\n
    if (p1 == comp1) {
        return `It's a draw! ${p1} v ${comp1}`;
    } else if ((p1 == "SCISSORS" && comp1 == "PAPER") || (p1 == "PAPER" && comp1 == "ROCK") || (p1 == "ROCK" && comp1 == "SCISSORS")) {
        return `You WIN! ${p1} beats ${comp1}`;
    } else {
        return `You LOSE! ${p1} is beaten by ${comp1}`;
    }
}

function getPlayerSelection(roundCount) {
    const playerSelection = document.querySelectorAll(".selection > button");
    // let selectionMessage = document.querySelector(".message");
    let playerSelectedHand;
    let resultList = document.querySelector(".result-list");
    playerSelection.forEach(select => {
        select.addEventListener("click", e => {
            playerSelectedHand = e.target.textContent;
            // selectionMessage.textContent = `Choose your hand: ${e.target.textContent}`;

            let computerSelection = getComputerChoice();

            const resultHolder = document.createElement("p");
            resultList.appendChild(resultHolder);
            resultHolder.textContent = `R${roundCount}: ${playOneRound(playerSelectedHand, computerSelection)}`;
            // let result = playOneRound(playerSelectedHand, computerSelection);    
            // console.log(result);
            // alert(result);
            roundCount++;
        });
    });
}

function game() {
        let roundCount = 1;
        // let round = `Rock Paper Scissors - Player vs AI - Round ${x}`;
        // console.log(round);
        // alert(round);

        getPlayerSelection(roundCount);
}

game();
