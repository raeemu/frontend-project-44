import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ', {
    defaultInput: 'User'
});
console.log('Hello, ' + name + '!');

export default name;