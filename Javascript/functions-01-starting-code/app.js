const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER WINS";
const RESULT_COMPUTER_WINS = "COMPUTER WINS";

let gameIsRunning = false;

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} OR ${SCISSORS}?`,
    ""
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Ivalid choice! We chose ${DEFAULT_USER_CHOICE} For you`);
    return;
  }
  return selection;
};

const getComputerChoice = function () {
  const value = getRandom(3);
  if (value === 0) return ROCK;
  else if (value === 1) return PAPER;
  else if (value === 2) return SCISSORS;
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

// if (cChoice === pChoice) {
//   return RESULT_DRAW;
// } else if (
//   (cChoice === ROCK && pChoice === PAPER) ||
//   (cChoice === PAPER && pChoice === SCISSORS) ||
//   (cChoice === SCISSORS && pChoice === ROCK)
// ) {
//   return RESULT_PLAYER_WINS;
// } else {
//   return RESULT_COMPUTER_WINS;
// }

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  let winner;

  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }

  let message = `You picked ${
    playerChoice ? playerChoice : DEFAULT_USER_CHOICE
  } , computer picked ${computerChoice}, you `;

  if (winner === RESULT_DRAW) message += "had a draw.";
  else if (winner === RESULT_PLAYER_WINS) message += "won.";
  else message += "lost.";
  alert(message);
  gameIsRunning = false;
});

//No relation

const sumUp = (resultHandler, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  resultHandler(sum);
};

const subtractUp = function () {
  let sub = 0;
  for (const num of arguments) {
    //don use argumets keyword, use rest operator
    sub -= num;
  }
  return sub;
};

const showResult = (result) => {
  alert("The result is: " + result);
};

sumUp(showResult, 1, 5, 10, -3, 6, 10);
sumUp(showResult, 1, 5, 10, -3, 6, 10, 25, 88);
console.log(subtractUp(1, 10, 15, 20));
