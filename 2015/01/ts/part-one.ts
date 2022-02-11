'use strict';
import fs from 'fs-extra';

const rawInput = fs.readFileSync('./../input.txt').toString();

const input = rawInput.split('');

let floor = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] === '(')
    floor++;
  else
    floor--;

}
console.log("Result: " +  floor);
