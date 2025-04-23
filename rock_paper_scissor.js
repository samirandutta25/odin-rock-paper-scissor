const rockButton = document.querySelector('.rock-icon');
const paperButton = document.querySelector('.paper-icon');
const scissorsButton = document.querySelector('.scissors-icon');

const computerScoreDiv = document.querySelector('.computer-score');
const playerScoreDiv = document.querySelector('.player-score');

const resultDiv = document.querySelector('.result');

let playerScore = computerScore = 0;

let capitalize = (str) => str[0].toUpperCase() + str.substring(1).toLowerCase();

const controller = new AbortController();

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

function updateScores(){
    computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
    playerScoreDiv.textContent = `Player Score: ${playerScore}`;
    if( computerScore === 5){
        const innerDiv = document.createElement("div");
        innerDiv.textContent = "Computer Won!! --- Refresh to start a New Game.";
        resultDiv.append(innerDiv);
        controller.abort();
    }else if(playerScore === 5){
        const innerDiv = document.createElement("div");
        innerDiv.textContent = "You Won!! --- Refresh to start a New Game.";
        resultDiv.append(innerDiv);
        controller.abort();
    }
}

function playRound(humanChoice, computerChoice) {
    
    resultDiv.textContent = `Player chose: ${capitalize(humanChoice)} --- Computer chose: ${capitalize(computerChoice)}`;

    if(humanChoice === computerChoice) return;

    if( humanChoice === 'rock'){
        ( computerChoice === 'paper') ? computerScore++ : playerScore++;
    }
    else if( humanChoice === 'paper' ){
        ( computerChoice === 'scissors') ? computerScore++ : playerScore++;
    }
    else if( humanChoice === 'scissors' ){
        ( computerChoice === 'rock') ? computerScore++ : playerScore++;
    }

    updateScores();
}


rockButton.addEventListener("click", () =>  playRound("rock", getComputerChoice()), { signal: controller.signal });
paperButton.addEventListener("click", () =>  playRound("paper", getComputerChoice()), { signal: controller.signal });
scissorsButton.addEventListener("click", () =>  playRound("scissors", getComputerChoice()), { signal: controller.signal });
