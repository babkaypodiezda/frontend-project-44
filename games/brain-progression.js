#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';

export default () => {
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');  

console.log('What number is missing in the progression?');


for (let i = 0; i < 3; i += 1) {
    let x = _.random(10); //start
    let y = _.random(10); // increment
    const arr = [];
    arr.push(x);

    for (let i = 0; i < 9; i += 1){
        x += y;
        arr.push(x);
    }
    let z = _.random(9);
    let q = arr[z];
    arr[z] = `..`;
    console.log(`Question: ${arr}`);

const answer = Number(readlineSync.question("Your answer: "));
if (Number.isNaN(answer)){return console.log("Input only numbers")};

if ( answer === q ) {
    console.log("Correct!");
    }
else {
    return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${q}'. Let's try again, ${userName}!`)
    };
}
console.log(`Congratulations, ${userName}!`);
}
