import { cons } from 'hexlet-pairs';
import startGame from '..';
import generateRandomNum from '../utils';

const description = 'What number is missing in this progression?';
const length = 10;

const findProgressionPair = () => {
  const asnwerPos = generateRandomNum(1, length - 1);
  const start = generateRandomNum(1, 10);
  const diff = generateRandomNum(1, 5);
  let question = '';
  for (let i = 0; i < length; i += 1) {
    const newElem = (i === asnwerPos) ? '...' : start + (diff * i);
    question += ` ${newElem}`;
  }
  const rightAnswer = start + asnwerPos * diff;
  return cons(question, String(rightAnswer));
};

export default () => startGame(description, findProgressionPair);
