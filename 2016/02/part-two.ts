import fs from 'fs-extra';

const rawInput = fs.readFileSync('./input.txt')
  .toString();
const input = rawInput.split(`
`);

const keypad = [
  [ '', '', '1', '', '' ],
  [ '', '2', '3', '4', '' ],
  [ '5', '6', '7', '8', '9' ],
  [ '', 'A', 'B', 'C', '' ],
  [ '', '', 'D', '', '' ],
];

const directions = [ 'U', 'R', 'D', 'L' ];

// [Row, Column]
const position = [ 2, 0 ];
console.log(keypad[0][0]);

const bathroomCode: string[] = [];

//use Try/Catch check undefined by access the keypad
const changePosition = (instruction: string) => {
  switch (instruction) {
    case 'U':
      try {
        const U = keypad[position[0] - 1][position[1]];
        if (!(U === '' || U === undefined))
          position[0]--;
      } catch {
      }
      break;
    case 'R':
      try {
        const R = keypad[position[0]][position[1] + 1];
        if (!(R === '' || R === undefined))
          position[1]++;
      } catch {
      }
      break;
    case 'D':
      try {
        const D = keypad[position[0] + 1][position[1]];
        if (!(D === '' || D === undefined))
          position[0]++;
      } catch {
      }
      break;
    case 'L':
      try {
        const L = keypad[position[0]][position[1] - 1];
        if (!(L === '' || L === undefined))
          position[1]--;
      } catch {
      }
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