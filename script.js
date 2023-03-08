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
let computerIMG = document.getElementById("computerSelect");
let playerIMG = document.getElementById("playerSelect");
let steen = "assets/images/Steen.png";
let papier = "assets/images/Papier.png";
let schaar = "assets/images/Schaar.png";
let resultMessage = document.getElementById("message");
let resultField = document.getElementById("resultField");



// randomly generates Rock, Paper or Scissors

  function getComputerSelection() {
    let randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber == 0) {
        let computerSelection = possibleMoves[randomNumber];
        computerIMG.src = "assets/images/Rock.png";
        return computerSelection;
    };
    
    if (randomNumber == 1) {
        let computerSelection = possibleMoves[randomNumber]
        computerIMG.src = "assets/images/Paper.png";
        return computerSelection;
    };
    
    if (randomNumber == 2) {
        let computerSelection = possibleMoves[randomNumber];
        computerIMG.src = "assets/images/Scissors.png";
        return computerSelection;
    };
  };
  
  //-------------Second Part--------------------------------
  
  // play a single round of the game (this is the game logic)
  
  function playRound(computerMove, playerMove) {
    if (computerMove == "rock" && playerMove == "scissors" || computerMove == "paper" && playerMove == "rock" || computerMove == "scissors" && playerMove == "paper") {
        computerScore = computerScore + 1;
        computerScoreBox.innerHTML = "Computerscore: " + computerScore;
        resultMessage.innerText = computerMove.toUpperCase() + " BEATS " + playerMove.toUpperCase() + "!" + " YOU LOSE!";
        console.log("You lose try again!");
        console.log(playerScore, computerScore);
    };

    if (computerMove == playerMove) {
        console.log("Its a tie!");
        resultMessage.innerText = computerMove.toUpperCase() + " EQUALS " + playerMove.toUpperCase() + "!" + " IT'S A TIE!";
        console.log(playerScore, computerScore);
        //resultBox.innerHTML = "it's a tie";
    };

    if (playerMove == "rock" && computerMove == "scissors" || playerMove == "paper" && computerMove == "rock"|| playerMove == "scissors" && computerMove == "paper") {
        playerScore = playerScore + 1;
        playerScoreBox.innerHTML = "Playerscore: " + playerScore;
        console.log("You win!");
        resultMessage.innerText = playerMove.toUpperCase() + " BEATS " + computerMove.toUpperCase() + "!" + " YOU WIN!";
        console.log(playerScore, computerScore);
        //resultBox.innerHTML = "You win!";
    };
};
  
  //-----------Final Part-------------------------------------
  
  
  // play the game 5 times for a round
  function game() {
    

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerMove = button.id;
            let src = button.id.charAt(0).toUpperCase() + button.id.slice(1);
            playerIMG.src = "assets/images/" + src +".png";
            let computerMove = getComputerSelection();
            playRound(computerMove, playerMove);
            console.log(playerScore, computerScore);
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
        resultMessage.innerText = "GAME OVER, YOU WON!";
        buttons.forEach((button) => {
          button.disabled = true;
        })
        let resetButton = document.createElement("button");
        resetButton.className = "resetButton";
        resetButton.textContent = "Reset";
        resultField.append(resetButton);
        resetButton.addEventListener('click', () => {
          playerScore = 0;
          computerScore = 0;
          buttons.forEach((button) => {
            button.disabled = false;
          });

          resultMessage.innerText = "Pick a weapon!"
          computerScoreBox.innerHTML = "Computerscore: 0"; 
          playerScoreBox.innerHTML = "Playerscore: 0";
          resetButton.remove();     
        });

      }

      if (computerScore === 5) {
        resultMessage.innerText = "GAME OVER, THE COMPUTER WON!";
        buttons.forEach((button) => {
          button.disabled = true;
        })
        let resetButton = document.createElement("button");
        resetButton.className = "resetButton";
        resetButton.textContent = "Reset";
        resultField.append(resetButton);
        resetButton.addEventListener('click', () => {
          playerScore = 0;
          computerScore = 0;
          buttons.forEach((button) => {
            button.disabled = false;
          });
          resultMessage.innerText = "Pick a weapon!"
          computerScoreBox.innerHTML = "Computerscore: 0";
          playerScoreBox.innerHTML = "Playerscore: 0";
          resetButton.remove();   
  
        });

      }
    }

  game();
  
