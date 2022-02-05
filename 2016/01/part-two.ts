import fs from 'fs-extra';

const manhattanDistance = (a: number[], b: number[]) => {
  let distance = 0;
  let dimensions = Math.max(a.length, b.length);
  for (let i = 0; i < dimensions; i++) {
    distance += Math.abs((b[i] || 0) - (a[i] || 0));
  }
  return distance;
};

// I copied manhattanDistance from https://github.com/semibran/manhattan to use it in typescript

const rawInput = fs.readFileSync('./input.txt')
  .toString();
const input = rawInput.split(', ');

const directions = [ 'N', 'E', 'S', 'W' ];

const currentPosition = [ 0, 0 ];
let currentDirection = 0;

let visited: any = { '0,0': true };

const changeDirection = (turn: string) => {
  if (turn === 'R') currentDirection = (currentDirection + 1) % directions.length;
  // turn 3 times right
  else currentDirection = (currentDirection + 3) % directions.length;
};

const hasVisited = (position: number[]) => {
  const point = position.join(',');
  if (visited[point])
    return true;
  else {
    visited[point] = true;
    return false;
  }

};

let move = {
  N: (distance: number) => {
    for (let i = 0; i < distance; i++) {
      currentPosition[1]++;
      if (hasVisited(currentPosition))
        return true;
    }
  },
  E: (distance: number) => {
    for (let i = 0; i < distance; i++) {
      currentPosition[0]++;
      if (hasVisited(currentPosition))
        return true;
    }
  },
  S: (distance: number) => {
    for (let i = 0; i < distance; i++) {
      currentPosition[1]--;
      if (hasVisited(currentPosition))
        return true;
    }
  },
  W: (distance: number) => {
    for (let i = 0; i < distance; i++) {
      currentPosition[0]--;
      if (hasVisited(currentPosition))
        return true;
    }
  },
};

for (let i = 0; i < input.length; i++) {
  const action = input[i];

  const direction = action[0];
  const distance = Number(action.slice(1));
  changeDirection(direction);

  const looking = directions[currentDirection];
  // @ts-ignore
  if (move[looking](distance))
    break;

}

console.log(manhattanDistance([ 0, 0 ], currentPosition));
