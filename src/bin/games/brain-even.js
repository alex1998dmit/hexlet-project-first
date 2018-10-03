#!/usr/bin/env node

import { sayHiToUser, checParity, showRulesOfEvenGame } from '../..';

showRulesOfEvenGame();
const userName = sayHiToUser();
console.log(checParity(userName));
