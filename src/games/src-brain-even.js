import { getRandomIntInclusive } from '../helpers.js';
import gameEngine from '../index.js';

const evenOrOdd = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  const evenOrOddLogic = () => {
    const number = getRandomIntInclusive(1, 100);
    let trueAnswer = 'yes';
    if (number % 2 !== 0) trueAnswer = 'no';
    return [number, trueAnswer];
  };
  gameEngine(evenOrOddLogic, question);
};
export default evenOrOdd;
