#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';

export default () => {
const userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');  

console.log('Answer "yes" if the number is even, otherwise answer "no".');


for (let i = 0; i < 3; i += 1) {
    let x = _.random(100);
    console.log("Questiom: ",x);

    const answer = readlineSync.question("Your answer:");
if (answer === "yes"){
    if (x % 2 === 0) {
        console.log("Correct!");
    }
    else {
        return console.log("'",answer,"'is wrong answer ;(. Correct answer was 'no'. Let's try again, ",userName,"!")
    };
}
else if (answer === "no") {
    if (x % 2 !== 0) {
        console.log("Correct!");
    }
    else {
        return console.log("'",answer,"'is wrong answer ;(. Correct answer was 'yes'. Let's try again, ",userName,"!")
    };
}
else {
    return console.log("Nope");
}
}
console.log("Congratulations, ",userName,"!");
}
