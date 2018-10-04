import { showRulesOfEvenGame, startGame, generateEvenNumber } from '..';

export default () => {
  showRulesOfEvenGame();
  return startGame(generateEvenNumber);
};
