import gameEngine from '../index.js';

const evenOrOdd = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  const evenOrOddLogic = () => {
    const number = Math.floor(Math.random() * (100 - 1) + 1);
    let trueAnswer = 'yes';
    if (number % 2 !== 0) trueAnswer = 'no';
    return [number, trueAnswer];
  };
  gameEngine(evenOrOddLogic, question);
};
export default evenOrOdd;
