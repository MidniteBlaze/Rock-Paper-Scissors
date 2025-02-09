let wins = 0;
let losses = 0;
let tie = 0;

function getComputerChoice(){
    let cpu = Math.floor(Math.random() * 3)
    if (cpu === 0){
        return "rock";
    } else if (cpu === 1){
        return "paper";
    } else {
        return "scissors"
    }
}

function getHumanChoice(){
    let user = prompt("Type rock, paper, or scissors.")
    user = user.toLowerCase()
    if (user === "rock" || user === "paper" || user === "scissors"){
        return user;
    } else {
        alert("Invalid choice.")
        return getHumanChoice()
    }
}

function playRound(user, cpu){
    if(user === cpu){
        tie++
        console.log("Its a tie")
    } else if (
        (user === "rock" && cpu === "scissors") ||
        (user === "paper" && cpu === "rock") ||
        (user === "scissors" && cpu === "paper")
    ){
        wins++
        console.log(`You win! ${user} beats ${cpu}`)
    } else {
        losses++
        console.log(`You lose. ${cpu} beats ${user}`)
    }
}

function game(){
    wins = 0;
    losses = 0;
    tie = 0
    for(let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
        console.log(`Round ${i+1} complete!`)
    }
    console.log("Game Over.")
    if (wins > losses){
        console.log(`You win the game! ${wins} to ${losses}.`)
    } else if (wins < losses){
        console.log(`You lose. ${wins} to ${losses}.`)
    } else {
        console.log("Draw.")
    }
}

game()