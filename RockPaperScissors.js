function getComputerChoice() {
// Create variable to store randomly generated number between zero and two called ranNumb
    let ranNumb = Math.floor(Math.random() * 3);
// Create variable for storing returned value 
    let returnVal = "";
// When the value in ranNumb is 0 return rock
      if (ranNumb == 0) {
           returnVal = "rock"
      };
// When the value in ranNumb is 1 return paper
      if (ranNumb == 1) {
           returnVal = "paper"
      };

// When the value in ranNumb is 2 return scissors
       if (ranNumb == 2) {
            returnVal = "scissors"
      };

// Print returned value
    console.log(returnVal);
}

getComputerChoice()
