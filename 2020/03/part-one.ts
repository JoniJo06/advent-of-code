import fs from 'fs-extra';

const rawInput = fs.readFileSync('./input.txt')
  .toString();
const input = rawInput.split(`
`);

let treeCounter = 0;

for (let y = 0; y < input.length; y++) {
  const cell = input[y][y * 3 % input[0].length];
  if (cell === '#')
    treeCounter++;
}
console.log(treeCounter);
