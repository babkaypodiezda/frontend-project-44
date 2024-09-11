#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';
import * as greetings from '../src/greetings.js';

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const x = _.random(100);
    console.log(`Question: ${x}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === 'yes') {
      if (x % 2 === 0) {
        console.log('Correct!');
      } else {
        return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${greetings.userName}!`);
      }
    } else if (answer === 'no') {
      if (x % 2 !== 0) {
        console.log('Correct!');
      } else {
        return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${greetings.userName}!`);
      }
    } else {
      return console.log('Input only "yes" or "no"');
    }
  }
  console.log(`Congratulations, ${greetings.userName}!`);
};
