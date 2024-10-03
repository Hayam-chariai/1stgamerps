onload = function () {
    initializeGame();
};

function initializeGame() {
    document.getElementById("rock").onclick = () => playGame("rock");
    document.getElementById("paper").onclick = () => playGame("paper");
    document.getElementById("scissors").onclick = () => playGame("scissors");
}

function playGame(playerMove) {
    const moves = ["rock", "paper", "scissors"];
    const computerMove = moves[Math.floor(Math.random() * 3)];

    let resultMessage = "";
    if (playerMove === computerMove) {
        resultMessage = `It's a draw! You both chose ${playerMove}.`;
        setResultColor("draw");
    } else if (
        (playerMove === "rock" && computerMove === "scissors") ||
        (playerMove === "scissors" && computerMove === "paper") ||
        (playerMove === "paper" && computerMove === "rock")
    ) {
        resultMessage = `You win! You chose ${playerMove} and the computer chose ${computerMove}.`;
        setResultColor("win");
    } else {
        resultMessage = `You lose! You chose ${playerMove} and the computer chose ${computerMove}.`;
        setResultColor("lose");
    }

    document.getElementById("resultMessage").textContent = resultMessage;
}

function setResultColor(result) {
    const body = document.body;

    body.classList.remove("bg-green-500", "bg-yellow-500", "bg-red-500", "bg-blue-500");
    
    if (result === "win") {
        body.classList.add("bg-green-500");
    } else if (result === "draw") {
        body.classList.add("bg-yellow-500");
    } else if (result === "lose") {
        body.classList.add("bg-red-500");
    }
}