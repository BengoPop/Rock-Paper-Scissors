//GOAL CREATE ROCK PAPER SCISSORS
let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
  return prompt("choose 'rock' 'paper' or 'scissors'").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  let result = "";
  if (humanChoice === computerChoice) {
    result = "Tie! No points awarded.";
  } else {
    result = determineResult(humanChoice, computerChoice);
  }

  console.log(result);
}

function determineResult(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "scissors" && computerChoice === "paper" ||
    humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;
  for (i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  if (humanScore === computerScore) {
    console.log("Tie! No ultimate winner.");
  } else if (humanScore > computerScore) {
    console.log("You Win! You are the ultimate winner!");
  } else {
    console.log("You lose! You are the ultimate loser!");
  }
}

playGame();
