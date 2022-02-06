import fs from 'fs-extra';

const rawInput = fs.readFileSync('./input.txt')
  .toString();
const input = rawInput.split(`
`);

let resultStrings: any[] = [];

for (let i = 0; i < input.length; i++) {
  // const sortedLine = input[i].split('')
  for (let k = i + 1; k < input.length; k++) {
    let count = 0;
    for (let j = 0; j < input[0].length; j++) {
      if (count === 2) break;
      if (!(input[i][j] === input[k][j]))
        count++;
    }
    if (count === 1) {
      resultStrings = [ input[i], input[k] ];
    }

  }
}

const result = resultStrings[0].split('')
  .filter((el: string) => resultStrings[1].split('')
    .includes(el))
  .join('');

console.log(result);