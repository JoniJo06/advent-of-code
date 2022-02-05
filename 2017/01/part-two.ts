import fs from 'fs-extra';

const rawInput = fs.readFileSync('./input.txt')
  .toString();
const input = rawInput.split('')
  .map(Number);

const matchedNumbers: number[] = [];

const halfway = input.length / 2;

for (let i = 0; i < input.length; i++) {
  if (input[i] === input[(i + halfway) % input.length])
    matchedNumbers.push(input[i]);
}

const result = matchedNumbers.reduce((a, b) => a + b);

console.log(result);