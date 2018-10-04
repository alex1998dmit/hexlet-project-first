import { ShowSign, startGame, generateRandomNum } from '..';

const generateProgression = () => {
  const numEmpty = generateRandomNum(0, 9);
  const progStart = generateRandomNum(0, 10);
  const progDiff = generateRandomNum(1, 5);
  const numbersOfProg = 10;

  const iter = (numIter, progrNumber) => {
    if (numIter === numEmpty) {
      return progrNumber;
    }
    const nextNumber = progrNumber + progDiff;
    const newIter = numIter + 1;
    return iter(newIter, nextNumber);
  };

  const generateStr = (numIter, progrNumber, str = '') => {
    if (numIter === numbersOfProg) {
      return str;
    }
    if (numIter === numEmpty) {
      const newIter = numIter + 1;
      const newStr = `${str} ...`;
      const nextNumber = progrNumber + progDiff;
      return generateStr(newIter, nextNumber, newStr);
    }
    const newIter = numIter + 1;
    const newStr = `${str} ${progrNumber} `;
    const nextNumber = progrNumber + progDiff;
    return generateStr(newIter, nextNumber, newStr);
  };
  console.log(`Question: ${generateStr(0, progStart)}`);
  return iter(0, progStart);
};

export default () => {
  ShowSign('What number is missing in this progression?');
  return startGame(generateProgression);
};
