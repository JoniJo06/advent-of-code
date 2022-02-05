import fs from 'fs-extra';

const rawInput = fs.readFileSync('./input.txt')
  .toString();
const input = rawInput.split(`
`)
  .map(Number);

let result = 0;

for (const module of input) {
  result += (Math.floor((module / 3)) - 2);
}

console.log(result);