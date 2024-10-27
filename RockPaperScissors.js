function getComputerChoice() {
    let ranNumb = Math.floor(Math.random() * 3);
    let returnVal = "";
      if (ranNumb == 0) {returnVal = "rock"};
       if (ranNumb == 1) {returnVal = "paper"};
        if (ranNumb == 2) {returnVal = "scissors"};
    console.log(returnVal);
}
getComputerChoice()


function getHumanChoice () {
// Get user input from a prompt  
// Store value from the prompt in a variable
    let input = prompt("Enter your guess here!");
    let returnVal = ""
// Check if the inputted value is valid
// Return value if it is valid
      if (input == "rock") {
        returnVal = "rock"
      }
      else if (input == "paper") {
        returnVal = "paper"
      } 
      else if (input == "scissors") {
        returnVal = "scissors"
      }
      else {
        returnVal = "Please enter valid guess!"
      }

// Print returned value
    console.log(returnVal);
}
getHumanChoice();