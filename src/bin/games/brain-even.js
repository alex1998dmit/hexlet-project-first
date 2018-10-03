#!/usr/bin/env node

import { sayHiToUser, checParity, showRules } from '../..';

showRules();
const userName = sayHiToUser();
console.log(checParity(userName));

