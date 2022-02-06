import fs from 'fs-extra';

type PasswordObjectType = {
  pos1: number
  pos2: number
  character: string
  password: string
}

const rawInput = fs.readFileSync('./input.txt')
  .toString();
const input = rawInput.split(`
`)
  //just format the input into an object
  .map((el: string): PasswordObjectType => {
    const colonSeparator = el.split(': ');
    const letterSeparator = colonSeparator[0].split(' ');
    const numberSeparator = letterSeparator[0].split('-');
    return {
      pos1: Number(numberSeparator[0]),
      pos2: Number(numberSeparator[1]),
      character: letterSeparator[1],
      password: colonSeparator[1],
    };
  });

let validPasswordCount = 0;

for (let i = 0; i < input.length; i++) {
  const obj = input[i];
  let found = false;

  if (obj.password[obj.pos1 - 1] === obj.character)
    found = true;

  if (obj.password[obj.pos2 - 1] === obj.character && !found)
    found = true;
  else if (obj.password[obj.pos2 - 1] === obj.character && found)
    continue;

  if (found)
    validPasswordCount++;
}

console.log(validPasswordCount);