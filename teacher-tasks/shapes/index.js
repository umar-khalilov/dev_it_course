/* 1. Написать метод который принимает на вход любой объект и возвращает сам объект его свойства и методы
    цепочку из его прототипов(свойства и методы) в виде JSON. 
*/
function getObjectWithProp(object) {
	const serialized = JSON.stringify(
		object,
		(key, val) => {
			if (typeof val === 'function' || typeof val === 'symbol' || typeof val === 'undefined') {
				return val.toString();
			}
			return val;
		},
		4,
	);
	return serialized;
}

function returnProto(object) {
	return Object.getPrototypeOf(object);
}

const obj1 = {
	name: 'Lolo',
	surname: 'Pepe',
	sayName: function () {
		return this.name;
	},
	age: [3, 2],
};

// const obj2 = {
//     name: "Kaka",
//     surname: "Lala",
// }
// obj2.prototype = obj1;

console.log(getObjectWithProp(obj1));
