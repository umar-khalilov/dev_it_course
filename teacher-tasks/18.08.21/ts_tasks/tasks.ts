// Задачи на функции-генераторы
/*1. Создать функцию генератор который в параметры принимает массив элементов.
    Затем создать функцию в котором выводится рез-т функции генератора с задержкой в 1 секунду.
    В конце выдает "The End" и значение свойства done.*/
function* takeItem(array: string[]) {
    for (let i = 0; i < array.length; i++) {
        yield array[i];
    }
}

const users: string[] = ["Vyacheslav", "Taras", "Oleg", "Veronika", "Vlad", "Pavel", 'Veniamin', 'Kirill', 'And me too'];
const userGen = takeItem(users);

const timer = setInterval((): void => {
    const user = userGen.next();
    if (user.done) {
        clearInterval(timer);
        console.log('The End');
    }
    console.log(user.value);
}, 1000)

// 2. С помощью функции-генератора создайте итератор, каждый вызов которого будет возвращать следующее число Фибоначчи.

function* getFib() {
    const array = [0, 1];
    let temp: number = 0;
    for (let i = 0; i < array.length; i++) {
        temp = array[i] + array[i + 1];
        array.push(temp);
        yield temp;
    }
}


let next = getFib();

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
    myGen(n: number = 10) {
        let i: number = 0;
        return {
            next(): object {
                if (i < n) {
                    return {
                        value: ++i,
                        done: false,
                    }
                }
                return {
                    value: undefined,
                    done: true,
                }
            }
        }
    }
}
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
function getDifferenceItem(firstSet: Set<number>, secondSet: Set<number>) {
    const newSet = new Set(firstSet);
    for (let element of secondSet) {
        newSet.delete(element);
    }
    return newSet;
}

let a: Set<number> = new Set<number>([1, 2, 3, 4, 5]);
let b: Set<number> = new Set<number>([3, 4, 5, 6, 7]);

console.log(getDifferenceItem(a, b));

// 5. Функция принимает два сета и возвращет новый объединенный сет
function getUnionSet(firstSet: Set<number>, secondSet: Set<number>) {
    return new Set([...firstSet, ...secondSet]);
}

console.log(getUnionSet(a, b));

/*6. Функция принимает два сета и возвращает булевое значение: является ли второй сет субсетом первого
(по аналогии с методом substring)*/
function isSecondSetSubsetFirst(firstSet: Set<number>, secondSet: Set<number>): boolean {
    for (let elem of secondSet) {
        if (!firstSet.has(elem)) {
            return false;
        }
    }
    return true;
}

console.log(isSecondSetSubsetFirst(a, b))

/*Задачи по объектам:
 7. Написать функцию, которая принимает объект и возвращает массив вида [[key, value], [key, value]]*/
function getArrKeyVal(object: { name: string; has: boolean }): [string, any][] {
    return Object.entries(object);
}

const obj: { name: string, has: boolean } = {
    name: 'test',
    has: false,
};

console.log(getArrKeyVal(obj));

/*8. Написать функцию, которая "размораживает" замороженный объект (принимает замороженный объект, возвращает новый,
    содержащий свойства замороженного)*/
function getDefrostObject<T extends object>(frozenObj: T): T {
    return Object.assign({}, frozenObj);
}

console.log(getDefrostObject(Object.freeze(obj)));

/*9. Написать функцию, которая принимает массив объектов и возвращает новый объект, содержащий все свойства переданных
объектов. Синтаксис: arrToObj(arr: object[]): object
Пример: console.log(arrToObj([{a: 1}, {b: 2, c: 3}]));*/ //{a: 1, b: 2, c: 3}
function arrToObject(arrOfObj: Array<object>): object {
    return Object.assign({}, ...arrOfObj)
}

console.log(arrToObject([{a: 1}, {b: 2, c: 3}]))

