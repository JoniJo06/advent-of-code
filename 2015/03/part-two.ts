import fs from 'fs-extra';

const rawInput = fs.readFileSync('./input.txt')
  .toString();
const input = rawInput.split('');

const visited = [ { x: 0, y: 0 } ];

let xSanta = 0;
let ySanta = 0;

let xRobo = 0;
let yRobo = 0;

for (let i = 0; i < input.length; i++) {
  let santaVisited = false;
  let roboVisited = false;
  switch (input[i]) {
    case '^':
      if (i % 2 === 1) {
        ySanta++;
      } else {
        yRobo++;
      }
      break;
    case 'v':
      if (i % 2 === 1) {
        ySanta--;
      } else {
        yRobo--;
      }
      break;
    case '>':
      if (i % 2 === 1) {
        xSanta++;
      } else {
        xRobo++;
      }
      break;
    case '<':
      if (i % 2 === 1) {
        xSanta--;
      } else {
        xRobo--;
      }
      break;
  }
  for (let j = 0; j < visited.length; j++) {
    if (visited[j].x === xSanta && visited[j].y === ySanta && input[i]) {
      santaVisited = true;
    }
    if (visited[j].x === xRobo && visited[j].y === yRobo && input[i]) {
      roboVisited = true;
    }
  }

  if (!santaVisited) {
    visited.push({ x: xSanta, y: ySanta });
  }
  if (!roboVisited) {
    visited.push({ x: xRobo, y: yRobo });
  }
}

console.log(visited.length);
