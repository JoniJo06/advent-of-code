import fs from 'fs-extra';

type PasswordObjectType = {
  min: number
  max: number
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
      min: Number(numberSeparator[0]),
      max: Number(numberSeparator[1]),
      character: letterSeparator[1],
      password: colonSeparator[1],
    };
  });

let validPasswordCount = 0;

for (let i = 0; i < input.length; i++) {
  const obj = input[i];
  let characterCount = 0;
  for (let j = 0; j < obj.password.length; j++) {
    if (obj.password[j] === obj.character) {
      characterCount++;
    }
  }
  if (characterCount <= obj.max && characterCount >= obj.min)
    validPasswordCount++;
}

console.log(validPasswordCount);