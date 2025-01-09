function getComputerChoice() {
    let ranNumb = Math.floor(Math.random() * 3);
    let returnVal = "";
      if (ranNumb == 0) {returnVal = "rock"};
       if (ranNumb == 1) {returnVal = "paper"};
        if (ranNumb == 2) {returnVal = "scissors"};
        return returnVal;
}

let humanScore = 0;
let computerScore = 0;

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
    })

let gameResult = "";
  if (humanScore == 5) {gameResult = "won"}
   else if (computerScore == 5) {gameResult = "lost"}
  
  if (gameResult == "won") {console.log("Congratulations, you won!")}
   else if (gameResult == "lost") {console.log("You lost! Better luck next time!")}
}

