import { calcHelper, getRandomIntInclusive } from '../helpers.js';
import gameEngine from '../index.js';

const calcualtor = () => {
  const question = 'What is the result of the expression?';
  const calcualtorLogic = () => {
    const numero1 = getRandomIntInclusive(1, 25);
    const numero2 = getRandomIntInclusive(1, 25);
    const [trueAnswer, action] = calcHelper(numero1, numero2);
    const finalExpression = `${numero1} ${action} ${numero2}`;
    return [finalExpression, trueAnswer];
  };
  gameEngine(calcualtorLogic, question);
};
export default calcualtor;
