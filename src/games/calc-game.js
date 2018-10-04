import { ShowSign, startGame } from '..';
import { generateRandomNum, addNum, divNum, difNum } from '../mathFuncs';

const generateExpress = () => {
  const min = 0;
  const max = 2;
  const numOne = generateRandomNum(3, 10);
  const numTwo = generateRandomNum(1, 2);
  const numExpr = Math.round(min + Math.random() * (max - min));
  let result;
  if (numExpr === 0) {
    console.log(`Question, ${numOne} + ${numTwo}`);
    result = addNum(numOne, numTwo);
  } else if (numExpr === 1) {
    console.log(`Question, ${numOne} - ${numTwo}`);
    result = difNum(numOne, numTwo);
  } else {
    console.log(`Question, ${numOne} / ${numTwo}`);
    result = divNum(numOne, numTwo);
  }
  return result;
};

export default () => {
  ShowSign('What is the result of the expression?');
  console.log('');
  return startGame(generateExpress);
};
