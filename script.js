const choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    const number = Math.floor(Math.random() * 3);
    const computerChoice = choices[number]
    console.log(computerChoice)
    return computerChoice
};

getComputerChoice()