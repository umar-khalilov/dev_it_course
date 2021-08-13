/*------- Задачи ------
    1. Написать метод который принимает на вход любой объект и возвращает сам объект его свойства и методы +
    цепочку из его прототипов(свойства и методы) в виде JSON.

2. Подсчет площади и периметра геометрических фигур(круг, овал, квадрат, прямоугольник, трапеция и ее разновидности,
треугольник и его разновидности...  чем больше тем лучше). Базовый класс это Figure.
У каждой фигуры могут быть общее и ее уникальные свойства но у всех
должны быть реализованы методы area и perimeter и метод toJSON который вернет всю информацию об объекте.
    П.С сделать два вариата реализации с помощью function и class
-------------------*/
function getObjectWithProp(object) {
    const proto = Object.getPrototypeOf(object)
    return JSON.stringify(object, (key, val) => {
        if (typeof val === 'function' || typeof val === 'symbol' || typeof val === 'undefined') {
            return val.toString();
        }
        return val;
    }, 2)
}

const obj1 = {
    name: "Lolo",
    surname: "Pepe",
    sayName: function () {
        return this.name
    },
    age: [3, 2]
}

// const obj2 = {
//     name: "Kaka",
//     surname: "Lala",
// }
// obj2.prototype = obj1;
console.log(getObjectWithProp(obj1));

for(let key in obj1){
    console.log(key)
}
