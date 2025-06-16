const choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    const number = Math.floor(Math.random() * 3);
    const computerChoice = choices[number];
    console.log(computerChoice)
    return computerChoice
};

function getHumanChoice() {
    let humanChoice = prompt("Pick your choice: Rock, Paper, or Scissors");
    console.log(humanChoice);
    return humanChoice
}

getHumanChoice();
getComputerChoice()

//remember to delete console.logs, clean code rules (func names, var names etc)