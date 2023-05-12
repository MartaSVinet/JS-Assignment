let playerScore = 0;
let computerScore = 0;

function greeting() {
    alert("So you have decided to go against the Skynet. Ok, I'll give you the chance to settle this like adults...");
} 

function askUserToMakeChoice(){
    let validSelection = false, playerSelection;    
    while (!validSelection) {
        playerSelection = prompt("Please enter your choice (rock, paper or scissors): ");       
        if (playerSelection === null || playerSelection.trim() === '') {
          alert("Invalid choice. Please try again."); 
          continue;
        }        
        playerSelection = playerSelection.trim().toLowerCase();     
        if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
          alert("Invalid choice. Please try again.");
        } else {
          validSelection = true;
        }
      }
    return playerSelection; 
}

function computerPlay() {    
    const plays = ["rock", "paper", "scissors"];
    const computerSelection = plays[Math.floor(Math.random() * plays.length)]
    return computerSelection;
}
  
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
      return "It's a tie!";
  } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
  ) {
      playerScore += 1;
      return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
      computerScore += 1;
      return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}
  
function game() {    
    greeting();
    for (let i = 0; i < 5; i++) {    
      console.log(playRound(askUserToMakeChoice(), computerPlay())); 
    }
    if (playerScore > computerScore) {
      console.log(`You win the game! Final score: ${playerScore} to ${computerScore}.`);
    } else if (playerScore < computerScore) {
      console.log(`You lose the game. Final score: ${computerScore} to ${playerScore}.`);
    } else {
      console.log(`It's a tie game. Final score: ${playerScore} to ${computerScore}.`);
    }
  }
  