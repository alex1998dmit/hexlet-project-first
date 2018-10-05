import { startGame, showQuestion } from '..';
import generateRandomNum from '../mathFuncs';

const isEven = (num) => {
  const res = num % 2 === 0 ? 'yes' : 'no';
  return res;
};

const generateEvenNumber = () => {
  const num = generateRandomNum(3, 10);
  const exprStr = `Question: ${num}`;
  showQuestion(exprStr);
  return isEven(num);
};

export default () => {
  const str = 'Answer "yes" if number even otherwise answer "no".';
  return startGame(generateEvenNumber, str);
};
