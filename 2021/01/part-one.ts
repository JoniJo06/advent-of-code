import fs from 'fs-extra';

const rawInput = fs.readFileSync('./input2.txt').toString();

const input = rawInput.split('\r\n').map(Number);

let count = 0;

for (let i = 0; i < input.length; i++) {
	if (input[i] > input[i - 1]) {
		count++;
	}
}

console.log(count);
