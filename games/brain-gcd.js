#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';
import * as greetings from '../src/greetings.js';

export default () => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let w = 0; w < 3; w += 1) {
    const x = _.random(100);
    const y = _.random(100);
    console.log(`Question: ${x} ${y}`);
    let q = 0;
    for (let i = 0; i < 100; i += 1) {
      if (x % i === 0 && y % i === 0) {
        q = i;
      }
    }
    const answer = Number(readlineSync.question('Your answer: '));
    if (Number.isNaN(answer)) {
      return console.log('Input only numbers');
    }

    if (answer === q) {
      console.log('Correct!');
    } else {
        return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${q}'. Let's try again, ${greetings.userName}!`);
    }
  }
  console.log(`Congratulations, ${greetings.userName}!`);
};
