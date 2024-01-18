import { gcd, getRandomIntInclusive } from '../helpers.js';
import gameEngine from '../index.js';

const greatestCommonDivider = () => {
  const question = 'Find the greatest common divisor of given numbers.';
  const gcdLogic = () => {
    const number1 = getRandomIntInclusive(1, 100);
    const number2 = getRandomIntInclusive(1, 100);
    const finalExpression = `${number1} ${number2}`;
    return [finalExpression, gcd(number1, number2).toString()];
  };
  gameEngine(gcdLogic, question);
};

export default greatestCommonDivider;
