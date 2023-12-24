import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const evenOrOdd = () => {
  const name = getUserName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * (100 - 1) + 1);
    const answer = readlineSync.question(`Question: ${number}
Your answer: `);
    if (number % 2 === 0 && answer === 'no') {
      console.log(`"no" is a wrong answer ;(. The correct answer was "yes". Let's try again, ${name}`);
      break;
    }
    if (number % 2 !== 0 && answer === 'yes') {
      console.log(`yes" is a wrong answer ;(. The correct answer was "no". Let's try again, ${name}`);
      break;
    } else console.log('Correct!');
    console.log(`Congratulations, ${name}!`);
  }
};

export default evenOrOdd;
