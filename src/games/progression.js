import { cons } from 'hexlet-pairs';
import startGame from '..';
import generateRandomNum from '../utils';

const gameDesc = 'What number is missing in this progression?';
const countProgressElemnts = 10;

const generateProgStr = (numIter, progrNumber, progStr, emptyIndex, diff) => {
  if (numIter > countProgressElemnts) {
    return progStr;
  }
  const newIter = numIter + 1;
  const newProgStr = numIter === emptyIndex ? `${progStr}...` : `${progStr} ${progrNumber} `;
  const nextNumber = progrNumber + diff;
  return generateProgStr(newIter, nextNumber, newProgStr, emptyIndex, diff);
};

const findProgressPair = () => {
  const emptyIndex = generateRandomNum(1, 9);
  const firstNum = generateRandomNum(1, 10);
  const diff = generateRandomNum(1, 5);
  const question = `${generateProgStr(1, firstNum, '', emptyIndex, diff)}`;
  const rightAnswer = firstNum + (emptyIndex - 1) * diff;
  return cons(question, String(rightAnswer));
};

export default () => startGame(gameDesc, findProgressPair);
