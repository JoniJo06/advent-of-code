import fs from 'fs-extra';
import { claim } from './claim';

// type ClaimType = {
//   left: number
//   top: number
//   width: number
//   height: number
// }

const rawInput = fs.readFileSync('./input.txt')
  .toString();
const input = rawInput.split(`
`)
  .map((el: string): claim => {
    const [ position, size ] = el.split(' @ ')[1].split(': ');
    const [ left, top ] = position.split(',');
    const [ width, height ] = size.split('x');
    return new claim(Number(left) + 1, Number(top) + 1, Number(width) + 1, Number(height) + 1);
  });

let result = 0;

for (let i = 0; i < claim.height; i++) {
  for (let j = 0; j < claim.width; j++) {
    let count = 0;
    for (let k = 0; k < input.length; k++) {
      // console.log(input[k].getInfo(j, i));
      // console.log(count);
      if (input[k].getInfo(i + 1, j + 1) === '#')
        count++;
    }
    if (count >= 2)
      result++;
  }
}

console.log(result);
