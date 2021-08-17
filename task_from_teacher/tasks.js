"use strict"

/*1. Написать метод защиты email (например для не залогиненых пользователей)
Синтаксис: protect_email(email: string, replacer: string = '*' ): string*/
const protectEmail = (email, replacer) => email.replaceAll(/[b*\b]+[^.com$]/gi, replacer);

console.log(protectEmail("robin_singh@example.com", "#"));
console.log(protectEmail("test@gmail.com",'#'))

/*2. Написать метод который переводит символы в строке с нижнего регистра в верхний (c верхнего в нижний) +
    может перемешивать строку.
    Синтаксис: swapcase(str: string, shuffle: boolean = false): string*/
function swapCase(str, shuffle = false) {
    let changedStr = '';
    let changedShuffleStr = '';
    let result;
    for (let char of str) {
        changedStr += char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
    }
    result = changedStr;
    if (shuffle) {
        changedShuffleStr = changedStr.split('');
        for (let i = changedShuffleStr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [changedShuffleStr[i], changedShuffleStr[j]] = [changedShuffleStr[j], changedShuffleStr[i]];
        }
        result = changedShuffleStr.join('');
    }
    return result;
}

console.log(swapCase('AaBbc', true));

/* 3. Написать метод text_truncate который обрезает текст до указаного значения(по умолчанию 100)
и в конец добавляет символы (по умолчанию ...)
Синтаксис: text_truncate(str: string, length: number = 100, ending: string = '...'): string*/
const textTruncate = (str, length = 100, ending = '...') => {
    if (str.length < length) {
        return str.substring(0, length);
    }
    return str.substring(0, length) + ending;
}

console.log(textTruncate("Lorem ipsum dolor sit amet, consectetur adipiscing elit."));
console.log(textTruncate('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 19));
console.log(textTruncate('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 15, '!!'));

/*4. Написать метод chunk_str который убирает из строки все пробелы и разбивает ее на чанки указаного размера.
    Синтаксис: chunk_str(str: string, size: number = 1, trim: boolean = true): string[]*/
const chunkStr = (str, size = 1, trim = true) => trim ? str.trim()
        .match(new RegExp('.{1,' + size + '}', 'g')) :
    str.match(new RegExp('.{1,' + size + '}', 'g'));

console.log(chunkStr('consectetur    ', 3));

/*5. Написать метод который переводит целое число к Римскому и обратный метод Римское к целому.
    Синтаксис:
    romanToInt(str: string): number;
    intToRoman(int: number): string;*/

function romanToInt(str) {
    if (typeof str !== 'string') {
        return null;
    }
    const values = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    const digits = Object.keys(values);
    let res = 0;
    [...str.toUpperCase()].forEach((char) => {
        if (digits.indexOf(char) < digits.indexOf(char + 1)) {
            res -= values[char];
        }
        res += values[char];
    })
    return res;
}

function intToRoman(int) {
    if (isNaN(int) || int === 0) {
        return null;
    }
    const romanDigits = [["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]];

    let numeral = '';
    const digits = int.toString().split('').reverse();
    for (let i = 0; i < digits.length; i++) {
        numeral = romanDigits[i][parseInt(digits[i])] + numeral;
    }
    return numeral;
}

console.log(romanToInt('XXVI')); // 26
console.log(intToRoman(26)); // 'XXVI'



/*7. Метод "подбора карточных паролей" этот метод принимает набор символов из 4 цифр из которых теоретически может состоять пароль.
    Метод должен вернуть массив всех возможных уникальных комбинаций.
+ я могу использовать маску в строке ввиде знака ?(это значит что тут может быть любая цифра от 0-9)
+ если я точно знаю что пароль начинаеться с 9 я могу добавить символ ^ перед первой цифрой например '^9123'
+ также я могу точно знать последнию цифру тогда я использую знак $ в конце например '9123$' --> 3 всегда последняя
+ я могу использовать комбинации из всех масок например '^1??0$' -- точно начинаеться с 1 и заканчиваться 0 внутри любые от 0-9*/

function combinePass(str, regExp) {
    const result = [];
    for (let i = 1; i < Math.pow(2, str.length) - 1; i++) {
        result.push([...str].filter((_, index) => (i >> index) & 1).join(""));
    }
    let mat = result.join(', ')
    let match = mat.match(new RegExp('[' + regExp + ']', 'gm'))
    console.log(match)
    return result;
}

// console.log(combinePass('9123', /^9123?/));
