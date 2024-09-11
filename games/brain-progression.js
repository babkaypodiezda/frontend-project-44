#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';
import * as greetings from '../src/greetings.js';

export default () => {
  console.log('What number is missing in the progression?');

  for (let w = 0; w < 3; w += 1) {
    let x = _.random(10); // start
    const y = _.random(1, 10); // increment
    const arr = [];
    arr.push(x);
    for (let i = 0; i < 9; i += 1) {
      x += y;
      arr.push(x);
    }

    const z = _.random(9);
    const q = arr[z];
    arr[z] = '..';
    console.log(`Question: ${arr.join(' ')}`);

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
  return console.log(`Congratulations, ${greetings.userName}!`);
};
