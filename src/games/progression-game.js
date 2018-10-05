import { cons } from 'hexlet-pairs';
import { startGame } from '..';
import generateRandomNum from '../mathFuncs';

const gameDesc = 'What number is missing in this progression?';

const progressionPair = () => {
  const indexEmpty = generateRandomNum(0, 9);
  const progStart = generateRandomNum(0, 10);
  const progDiff = generateRandomNum(1, 5);
  const countProgress = 10;

  const findNumProgr = (progrNumber, numIter = 0) => {
    if (numIter === indexEmpty) {
      return progrNumber;
    }
    const nextNumber = progrNumber + progDiff;
    const newIter = numIter + 1;
    return findNumProgr(nextNumber, newIter);
  };

  const generateStr = (progrNumber, str = '', numIter = 0) => {
    if (numIter === countProgress) {
      return str;
    }
    const newIter = numIter + 1;
    const newStr = numIter === indexEmpty ? `${str} ...` : `${str} ${progrNumber} `;
    const nextNumber = progrNumber + progDiff;
    return generateStr(nextNumber, newStr, newIter);
  };

  const question = `${generateStr(progStart)}`;
  const rightAnswer = findNumProgr(progStart);
  return cons(question, rightAnswer);
};

export default () => startGame(gameDesc, progressionPair);
