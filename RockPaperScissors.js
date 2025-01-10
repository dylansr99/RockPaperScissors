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

function playRound(humanChoice, computerChoice) {
   
   const humanChoiceDisplay = document.querySelector("#humanChoiceDisplay")
   humanChoiceDisplay.textContent = `You chose ${humanChoice}`
   container.appendChild(humanChoiceDisplay)
   
   const computerChoiceDisplay = document.querySelector("#computerChoiceDisplay")
   computerChoiceDisplay.textContent = `Computer chose ${computerChoice}`
   container.appendChild(computerChoiceDisplay)
    
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


     if (result == "computerWin") {computerScore++}
     else if (result == "humanWin") {humanScore++}
 
   const roundResult = document.querySelector("#roundResult")
   roundResult.textContent = output
   container.appendChild(roundResult)
  
   const humanScoreDisplay = document.querySelector("#humanScoreDisplay")
   humanScoreDisplay.textContent = `Your score is: ${humanScore}`
   container.appendChild(humanScoreDisplay)

   const computerScoreDisplay = document.querySelector("#computerScoreDisplay")
   computerScoreDisplay.textContent = `The computer score is: ${computerScore}`
   container.appendChild(computerScoreDisplay)

  if (humanScore == 5) {
      const humanWinner = document.querySelector("#humanWinner")
      humanWinner.textContent = "Congratulations, you won!"
      container.appendChild(humanWinner)
      return
  }
   else if (computerScore == 5) {
      const computerWinner = document.querySelector("#computerWinner")
      computerWinner.textContent = "You lost! Better luck next time!"
      container.appendChild(computerWinner)
      return
   }
 }

const container = document.querySelector('#container')
let buttons = document.querySelector('#buttons')
buttons.addEventListener('click', playRoundWithButtonInput)
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

function playRoundWithButtonInput() {
     buttons.addEventListener('click', (event) => {
      let buttonPressed = ''

       if (event.target === rock) {
         buttonPressed = 'rock'
      }

       else if (event.target === paper) {
          buttonPressed = 'paper'
       }

       else if (event.target === scissors) {
          buttonPressed = 'scissors'
       }

      let humanChoice = buttonPressed;
      let computerChoice = getComputerChoice()

     playRound(humanChoice, computerChoice)
    }, { once: true })
}



