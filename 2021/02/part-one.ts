/** @format */
'use strict';

import fs from 'fs-extra';

const rawInput = fs.readFileSync('./input.txt').toString();

const input = rawInput.split('\r\n');

const instruction1 = input.map((el) => {
	return el.split(' ')[0].toLowerCase();
});
const instruction2 = input
	.map((el) => {
		return el.split(' ')[1];
	})
	.map(Number);

let depth = 0;
let horizontal = 0;

for (let i = 0; i < input.length; i++) {
	switch (instruction1[i]) {
		case 'forward':
			horizontal += instruction2[i];
			break;
		case 'down':
			depth += instruction2[i];
			break;
		case 'up':
			depth -= instruction2[i];
			break;
		default:
			break;
	}
}

console.log('result :' + depth * horizontal);
