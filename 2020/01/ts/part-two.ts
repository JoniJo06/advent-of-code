import fs from 'fs-extra';

const rawInput = fs.readFileSync('../input.txt')
  .toString();
const input = rawInput.split(`
`)
  .map(Number);

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    for (let k = j + 1; k < input.length; k++) {
      const num1 = input[i];
      const num2 = input[j];
      const num3 = input[k];
      if (num1 + num2 + num3 === 2020) {
        console.log(num1 * num2 * num3);
        break;
      }

    }

  }
}