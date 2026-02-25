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
  return prompt("choose 'rock' 'paper' or 'scissors'");
}


