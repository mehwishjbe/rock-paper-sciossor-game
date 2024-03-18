let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choices");

const genComputerChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomId = Math.floor(Math.random() * 3);
  return options[randomId];
};

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
