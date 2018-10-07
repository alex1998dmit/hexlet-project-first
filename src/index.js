import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const roundToWin = 3;

const welcomeSign = 'Welcome to the Brain Games! ';

const entryUserName = (sign) => {
  const userName = readlineSync.question(sign);
  console.log();
  return userName;
};

export default (description, gameFunc) => {
  console.log(welcomeSign);
  console.log(description);
  console.log();
  const userName = entryUserName('May I have your name?  ');
  const iter = (numWin) => {
    if (numWin === roundToWin) {
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
  console.log(iter(0));
};
