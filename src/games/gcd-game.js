import { startGame, showQuestion } from '..';
import generateRandomNum from '../mathFuncs';

const findNod = () => {
  const numOne = generateRandomNum(1, 20);
  const numTwo = generateRandomNum(1, 20);
  const exprStr = `Question, ${numOne}   ${numTwo}`;
  showQuestion(exprStr);
  const min = (numOne < numTwo) ? numOne : numTwo;
  let nod;
  for (let i = 1; i <= min; i += 1) {
    if (numOne % i === 0 && numTwo % i === 0) {
      nod = i;
    }
  }
  return nod;
};

export default () => {
  const str = 'Find the greatest common divisor of given numbers.';
  return startGame(findNod, str);
};
