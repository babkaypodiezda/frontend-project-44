import readlineSync from 'readline-sync';

export default () => {
// Wait for user's response.
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hi ' + userName + '!');  
};