"use strict";

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)+1;
    let computerChoice = randomNumber == 1? "rock" : randomNumber == 2 ? "paper" : "scissors";
    return computerChoice;
}

function playOneRound(playerSelection, computerSelection) {
    let p1 = String(playerSelection).toUpperCase();
    let comp1 = String(computerSelection).toUpperCase();
   
    if (p1 == comp1) {
        playerScore++;
        aiScore++;
        return `It's a draw! ${p1} v ${comp1}`;
    } else if ((p1 == "SCISSORS" && comp1 == "PAPER") || (p1 == "PAPER" && comp1 == "ROCK") || (p1 == "ROCK" && comp1 == "SCISSORS")) {
        playerScore++;
        return `You WIN! ${p1} beats ${comp1}`;
    } else {
        aiScore++;
        return `You LOSE! ${p1} is beaten by ${comp1}`;
    }
    
}

function playGame() {
    const playerSelection = document.querySelectorAll(".selection > button");
    let playerSelectedHand;

    playerSelection.forEach(select => {
        select.addEventListener("click", e => {
            roundCount++;
            
            playerSelectedHand = e.target.textContent;

            const computerSelection = getComputerChoice();

            const resultHolder = document.createElement("p");
            resultList.appendChild(resultHolder);

            resultHolder.textContent = `Round ${roundCount}: ${playOneRound(playerSelectedHand, computerSelection)}`;
           
            gameScore.textContent = `Score (Player v AI): ${playerScore}-${aiScore} `;
            
            displayWinner();
        });
    });
}

function displayWinner() {
    
    if(playerScore == 5 && aiScore < 5) {
        gameResult.textContent = "Result: YOU WON!!!";

    } else if (aiScore == 5 && playerScore < 5) {
        gameResult.textContent = "Result: YOU LOST!!! AI beat you";
    } else if (playerScore == 5 && aiScore == 5) {
        gameResult.textContent = "Result: It's a DRAW!";
    }
}

function setNewGame() {
    
    gameScore.textContent = "Score (Player v AI): 0-0";
    gameResult.textContent = "Result:";
    roundCount = 0;
    playerScore = 0;
    aiScore = 0;
    resultList.replaceChildren();
    
}

let roundCount = 0;
let playerScore = 0;
let aiScore = 0;

const gameScore = document.getElementById("game-score");
const gameResult = document.getElementById("game-result");
const resultList = document.querySelector(".result-list");

playGame();


