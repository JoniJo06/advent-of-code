import fs from 'fs-extra';

const rawInput = fs.readFileSync('./input.txt')
  .toString();
const input = rawInput.split(`
`);

const keypad = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
];

const directions = [ 'U', 'R', 'D', 'L' ];

// [Row, Column]
const position = [ 1, 1 ];

const bathroomCode: number[] = [];

const changePosition = (instruction: string) => {
  switch (instruction) {
    case 'U':
      if (position[0] > 0)
        position[0]--;
      break;
    case 'R':
      if (position[1] < 2)
        position[1]++;
      break;
    case 'D':
      if (position[0] < 2)
        position[0]++;
      break;
    case 'L':
      if (position[1] > 0)
        position[1]--;
      break;
  }
};

for (let i = 0; i < input.length; i++) {
  const row = input[i].split('')
    .map(String);
  for (let j = 0; j < row.length; j++) {
    changePosition(row[j]);
  }

  bathroomCode.push(keypad[position[0]][position[1]]);
}

console.log(bathroomCode.join(''));