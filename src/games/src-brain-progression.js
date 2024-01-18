import gameEngine from '../index.js';

const progression = () => {
  const question = 'What number is missing in the progression?';
  const progressionLogic = () => {
    let number = Math.floor((Math.random() * 100) + 1);
    const difference = Math.floor((Math.random() * 10) + 1);
    const rowLength = Math.floor(Math.random() * (10 - 6) + 5);
    const row = [];
    while (row.length <= rowLength) {
      number += difference;
      row.push(number);
    }
    const hiddenPosition = Math.floor(Math.random() * rowLength);
    const trueAnswer = row[hiddenPosition].toString();
    row[hiddenPosition] = '..';
    const finalExpression = row.join(' ');
    return [finalExpression, trueAnswer];
  };
  gameEngine(progressionLogic, question);
};

export default progression;
