import { cons } from 'hexlet-pairs';
import startGame from '..';
import generateRandomNum from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no". ';

const isPrime = (num) => {
  const firstDivider = 2;
  const iter = (divider) => {
    if (divider === num || divider > num / 2) {
      return true;
    }
    if (num % divider === 0) {
      return false;
    }
    return iter(divider + 1);
  };
  return iter(firstDivider);
};

const findPrimePair = () => {
  const question = generateRandomNum(2, 30);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => startGame(description, findPrimePair);
