// I copied manhattanDistance from https://github.com/semibran/manhattan to use it in typescript

export const manhattanDistance = (a: number[], b: number[]) => {
  let distance = 0;
  let dimensions = Math.max(a.length, b.length);
  for (let i = 0; i < dimensions; i++) {
    distance += Math.abs((b[i] || 0) - (a[i] || 0));
  }
  return distance;
};

