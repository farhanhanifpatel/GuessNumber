"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").innerHTML = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("Please enter a number");
  } else if (guess === secretNumber) {
    displayMessage("Correct number");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    highScore = score;
    document.querySelector(".highscore").textContent = highScore;
    // if (score > highScore) {
    //   highScore = score;
    //   document.querySelector(".highscore").textContent = highScore;
    // }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "To high" : "To low");
      score--;
      document.querySelector(".Score").textContent = score;
    } else {
      displayMessage(
        "You've lost the game. The correct number was " + secretNumber
      );
      document.querySelector(".score").textContent = 0;
    }
  }
});
