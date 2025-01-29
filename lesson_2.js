let wins = 0
let losses = 0

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else return "scissors";
}

function getHumanChoice() {
    let humanChoice = prompt("Type rock, paper or scissors!");
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    } else {
        alert("Invalid choice. Please choose rock, paper, or scissors.");
        return getHumanChoice();
    }  
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Its a tie!");
    } else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        wins++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    } else {
        losses++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Round ${i+1} complete.`);
    }

    console.log(`Game over! Final score: Wins: ${wins}, Losses: ${losses}`);

    if (wins > losses) {
        console.log("Congrats! You won the game!");
    } else if (losses > wins) {
        console.log("You lost the game. Better luck next time!");
    } else {
        console.log("It's a tie!");
    }
}

game();