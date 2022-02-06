import fs from 'fs-extra';

const rawInput = fs.readFileSync('./input.txt')
  .toString();
const input = rawInput.split(`
`);

let countTwo = 0;
let countThree = 0;

for (let i = 0; i < input.length; i++) {
  const sortedLine = input[i].split('')
    .sort();
  let two = false;
  let three = false;
  let count = 1;
  for (let j = 0; j < sortedLine.length; j++) {
    if (sortedLine[j] === sortedLine[j + 1]) {
      count++;
    } else {
      if (count === 2)
        two = true;
      else if (count === 3)
        three = true;
      count = 1;
    }
  }
  if (two) countTwo++;
  if (three) countThree++;
}
console.log(countTwo * countThree);
