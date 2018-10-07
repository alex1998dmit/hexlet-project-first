import { cons } from 'hexlet-pairs';
import startGame from '..';
import generateRandomNum from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no". ';

const isPrime = (num) => {
  const firstDivide = 2;
  if (num < firstDivide) {
    return false;
  }
  if (num === firstDivide) {
    return true;
  }
  const iter = (divider) => {
    if (num % divider === 0) {
      return false;
    }
    if (divider > num / 2) {
      return true;
    }
    return iter(divider + 1);
  };
  return iter(firstDivide);
};

const findPrimePair = () => {
  const question = generateRandomNum(2, 30);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => startGame(description, findPrimePair);
