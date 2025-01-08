function getComputerChoice() {
    let ranNumb = Math.floor(Math.random() * 3);
    let returnVal = "";
      if (ranNumb == 0) {returnVal = "rock"};
       if (ranNumb == 1) {returnVal = "paper"};
        if (ranNumb == 2) {returnVal = "scissors"};
        return returnVal;
}

function playGame() {
let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

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

  console.log(`Your score is: ${humanScore}.`)
  console.log(`The computer score is: ${computerScore}`)
}

let gameResult = "";
  if (humanScore == 5) {gameResult = "won"}
   else if (computerScore == 5) {gameResult = "lost"}
  
  if (gameResult == "won") {console.log("Congratulations, you won!")}
   else if (gameResult == "lost") {console.log("You lost! Better luck next time!")}
}

playGame()