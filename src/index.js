import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const gameEngine = (logic, question) => {
  const name = getUserName();
  console.log(question);
  for (let i = 0; i < 3; i += 1) {
    const [finalExpression, trueAnswer] = logic();
    const answer = readlineSync.question(`Question: ${finalExpression}
Your answer: `);
    if (answer !== trueAnswer) {
      console.log(`${answer} is a wrong answer ;(. The correct answer was ${trueAnswer}, 
Let's try again, ${name}!`);
      return;
    } console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameEngine;
