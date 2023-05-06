//The computer chooses randomly
function computerPlay(computerChoice) {     
    let randomPc = (Math.floor(Math.random() *3));    
    if (randomPc === 0) {
        computerChoice ="paper";
    } else if (randomPc === 1) {
        computerChoice ="scissors";
    } else {
        computerChoice="rock";
    } 
    return computerChoice;     
}

//The player makes a choice

playerSelection = prompt("Choose your weapon! Type rock, paper or scissors.").toLowerCase();
const computerSelection = computerPlay();

//We store every win

let playerWins = 0;
let computerWins = 0;

//The player v/s the computer

function playRound (playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ){
        return ("You Win! " + playerSelection + " beats " + computerSelection) && playerWins++; 
    } else if (playerSelection === computerSelection){
        return ("You're even! " + playerSelection + " is equal to " + computerSelection); 
    } else {
        return ("You Lose! " + computerSelection + " beats " + playerSelection) && computerWins++;
    }    
}

//Five rounds

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
    if (playerWins > computerWins) {
        console.log("OMG you just beat the Skynet! Congratulations, winner");
    } else if (computerWins > playerWins) {
        console.log("I'm sorry, technology beat you up! You lose");
    } else {
        console.log("Draw!");
    }    
}

console.log(game())


