import fs from 'fs-extra';
import {manhattanDistance} from '../../../ts-func'

const input = Number(fs.readFileSync('../input.txt').toString());

const spiral = (count:number) => {
  const pos = {x: 0, y: 0};
  let range = 1;
  let distance = 0;
  let direction = 1;
  for (let i = 0; i < count - 1; i++){
    distance++;
    switch(direction){
      case 1:
      pos.y++;
      if ( distance >= range ) {
          direction = 2;
          distance = 0;
        }
      break;
      case 2:
      pos.x++;
      if ( distance >= range ) {
          direction = 3;
          distance = 0;
          range++;
            }
      break;
      case 3:
      pos.y--;
      if ( distance >= range ) {
          direction = 4;
          distance = 0;
      }
      break;
      case 4:
      pos.x--;
      if ( distance >= range ) {
          direction = 1;
          distance = 0;
          range++;
      }
      break;
    }
  }
  return pos;
}

const main = () => {
  const pos = spiral(input)
  console.log(manhattanDistance([ 0, 0], [pos.x, pos.y]))
}

main()

