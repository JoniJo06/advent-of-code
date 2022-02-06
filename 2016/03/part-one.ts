import fs from 'fs-extra';

type Triangle = {
  a: number
  b: number
  c: number
}

const rawInput = fs.readFileSync('./input.txt')
  .toString();
const input = rawInput.split(`
`)
  .map((el: string): Triangle => {
    const sides = el.trim()
      .split('  ')
      .map(Number)
      .sort((a: number, b: number) => a - b);
    return {
      a: sides[0],
      b: sides[1],
      c: sides[2],
    };
  });

let possibleTriangles = 0;

input.forEach((triangle: Triangle) => {
  if (triangle.a + triangle.b > triangle.c)
    possibleTriangles++;
});

console.log(possibleTriangles);