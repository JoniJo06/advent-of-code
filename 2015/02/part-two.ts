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
  const twoSmallest = [ present.l, present.w, present.h ]
    .sort((a: number, b: number) => a - b)
    .slice(0, 2);

  const ribbonWrap = twoSmallest[0] + twoSmallest[0] + twoSmallest[1] + twoSmallest[1];
  const ribbonBow = present.l * present.w * present.h;
  result += ribbonWrap + ribbonBow;
}
console.log(result);
