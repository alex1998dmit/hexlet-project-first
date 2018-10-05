import generateRandomNum from '../mathFuncs';
import { startGame, showQuestion } from '..';

const generateExpress = () => {
  const min = 0;
  const max = 2;
  const numOne = generateRandomNum(3, 10);
  const numTwo = generateRandomNum(1, 2);
  const numExpr = Math.round(min + Math.random() * (max - min));
  let exprStr;
  let result;
  switch (numExpr) {
    case 0:
      exprStr = `Question, ${numOne} + ${numTwo}`;
      result = numOne + numTwo;
      break;
    case 1:
      exprStr = `Question, ${numOne} - ${numTwo}`;
      result = numOne - numTwo;
      break;
    default:
      exprStr = `Question, ${numOne} * ${numTwo}`;
      result = numOne * numTwo;
  }
  showQuestion(exprStr);
  return result;
};

export default () => {
  const str = 'What is the result of the expression?';
  return startGame(generateExpress, str);
};
