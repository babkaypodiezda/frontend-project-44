#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';

export default () => {
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');  

console.log('What is the result of the expression?');


for (let i = 0; i < 3; i += 1) {
    let x = _.random(100);
    let y = _.random(100);
    let z = 0;
    switch (z = _.random(1,3)) {
        case 1:
            z = '+';
            break;
        case 2:
            z = '-';
            break;
        case 3:
            z = '*';
            break;
    }
console.log("Questiom: ",x,z,y);

const answer = Number(readlineSync.question("Your answer: "));
if (Number.isNaN(answer)){return console.log("Put only numbers")};

let w = 0;
if ( z === "+"){
    w = x + y;
    if ( answer === w ) {
        console.log("Correct!");
    }
    else {
        return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${w}'. Let's try again, ${userName}!`)
    };
}
else if (z === "-") {
    w = x - y;
    if (answer === w ) {
        console.log("Correct!");
    }
    else {
        return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${w}'. Let's try again, ${userName}!`)
    };
}
else if (z === "*") {
    w = x * y;
    if (answer === w ) {
        console.log("Correct!");
    }
    else {
        return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${w}'. Let's try again, ${userName}!`)
    }
}
}
console.log(`Congratulations, ${userName}!`);
}
