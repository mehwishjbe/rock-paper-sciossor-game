let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreBoard = document.querySelector("#user-score");
const compScoreBoard = document.querySelector("#comp-score");

const genComputerChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomId = Math.floor(Math.random() * 3);
  return options[randomId];
};

const drawGame = () => {
  console.log("Game was draw");
  msg.innerText = "Game was draw. Play again";
  msg.style.backgroundColor = "yellow";
  msg.style.color = "goldenrod";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScoreBoard.innerText = userScore;
    console.log("You Won!");
    msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
  } else {
    compScore++;
    compScoreBoard.innerText = compScore;
    console.log("You Loss!");
    msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
  }
};

const playGame = (userChoice) => {
  console.log("User Choice = ", userChoice);

  const compChoice = genComputerChoice();
  console.log("Computer Choice =", compChoice);

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } //winning conditions
  else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
