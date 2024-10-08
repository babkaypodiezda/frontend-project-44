#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';
import * as greetings from '../src/greetings.js';

export default () => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const x = _.random(100);
    const y = _.random(100);
    let z = 0;
    switch (z = _.random(1, 3)) {
      case 1:
        z = '+';
        break;
      case 2:
        z = '-';
        break;
      case 3:
        z = '*';
        break;
      default:
        z = 0;
    }
    console.log(`Question: ${x} ${z} ${y}`);

    const answer = Number(readlineSync.question('Your answer: '));
    if (Number.isNaN(answer)) {
      return console.log('Input only numbers');
    }

    let w = 0;
    if (z === '+') {
      w = x + y;
      if (answer === w) {
        console.log('Correct!');
      } else {
        return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${w}'. Let's try again, ${greetings.userName}!`);
      }
    } else if (z === '-') {
      w = x - y;
      if (answer === w) {
        console.log('Correct!');
      } else {
        return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${w}'. Let's try again, ${greetings.userName}!`);
      }
    } else if (z === '*') {
      w = x * y;
      if (answer === w) {
        console.log('Correct!');
      } else {
        return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${w}'. Let's try again, ${greetings.userName}!`);
      }
    }
  }
  return console.log(`Congratulations, ${greetings.userName}!`);
};
