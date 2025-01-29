console.log("Hello World")

function getHumanChoice() {
    const validChoices = ["Rock", "Paper", "Scissors"];
    let humanChoice = prompt("Rock, Paper or Scissors: ");

    while (!validChoices.includes(humanChoice)) {
        humanChoice = prompt("Invalid choice. Please choose Rock, Paper or Scissors: ");
    }
    return humanChoice;
}

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

    function playGame() {
        let humanScore = 0;
        let computerScore = 0;

        for (let round = 1; round <= 5; round++) {
            console.log(`Round ${round}:`);
            const humanChoice = getHumanChoice();
            const computerChoice = getComputerChoice();

            const result = playRound(humanChoice, computerChoice);
            console.log(result);

            if(result === "Human wins!") {
                humanScore++;
            } else if(result === "Computer wins!") {
                computerScore++;
            }
            console.log("Current scores:");
            console.log("Human Score: ", humanScore);
            console.log("Computer Score: ", computerScore);
        }
        if (humanScore > computerScore) {
            console.log("You win the game!")
        } else if (computerScore > humanScore) {
            console.log("Computer wins game!")
        } else {
            console.log("It's a tie game!")
        }
    }

 playGame();   

/*
console.log(playRound(humanChoice, computerChoice));
console.log("You chose:", humanChoice);
console.log("Computer chose:", computerChoice);
*/
    
