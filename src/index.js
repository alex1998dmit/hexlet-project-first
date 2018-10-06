import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const triesToWin = 3;

const welcomeSign = 'Welcome to the Brain Games! ';

const entryUserName = (sign) => {
  const userName = readlineSync.question(sign);
  console.log();
  return userName;
};

export default (gameDesc, gameFunc) => {
  console.log(welcomeSign);
  console.log(gameDesc);
  console.log();
  const userName = entryUserName('May I have your name?  ');
  const iter = (numWin = 0) => {
    if (numWin === triesToWin) {
      return `Congratulations, ${userName}!`;
    }
    const pair = gameFunc();
    const question = car(pair);
    const rightAnswer = cdr(pair);
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
      return iter(numWin + 1);
    }
    return `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`;
  };
  const result = iter();
  console.log(result);
};
