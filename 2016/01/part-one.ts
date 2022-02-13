import fs from 'fs-extra';
import {manhattanDistance} from '../../ts-func'

const rawInput = fs.readFileSync('./input.txt')
  .toString();
const input = rawInput.split(', ');

const directions = [ 'N', 'E', 'S', 'W' ];

let currentPosition = [ 0, 0 ];
let currentDirection = 0;

const changeDirection = (turn: string) => {
  if (turn === 'R') currentDirection = (currentDirection + 1) % directions.length;
  // turn 3 times right
  else currentDirection = (currentDirection + 3) % directions.length;
};

let move = {
  N: (distance: number) => (currentPosition[1] -= distance),
  E: (distance: number) => (currentPosition[0] += distance),
  S: (distance: number) => (currentPosition[1] += distance),
  W: (distance: number) => (currentPosition[0] -= distance),
};

input.forEach((action) => {
  const direction = action[0];
  const distance = Number(action.slice(1));
  changeDirection(direction);

  const looking = directions[currentDirection];
  // @ts-ignore
  move[looking](distance);
});

console.log(manhattanDistance([ 0, 0 ], currentPosition));