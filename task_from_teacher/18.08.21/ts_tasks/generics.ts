/*1. Функция принимает массив строк или цифр, возвращает длину массива.
    Синтаксис: getLength(arr: T[]): number*/
interface MyLength {
    length: number;
}

function getLength<T extends MyLength>(arr: T): string {
    return `In argument ${arr} the length of the transmitted data is  ${arr.length}`;
}

const arr = [2, 4, 3, 2, 1];
const str: string = 'lrlalwe';
console.log(getLength(arr))
console.log(getLength(str))


/*2. Функция принимает обьект и ключ, возвращает значение ключа.
    Синтаксис: getValue(obj: T, key: R)*/
function getValue<T extends object, R extends keyof T>(obj: T, key: R) {
    if (!obj[key]) {
        return false;
    }
    return obj[key];
}

const person = {
    name: 'TestName',
    age: 22,
    job: 'developer'
}

console.log(getValue(person, 'name'))

/*3. Функция принимает два объекта, возвращает объединённый объект.
    Синтаксис: mergeObject(obj1: T, obj2: R):T & R*/
function mergeObject<T extends object, R extends object>(obj1: T, obj2: R): T & R {
    return Object.assign({}, obj1, obj2)
}