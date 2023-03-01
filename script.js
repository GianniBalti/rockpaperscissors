//--------------------First Part-------------------------

"use strict";

let Rock = document.getElementById("rock");
let Scissors = document.getElementById("scissors");
let Paper = document.getElementById("paper");
let playerMove = "";
let resultBox = document.getElementById("result-p");
let computerScore = 0;
let playerScore = 0;
let playerScoreBox = document.getElementById("playerScoreBox");
let computerScoreBox = document.getElementById("computerScoreBox");


// randomly generates Rock, Paper or Scissors

  function getComputerSelection() {
    let randomNumber = Math.floor(Math.random() * 3)+1;
    if (randomNumber == 1) {
        let computerSelection = "Rock";
        return computerSelection;
    }
    if (randomNumber == 2) {
        let computerSelection = "Paper";
        return computerSelection;
    }
    if (randomNumber == 3) {
        let computerSelection = "Scissors";
        return computerSelection;
    }
  }
  
  //-------------Second Part--------------------------------
  
  // play a single round of the game (this is the game logic)
  
  function playRound(computerMove, playerMove) {
       if (computerMove == "Rock" && playerMove == "Scissors") {
        computerScore = computerScore + 1;
        computerScoreBox.innerHTML = computerScore;
        resultBox.innerHTML = "You lose try again!";
        console.log = "You lose try again!";
    }
    if (computerMove == "Paper" && playerMove == "Rock") {
        computerScore = computerScore + 1;
        computerScoreBox.innerHTML = computerScore;
        console.log("You lose try again!")
        resultBox.innerHTML = "You lose try again!";
    }
    if (computerMove == "Scissors" && playerMove == "Paper") {
        computerScore = computerScore + 1;
        computerScoreBox.innerHTML = computerScore;
        console.log("You lose try again!")
        resultBox.innerHTML = "You lose try again!";
    }
    if (computerMove == playerMove) {
        console.log("it's a tie")
        resultBox.innerHTML = "it's a tie";
    } 
    if (playerMove == "Rock" && computerMove == "Scissors") {
        playerScore = playerScore + 1;
        playerScoreBox.innerHTML = playerScore;
        console.log("You win!")
        resultBox.innerHTML = "You win!";
    }
    if (playerMove == "Paper" && computerMove == "Rock") {
        playerScore = playerScore + 1;
        playerScoreBox.innerHTML = playerScore;
        console.log("You win!")
        resultBox.innerHTML = "You win!";
    }
    if (playerMove == "Scissors" && computerMove == "Paper") {
        playerScore = playerScore + 1;
        playerScoreBox.innerHTML = playerScore;
        console.log("You win!")
        resultBox.innerHTML = "You win!";
    }
    
    
  }
  
  //-----------Final Part-------------------------------------
  
  
  // play the game 5 times for a round
  function game() {
    

    Rock.addEventListener("click", function() {
        playerMove = "Rock";
        let computerMove = getComputerSelection();
        console.log(playerMove);
        playRound(computerMove,playerMove);
      });

    Paper.addEventListener("click", function() {
        let computerMove = getComputerSelection();
        playerMove = "Paper";
        playRound(computerMove, playerMove);
      });

    Scissors.addEventListener("click", function() {
        let computerMove = getComputerSelection();
        playerMove = "Scissors";
        playRound(computerMove, playerMove);
      }); 
    
  }
  game();

//   function setPlayerMove(move) {
//     console.log(move);
//     playerMove = move;
//     console.log(playerMove);
//     return playerMove;
//   }