
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

    // set up event listeners: theres only one, user clicks submit button
    submitGuess.addEventListener('click', () => {
        // compare guess to actual number with compare numbers func
        // guess correct?
            // display message to user
            // exit guessing subroutine
        // guess too high?
            // display message to user
        // guess to low?
            // display message to user
        // decrement guesses remaining
        // guesses remaining === 0?
            // display losing message with encouragement to try again
            // exit guessing subroutine
        // update guesses remaining display
    })    
}

