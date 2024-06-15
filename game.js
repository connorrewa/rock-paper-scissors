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

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors")
    return choice.toLowerCase();

}



function playRound(humanChoice, computerChoice) {
    let res;
    if (humanChoice == "rock") {
        if (computerChoice == "rock") res = "tie! try again.";
        else if (computerChoice == "paper") res = "you lose!";
        else res = "you win!";
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") res = "you win!";
        else if (computerChoice == "paper") res = "tie! try again.";
        else res = "you lose!";
    } else {
        if (computerChoice == "rock") res = "you lose!";
        else if (computerChoice == "paper") res = "you win!";
        else res = "tie! try again.";
    }
    console.log(res + `\nyou chose ${humanChoice} and the computer got ${computerChoice}`)
    return res;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        if (result == "you win!") humanScore++;
        else if (result == "you lose!") computerScore++;
        console.log(humanScore, computerScore);
    }
}


playGame();


