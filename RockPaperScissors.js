let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let ranNumb = Math.floor(Math.random() * 3);
    let returnVal = "";
      if (ranNumb == 0) {returnVal = "rock"};
       if (ranNumb == 1) {returnVal = "paper"};
        if (ranNumb == 2) {returnVal = "scissors"};
    console.log(returnVal);
}


function getHumanChoice() {
    let input = prompt("Enter your guess here!").toLowerCase();
    let returnVal = ""
      if (input == "rock") {returnVal = "rock"}
       else if (input == "paper") {returnVal = "paper"} 
        else if (input == "scissors") {returnVal = "scissors"}
         else {returnVal = "Please enter valid guess!"}
    console.log(returnVal);
}
