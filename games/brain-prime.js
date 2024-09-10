#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';
import isPrime from '../src/primeNumber.js';

export default () => {
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');  

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');


for (let i = 0; i < 3; i += 1) {
    let x = _.random(100);
    let result = 0;
    console.log("Question: ",x);

    const answer = readlineSync.question("Your answer: ");
if (answer === "yes") {
    if (isPrime(x) === true) {
        console.log("Correct!");
    }
    else {
        return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}!`)
    };
}
else if (answer === "no") {
    if ( isPrime(x) === false) {
        console.log("Correct!");
    }
    else {
        return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${userName}!`)
    };
}
else {
    return console.log("Input only 'yes' or 'no'");
    }
}

console.log(`Congratulations, ${userName}!`);
}
