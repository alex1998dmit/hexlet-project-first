import startGame from '..';
import generateRandomNum from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const findEvenPair = () => {
  const question = generateRandomNum(1, 10);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => startGame(description, findEvenPair);
