
let capitalize = (str) => str[0].toUpperCase() + str.substring(1).toLowerCase();

function getComputerChoice(){
    // 0 -> rock
    // 1 -> paper
    // 2 -> scissors
    let numberChoice = Math.floor(Math.random()*3);
    if(numberChoice === 0) 
        return "rock";
    else if(numberChoice === 1) 
        return "paper";
    else 
        return "scissors";
}

function getHumanChoice(){
    return prompt("Rock/Paper/Scissors !!! Choose: ").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    
    console.log(`Computer chose: ${capitalize(computerChoice)} --- Player chose: ${capitalize(humanChoice)}`);

    if(humanChoice === computerChoice) return;

    if( humanChoice === 'rock'){
        ( computerChoice === 'paper') ? computerScore++ : humanScore++;
    }
    else if( humanChoice === 'paper' ){
        ( computerChoice === 'scissors') ? computerScore++ : humanScore++;
    }
    else if( humanChoice === 'scissors' ){
        ( computerChoice === 'rock') ? computerScore++ : humanScore++;
    }
}

let humanScore = computerScore = 0; 
  
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(`Scores - Computer: ${computerScore} --- Player: ${humanScore}`);