import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const calcualtor = () => {
  const name = getUserName();
  console.log('What is the result of the expression?');
  const actions = '+-*';
  for (let i = 0; i < 3; i += 1) {
    const numero1 = Math.floor(Math.random() * (25 - 0 + 1) + 0);
    const numero2 = Math.floor(Math.random() * (25 - 0 + 1) + 0);
    const action = actions[Math.floor(Math.random() * (2 - 0 + 1) + 0)];
    const finalExpression = numero1 + action + numero2;
    const trueAnswer = eval(finalExpression).toString();
    const answer = readlineSync.question(`Question: ${finalExpression}
Your answer: `);
    if (answer !== trueAnswer) {
      console.log(`${answer} is a wrong answer ;(. The correct answer was ${trueAnswer}, let's try again, ${name}`);
      break;
    } else console.log('Correct!');
    if (i === 2) console.log(`Congratulations, ${name}!`);
  }
};

export default calcualtor;
