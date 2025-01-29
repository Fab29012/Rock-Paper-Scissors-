console.log("Hello World")

function getHumanChoice() {
    const validChoices = ["Rock", "Paper", "Scissors"];
    let humanChoice = prompt("Rock, Paper or Scissors: ");

    while (!validChoices.includes(humanChoice)) {
        humanChoice = prompt("Invalid choice. Please choose Rock, Paper or Scissors: ");
    }
    return humanChoice;
}

const humanChoice = getHumanChoice();
console.log("You chose:", humanChoice);

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
const computerChoice = getComputerChoice();
console.log("Computer chose:", computerChoice);

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            return "It's a tie";
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            return "Human wins!";
        } else {
            return "Computer wins!";
        }
    }

    console.log(playRound(humanChoice, computerChoice));