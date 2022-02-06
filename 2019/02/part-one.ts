import fs from 'fs-extra';

const rawInput = fs.readFileSync('./input.txt')
  .toString();
const input = rawInput.split(',')
  .map(Number);

input[1] = 12;
input[2] = 2;

for (let i = 0; i < input.length; i += 4) {
  if (input[i] === 1)
    input[input[i + 3]] = input[input[i + 1]] + input[input[i + 2]];
  else if (input[i] === 2)
    input[input[i + 3]] = input[input[i + 1]] * input[input[i + 2]];
  else if (input[i] === 99)
    break;

}
console.log(input[0]);

