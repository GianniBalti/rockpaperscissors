//--------------------First Part-------------------------

let body = document.getElementById("body");
let Rock = document.getElementById("rock");
let Scissors = document.getElementById("scissors");
let Paper = document.getElementById("paper");
let playerMove = "";
let resultBox = document.getElementById("result-p");
let computerScore = 0;
let playerScore = 0;
let playerScoreBox = document.getElementById("playerScoreBox");
let computerScoreBox = document.getElementById("computerScoreBox");
let possibleMoves = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll('button');



// randomly generates Rock, Paper or Scissors

  function getComputerSelection() {
    let randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber == 0) {
        let computerSelection = possibleMoves[randomNumber];
        return computerSelection;
    };
    
    if (randomNumber == 1) {
        let computerSelection = possibleMoves[randomNumber]
        return computerSelection;
    };
    
    if (randomNumber == 2) {
        let computerSelection = possibleMoves[randomNumber];
        return computerSelection;
    };
  };
  
  //-------------Second Part--------------------------------
  
  // play a single round of the game (this is the game logic)
  
  function playRound(computerMove, playerMove) {
    if (computerMove == "rock" && playerMove == "scissors" || computerMove == "paper" && playerMove == "rock" || computerMove == "scissors" && playerMove == "paper") {
        computerScore = computerScore + 1;
        computerScoreBox.innerHTML = computerScore;
        resultBox.innerHTML = "You lose try again!";
        console.log("You lose try again!");
    };

    if (computerMove == playerMove) {
        console.log("Its a tie!");
        resultBox.innerHTML = "it's a tie";
    };

    if (playerMove == "rock" && computerMove == "scissors" || playerMove == "paper" && computerMove == "rock"|| playerMove == "paper" && computerMove == "rock") {
        playerScore = playerScore + 1;
        playerScoreBox.innerHTML = playerScore;
        console.log("You win!");
        resultBox.innerHTML = "You win!";
    };
};
  
  //-----------Final Part-------------------------------------
  
  
  // play the game 5 times for a round
  function game() {
    

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerMove = button.id;
            let computerMove = getComputerSelection();
            playRound(computerMove, playerMove);
            checkGameOver();
        })
    })

    // Rock.addEventListener("click", function() {
    //     playerMove = "Rock";
    //     let computerMove = getComputerSelection();
    //     playRound(computerMove, playerMove);
    //     checkGameOver();
    //   }
    // );

    // Paper.addEventListener("click", function() {
    //     let computerMove = getComputerSelection();
    //     playerMove = "Paper";
    //     playRound(computerMove, playerMove);
    //     checkGameOver();
    //   });

    // Scissors.addEventListener("click", function() {
    //     let computerMove = getComputerSelection();
    //     playerMove = "Scissors";
    //     playRound(computerMove, playerMove);
    //     checkGameOver();
    //   }); 
    
  };

  function checkGameOver() {
    if (playerScore === 5) {
        body.innerHTML = "<h1>GAME OVER, YOU WON!</h1>";
      }
    if (computerScore === 5) {
        body.innerHTML = "<h1>GAME OVER, THE COMPUTER WON!</h1>"
    }
  }

  game();
  
