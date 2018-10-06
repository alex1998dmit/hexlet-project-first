import { cons } from 'hexlet-pairs';
import startGame from '..';
import generateRandomNum from '../utils';

const gameDesc = 'What number is missing in this progression?';
const countProgressElemnts = 10;


const generateProgStr = (numIter, progrNumber, progStr, progEmpty, progDiff) => {
  if (numIter > countProgressElemnts) {
    return progStr;
  }
  const newIter = numIter + 1;
  const newProgStr = numIter === progEmpty ? `${progStr}...` : `${progStr} ${progrNumber} `;
  const nextNumber = progrNumber + progDiff;
  return generateProgStr(newIter, nextNumber, newProgStr, progEmpty, progDiff);
};

const findProgressPair = () => {
  const progEmpty = generateRandomNum(1, 9);
  const progStart = generateRandomNum(1, 10);
  const progDiff = generateRandomNum(1, 5);
  const question = `${generateProgStr(1, progStart, '', progEmpty, progDiff)}`;
  const rightAnswer = progStart + (progEmpty - 1) * progDiff;
  return cons(question, String(rightAnswer));
};

export default () => startGame(gameDesc, findProgressPair);
