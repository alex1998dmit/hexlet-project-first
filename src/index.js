import readlineSync from 'readline-sync';

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
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log();
};

const generateNum = () => {
  const min = 0;
  const max = 20;
  return Math.round(min + Math.random() * (max - min));
};

const isEven = num => num % 2 === 0;

export const checParity = (userName, numWin = 0) => {
  if (numWin === 3) {
    return `Congratulations, ${userName}!`;
  }
  const questionNumber = generateNum();
  const rightAnswer = (isEven(questionNumber)) ? 'yes' : 'no';
  console.log(`Question: ${questionNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (rightAnswer === userAnswer) {
    console.log('Correct!');
    return checParity(userName, numWin + 1);
  }
  const looseStr = `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`;
  return looseStr;
};
