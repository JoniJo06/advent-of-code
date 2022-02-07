import fs from 'fs-extra';

const rawInput = fs.readFileSync('./input.txt')
  .toString();
const input = rawInput.split(`
`);

type SlopeType = {
  right: number
  down: number
}

const slopes: SlopeType[] = [
  { right: 1, down: 1 },
  { right: 3, down: 1 },
  { right: 5, down: 1 },
  { right: 7, down: 1 },
  { right: 1, down: 2 },
];

let result = 1;

slopes.forEach((slope: SlopeType) => {
  let treeCounter = 0;
  let x = 0;
  for (let y = 0; y < input.length; y += slope.down) {
    const cell = input[y][x];

    if (cell === '#')
      treeCounter++;

    x += slope.right;
    x %= input[y].length;
  }
  result *= treeCounter;
});

console.log(result);
