
let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
let gameOver = false;

function checkGuess() {

    if (gameOver) return;

    let guess = Number(document.getElementById("guess").value);

    let message = document.getElementById("message");

    if (
        document.getElementById("guess").value === "" ||
        !Number.isInteger(guess) ||
        guess < 1 ||
        guess > 100
    ) {
        message.innerText = "⚠️ Enter a number between 1 and 100!";
        message.style.color = "red";
        return;
    }

    attempts++;

    document.getElementById("count").innerText = attempts;

    if (guess < randomNumber) {

        message.innerText = "📈 Too Low! Try a bigger number.";
        message.style.color = "orange";

    }

    else if (guess > randomNumber) {

        message.innerText = "📉 Too High! Try a smaller number.";
        message.style.color = "orange";

    }

    else {

        message.innerText =
            "🎉 Congratulations! You guessed the number!";

        message.style.color = "green";

        document.getElementById("number").innerText = randomNumber;

        gameOver = true;
    }

    document.getElementById("guess").value = "";
}

function restartGame() {

    randomNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 0;
    gameOver = false;

    document.getElementById("guess").value = "";

    document.getElementById("count").innerText = "0";

    document.getElementById("number").innerText = "?";

    document.getElementById("message").innerText =
        "Good luck! 😊";

    document.getElementById("message").style.color = "#444";
}
