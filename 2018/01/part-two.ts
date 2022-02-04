import fs from 'fs-extra';

const rawInput = fs.readFileSync('./input.txt')
  .toString();
const input = rawInput.split(`
`);

let frequency = 0;
const seen: number[] = [];
let found = false;

while (!found) {
  for (let i = 0; i < input.length; i++) {
    frequency = eval(`${frequency}${input[i]}`);
    console.log(frequency);
    if (seen.includes(frequency)) {
      console.log(frequency);
      found = true;
      break;
    } else
      seen.push(frequency);
  }

}

console.log(frequency);
