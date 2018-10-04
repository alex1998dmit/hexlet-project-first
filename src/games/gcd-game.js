import { showNodRules, startGame, findNod } from '..';

export default () => {
  showNodRules();
  return startGame(findNod);
};
