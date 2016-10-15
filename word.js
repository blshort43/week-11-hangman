// var Game = require("./game.js");
// var Main = require("./main.js");

// var remainingGuesses = 10;
// var wins = 0;
// var losses = 0;
// var wordArray = []; //holds array of the random word chosen
// var guessArray = []; //creates an array of the user guessed letters
// var dashArray = []; //creates an array of dashes for the amount of letters in the randome word chosen

// var correctLetters = [];
// var newBlankDashArray = [];
// var newDashArray = [];
// var incorrectGuess = [];



// //#arrays4days

// var reset = function() {
//     remainingGuesses = 10;
//     wordArray = []; //holds array of the random word chosen
//     guessArray = []; //creates an array of the user guessed letters
//     dashArray = []; //creates an array of dashes for the amount of letters in the randome word chosen
//     correctLetters = [];
// }



// function compare(){
//         if (guessArray.indexOf(Main.userGuess) == -1) {
//             guessArray.push(Main.userGuess);

//             // This code runs when the key is not a duplicate

//             if (wordArray.indexOf(Main.userGuess) == -1) {
//                 // This code runs when the key is not in the wordArray

//                 remainingGuesses--;
//                 console.log(remainingGuesses);
                
//             } else {
//                 correctLetters.push(Main.userGuess);

//                 // This code runs when the key is in the wordArray
//                 for (var i = 0; i < randomWord.length; i++) {
//                     if (Main.userGuess == randomWord[i]) {
//                         dashArray.splice(i, 1, Main.userGuess);
//                         newDashArray = dashArray.join('');
//                         console.log(newDashArray);
//                     }
//                 }

//                 if (correctLetters.length == wordArray.length) {
//                     wins++;
//                     alert("You won! The word was " + newDashArray.toString());
//                     reset();
//                     console.log(wins);

//                 }

//             }

//         }

//         if (remainingGuesses === 0) {
//             reset();
//         }
// }



// module.exports = {
//     guessArray: guessArray,
//     compare: compare()

// }
