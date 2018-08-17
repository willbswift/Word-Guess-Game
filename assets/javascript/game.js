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
let puterOptions = ["JOHN CONNER", "GUARDIAN TERMINATOR", "KYLE REESE", "SARAH CONNER", "SAM WRIGHT", "SKYNET", "CAMERON", "DEREK REESE", "KATE BREWSTER", "BLAIR WILLIAMS", "MILES DYSON", "JAMES ELLISON", "CROMARTIE", "CATHERINE WEAVER", "TERMINATRIX"];
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

let stringDisplay = currentDisplay.join('');
//present introductory data on screen
let html2 =
  "<h2>THE TERMINATOR'S TARGET IS: <br>" + stringDisplay + "</h2>";
  document.querySelector(".target").innerHTML = html2;
let html =
  "<p>Surviving humans: " + humansLeft + "</p>";
document.querySelector(".game").innerHTML = html;

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
    let html =
      "<h2>You already found that letter!  Get Out!</h2>";
    document.querySelector(".responses").innerHTML = html;
    }

  else {
    //Will check the entire array to see if that letter shows up
    if ( puterChoiceArray.includes(humanChoiceUpper)  ) {
      console.log(humanChoiceUpper);
      console.log("You guessed a correct letter!");
      let html =
      "<h2>You guessed a correct letter! There's no fate but what we make for ourselves!</h2>";
      document.querySelector(".responses").innerHTML = html;  
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
      console.log("Wrong Letter!");
      let html =
      "<h3>WRONG LETTER!<br>Listen, and understand. That terminator is out there, it cant be bargained with, it can't be reasoned with, it doesn't feel pity or remorse or fear, and it absolutely will not stop EVER, until you are dead!</h3>";
      document.querySelector(".responses").innerHTML = html;  
      humanDeaths++;
      humansLeft--;
      console.log("Humans Terminated " + humanDeaths);
    }
  }

  console.log(currentDisplay);
  console.log ("Letters left to find " + lettersLeft);
  console.log("Humans Living " + humansLeft);

let stringDisplay2 = currentDisplay.join('');

    let html2 =
      "<h2>THE TERMINATOR'S TARGET IS: <br>" + stringDisplay2 + "</h2>";
    document.querySelector(".target").innerHTML = html2;

    let html =
      "<p>You have chosen: "  + lettersGuessed + "</p>" +
      "<p>" + humanDeaths + " people have been terminated so far.</p>" +
      "<p>Surviving humans: " + humansLeft + "</p>";
    // Set the inner HTML contents of the .game div to our html string
    document.querySelector(".game").innerHTML = html;

  if ( humansLeft === 0) {
    console.log ("You lose Hit any key to try again.");
    let audioElement = document.createElement("audio");
      audioElement.setAttribute("src", "assets/sound/hasta-la-vista-baby.mp3");
      audioElement.play();
    let html2 =
      "<h3> </h3>";
      document.querySelector(".responses").innerHTML = html2;  
    let html =
      "<h2>" + puterChoice + " has been terminated.  You can't stop Judgment Day! </p>" +
      "<p> Hasta la vista, baby </h2>" +
      "<h3>Hit any key to travel back in time and try again.</h3>";
    document.querySelector(".commands").innerHTML = html;

    document.onkeyup = function(event) {
      location.reload(); 
    }

  }
  else {
    if ( currentDisplay.includes("_") ) {
          // What the Player sees.
      console.log ("Choose your Fate!");
          let html =
      "<h2>Choose your Fate!</h2>";
    document.querySelector(".commands").innerHTML = html;

    }
    else {
    console.log ("Hit any key to reboot");
    let audioElement = document.createElement("audio");
      audioElement.setAttribute("src", "assets/sound/terminator_theme.mp3");
      audioElement.play();
    let html2 =
    "<h3> </h3>";
    document.querySelector(".responses").innerHTML = html2;  

    let html =
      "<h2>VICTORY! But I'll be back!</h2>" +
      "<h3>Hit any key so another movie can reboot the franchise.</h3>";
    document.querySelector(".commands").innerHTML = html;

    document.onkeyup = function(event) {
      location.reload(); 
    }
  }
  }
}


