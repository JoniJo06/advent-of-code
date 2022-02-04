import fs from 'fs-extra';

const rawInput = fs.readFileSync('./input.txt')
  .toString();
const input = rawInput.split(`
`);

let frequency = 0;

for (let i = 0; i < input.length; i++)
  frequency = eval(`${frequency}${input[i]}`);

console.log(frequency);