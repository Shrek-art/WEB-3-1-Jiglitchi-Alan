//Sarcina 1
const Suma =(a, b) => {
    let c = a + b;
    return c; };
console.log(Suma(5, 1))
console.log(Suma(6, 2))

//Sarcina 2
const student = {
    name : "Marin",
    age : "18",
    grade : "12",
    
    introduce: function() {
        console.log(`Sunt ${student.name} si am ${student.age} ani!`);
}
};
student.introduce();


// Sarcina 3
const choices = ["piatra", "hartia", "foarfeca"];

const gameScore = {
    player: 0,
    computer: 0,
    draws: 0,

    displayScore: function() {
        document.getElementById("score").textContent =
            `Jucător: ${this.player} | Calculator: ${this.computer} | Egalități: ${this.draws}`;
    }
};

let totalRounds = 0;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

function determineWinner(player, computer) {

    if (player === computer) {
        gameScore.draws++;
        return "Egalitate!";
    }
    if (
        (player === "piatra" && computer === "foarfeca") ||
        (player === "foarfeca" && computer === "hartia") ||
        (player === "hartia" && computer === "piatra")
    ) {
        gameScore.player++;
        return "Ai câștigat!";
    }

    gameScore.computer++;
    return "Calculatorul a câștigat!";
}

function updateLeader() {
    const leader = document.getElementById("leader");

    if (gameScore.player > gameScore.computer) {
        leader.textContent = "Tu conduci scorul!";
    }
    else if (gameScore.computer > gameScore.player) {
        leader.textContent = "Calculatorul conduce scorul!";
    }
    else {
        leader.textContent = "Scorul este egal!";
    }
}

function checkFinalWinner() {
    if (gameScore.player === 5) {
        document.getElementById("result").textContent =
            "Felicitări! Ai câștigat jocul cu 5 victorii!";
        return true;
    }
    if (gameScore.computer === 5) {
        document.getElementById("result").textContent =
            "Calculatorul a câștigat jocul cu 5 victorii!";
        return true;
    }

    return false;
}

function playRound(playerChoice) {
    if (gameScore.player === 5 || gameScore.computer === 5) {
        return;
    }

    const computerChoice = getComputerChoice();

    totalRounds++;

    const result = determineWinner(playerChoice, computerChoice);

    document.getElementById("playerChoice").textContent =
        `Alegerea ta: ${playerChoice}`;

    document.getElementById("computerChoice").textContent =
        `Alegerea calculatorului: ${computerChoice}`;

    document.getElementById("result").textContent = result;

    document.getElementById("rounds").textContent =
        `Runde jucate: ${totalRounds}`;

    gameScore.displayScore();

    updateLeader();

    checkFinalWinner();
}

document.getElementById("rock").addEventListener("click", function() {
    playRound("piatra");
});

document.getElementById("paper").addEventListener("click", function() {
    playRound("hartia");
});

document.getElementById("scissors").addEventListener("click", function() {
    playRound("foarfeca");
});

document.getElementById("newGame").addEventListener("click", function() {

    gameScore.player = 0;
    gameScore.computer = 0;
    gameScore.draws = 0;

    totalRounds = 0;

    document.getElementById("playerChoice").textContent =
        "Alegerea ta: -";

    document.getElementById("computerChoice").textContent =
        "Alegerea calculatorului: -";

    document.getElementById("result").textContent =
        "Alege o varianta pentru a incepe!";

    document.getElementById("rounds").textContent =
        "Runde jucate: 0";

    gameScore.displayScore();

    updateLeader();
});