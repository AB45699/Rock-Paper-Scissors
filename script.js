const choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    const number = Math.floor(Math.random() * 3);
    console.log(number)
    return number
};

getComputerChoice()

