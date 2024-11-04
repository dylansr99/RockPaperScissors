function getComputerChoice() {
    let ranNumb = Math.floor(Math.random() * 3);
    let returnVal = "";
      if (ranNumb == 0) {returnVal = "rock"};
       if (ranNumb == 1) {returnVal = "paper"};
        if (ranNumb == 2) {returnVal = "scissors"};
        return returnVal;
}


function getHumanChoice() {
    let input = prompt("Enter your guess here!").toLowerCase();
    let returnVal = ""
      if (input == "rock") {returnVal = "rock"}
       else if (input == "paper") {returnVal = "paper"} 
        else if (input == "scissors") {returnVal = "scissors"}
         return returnVal;
}


function playGame() {
// move playround function and score variables to be defined within this function
let humanScore = 0;
let computerScore = 0;



function playRound(humanChoice, computerChoice) {
  console.log(humanChoice)
  console.log(computerChoice)
  let result = "";
  let output = "";


  if (humanChoice == "rock" && computerChoice == "paper") {result = "computerWin"}
   else if (humanChoice == "scissors" && computerChoice == "rock") {result = "computerWin"}
    else if (humanChoice == "paper" && computerChoice == "scissors") {result = "computerWin"}
     else if (humanChoice == "rock" && computerChoice == "scissors") {result = "humanWin"}
      else if (humanChoice == "scissors" && computerChoice == "paper") {result = "humanWin"}
       else if (humanChoice == "paper" && computerChoice == "rock") {result = "humanWin"}
        else if (humanChoice == "rock" && computerChoice == "rock") {result = "draw"}
         else if (humanChoice == "paper" && computerChoice == "paper") {result = "draw"}
          else if (humanChoice == "scissors" && computerChoice == "scissors") {result = "draw"}

  if (result == "computerWin") {output = `You lost! ${computerChoice} beats ${humanChoice}`}
   else if (result == "humanWin") {output = `You won! ${humanChoice} beats ${computerChoice}`}
    else if (result == "draw") {output = `Draw! ${humanChoice} cancels out ${computerChoice}`}

  console.log(output)

  if (result == "computerWin") {computerScore++}
   else if (result == "humanWin") {humanScore++}

  console.log(humanScore)
  console.log(computerScore)
}

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  
// playround to run five times
  
// each time playround is ran, score increment is stored 

// using greater than operator determine which variable is higher
let winner = "";
  if (humanScore > computerScore) {
    winner = "won"
  }
   else if (computerScore > humanScore) {
    winner = "lost"
   }
// display message of winner
  if (winner == "won") {
    console.log("Congratulations, you won!")
  }
  else if (winner == "lost") {
    console.log("You lost! Better luck next time!")
  }
  
}

playGame()