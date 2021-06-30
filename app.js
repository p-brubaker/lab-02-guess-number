
import { compareNumbers } from './utils.js';

// grab DOM elements
let guessInput = document.getElementById('guess-input');
let submitGuess = document.getElementById('submit-guess');
let displayGuesses = document.getElementById('guesses-remaining-display');
let highOrLow = document.getElementById('high-or-low');
let result = document.getElementById('result');

// initialize state
function guessNumber() {
    let guessesRemaining = 7;
    const numberToGuess = Math.ceil(Math.random()*100);
    
}

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
