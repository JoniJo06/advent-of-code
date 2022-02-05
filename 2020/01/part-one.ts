import fs from 'fs-extra';

const rawInput = fs.readFileSync('./input.txt')
  .toString();
const input = rawInput.split(`
`)
  .map(el => Number(el));

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    const num1 = input[i];
    const num2 = input[j];
    if (num1 + num2 === 2020) {
      console.log(num1 * num2);
      break;
    }

  }
}