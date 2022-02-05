import fs from 'fs-extra';

const rawInput = fs.readFileSync('./input.txt')
  .toString();
const input = rawInput.split('')
  .map(Number);

const matchedNumbers: number[] = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === input[i + 1])
    matchedNumbers.push(input[i]);
}
if (input[0] === input[input.length - 1])
  matchedNumbers.push(input[0]);

const result = matchedNumbers.reduce((a, b) => a + b);

console.log(result);