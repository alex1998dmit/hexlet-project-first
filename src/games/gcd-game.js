import { cons } from 'hexlet-pairs';
import { startGame } from '..';
import generateRandomNum from '../mathFuncs';

const gameDesc = 'Find the greatest common divisor of given numbers.';

const nodPair = () => {
  const numOne = generateRandomNum(1, 20);
  const numTwo = generateRandomNum(1, 20);
  const question = `${numOne}   ${numTwo}`;
  const min = (numOne < numTwo) ? numOne : numTwo;
  for (let i = min; i > 1; i -= 1) {
    if (numOne % i === 0 && numTwo % i === 0) {
      return cons(question, i);
    }
  }
  return cons(question, 1);
};

export default () => startGame(gameDesc, nodPair);
