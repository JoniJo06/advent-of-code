import fs from 'fs-extra';

const rawInput = fs.readFileSync('./input.txt')
  .toString();
const input = rawInput.split(',')
  .map(Number);

let result: number = 0;

outerLoop:
  for (let i = 0; i <= 99; i++) {
    for (let j = 0; j <= 99; j++) {
      const myInput = [ ...input ];
      myInput[1] = i;
      myInput[2] = j;
      for (let k = 0; k < myInput.length; k += 4) {
        if (myInput[k] === 1)
          myInput[myInput[k + 3]] = myInput[myInput[k + 1]] + myInput[myInput[k + 2]];
        else if (myInput[k] === 2)
          myInput[myInput[k + 3]] = myInput[myInput[k + 1]] * myInput[myInput[k + 2]];
        else if (myInput[k] === 99)
          break;
      }
      if (myInput[0] === 19690720) {
        result = 100 * i + j;
        break outerLoop;
      }
    }
  }
console.log(result);