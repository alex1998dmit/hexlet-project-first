import { cons } from 'hexlet-pairs';
import { startGame } from '..';
import generateRandomNum from '../mathFuncs';

const gameDesc = 'Answer "yes" if given number is prime. Otherwise answer "no". ';

const generaPrime = () => {
  const question = generateRandomNum(2, 30);
  const iter = (numIter) => {
    if (numIter === 1) {
      return true;
    }
    if (question % numIter === 0) {
      return false;
    }
    return iter(numIter - 1);
  };
  const result = iter(question - 1) ? 'yes' : 'no';
  return cons(question, result);
};

export default () => startGame(gameDesc, generaPrime);
