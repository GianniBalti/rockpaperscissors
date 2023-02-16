//--------------------First Part-------------------------
// randomly generates Rock, Paper or Scissors

  function getComputerSelection() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        let computerSelection = "Rock";
        return computerSelection;
    }
    if (randomNumber == 1) {
        let computerSelection = "Paper";
        return computerSelection;
    }
    if (randomNumber == 2) {
        let computerSelection = "Scissors";
        return computerSelection;
    }
  }
  
  //-------------Second Part--------------------------------
  
  // play a single round of the game (this is the game logic)
  
  function playRound(computerMove, playerMove) {
    if (computerMove == "Rock" && playerMove == "Scissors") {
        console.log("You lose try again!")
    }
    if (computerMove == "Paper" && playerMove == "Rock") {
        console.log("You lose try again!")
    }
    if (computerMove == "Scissors" && playerMove == "Paper") {
        console.log("You lose try again!")
    }
    if (computerMove == playerMove) {
        console.log("it's a tie")
    } 
    if (playerMove == "Rock" && computerMove == "Scissors") {
        console.log("You win!")
    }
    if (playerMove == "Paper" && computerMove == "Rock") {
        console.log("You win!")
    }
    if (playerMove == "Scissors" && computerMove == "Paper") {
        console.log("You win!")
    }
    
  }
  
  //-----------Final Part-------------------------------------
  
  
  // play the game 5 times for a round
  function game() {
    
    let computerMove = getComputerSelection();
    let playerMove = prompt("Rock, Paper or Scissors?");
    console.log(computerMove, playerMove);
    playRound(computerMove, playerMove);
    
  }
  game();
