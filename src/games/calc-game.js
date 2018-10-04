import { showRulesOfCalcGame, startGame, generateExpress } from '..';

export default () => {
  showRulesOfCalcGame();
  return startGame(generateExpress);
};
