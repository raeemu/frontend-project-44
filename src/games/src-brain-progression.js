import { getRandomIntInclusive } from '../helpers.js';
import gameEngine from '../index.js';

const progression = () => {
  const question = 'What number is missing in the progression?';
  const progressionLogic = () => {
    let number = getRandomIntInclusive(1, 100);
    const difference = getRandomIntInclusive(1, 10);
    const rowLength = getRandomIntInclusive(5, 10);
    const row = [];
    while (row.length <= rowLength) {
      number += difference;
      row.push(number);
    }
    const hiddenPosition = getRandomIntInclusive(0, rowLength);
    const trueAnswer = row[hiddenPosition].toString();
    row[hiddenPosition] = '..';
    const finalExpression = row.join(' ');
    return [finalExpression, trueAnswer];
  };
  gameEngine(progressionLogic, question);
};

export default progression;
