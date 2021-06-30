// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('Tell if a number is too high', (expect) => {
    const expected = 1;
    const actual = compareNumbers(10, 20);
    expect.equal(actual, expected);
});

test('Tell if a number is too low', (expect) => {
    const expected = -1;
    const actual = compareNumbers(20, 5);
    expect.equal(actual, expected);
});

test('Tell if a number is equal', (expect) => {
    const expected = 0;
    const actual = compareNumbers(50, 50);
    expect.equal(actual, expected);
})
