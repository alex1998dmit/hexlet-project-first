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

export const ShowSign = (str) => {
  showWelcomeSign();
  console.log(str);
  console.log();
};

export const generateRandomNum = (min, max) => Math.round(min + Math.random() * (max - min));

export const entryUserName = (sign) => {
  const userName = readlineSync.question(sign);
  console.log();
  return userName;
};

export const startGame = (generateFunc) => {
  const userName = entryUserName('May I have your name?  ');
  const iter = (numWin = 0) => {
    if (numWin === triesToWin) {
      return true;
    }
    const rightAnswer = generateFunc();
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
