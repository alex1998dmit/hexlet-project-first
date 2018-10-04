import { ShowSign, startGame, generateRandomNum } from '..';

const findNod = () => {
  const numOne = generateRandomNum(1, 20);
  const numTwo = generateRandomNum(1, 20);
  console.log(`Question, ${numOne}   ${numTwo}`);
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
  ShowSign('Find the greatest common divisor of given numbers.');
  return startGame(findNod);
};
