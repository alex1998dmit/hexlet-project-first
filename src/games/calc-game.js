import { cons } from 'hexlet-pairs';
import generateRandomNum from '../mathFuncs';
import { startGame } from '..';

const gameDesc = 'What is the result of the expression?';

const generateExpress = () => {
  const numOne = generateRandomNum(3, 10);
  const numTwo = generateRandomNum(1, 2);
  const chosenOperation = generateRandomNum(0, 2);
  let exprStr;
  let result;
  switch (chosenOperation) {
    case 0:
      exprStr = `${numOne} + ${numTwo}`;
      result = numOne + numTwo;
      break;
    case 1:
      exprStr = `${numOne} - ${numTwo}`;
      result = numOne - numTwo;
      break;
    default:
      exprStr = `${numOne} * ${numTwo}`;
      result = numOne * numTwo;
  }
  return cons(exprStr, result);
};

export default () => startGame(gameDesc, generateExpress);
