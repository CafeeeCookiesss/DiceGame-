let player1 = {
    name: "Player 1",
    score: 0
};

let player2 = {
    name: "Player 2",
    score: 0
};

function editNames() {
    player1.name = prompt("Change Player 1 Name") || player1.name;
    player2.name = prompt("Change Player 2 Name") || player2.name;

    updatePlayerNames();
}

function updatePlayerNames() {
    document.getElementById("player1").querySelector(".player-name").innerHTML = player1.name;
    document.getElementById("player2").querySelector(".player-name").innerHTML = player2.name;
}

function rollTheDice() {
    let diceNum1 = document.getElementById("diceImg1");
    let diceNum2 = document.getElementById("diceImg2");

    document.body.classList.remove("winner-background", "draw-background");

    setTimeout(() => {
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;

        diceNum1.setAttribute('src', 'dice' + randomNumber1 + '.png');
        diceNum2.setAttribute('src', 'dice' + randomNumber2 + '.png');

        diceNum1.classList.toggle('even-roll', randomNumber1 % 2 === 0);
        diceNum2.classList.toggle('even-roll', randomNumber2 % 2 === 0);
        diceNum1.classList.toggle('odd-roll', randomNumber1 % 2 !== 0);
        diceNum2.classList.toggle('odd-roll', randomNumber2 % 2 !== 0);

        let result = document.querySelector('h1');

        if (randomNumber1 === randomNumber2) {
            result.innerHTML = "Draw!";
            document.body.classList.add("draw-background");
        } else if (randomNumber1 < randomNumber2) {
            player2.score++;
            document.getElementById("score2").innerHTML = player2.score;
            if (player2.score === 5) {
                endGame(player2.name);
            }
            result.innerHTML = (player2.name + " WINS!");
            document.body.classList.add("winner-background");
            document.body.classList.remove("draw-background");
        } else {
            player1.score++;
            document.getElementById("score1").innerHTML = player1.score;
            if (player1.score === 5) {
                endGame(player1.name);
            }
            result.innerHTML = (player1.name + " WINS!");
            document.body.classList.add("winner-background");
            document.body.classList.remove("draw-background");
        }

    }, 2500);
}
updatePlayerNames();

function startGame() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameContent").style.display = "flex";
}

function endGame(winner) {
    alert("Game Over! " + winner + " is the winner with a score of 25!");
}
