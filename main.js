var inquirer = require('inquirer');

var Game = require('./game.js');
// var Word = require('./word.js');
var Letter = require('./letter.js');

var remainingGuesses = 10;
var wins = 0;
var losses = 0;
var wordArray = []; //holds array of the random word chosen
var guessArray = []; //creates an array of the user guessed letters
var dashArray = []; //creates an array of dashes for the amount of letters in the random word chosen
var correctLetters = [];
var newBlankDashArray = [];
var incorrectGuess = [];
var guessArray = [];
var userGuess;


console.log("-----------------------------------------------------------");
console.log("             WELCOME TO BUSTED ASS HANGMAN!!!")
console.log("----------------------------------------------------------- " + '\n');
console.log("                  " + Letter.newBlankDashArray) + "\n";

function gameStart() {
    inquirer.prompt([{
        name: "guess",
        message: "Guess a letter: ",
        type: "input"
    }]).then(function(answers) {
        userGuess = answers.guess;

        if (guessArray.indexOf(userGuess) == -1) {
            guessArray.push(userGuess);
            console.log("\nLetters guessed: " + guessArray + "\n");


            if (Game.wordArray.indexOf(userGuess) == -1) {
                // This code runs when the key is not in the wordArray

                remainingGuesses--;
                console.log("\nIncorrect guess. You have " + remainingGuesses + " remaining guesses.\n");

                if (newDashArray === []) {
                    console.log("                   " + Letter.newBlankDashArray)
                } else {
                    console.log("                   " + newDashArray);
                }
                gameStart();

            } else {
                correctLetters.push(userGuess);

                // This code runs when the key is in the wordArray
                for (var i = 0; i < Game.randomWord.length; i++) {
                    if (userGuess == Game.randomWord[i]) {
                        Letter.dashArray.splice(i, 1, userGuess);
                        newDashArray = Letter.dashArray.join('');
                    }
                }
                console.log("                   " + newDashArray);
                gameStart();

                if (correctLetters.length == Game.randomWord.length) {

                    alert("You won! The word was " + newDashArray.toString());
                }
            }
        } else {
            console.log("You already guessed that! Pick another letter.");
            gameStart();
        }
    });

}


gameStart();

module.exports = {
    userGuess: userGuess
};
