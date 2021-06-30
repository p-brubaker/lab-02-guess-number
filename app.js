
import { compareNumbers } from './utils.js';

let guessInput = document.getElementById('guess-input');
let submitGuess = document.getElementById('submit-guess');
let displayGuesses = document.getElementById('guesses-remaining-display');
let result = document.getElementById('result');

let guessesRemaining;
let numberToGuess;
let guessOutcome;

guessInput.addEventListener('click', () => guessInput.value = '');
submitGuess.addEventListener('click', () => { 
    guessesRemaining--;
    displayGuesses.textContent = guessesRemaining;
    guessOutcome = compareNumbers(numberToGuess, guessInput.value);
    console.log(guessOutcome);
    if (guessOutcome === 'correct') {
        result.textContent = `You won in ${7 - guessesRemaining} guesses! Nice job! Care to play again?`;
        displayGuesses.textContent = '7';
        guessNumber();
    } 
    else if (guessesRemaining === 0) {
        result.textContent = `Out of guesses! The correct number was ${numberToGuess}. Why not give it another try?`
        displayGuesses.textContent = '7';
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
    numberToGuess = Math.ceil(Math.random()*100);
    guessesRemaining = 7;
}

guessNumber();

