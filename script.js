function firstSteps() {
    alert("So you have decided to go against the Skynet. Ok, I'll give you the chance to settle this like adults...");
    if( alert = true){
        let playerSelection = prompt("Choose your weapon! Type rock, paper or scissors.").toLowerCase().trim();
        return playerSelection;
    }
    else if (playerSelection === null) {
        return askPlayer        
    } else {
        return computerPlay        
    }
} 

let askPlayer = confirm("You have pressed the cancel button. Do you want to leave or get back to the game?")

if(confirm) {
    alert("See you soon")    
}
else {
    return playerSelection;    
}


function computerPlay() {    
    const plays = ["Rock", "Paper", "Scissors"];
    return plays[Math.floor(Math.random() * plays.length)];
  }
  
  function playRound(playerSelection, computerSelection) {    .
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === "Rock" && computerSelection === "Scissors") ||
      (playerSelection === "Paper" && computerSelection === "Rock") ||
      (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
      return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
  }
  
  function game() {    
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {     
      const playerSelection = prompt("Rock, paper, or scissors?");
      const computerSelection = computerPlay();
      console.log(playRound(playerSelection, computerSelection));
      
      const result = playRound(playerSelection, computerSelection);
      if (result.includes("win")) {
        playerScore++;
      } else if (result.includes("lose")) {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log(`You win the game! Final score: ${playerScore} to ${computerScore}.`);
    } else if (playerScore < computerScore) {
      console.log(`You lose the game. Final score: ${computerScore} to ${playerScore}.`);
    } else {
      console.log(`It's a tie game. Final score: ${playerScore} to ${computerScore}.`);
    }
  }
  
  game();