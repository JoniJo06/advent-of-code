import fs from 'fs-extra';

const rawInput = fs.readFileSync('./input.txt')
  .toString();
const input = rawInput.split(`
`)
  .map((el) => el.split('\t')
    .map(Number));

const numbers: number[] = [];

for (let i = 0; i < input.length; i++) {
  const row = input[i];
  for (let j = 0; j < row.length; j++) {
    for (let k = 0; k < row.length; k++) {
      if (j === k) continue;
      if ((row[j] / row[k]) % 1 === 0) {
        numbers.push(row[j] / row[k]);
        break;
      }
      if (numbers.length === i + 1) break;
    }
  }
}
const result = eval(numbers.join('+'));

console.log(result);