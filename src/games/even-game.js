import { ShowSign, startGame, generateRandomNum } from '..';

const isEven = (num) => {
  const res = num % 2 === 0 ? 'yes' : 'no';
  return res;
};

const generateEvenNumber = () => {
  const num = generateRandomNum(3, 10);
  console.log(`Question: ${num}`);
  return isEven(num);
};

export default () => {
  ShowSign('Answer "yes" if number even otherwise answer "no".');
  return startGame(generateEvenNumber);
};
