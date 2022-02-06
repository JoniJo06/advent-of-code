import fs from 'fs-extra';

const rawInput = fs.readFileSync('./input.txt')
  .toString();

const input = rawInput.split('');

const visited = [ { x: 0, y: 0 } ];

let xSanta = 0;
let ySanta = 0;

for (let i = 0; i < input.length; i++) {
  let santaVisited = false;
  switch (input[i]) {
    case '^':
      xSanta++;
      break;
    case 'v':
      xSanta--;
      break;
    case '>':
      ySanta++;
      break;
    case '<':
      ySanta--;
      break;
  }
  for (let j = 0; j < visited.length; j++) {
    if (visited[j].x === xSanta && visited[j].y === ySanta) {
      santaVisited = true;
    }
  }
  if (!santaVisited) {
    visited.push({ x: xSanta, y: ySanta });
  }
}

console.log(visited.length);
