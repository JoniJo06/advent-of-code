/** @format */
'use strict';

import fs from 'fs-extra';

const rawInput = fs.readFileSync('./input.txt').toString();

const input = rawInput.split(`
`).map(Number);

let count = 0;

for (let i = 3; i < input.length; i++) {
	if (input[i] + input[i - 1] + input[i - 2] > input[i - 1] + input[i - 2] + input[i - 3]) {
		count++;
	}
}

console.log(count);
