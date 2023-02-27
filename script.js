"use strict";
// console.log("Rock Paper Scissors Game");
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)+1;
    let computerChoice = randomNumber == 1? "rock" : randomNumber == 2 ? "paper" : "scissors";
    return computerChoice;
}

function playOneRound(playerSelection, computerSelection, currentPlayerScore, currentAiScore) {
    let p1 = String(playerSelection).toUpperCase();
    let comp1 = String(computerSelection).toUpperCase();
    // Your Hand: ${p1}\nAI's Hand: ${comp1}\n\n
   
    if (p1 == comp1) {
        currentPlayerScore++;
        currentAiScore++;
        return {"message":`It's a draw! ${p1} v ${comp1}`,
                currentPlayerScore,
                currentAiScore};
    } else if ((p1 == "SCISSORS" && comp1 == "PAPER") || (p1 == "PAPER" && comp1 == "ROCK") || (p1 == "ROCK" && comp1 == "SCISSORS")) {
        currentPlayerScore++;
        return {"message":`You WIN! ${p1} beats ${comp1}`,
                currentPlayerScore,
                currentAiScore};
    } else {
        currentAiScore++;
        return {"message":`You LOSE! ${p1} is beaten by ${comp1}`,
                currentPlayerScore,
                currentAiScore};
    }
    
}

function displayWinner(playerScore, aiScore) {
    let gameResult = document.getElementById("game-result");
    
    if(playerScore == 5 && aiScore < 5) {
        gameResult.textContent = "Result: YOU WON!!!";

    } else if (aiScore == 5 && playerScore < 5) {
        gameResult.textContent = "Result: YOU LOST!!! AI beat you";
    } else if (playerScore == 5 && aiScore == 5) {
        gameResult.textContent = "Result: It's a DRAW!";
    }
}

function getPlayerSelection(roundCount, playerScore, aiScore) {
    const playerSelection = document.querySelectorAll(".selection > button");
    let playerSelectedHand;
    let gameScore = document.getElementById("game-score");
    let resultList = document.querySelector(".result-list");
    let currentPlayerScore = 0;
    let currentAiScore = 0;

    playerSelection.forEach(select => {
        select.addEventListener("click", e => {
            roundCount++;
            
            playerSelectedHand = e.target.textContent;

            const computerSelection = getComputerChoice();

            const resultHolder = document.createElement("p");
            resultList.appendChild(resultHolder);

            let gamePlayOneRound = playOneRound(playerSelectedHand, computerSelection, currentPlayerScore, currentAiScore);
            resultHolder.textContent = `R${roundCount}: ${gamePlayOneRound.message}`;

            playerScore += gamePlayOneRound.currentPlayerScore;
            aiScore += gamePlayOneRound.currentAiScore;
            gameScore.textContent = `Score (Player v AI): ${playerScore}-${aiScore} `;
            
            displayWinner(playerScore, aiScore);
        });
    });
}



function game() {
        let roundCount = 0;
        let playerScore = 0;
        let aiScore = 0;

        getPlayerSelection(roundCount, playerScore, aiScore);
}

game();
