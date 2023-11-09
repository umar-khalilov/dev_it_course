'use strict';
function* takeItem(array) {
	for (let i = 0; i < array.length; i++) {
		yield array[i];
	}
}
const users = ['Vyacheslav', 'Taras', 'Oleg', 'Veronika', 'Vlad', 'Pavel', 'Veniamin', 'Kirill', 'And me too'];
const userGen = takeItem(users);
const timer = setInterval(() => {
	const user = userGen.next();
	if (user.done) {
		clearInterval(timer);
		console.log('The End');
	}
	console.log(user.value);
}, 1000);
const array = [0, 1];
function* getFib(array) {
	let temp = 0;
	for (let i = 0; i < array.length; i++) {
		temp = array[i] + array[i + 1];
		array.push(temp);
		yield temp;
	}
}
let next = getFib(array);
console.log(next.next().value);
console.log(next.next().value);
console.log(next.next().value);
console.log(next.next().value);
console.log(next.next().value);
console.log(next.next().value);
console.log(next.next().value);
const customGen = {
	myGen(n = 10) {
		let i = 0;
		return {
			next() {
				if (i < n) {
					return {
						value: ++i,
						done: false,
					};
				}
				return {
					value: undefined,
					done: true,
				};
			},
		};
	},
};
const gen = customGen.myGen(5);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
function getDifferenceItem(firstSet, secondSet) {
	const newSet = new Set(firstSet);
	for (let element of secondSet) {
		newSet.delete(element);
	}
	return newSet;
}
let a = new Set([1, 2, 3, 4, 5]);
let b = new Set([3, 4, 5, 6, 7]);
console.log(getDifferenceItem(a, b));
function getUnionSet(firstSet, secondSet) {
	return new Set([...firstSet, ...secondSet]);
}
console.log(getUnionSet(a, b));
function isSecondSetSubsetFirst(firstSet, secondSet) {
	for (let elem of secondSet) {
		if (!firstSet.has(elem)) {
			return false;
		}
	}
	return true;
}
console.log(isSecondSetSubsetFirst(a, b));
function getArrKeyVal(object) {
	return Object.entries(object);
}
const obj = {
	name: 'test',
	has: false,
};
console.log(getArrKeyVal(obj));
function getDefrostObject(frozenObj) {
	return Object.assign({}, frozenObj);
}
console.log(getDefrostObject(Object.freeze(obj)));
function arrToObject(arrOfObj) {
	return Object.assign({}, ...arrOfObj);
}
console.log(arrToObject([{ a: 1 }, { b: 2, c: 3 }]));

const words = [
    'Beachball',
    'Rodeo',
    'Angel',
    'Aardvark',
    'Xylophone',
    'November',
    'Chocolate',
    'Papaya',
    'Uniform',
    'Joker',
    'Clover',
    'Bali',
];

const alphabetical = words.reduce((acc, item) => {
    if (!acc[item[0]]) {
        acc[item[0]] = [];
    }
    acc[item[0]].push(item);
    return acc;
}, {});

const hasLeapYear = year => {
    let isLeapYear = null;
    if (year % 4 !== 0) {
        isLeapYear = false;
    } else if (year % 100 !== 0) {
        isLeapYear = true;
    } else if (year % 400 !== 0) {
        isLeapYear = false;
    } else {
        isLeapYear = true;
    }
    return isLeapYear;
};

Function.prototype.delay = function (timeout = 1000) {
    return function (...args) {
        setTimeout(() => {
            this(...args);
        }, timeout);
    }.bind(this);
};

function someFn() {
    console.log(...arguments);
}

const someFnWithDelay = someFn.delay(2000);

someFnWithDelay('arg1', {}, [], 2);

console.log(alphabetical);
console.log(hasLeapYear(2023));

function numberCardinality(myNumber = '') {
    const arrNum = myNumber.split('');
    if (+arrNum[arrNum.length - 1] === 0) {
        return 'zero';
    }

    if (+arrNum[arrNum.length - 1] === 5) {
        return 'five';
    }
    const number = parseInt(myNumber, 10);
    if (number % 2 === 0) {
        return 'even';
    }
    if (number % 2 === 1) {
        return 'odd';
    }
}

console.log(numberCardinality('100'));
console.log(numberCardinality('88'));
console.log(numberCardinality('155'));
console.log(numberCardinality('99'));

function removeNSmallest(n, arr = []) {
    if (n > arr.length) return [];
    if (n <= 0) return arr;

    for (let i = 1; i <= n; i++) {
        let smallestNumber = Math.min(...arr);
        arr = arr.filter(item => item !== smallestNumber);
    }
    return arr;
}

console.log(removeNSmallest(2, [5, 3, 2, 1, 4]));

function fibonacciSeriesPrinter(number) {
    function* fibonacciSeries(number) {
        if (number === 0) {
            return [0];
        } else if (number === 1) {
            return [1, 1];
        } else {
            let arr2 = fibonacciSeries(number - 2).next().value;
            let arr1 = fibonacciSeries(number - 1).next().value;
            arr1.push(arr1[arr1.length - 1] + arr2[arr2.length - 1]);
            return arr1;
        }
    }
    const sequence = fibonacciSeries(number).next().value;
    sequence.shift();
    return sequence;
}

console.log(fibonacciSeriesPrinter(8));