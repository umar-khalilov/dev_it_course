"use strict";
// Задачи на функции-генераторы
/*1. Создать функцию генератор который в параметры принимает массив элементов.
    Затем создать функцию в котором выводится рез-т функции генератора с задержкой в 1 секунду.
    В конце выдает "The End" и значение свойства done.*/
function* takeItem(array) {
    for (let i = 0; i < array.length; i++) {
        yield array[i];
    }
}
const users = ["Vyacheslav", "Taras", "Oleg", "Veronika", "Vlad", "Pavel", 'Veniamin', 'Kirill', 'Me too'];
const userGen = takeItem(users);
const timer = setInterval(() => {
    const user = userGen.next();
    if (user.done) {
        clearInterval(timer);
        console.log('The End');
    }
    console.log(user.value);
}, 1000);
// 2. С помощью функции-генератора создайте итератор, каждый вызов которого будет возвращать следующее число Фибоначчи.
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
/*3. Написать кастомную функцию-генератор. Который имитирует поля в реальном генераторе. Запускать нужно через функцию
next()*/
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
            }
        };
    }
};
const gen = customGen.myGen(5);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
/*for (let key of customGen) {
    console.log(key)
}*/
/*4. Функция принимает два сета и возвращает новый сет, который содержит только уникальные элементы
первого сета по отношению ко второму
let a = new Set([1,2,3,4,5]);
let b = new Set([3,4,5,6,7]);
outcome: {1, 2};*/
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
// 5. Функция принимает два сета и возвращет новый объединенный сет
function getUnionSet(firstSet, secondSet) {
    return new Set([...firstSet, ...secondSet]);
}
console.log(getUnionSet(a, b));
/*6. Функция принимает два сета и возвращает булевое значение: является ли второй сет субсетом первого
(по аналогии с методом substring)*/
function isSecondSetSubsetFirst(firstSet, secondSet) {
    for (let elem of secondSet) {
        if (!firstSet.has(elem)) {
            return false;
        }
    }
    return true;
}
console.log(isSecondSetSubsetFirst(a, b));
/*Задачи по объектам:
 7. Написать функцию, которая принимает объект и возвращает массив вида [[key, value], [key, value]]*/
function getArrKeyVal(object) {
    return Object.entries(object);
}
const obj = {
    name: 'test',
    has: false,
};
console.log(getArrKeyVal(obj));
/*8. Написать функцию, которая "размораживает" замороженный объект (принимает замороженный объект, возвращает новый,
    содержащий свойства замороженного)*/
function getDefrostObject(frozenObj) {
    return Object.assign({}, frozenObj);
}
console.log(getDefrostObject(Object.freeze(obj)));
/*9. Написать функцию, которая принимает массив объектов и возвращает новый объект, содержащий все свойства переданных
объектов. Синтаксис: arrToObj(arr: object[]): object
Пример: console.log(arrToObj([{a: 1}, {b: 2, c: 3}]));*/ //{a: 1, b: 2, c: 3}
function arrToObject(arrOfObj) {
    return Object.assign({}, ...arrOfObj);
}
console.log(arrToObject([{ a: 1 }, { b: 2, c: 3 }]));
