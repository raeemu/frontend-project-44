import { getRandomIntInclusive } from '../helpers.js';
import gameEngine from '../index.js';

const primeNumber = () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const primeNumberLogic = () => {
    const number = getRandomIntInclusive(1, 100);
    let trueAnswer = 'yes';
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) trueAnswer = 'no';
    }
    return [number, trueAnswer];
  };
  gameEngine(primeNumberLogic, question);
};

export default primeNumber;
