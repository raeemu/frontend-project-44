import { getRandomIntInclusive } from '../helpers.js';
import gameEngine from '../index.js';

const calcualtor = () => {
  const question = 'What is the result of the expression?';
  const calcualtorLogic = () => {
    const actions = '+-*';
    const numero1 = getRandomIntInclusive(1, 25);
    const numero2 = getRandomIntInclusive(1, 25);
    const action = actions[getRandomIntInclusive(0, 2)];
    const finalExpression = `${numero1} ${action} ${numero2}`;
    const trueAnswer = eval(finalExpression).toString();
    return [finalExpression, trueAnswer];
  };
  gameEngine(calcualtorLogic, question);
};
export default calcualtor;
