let userChoice;
do {
  userChoice = prompt("Enter your choice from rock, paper, scissors:");
  if (
    userChoice !== "rock" &&
    userChoice !== "paper" &&
    userChoice !== "scissors"
  ) {
    alert("you enterd wrong input..");
  }
} while (
  userChoice !== "rock" &&
  userChoice !== "paper" &&
  userChoice !== "scissors"
);

alert(`userChoice is ${userChoice}`);

let compChoice = Math.round(Math.random() * 2);
if (compChoice === 0) {
  alert("compChoice is rock");
} else if (compChoice === 1) {
  alert("compChoice is paper");
} else if (compChoice === 2) {
  alert("compChoice is scissors");
}

function compare(choice1, choice2) {
  if (choice1 == "rock" && choice2 == "1") {
    alert("You lose! Paper beats rock.");
  } else if (choice1 == "rock" && choice2 == "2") {
    alert("You win! Rock beats scissors.");
  } else if (choice1 == "paper" && choice2 == "0") {
    alert("You win! Paper beats rock.");
  } else if (choice1 == "paper" && choice2 == "2") {
    alert("You lose! Scissors beats paper.");
  } else if (choice1 == "scissors" && choice2 == "0") {
    alert("You lose! Rock beats scissors.");
  } else if (choice1 == "scissors" && choice2 == "1") {
    alert("You win! Scissors beats paper.");
  } else {
    alert("Its a tie");
  }
}
compare(userChoice, compChoice);
