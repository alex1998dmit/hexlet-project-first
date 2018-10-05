import { cons } from 'hexlet-pairs';
import { startGame } from '..';
import generateRandomNum from '../mathFuncs';

const gameDesc = 'Find the greatest common divisor of given numbers.';

const findNod = () => {
  const numOne = generateRandomNum(1, 20);
  const numTwo = generateRandomNum(1, 20);
  const question = `${numOne}   ${numTwo}`;
  const min = (numOne < numTwo) ? numOne : numTwo;
  let nod;
  for (let i = 1; i <= min; i += 1) {
    if (numOne % i === 0 && numTwo % i === 0) {
      nod = i;
    }
  }
  return cons(question, nod);
};

export default () => startGame(gameDesc, findNod);
