let humanScore = 0;
let computerScore = 0;


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
         else {returnVal = "Please enter valid guess!"}
         return returnVal;
}


function playRound(humanChoice, computerChoice) {
    console.log(humanChoice)
    console.log(computerChoice)
    let result = "";
    let output = "";

    if (humanChoice == "rock" && computerChoice == "paper") {result = "computerWin"}
     else if (humanChoice == "scissors" && computerChoice == "rock") {result = "computerWin"}
      else if (humanChoice == "paper" && computerChoice == "rock") {result = "computerWin"}
       else if (humanChoice == "rock" && computerChoice == "scissors") {result = "humanWin"}
        else if (humanChoice == "scissors" && computerChoice == "paper") {result = "humanWin"}
         else if (humanChoice == "paper" && computerChoice == "rock") {result == "humanWin"}

    if (result == "computerWin") {output = `You lost! ${computerChoice} beats ${humanChoice}`}
     else if (result == "humanWin") {output = `You won! ${humanChoice} beats ${computerChoice}`}

    console.log(output)
   
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);