import readlineSync from 'readline-sync';

const x = 'Welcome to the Brain Games!';
console.log(x);
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

export { x, userName };
