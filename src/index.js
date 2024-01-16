import readlineSync from 'readline-sync';

const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ', {
    defaultInput: 'User',
  });
  console.log(`Hello, ${name}!`);
  return name;
};

const gameEngine = (logic, question) => {
  const name = getUserName();
  console.log(question);
  for (let i = 0; i < 3; i += 1) {
    const [finalExpression, trueAnswer] = logic();
    const answer = readlineSync.question(`Question: ${finalExpression}
  Your answer: `);
    if (answer !== trueAnswer) {
      console.log(`${answer} is a wrong answer ;(. The correct answer was ${trueAnswer}, let's try again, ${name}`);
      return;
    } console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameEngine;
