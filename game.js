console.log("Hello World")

function getHumanChoice() {
    const validChoices = ["Rock", "Paper", "Scissors"];
    let userChoice = prompt("Rock, Paper or Scissors: ");

    while (!validChoices.includes(userChoice)) {
        userChoice = prompt("Invalid choice. Please choose Rock, Paper or Scissors: ");
    }
    return userChoice;
}

const userChoice = getHumanChoice();
console.log ("You chose:", userChoice);

function getComputerChoice() {
    const randomGame = Math.floor (Math.random() * 3);
    switch (randomGame) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

console.log(getComputerChoice());

