import fs from 'fs-extra';

const rawInput = fs.readFileSync('./input.txt').toString();

const input = rawInput.split(`
`);

const gamma = [];
const epsilon = [];

let count0;
let count1;
for (let i = 0; i < input[0].length; i++) {
	count0 = 0;
	count1 = 0;
	for (let j = 0; j < input.length; j++) {
		if (parseInt(input[j].split('')[i]) === 0) {
			count0++;
		} else {
			count1++;
		}
	}
	if (count0 <= count1) {
		gamma.push(1);
		epsilon.push(0);
	} else {
		gamma.push(0);
		epsilon.push(1);
	}
}
const gammaRate = parseInt(gamma.join(''), 2);
const epsilonRate = parseInt(epsilon.join(''), 2);

console.log('result: ' + gammaRate * epsilonRate);
