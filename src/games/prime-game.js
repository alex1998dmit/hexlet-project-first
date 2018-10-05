import { startGame, showQuestion } from '..';
import generateRandomNum from '../mathFuncs';

const generaPrime = () => {
  const num = generateRandomNum(2, 30);
  const iter = (number) => {
    if (number === 1) {
      return true;
    }
    if (num % number === 0) {
      return false;
    }
    return iter(number - 1);
  };
  const result = iter(num - 1) ? 'yes' : 'no';
  showQuestion(num);
  return result;
};

export default () => {
  const str = 'Answer "yes" if given number is prime. Otherwise answer "no". ';
  return startGame(generaPrime, str);
};
