import fs from 'fs-extra';

const rawInput = fs.readFileSync('./input.txt')
  .toString();
const input = rawInput.split(`
`)
  .map((el: string): number[] => {
    const sides = el
      .replace(/\s+/g, ' ')
      .trim()
      .split(' ')
      .map(Number);
    return [ sides[0], sides[1], sides[2] ];
  });

let possibleTriangles = 0;

const checkIsValid = (value: number[]) => {
  const triangle = value;
  triangle.sort((a: number, b: number) => a - b);

  const [ a, b, c ] = triangle;
  if (a + b > c)
    possibleTriangles++;
};

const columns: number[][] = [];

for (let i = 0; i < input.length / 3; i++) {
  const index = i * 3;
  columns.push([ input[index][0], input[index + 1][0], input[index + 2][0] ]);
  columns.push([ input[index][1], input[index + 1][1], input[index + 2][1] ]);
  columns.push([ input[index][2], input[index + 1][2], input[index + 2][2] ]);
}

columns.forEach((triangle: number[]) => checkIsValid(triangle));

console.log(possibleTriangles);