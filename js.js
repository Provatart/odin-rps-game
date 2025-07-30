const body = document.body;
const overallResult = document.querySelector("#overallResult");
const currentResult = document.querySelector("#currentResult");
const score = document.querySelector("#score");
const counter = 0;
const total = {
  user: 0,
  comp: 0,
};
score.textContent = `Total score: user - ${total.user}; comp - ${total.comp}`;
body.addEventListener("click", (e) => {
  if (e.target.tagName === 'BUTTON'){
  let usersChoice = e.target.textContent;
  let compChoice = getComputerChoice();
  // console.log(usersChoice, compChoice, score);
    // 
    currentResult.textContent = `Your choice is ${usersChoice} | Comp choice is ${compChoice} | Result of stage: ${checkResult(
      usersChoice,
      compChoice
    )}`;
    overallResult.textContent = ``
    score.textContent = `Total score: user - ${total.user}; comp - ${total.comp}`;
  if (total.user === 5 || total.comp === 5) {
    let winner = (total.user ===5)?"YOU": "COMP";
    total.user = 0;
    total.comp = 0;
    score.textContent = '';
    // score.textContent = `Total score: user - ${total.user}; comp - ${total.comp}`;
    currentResult.textContent += ` Game over.`;

    
    overallResult.textContent = `Winner: ${winner}`
  }else{
    }
  }
});

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
      total.user++;
      return "You win!";
    }
    if (compChoice === "Paper") {
      total.comp++;
      return "Comp win!";
    }
  }
  if (userChoice.toLowerCase() === "paper") {
    if (compChoice === "Paper") {
      return "Overall";
    }
    if (compChoice === "Rock") {
      total.user++;
      return "You win!";
    }
    if (compChoice === "Scissors") {
      total.comp++;
      return "Comp win!";
    }
  }
  if (userChoice.toLowerCase() === "scissors") {
    if (compChoice === "Scissors") {
      return "Overall";
    }
    if (compChoice === "Paper") {
      total.user++;
      return "You win!";
    }
    if (compChoice === "Rock") {
      total.comp++;
      return "Comp win!";
    }
   
  }
  
}
// let userChoice;
// let res;
// let compChoice;
// let cont;
// while (1) {
//   compChoice = getComputerChoice();
//   userChoice = prompt("Enter your choice");
//   console.log("Computer's choice:", compChoice);
//   console.log("User's choice:", userChoice);
//   console.log("Result:", checkResult(userChoice, compChoice));
//   cont = prompt("Continue?");

//   if (cont === null || cont.toLowerCase() != "yes") {
//     break;
//   }
// }
