//function to return computer choice
function getComputerChoice(range = 3) {
  let randomNumber = Math.floor(Math.random() * range); // Generate random number between 1 and 3
  // based on random number generated, assign rock, paper or scissors
  if (randomNumber < 1) {
    computerMove.textContent = "ROCK";
    return "ROCK";
  } else if (randomNumber > 1) {
    computerMove.textContent = "PAPER";
    return "PAPER";
  } else {
    computerMove.textContent = "SCISSORS";
    return "SCISSORS";
  }
}

//function to play a round of the game
function playRound(playerSelection) {
  playerSelection = playerSelection.toLowerCase(); // make comparison case insensitive by converting all to lower case
  computerSelection = getComputerChoice().toLowerCase();
  if (playerSelection == computerSelection) {
    //check for a draw first. This excludes or simplifies later comparisons
    return `Player played ${playerSelection}, Computer played ${computerSelection}. It\'s a draw!`;
  } else if (playerSelection == "rock") {
    //comparisons if player plays rock
    if (computerSelection == "scissors") {
      return `Player played ${playerSelection}, Computer played ${computerSelection}. You win! Rock beats Scissors`;
    } else {
      return `Player played ${playerSelection}, Computer played ${computerSelection}. You lose! Paper beats Rock`;
    }
  } else if (playerSelection == "scissors") {
    //comparisons if player plays scissors
    if (computerSelection == "rock") {
      return `Player played ${playerSelection}, Computer played ${computerSelection}. You lose! Rock beats Scissors`;
    } else {
      return `Player played ${playerSelection}, Computer played ${computerSelection}. You win! Scissors beats Paper`;
    }
  } else if (playerSelection == "paper") {
    //comparisons if player plays paper
    if (computerSelection == "rock") {
      return `Player played ${playerSelection}, Computer played ${computerSelection}. You win! Paper beats Rock`;
    } else {
      return `Player played ${playerSelection}, Computer played ${computerSelection}. You lose! Scissors beats Paper`;
    }
  }
}

function game(move) {
  console.log(move);
  result = playRound(move);
  if (result.includes("win")) {
    playerScore++;
  } else if (result.includes("lose")) {
    computerScore++;
  }
  round++;

  dispRound.textContent = "Round " + round;
  dispResult.textContent = "Result: " + result;
  dispPlayerScore.textContent = "Player Score: " + playerScore;
  dispComputerScore.textContent = "Computer Score: " + computerScore;
  playerMove.textContent = move;
  console.log(result + " " + playerScore + " " + computerScore);
  if (playerScore == 5) {
    outcome.textContent = "Player wins!";
    moves.forEach((move) => {
      move.disabled = true;
    });
  } else if (computerScore == 5) {
    outcome.textContent = "Computer wins!";
    moves.forEach((move) => {
      move.disabled = true;
    });
  }
}
//function to start or restart game
function controlGame() {
  moves.forEach((move) => {
    move.disabled = false;
  });
  gameState.textContent = "Restart Game";
  playerScore = 0;
  computerScore = 0;
  round = 0;
  result = "";
  dispRound.textContent = "Round";
  dispResult.textContent = "Result:";
  playerMove.textContent = "";
  computerMove.textContent = "";
  dispPlayerScore.textContent = "Player Score: 0";
  dispComputerScore.textContent = "Computer Score: 0";
  outcome.textContent = "";
}
//UI section

const gameState = document.querySelector("#gameState");
gameState.addEventListener("click", controlGame);

let playerScore = 0;
let computerScore = 0;
let result = "";
let round = 0;
const dispRound = document.querySelector("#round");
const dispPlayerScore = document.querySelector("#playerScore");
const dispComputerScore = document.querySelector("#computerScore");
const dispResult = document.querySelector("#lastResult");
const outcome = document.querySelector("#outcome");
const moves = document.querySelectorAll(".move");
const computerMove = document.querySelector("#computerMove");
const playerMove = document.querySelector("#playerMove");

moves.forEach((move) => {
  move.addEventListener("click", () => {
    game(move.id);
  });
});
