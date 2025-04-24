function getComputerChoice() {
  let res = Math.floor(Math.random() * 3);
  if (res === 0) return "Rock";
  if (res === 1) return "Scissors";
  if (res === 2) return "Paper";
}
function checkResult(userChoice, compChoice) {
  if (userChoice.toLowerCase() === "rock") {
    if (compChoice === "Rock") {
      return "Overall";
    }
    if (compChoice === "Scissors") {
      return "You win!";
    }
    if (compChoice === "Paper") {
      return "Comp win!";
    }
  }
  if (userChoice.toLowerCase() === "paper") {
    if (compChoice === "Paper") {
      return "Overall";
    }
    if (compChoice === "Rock") {
      return "You win!";
    }
    if (compChoice === "Scissors") {
      return "Comp win!";
    }
  }
  if (userChoice.toLowerCase() === "scissors") {
    if (compChoice === "Scissors") {
      return "Overall";
    }
    if (compChoice === "Paper") {
      return "You win!";
    }
    if (compChoice === "Rock") {
      return "Comp win!";
    }
  }
}
let userChoice;
let res;
let compChoice;
let cont;
while (1) {
  compChoice = getComputerChoice();
  userChoice = prompt("Enter your choice");
  console.log("Computer's choice:", compChoice);
  console.log("User's choice:", userChoice);
  console.log("Result:", checkResult(userChoice, compChoice));
  cont = prompt("Continue?");

  if (cont === null || cont.toLowerCase() != "yes") {
    break;
  }
}
