//GOAL CREATE ROCK PAPER SCISSORS
let humanScore = 0;
let computerScore = 0;


function updateHumanScoreDiv() {
  humanScoreDiv.textContent = `human:${humanScore}`
}
function updateCompScoreDiv() {
  compScoreDiv.textContent = `comp:${computerScore}`
}
const humanScoreDiv = document.querySelector(".humanScore")
const compScoreDiv = document.querySelector(".compScore")
updateHumanScoreDiv();
updateCompScoreDiv();

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const winnerTitle = document.querySelector(".winnerBoard");
const results = document.querySelector(".matchResults")

rock.addEventListener("click", (e) => playRound("rock", getComputerChoice()));
paper.addEventListener("click", (e) => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", (e) => playRound("scissors", getComputerChoice()));

function getComputerChoice() {
  let randomChoiceno = Math.floor(Math.random() * 3);
  let computerChoiceNo = randomChoiceno;

  switch (computerChoiceNo) {
    case 0:
      return "rock";

    case 1:

      return "paper";
    case 2:

      return "scissors";
  }
}

function getHumanChoice(choice) {
  return choice;
}

function playRound(humanChoice, computerChoice) {
  let result = "";
  if (humanChoice === computerChoice) {
    result = "Tie! No points awarded.";
  } else {
    result = determineResult(humanChoice, computerChoice);
  }

  results.textContent = result;
}

function determineResult(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "scissors" && computerChoice === "paper" ||
    humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;

    humanScoreDiv.textContent = `human:${humanScore}`
    checkWinner();
    return `${humanChoice} beats ${computerChoice} +1 pt human`;
  } else {
    computerScore++;
    compScoreDiv.textContent = `comp:${computerScore}`
    checkWinner();
    return `${computerChoice} beats ${humanChoice} +1 pt computer`;
  }
}

function checkWinner() {
  if (humanScore > 4 || computerScore > 4) {
    if (humanScore > computerScore) {
      winnerTitle.textContent = ("You Win! You are the ultimate winner!");
    } else {
      winnerTitle.textContent = ("You lose! You are the ultimate loser!");
    }
  }

}


