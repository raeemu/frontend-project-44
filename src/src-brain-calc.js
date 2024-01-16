import gameEngine from './index.js';

const calcualtor = () => {
  const question = 'What is the result of the expression?';
  const calcualtorLogic = () => {
    const actions = '+-*';
    const numero1 = Math.floor(Math.random() * (25 - 0 + 1) + 0);
    const numero2 = Math.floor(Math.random() * (25 - 0 + 1) + 0);
    const action = actions[Math.floor(Math.random() * (2 - 0 + 1) + 0)];
    const finalExpression = numero1 + action + numero2;
    const trueAnswer = eval(finalExpression).toString();
    return [finalExpression, trueAnswer];
  };
  gameEngine(calcualtorLogic, question);
};
export default calcualtor;
