//make currentDisplay of dashes for each letter
//Turn everything play inputs into uppercase
//Create guessedLetters array
//Loop compares playerLetter to array to see if it appears.
	//Research .carAt() for finding specified characters at start of item. 
//If it does console thingy
//update currentDisplay array with appropriate letter????
//when no dashes are found in currentDisplay then trigger victory - "I'll be back!"
//when no dashes are found in currentDisplay then trigger final death - "Hasta la vista, baby"



// Created an array of themed words
let puterOptions = ["JOHN CONNER", "TERMINATOR", "KYLE REESE", "SARAH CONNER", "SAM WRIGHT", "SKYNET", "CAMERON", "DEREK REESE"];
  // Randomly chooses a choice from the options array. This is the Computer's guess.
  let puterChoice = puterOptions[Math.floor(Math.random() * puterOptions.length)];
//let puterChoice = ['ABCDEF'];
    console.log("Skynet chooses " + puterChoice);
  //Convert puter's choice of string to an array 
  let puterChoiceArray = (Array.from(puterChoice));
    console.log(puterChoiceArray);

//Create empty array to display to player
let currentDisplay = new Array();
  //fill with dashes
  for ( let i = 0; i < puterChoiceArray.length; i++ ){
    currentDisplay.push("_");
  }
    console.log(currentDisplay);

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
let letterWins = 0;
let lettersLeft = (puterChoiceArray.length);
let humanDeaths = 0;
let humansLeft = 8;
    console.log("Humans Living " + humansLeft)
let lettersGuessed = [];

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  // Determines which key was pressed.
  let humanChoice = event.key;
  // Converts the user's answer to Uppercase.
  let humanChoiceUpper = humanChoice.toUpperCase();
    console.log(humanChoiceUpper);
    lettersGuessed.push(humanChoiceUpper);
    console.log(lettersGuessed)

  //Create array to hold discovered letter positions 
  let positions = [];

  //insures you can't win by guessing the same winning letter over and over
  if ( currentDisplay.includes(humanChoiceUpper) ) {
    console.log("You already found that letter!  Get Out!");
    }
  else {
    //Will check the entire array to see if that letter shows up
    if ( puterChoiceArray.includes(humanChoiceUpper)  ) {
      console.log(humanChoiceUpper);
      console.log("You guessed a correct letter! There's no fate but what we make for ourselves!");
      letterWins++
      //Will create array of indexes where chosen letter appears
      let idx = puterChoiceArray.indexOf(humanChoiceUpper);
      while (idx != -1) {
        positions.push(idx);
        idx = puterChoiceArray.indexOf(humanChoiceUpper, idx + 1);
      }
        console.log(positions);

      lettersLeft = lettersLeft - positions.length
      //Updates display so player can see how they are doing
      for( let i = 0; i < positions.length; i++ ){
        let targetIndex = positions[i];
        currentDisplay[targetIndex] = humanChoiceUpper;
      }
    }
    else {
      console.log("Wrong Letter - death to humans!");
      humanDeaths++;
      humansLeft--;
      console.log("Humans Terminated " + humanDeaths);
    }
  }

  console.log(currentDisplay);
  console.log ("Letters left to find " + lettersLeft);
  console.log("Humans Living " + humansLeft);

  if ( humansLeft === 0) {
    console.log ("You can't stop Judgement Day!  Hasta la vista, baby");
    console.log ("Hit any key to travel back in time and try again");
    document.onkeyup = function(event) {
      location.reload(); 
    }

  }
  else {
    if ( currentDisplay.includes("_") ) {
          // What the Player sees.


    let html =
      "<p>You chose:  + "(humanChoiceUpper)"</p>";
      //"<p>The computer chose: " + computerGuess + "</p>" +
      //"<p>wins: " + wins + "</p>" +
     // "<p>losses: " + losses + "</p>" +
     // "<p>ties: " + ties + "</p>";

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;



      console.log ("Choose your Fate!");


    }
    else {
    console.log ("VICTORY!  But I'll be back!");
    console.log ("Hit any key to reboot the franchise");
    document.onkeyup = function(event) {
      location.reload(); 
    }
  }
  }
}


