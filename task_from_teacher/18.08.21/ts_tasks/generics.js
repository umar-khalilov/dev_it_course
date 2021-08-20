"use strict";
function getLength(arr) {
    return `In argument ${arr} the length of the transmitted data is  ${arr.length}`;
}
const arr = [2, 4, 3, 2, 1];
const strArr = ['fgdf', 'erge'];
const str = 'lrlalwe';
console.log(getLength(arr));
console.log(getLength(strArr));
function getValue(obj, key) {
    if (!obj[key]) {
        return false;
    }
    return obj[key];
}
const person = {
    name: 'TestName',
    age: 22,
    job: 'developer'
};
console.log(getValue(person, 'name'));
function mergeObject(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
