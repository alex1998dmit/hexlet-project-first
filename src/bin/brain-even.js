#!/usr/bin/env node

import { sayHiToUser, checParity } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
console.log();
const userName = sayHiToUser();
console.log();
console.log(checParity(userName));
