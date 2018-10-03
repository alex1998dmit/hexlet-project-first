import readlineSync from 'readline-sync';

const sayHiToUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log();
  return userName;
};

const showRules = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log();
};

const generateNum = () => {
  const min = 0;
  const max = 20;
  return Math.round(min + Math.random() * (max - min));
};

const questionGenerate = (num) => {
  console.log(`Question: ${num}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const checParity = (userName, numWin = 1) => {
  let numWinGames = numWin;
  const numGenerate = generateNum();
  const userAnswer = questionGenerate(numGenerate);
  const rightAnswer = (numGenerate % 2 === 0) ? 'yes' : 'no';
  if (numWinGames === 3) {
    return `Congratulations, ${userName}!`;
  }
  if (rightAnswer === userAnswer) {
    console.log('Correct!');
    numWinGames += 1;
    return checParity(userName, numWinGames);
  }
  const looseStr = `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`;
  return looseStr;
};

export { sayHiToUser, checParity, showRules };
