import { cons } from 'hexlet-pairs';
import { startGame } from '..';
import generateRandomNum from '../mathFuncs';

const gameDesc = 'What number is missing in this progression?';

const progressionPair = () => {
  const progEmpty = generateRandomNum(1, 9);
  const progStart = generateRandomNum(1, 10);
  const progDiff = generateRandomNum(1, 5);
  const countProgressElemnts = 10;

  const generateStr = (progrNumber, str = '', numIter = 1) => {
    if (numIter > countProgressElemnts) {
      return str;
    }
    const newIter = numIter + 1;
    const newStr = numIter === progEmpty ? `${str} ...` : `${str} ${progrNumber} `;
    const nextNumber = progrNumber + progDiff;
    return generateStr(nextNumber, newStr, newIter);
  };

  const question = `${generateStr(progStart)}`;
  const rightAnswer = progStart + (progEmpty - 1) * progDiff;
  return cons(question, rightAnswer);
};

export default () => startGame(gameDesc, progressionPair);
