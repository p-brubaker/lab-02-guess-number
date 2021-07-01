
import { compareNumbers, } from './utils.js';

let guessInput = document.getElementById('guess-input');
let submitGuess = document.getElementById('submit-guess');
let displayGuesses = document.getElementById('guesses-remaining-display');
let result = document.getElementById('result');
let reset = document.getElementById('reset');
let winsDiv = document.getElementById('wins');
let failsDiv = document.getElementById('fails');

let guessesRemaining;
let numberToGuess;
let guessOutcome;
// eslint-disable-next-line no-unused-vars
let wins = 0;
// eslint-disable-next-line no-unused-vars
let fails = 0;

guessInput.addEventListener('click', () => guessInput.value = '');

reset.addEventListener('click', () => {
    guessNumber();
    result.textContent = '';
    displayGuesses.textContent = '7';
    guessInput.value = '';
});

submitGuess.addEventListener('click', () => { 
    guessesRemaining--;
    displayGuesses.textContent = guessesRemaining;
    guessOutcome = compareNumbers(numberToGuess, guessInput.value);
    if (guessOutcome === 'correct') {
        win();
        guessNumber();
    } 
    else if (guessesRemaining === 0) {
        lose();
        guessNumber();
    }
    else if (guessOutcome === 1) {
        result.textContent = `${guessInput.value} is too high! Guess again`;
    } 
    else if (guessOutcome === -1) {
        result.textContent = `${guessInput.value} is too low! Guess again`;
    }
});

function guessNumber() {
    numberToGuess = Math.ceil(Math.random() * 100);
    guessesRemaining = 7;
}

function win() {
    result.textContent = `You won in ${7 - guessesRemaining} guesses! Nice job! Care to play again?`;
    displayGuesses.textContent = '0';
    wins++;
    winsDiv.textContent = `Wins: ${wins}`;

}

function lose() {
    result.textContent = `Out of guesses! The correct number was ${numberToGuess}. Why not give it another try?`;
    displayGuesses.textContent = '0';
    fails++;
    failsDiv.textContent = `fails: ${fails}`;
}

guessNumber();

