const choices = ["Rock", "Paper", "Scissors"]
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const number = Math.floor(Math.random() * 3);
    const computerChoice = choices[number];
    console.log(`The computer choice is: ${computerChoice}`)
    return computerChoice
};

function getHumanChoice() {
    let humanChoice = prompt("Pick your choice: Rock, Paper, or Scissors");
    console.log(`Your choice is: ${humanChoice}`);
    return humanChoice
};

function playRound(humanChoice, computerChoice) {
    if ((humanChoice.toLowerCase() === "rock") && (computerChoice.toLowerCase() === "paper")) {
        console.log("You lose! Paper beats rock")
        computerScore += 1 
        console.log(`Your score is: ${humanScore}. The computer's score is: ${computerScore}`)
    } else if ((humanChoice.toLowerCase() === "paper") && (computerChoice.toLowerCase() === "scissors")) {
        console.log("You lose! Scissors beats paper")
        computerScore += 1 
        console.log(`Your score is: ${humanScore}. The computer's score is: ${computerScore}`)
    } else if ((humanChoice.toLowerCase() === "scissors") && (computerChoice.toLowerCase() === "rock")) {
        console.log("You lose! Rock beats scissors")
        computerScore += 1 
        console.log(`Your score is: ${humanScore}. The computer's score is: ${computerScore}`)
    } else if ((humanChoice.toLowerCase() === "paper") && (computerChoice.toLowerCase() === "rock")) {
        console.log("You win! Paper beats rock")
        humanScore += 1 
        console.log(`Your score is: ${humanScore}. The computer's score is: ${computerScore}`)
    } else if ((humanChoice.toLowerCase() === "rock") && (computerChoice.toLowerCase() === "scissors")) {
        console.log("You win! Rock beats scissors")
        humanScore += 1 
        console.log(`Your score is: ${humanScore}. The computer's score is: ${computerScore}`)
    } else if ((humanChoice.toLowerCase() === "scissors") && (computerChoice.toLowerCase() === "paper")) {
        console.log("You win! Scissors beats paper")
        humanScore += 1 
        console.log(`Your score is: ${humanScore}. The computer's score is: ${computerScore}`)
    } else {
        console.log(`You and the computer chose the same! It is a draw`)
        console.log(`Your score is: ${humanScore}. The computer's score is: ${computerScore}`)
    }
};

playRound(getHumanChoice(), getComputerChoice());


//remember to delete console.logs, clean code rules (func names, var names etc)