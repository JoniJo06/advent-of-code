import fs from 'fs-extra';

const rawInput = fs.readFileSync('./input.txt')
  .toString();
const input = rawInput.split(`
`)
  .map((el) => el.split('\t')
    .map(Number));

const numbers: number[] = [];

for (let i = 0; i < input.length; i++) {
  const row = input[i].sort((a, b): number => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  let small = row[0];
  let big = row[row.length - 1];
  numbers.push(big - small);
}

const result = eval(numbers.join('+'));

console.log(result);