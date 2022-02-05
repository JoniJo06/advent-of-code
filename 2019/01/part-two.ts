import fs from 'fs-extra';

const rawInput = fs.readFileSync('./input.txt')
  .toString();
const input = rawInput.split(`
`)
  .map(Number);

let result = 0;

for (const module of input) {
  let fuel = 0;
  let subModule = module;
  while (true) {
    const newFuel = Math.floor((subModule / 3)) - 2;
    if (newFuel > 0) {
      subModule = newFuel;
      fuel += newFuel;
    } else
      break;
  }
  result += fuel;
}
console.log(result);