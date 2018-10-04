import readlineSync from 'readline-sync';

const triesToWin = 3;

export const sayHiToUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log();
  return userName;
};

export const showWelcomeSign = () => {
  console.log('Welcome to the Brain Games! ');
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

export const showNodRules = () => {
  showWelcomeSign();
  console.log('Find the greatest common divisor of given numbers.');
};

export const generateRandomNum = (min, max) => Math.round(min + Math.random() * (max - min));

export const isEven = (num) => {
  const res = num % 2 === 0 ? 'yes' : 'no';
  return res;
};

export const addNum = (numOne, numTwo) => numOne + numTwo;

export const difNum = (numOne, numTwo) => numOne - numTwo;

export const divNum = (numOne, numTwo) => numOne / numTwo;

export const generateEvenNumber = () => {
  const num = generateRandomNum(3, 10);
  console.log(`Question, ${num}`);
  return isEven(num);
};

export const generateExpress = () => {
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

export const findNod = () => {
  const numOne = generateRandomNum(1, 20);
  const numTwo = generateRandomNum(1, 20);
  console.log(`Question, ${numOne}   ${numTwo}`);
  const min = (numOne < numTwo) ? numOne : numTwo;
  let nod;
  for (let i = 1; i <= min; i += 1) {
    if (numOne % i === 0 && numTwo % i === 0) {
      nod = i;
    }
  }
  return nod;
};

export const entryUserName = (sign) => {
  const userName = readlineSync.question(sign);
  console.log();
  return userName;
};

export const startGame = (generateFunc) => {
  const userName = entryUserName('May I have your name?  ');
  const iter = (numWin = 0) => {
    if (numWin === triesToWin) {
      return `Congratulations, ${userName}!`;
    }
    const rightAnswer = generateFunc();
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(rightAnswer) === String(userAnswer)) {
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

export const checParity = () => {
  showRulesOfEvenGame();
  return startGame(generateEvenNumber);
};

export const checkCalc = () => {
  showRulesOfCalcGame();
  return startGame(generateExpress);
};

export const startNodGame = () => {
  showNodRules();
  return startGame(findNod);
};
