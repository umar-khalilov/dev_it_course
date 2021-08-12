class JSTest {
    /*Задачи для работы со строками */
// 1. Функция меняет регистр букв переданой строки - если буква в верхнем - перевод в нижний и наоборот (teSTsTRing -> TEstStrING)
    static getChangeCaseString = (string) => {
        let character = '';
        let changedCaseString = '';
        if (typeof string === 'object' ||
            typeof string === 'undefined' ||
            typeof string === 'function' ||
            typeof string === 'boolean') {
            throw new TypeError("You entered wrong data")
        }
        for (let i = 0; i < string.length; i++) {
            character = string.charAt(i);
            if (!isNaN(character * 1)) {
                throw new TypeError("You input wrong data");
            }
            if (character === character.toLowerCase()) {
                changedCaseString += character.toUpperCase();
            }
            if (character === character.toUpperCase()) {
                changedCaseString += character.toLowerCase();
            }
        }
        return changedCaseString;
    }

    // 2. Функция проверки передана ли строка (isString) возращает true или false)
    static isString = (string) => typeof string === 'string';

    // 3. Функция которая создает абревиатуру от переданного имени и фамилии - John Dou - John D.
    static createAbbreviation = (name, surName) => `Your Abbreviation: ${name.slice(0, 1)} ${surName.slice(0, 1)}`;

    // Задачи для работы с числами
    // 1. Сгенерировать случайное целое число в указанном диапазоне и перевести его в указанную систему счисления
    static generateIntNumber = (start = 0, end = 10, scaleOfNotation = 10) => {
        const checkInput = start + end + scaleOfNotation;
        if (isNaN(checkInput)) {
            return null;
        }
        start = Math.ceil(start);
        end = Math.floor(end);
        const randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;
        return randomNumber.toString(scaleOfNotation);
    }

    // 2. Написать функцию, которая преобразовывает переданное число в отрицательное
    static getNegativeNumber = (number) => {
        if (isNaN(number)) {
            return null;
        }
        if (Math.sign(number) === 1) {
            return number * -1;
        }
        return false;
    }

    // 3. Посчитать расстояние между двумя заданными точками (x; y), округлить в большую сторону и найти факториал результата
    static calcDistanceAndGetFactorial = (from = 0, to = 10) => {
        if (isNaN(from + to)) {
            return null;
        }
        const distance = to - from;
        if (distance === 1) {
            return 1;
        }
        let sum = 1;
        for (let i = 1; i <= distance; i++) {
            sum = sum * i;
        }
        return sum;
    }

    /*1.Написать функцию которая распаковывает массив любой вложености.
    Делает выборку чисел.
    И сумирует все найденные числа.*/
    static getFoldedArray = (nestedArr) => nestedArr.flat(Infinity)
        .filter((item) => typeof item === 'number').reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// 2.Написать функцию которая принимает массив чисел и возвращает новый массив четных чесел в порядке возрастания.
    static getArrFromEvenNumber = (arrayOfNumbers) => arrayOfNumbers.flat(Infinity)
        .filter((number) => number % 2 === 0).sort((a, b) => a - b);

    // 3.Развернуть массив по x и по y. Не мутируя изначальный массив
    static reverseArrToXAndY = (array) => {
        const reversedArr = [];
        for (let i = array.length - 1; i >= 0; i--) {
            reversedArr.push(array[i].slice().reverse())
        }
        return reversedArr;
    }

    // Date
    // 1. Написать функцию, которая возвращает текущий день недели, словом по-русски.
    static getDayOfWeek = () => {
        const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        return days[new Date().getDay()];
    }

    // 2. Написать функцию, которая возвращает количество секунд до завтрашней даты.
    static amountSecondTillTomorrow = () => {
        const now = new Date();
        const tomorrowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        return Math.round((tomorrowDate - now) / 1000);
    }

    // 3. Написать функцию, которая принимает год и месяц, и возвращает последнее число месяца.
    static getTheLastDayOfTheMonth = (year, month) => new Date(year, month + 1, 0).getDate();

    // Задачи на замыкания
    /*    1. Написать счётчик замыкания с возможностью инкремента, декремента и ресета,
        который считает каждое действие(инкремента, дек, рес) и выводит общее количество вызовов отдельным методом*/
    static makeCounter = (count) => () => ({
        increment: () => ++count,
        decrement: () => --count,
        reset: () => count = 0,
    })

    // 2. Написать функцию которая при каждом вызове будет выводить следующее число Фибоначчи
    static getSeqFibonacci = (function () {
        let fib1 = 0;
        let fib2 = 1;
        let fib3 = 1
        let fibSum = 0;
        return () => {
            fibSum = fib1 + fib2 + fib3;
            fib2 = fib3;
            fib3 = fibSum;
            return fibSum
        }
    }());

    /*    3. Написать функцию, каждый вызов который будет генерировать случайные числа от 1 до 100,
        но так чтобы они не повторялись, иначе null*/
    static makeRandom = () => {
        const result = [];
        return () => {
            const randomNumber = Math.floor(Math.random() * 10);
            if (!result.includes(randomNumber)) {
                result.push(randomNumber);
                return result;
            }
            return null;
        }
    }
}
