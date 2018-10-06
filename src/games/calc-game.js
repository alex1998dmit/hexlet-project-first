import { cons } from 'hexlet-pairs';
import generateRandomNum from '../utils';
import startGame from '..';

const gameDesc = 'What is the result of the expression?';

const evenCalc = () => {
  const numOne = generateRandomNum(3, 10);
  const numTwo = generateRandomNum(1, 2);
  const chosenOperation = generateRandomNum(0, 2);
  let question;
  let rightAnswer;
  switch (chosenOperation) {
    case 0:
      question = `${numOne} + ${numTwo}`;
      rightAnswer = numOne + numTwo;
      break;
    case 1:
      question = `${numOne} - ${numTwo}`;
      rightAnswer = numOne - numTwo;
      break;
    default:
      question = `${numOne} * ${numTwo}`;
      rightAnswer = numOne * numTwo;
  }
  return cons(question, String(rightAnswer));
};

export default () => startGame(gameDesc, evenCalc);
