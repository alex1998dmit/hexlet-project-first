import { cons } from 'hexlet-pairs';
import startGame from '..';
import generateRandomNum from '../utils';

const gameDesc = 'Answer "yes" if given number is prime. Otherwise answer "no". ';

const isPrime = (divider, num) => {
  if (divider === 1) {
    return true;
  }
  if (num % divider === 0 || divider < 2) {
    return false;
  }
  return isPrime(divider - 1, num);
};

const findPrimePair = () => {
  const question = generateRandomNum(2, 30);
  const rightAnswer = isPrime(question - 1, question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => startGame(gameDesc, findPrimePair);
