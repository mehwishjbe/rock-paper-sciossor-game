let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genComputerChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomId = Math.floor(Math.random() * 3);
  return options[randomId];
};

const drawGame = () => {
  console.log("Game was draw");
};

const showWinner = () => {
  if (userWin) {
    console.log("You Won!");
  } else {
    console.log("You Loss!");
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
      userWin = compChoice === "scissor" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
