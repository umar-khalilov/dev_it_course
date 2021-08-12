class JSTest {
    /*
Задачи для работы со строками
1. Функция меняет регистр букв переданой строки - если буква в верхнем - перевод в нижний и наоборот (teSTsTRing -> TEstStrING)
2. Функция проверки передана ли строка (isString) возращает true или false)
3. Функция которая создает абревиатуру от переданного имени и фамилии - John Dou - John D.*/

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

    static isString = (string) => typeof string === 'string';

    static createAbbreviation = (name, surName) => `Your Abbreviation: ${name.slice(0, 1)} ${surName.slice(0, 1)}`;

    /*    Задачи для работы с числами
        1. Сгенерировать случайное целое число в указанном диапазоне и перевести его в указанную систему счисления
        2. Написать функцию, которая преобразовывает переданное число в отрицательное
        3. Посчитать расстояние между двумя заданными точками (x; y), округлить в большую сторону и найти факториал результата*/

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

    static getNegativeNumber = (number) => {
        if (isNaN(number)) {
            return null;
        }
        if (Math.sign(number) === 1) {
            return number * -1;
        }
        return false;
    }

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



}

//String
console.log(JSTest.getChangeCaseString("teSTsTRing"));

console.log(JSTest.isString("lala"));

console.log(JSTest.createAbbreviation("John", "Dou"));

console.log(JSTest.generateIntNumber(250, 255, 16));

console.log(JSTest.getNegativeNumber(3));

console.log(JSTest.calcDistanceAndGetFactorial(1, 6));
