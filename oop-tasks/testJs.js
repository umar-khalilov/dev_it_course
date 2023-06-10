'use strict';
import { JSUtils } from './JSUtils';

const utils = new JSUtils();
console.log(utils.isEqual(0.1 + 0.2, 0.3));
//String
console.log(utils.getChangeCaseString('teSTsTRing'));
console.log(utils.isString('lala'));
console.log(utils.createAbbreviation('John', 'Dou'));

// Number
console.log(utils.generateIntNumber(250, 255, 16));
console.log(utils.getNegativeNumber(3));
console.log(utils.calcDistanceAndGetFactorial(1, 6));

//Array
const arr = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16],
];
const testData = [
	1,
	2,
	1990,
	85,
	24,
	'Vasya',
	'colya@example.com',
	'Rafshan',
	'ashan@example.com',
	true,
	false,
	[[[[1, 2, 1990, 85, 24, 'Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com', true, false]]]],
];
console.log(utils.getFoldedArray(arr));
console.log(utils.getFoldedArray(testData));
console.log(utils.reverseArrToXAndY(arr));

//Date
console.log(utils.getDayOfWeek());
console.log(utils.amountSecondTillTomorrow());
console.log(utils.getTheLastDayOfTheMonth(2021, 7));

//Closure
const counter = utils.makeCounter(10);
console.log(counter().increment());
console.log(counter().increment());
console.log(counter().reset());

console.log(utils.getSeqFibonacci());
console.log(utils.getSeqFibonacci());
console.log(utils.getSeqFibonacci());

const random = utils.makeRandom();
console.log(random());
console.log(random());
console.log(random());
