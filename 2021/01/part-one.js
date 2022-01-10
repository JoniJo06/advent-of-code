/** @format */

import fs from 'fs-extra';

const input = fs.readFileSync('./input.txt').toString();

const formatInput = input.split('\r\n');

let increments = 1;
for (let i = 0; i < formatInput.length; i++) {
	if (formatInput[i] > formatInput[i - 1]) increments++;
}
console.log(increments);
