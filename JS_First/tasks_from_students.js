/*
Задачи для работы со строками
1. Функция меняет регистр букв переданой строки - если буква в верхнем - перевод в нижний и наоборот (teSTsTRing -> TEstStrING)
2. функция проверки передана ли строка (isString) возращает true или false)
3. функция которая создает абревиатуру от переданного имени и фамилии - John Dou - John D.*/

//1
const getChangeCaseString = (string) => {
    let character = '';
    let changedCaseString = '';
    for (let i = 0; i < string.length; i++) {
        character = string.charAt(i);
        if (!isNaN(character * 1)) {
            throw new TypeError("You input wrong data");
        } else if (character === character.toLowerCase()) {
            changedCaseString += character.toUpperCase();
        } else if (character === character.toUpperCase()) {
            changedCaseString += character.toLowerCase();
        }
    }
    return changedCaseString;
}

console.log(getChangeCaseString("teSTsTRing"));

//2
const isString = (string) => typeof string === 'string';

console.log(isString("lala"));

//3
