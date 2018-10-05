import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const triesToWin = 3;

const welcomeSign = 'Welcome to the Brain Games! ';

export const showWelcomeSign = () => {
  console.log(welcomeSign);
  console.log();
};

export const sayHiToUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log();
  return userName;
};

export const entryUserName = (sign) => {
  const userName = readlineSync.question(sign);
  console.log();
  return userName;
};

export const showQuestion = (str) => {
  console.log(str);
};

export const startGame = (gameDesc, gameFunc) => {
  console.log(welcomeSign);
  console.log(gameDesc);
  console.log();
  const userName = entryUserName('May I have your name?  ');
  const iter = (numWin = 0) => {
    if (numWin === triesToWin) {
      return true;
    }
    const pair = gameFunc();
    const question = car(pair);
    const rightAnswer = cdr(pair);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(rightAnswer) === String(userAnswer)) {
      console.log('Correct!');
      return iter(numWin + 1);
    }
    const strFail = `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`;
    return strFail;
  };
  const result = iter();
  if (result === true) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(result);
  }
};
