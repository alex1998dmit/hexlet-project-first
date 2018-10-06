import { cons } from 'hexlet-pairs';
import startGame from '..';
import generateRandomNum from '../utils';

const gameDesc = 'What number is missing in this progression?';

const findProgressPair = () => {
  const progEmpty = generateRandomNum(1, 9);
  const progStart = generateRandomNum(1, 10);
  const progDiff = generateRandomNum(1, 5);
  const countProgressElemnts = 10;

  const generateProgStr = (numIter, progrNumber, progStr) => {
    if (numIter > countProgressElemnts) {
      return progStr;
    }
    const newIter = numIter + 1;
    const newProgStr = numIter === progEmpty ? `${progStr}...` : `${progStr} ${progrNumber} `;
    const nextNumber = progrNumber + progDiff;
    return generateProgStr(newIter, nextNumber, newProgStr);
  };

  const question = `${generateProgStr(1, progStart, '')}`;
  const rightAnswer = progStart + (progEmpty - 1) * progDiff;
  return cons(question, String(rightAnswer));
};

export default () => startGame(gameDesc, findProgressPair);
