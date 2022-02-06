import fs from 'fs-extra';

type dimensionType = {
  l: number
  w: number
  h: number
}

const rawInput = fs.readFileSync('./input.txt')
  .toString();

const input = rawInput.split(`
`)
  .map((el: string): dimensionType => {
    const values = el.split('x');
    return {
      l: Number(values[0]),
      w: Number(values[1]),
      h: Number(values[2]),
    };
  });

let result = 0;

for (let i = 0; i < input.length; i++) {
  const present = input[i];
  const areaA = present.l * present.w;
  const areaB = present.w * present.h;
  const areaC = present.h * present.l;
  const extra = Math.min(areaA, areaB, areaC);
  result += (2 * areaA) + (2 * areaB) + (2 * areaC) + extra;
}
console.log(result);
