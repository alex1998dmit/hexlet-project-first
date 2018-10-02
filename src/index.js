import readlineSync from 'readline-sync';

const sayHiToUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const generateNum = () => {
  const min = 0;
  const max = 20;
  return Math.round(min + Math.random() * (max - min));
};

const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const questionGenerate = (num) => {
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');
    return userAnswer;
}

const checParity = (userName, numWinGames = 1) => {
    const numGenerate = generateNum();
    const userAnswer = questionGenerate(numGenerate);
    const rightAnswer = (numGenerate % 2 === 0) ? 'yes' : 'no';

    if(numWinGames === 3){
        return `Congratulations, ${userName}!`;
    }
    if(rightAnswer === userAnswer){
        console.log(`Correct!`);
        numWinGames = numWinGames + 1;
        return checParity(userName, numWinGames);
    } else {
        const looseStr = `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`;
        return looseStr;
    }
};

export { sayHiToUser, checParity};