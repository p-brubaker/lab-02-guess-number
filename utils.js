export function compareNumbers(actual, guess) {
    if (guess < actual) {
        return -1;
    } else if (guess > actual) {
        return 1;
    } else if (parseInt(guess) === actual) {
        return 'correct';
    }
}