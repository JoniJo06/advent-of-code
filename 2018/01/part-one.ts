import fs from 'fs-extra';

const rawInput = fs.readFileSync('./input.txt')
  .toString();
const input = rawInput.split(`
`);

let result = 0;

for (let i = 0; i < input.length; i++)
  result = eval(`${result}${input[i]}`);

console.log(result);