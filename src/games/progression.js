import { cons } from 'hexlet-pairs';
import startGame from '..';
import generateRandomNum from '../utils';

const gameDesc = 'What number is missing in this progression?';
const length = 10;

const findProgressPair = () => {
  const emptyIndex = generateRandomNum(1, 9);
  const firstNum = generateRandomNum(1, 10);
  const diff = generateRandomNum(1, 5);
  const generatestr = (iter, num, str) => {
    if (iter > length) {
      return str;
    }
    const newIter = iter + 1;
    const newstr = iter === emptyIndex ? `${str}...` : `${str} ${num} `;
    const nextNumber = num + diff;
    return generatestr(newIter, nextNumber, newstr, emptyIndex, diff);
  };
  const question = `${generatestr(1, firstNum)}`;
  const rightAnswer = firstNum + (emptyIndex - 1) * diff;
  return cons(question, String(rightAnswer));
};

export default () => startGame(gameDesc, findProgressPair);
