import { cons } from 'hexlet-pairs';
import generateRandomNum from '../mathFuncs';
import { startGame } from '..';

const gameDesc = 'What is the result of the expression?';

const evenCalc = () => {
  const numOne = generateRandomNum(3, 10);
  const numTwo = generateRandomNum(1, 2);
  const chosenOperation = generateRandomNum(0, 2);
  let question;
  let result;
  switch (chosenOperation) {
    case 0:
      question = `${numOne} + ${numTwo}`;
      result = numOne + numTwo;
      break;
    case 1:
      question = `${numOne} - ${numTwo}`;
      result = numOne - numTwo;
      break;
    default:
      question = `${numOne} * ${numTwo}`;
      result = numOne * numTwo;
  }
  return cons(question, result);
};

export default () => startGame(gameDesc, evenCalc);
