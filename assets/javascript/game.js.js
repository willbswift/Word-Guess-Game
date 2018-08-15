//make currentDisplay of dashes for each letter
//Turn everything play inputs into uppercase
//Create guessedLetters array
//Loop compares playerLetter to array to see if it appears.
	//Research .carAt() for finding specified characters at start of item. 
//If it does console thingy
//update currentDisplay array with appropriate letter????

/*
// Created an array of themed words
      let puterOptions = ["JOHN CONNER", "TERMINATOR", "KYLE REESE", "SARAH CONNER", "SAM WRIGHT", "SKYNET", "CAMERON", "DEREK REESE"];
// Randomly chooses a choice from the options array. This is the Computer's guess.
      let puterChoice = puterOptions[Math.floor(Math.random() * puterOptions.length)];
      console.log(puterChoice);
*/

var fruits = ['Apple', 'Banana'];

console.log(fruits.length);

      /*let puterChoice = ["ABCDEF"];
      console.log(puterChoice);
/*
//Convert puter's choice of string to an array 
      let puterChoiceArray = (Array.from(puterChoice));
      console.log(puterChoiceArray);

      let currentDisplay = new Array();

  for ( let i = 0; i < puterChoiceArray.length; i++ ){
      currentDisplay.push("-");
    }
    console.log(currentDisplay);
  

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    let humanWins = 0;
    let humansLeft = 0;
    // let lettersGuessed = ___;

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

      // Determines which key was pressed.
      let humanChoice = event.key;

      // Converts the user's answer to Uppercase.
      let humanChoiceLower = humanChoice.toUpperCase();


//Will check the entire array to see if that letter shows up
  if( [puterChoiceArray].includes(humanChoiceLower)  ) {
    console.log(humanChoiceLower)
  }
    else {
      console.log("Wrong Letter - death to humans!");
    }






      // Now we check the myBands array to see if it contains the user's answer.
      // If the user's band is not in the array...
      if (myBands.indexOf(userGuessLower) === -1) {
        alert("Nah! They're pretty lame...");
      }
      // If it is in the array...
      else {
        alert("OMG! I love them too!");
      }


//checks for a letter in the array and outputs that correct item from the array.  
for ( let i = 0; i < animals.length; i++ ){
	if( animals[i].includes("a")) {
		console.log(animals[i]);
	}
}

      // Creating an array of vegetables.
      var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

      // Looping through each item in the array and logging a message to the console.
      for (var i = 0; i < vegetables.length; i++) {
        console.log("I love " + vegetables[i]);
      }


      // This is our starting myFarm array.
      var myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];

      // Creating a variable to hold our array length.
      var arrayLength = myFarm.length;

      // Looping through our myFarm array.
      for (var j = 0; j < arrayLength; j++) {

        // Console out the farm animal in the current index.
        console.log(myFarm[j]);

        // If the first character in the current animal is "c" or "o", alert the following message.
        if (myFarm[j].charAt(0) === "c" || myFarm[j].charAt(0) === "o") {
          alert("Starts with a c or an o!");
        }

      }


      // If petAge equals 5 exactly (in value and data type), run the following block of code.
      if (petAge === 5) {
        // Alert this message.
        alert("My pet is 5 years old");
      }
      // Else if petAge is less than 5, run the following block of code.
      else if (petAge < 5) {
        // Alert this message.
        alert("My pet is less than 5 years old");
      }
      // If none of the above conditions have been satisfied (petAge is greater than 5), run the following code.
      else {
        // Alert this message.
        alert("My pet is older than 5 years old");
      }


      // Loops through the array to print each zoo animal. MIGHT BE USEFUL FOR READING OUT CURRENT STATUS?
      for (var i = 0; i < zooAnimals.length; i++) {
        // Logs the animal at index position i to the console. This code is executed each we go through the loop.
        console.log(zooAnimals[i]);
      }


        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<p>You chose: " + userGuess + "</p>" +
          "<p>The computer chose: " + computerGuess + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>ties: " + ties + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;

   }
   };