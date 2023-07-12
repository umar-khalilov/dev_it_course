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
