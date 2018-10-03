import readlineSync from 'readline-sync';

const triesToWin = 3;

export const sayHiToUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log();
  return userName;
};

export const showWelcomeSign = () => {
  console.log('Welcome to the Brain Games!');
};

export const showRulesOfEvenGame = () => {
  showWelcomeSign();
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log();
};

export const showRulesOfCalcGame = () => {
  showWelcomeSign();
  console.log('What is the result of the expression?');
  console.log();
};

const generateNum = () => {
  const min = 0;
  const max = 20;
  return Math.round(min + Math.random() * (max - min));
};

const isEven = num => num % 2 === 0;

const addNum = (numOne, numTwo) => numOne + numTwo;

const difNum = (numOne, numTwo) => numOne - numTwo;

const divNum = (numOne, numTwo) => numOne / numTwo;

const generateExpress = (numOne, numTwo) => {
  const min = 0;
  const max = 2;
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

export const checParity = () => {
  showRulesOfEvenGame();
  const userName = readlineSync.question('May I have your name? ');
  console.log();
  const iter = (numWin = 0) => {
    if (numWin === triesToWin) {
      return `Congratulations, ${userName}!`;
    }
    const question = generateNum();
    const rightAnswer = (isEven(question)) ? 'yes' : 'no';
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
      return iter(numWin + 1);
    }
    return `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`;
  };
  return iter();
};

export const startBrainGame = () => {
  showWelcomeSign();
  sayHiToUser();
};

export const checkCalc = () => {
  showWelcomeSign();
  showRulesOfCalcGame();
  const userName = readlineSync.question('May I have your name? ');
  console.log();
  const iter = (numWin = 0) => {
    if (numWin === triesToWin) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }
    const numOne = generateNum();
    const numTwo = generateNum();
    const rightAnswer = generateExpress(numOne, numTwo);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
      return iter(numWin + 1);
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`);
    return false;
  };
  iter();
};
