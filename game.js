
let humanScore = 0;
let computerScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let choice = getRandomInt(3);
    // console.log(choice)
    if (choice == 1) return "rock";
    else if (choice == 2) return "paper";
    else return "scissors";
}



function playRound(humanChoice) {
    console.log("playing...");
    let res;
    let computerChoice = getComputerChoice();
    res = calculateRoundWinner(humanChoice, computerChoice);
    announceRoundWinner(res, humanChoice, computerChoice);
}

function calculateRoundWinner(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            res = "tie! try again.";
        } else if (computerChoice == "paper") {
            res = "you lose!";
            computerScore++;
        } else {
            res = "you win!";
            humanScore++;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            res = "you win!";
            humanScore++;
        } else if (computerChoice == "paper") {
            res = "tie! try again.";
        } else {
            res = "you lose!";
            computerScore++;
        }
    } else {
        if (computerChoice == "rock") {
            res = "you lose!";
            computerScore++;
        } else if (computerChoice == "paper") {
            res = "you win!";
            humanScore++;
        } else {
            res = "tie! try again.";
        }
    }
    return res;
}

function announceRoundWinner(res, humanChoice, computerChoice) {
    if (humanScore === 5 || computerScore ===5) {
        announceWinner();
        return;
    }
    div = document.querySelector("#results");
    div.textContent = `${res} \nyou chose ${humanChoice} and the computer got ${computerChoice}.\n`;
    div.textContent += `You: ${humanScore} - CPU: ${computerScore}\n`

}



function announceWinner() {
    div = document.querySelector("#results")
    if (humanScore === 5) {
        div.textContent = `Congratulations! You win!`;
    } else {
        div.textContent = `You lost... Try again :(`;
    }
    humanScore = 0;
    computerScore = 0;
    div.textContent += "  Ready for more?";
}

rockButton = document.querySelector("#rock");
paperButton = document.querySelector("#paper");
scissorButton = document.querySelector("#scissor");

rockButton.addEventListener("click", () => {
    console.log("rock pressed");
    if (humanScore < 5 && computerScore < 5)
        playRound("rock");
});
paperButton.addEventListener("click", () => {
    console.log("paper pressed");
    if (humanScore < 5 && computerScore < 5)
        playRound("paper");
});
scissorButton.addEventListener("click", () => {
    console.log("scissor pressed");
    if (humanScore < 5 && computerScore < 5)
        playRound("scissor")
});
