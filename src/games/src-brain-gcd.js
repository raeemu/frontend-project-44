import gameEngine from '../index.js';

const greatestCommonDivider = () => {
  const question = 'Find the greatest common divisor of given numbers.';
  const gcdLogic = () => {
    let number1 = Math.floor(Math.random() * 100);
    let number2 = Math.floor(Math.random() * 100);
    const finalExpression = `${number1} ${number2}`;
    while (number1 !== number2) {
      if (number1 > number2) number1 -= number2;
      if (number2 > number1) number2 -= number1;
    }
    return [finalExpression, number1.toString()];
  };
  gameEngine(gcdLogic, question);
};

export default greatestCommonDivider;
