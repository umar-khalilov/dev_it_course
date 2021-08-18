"use strict";
//1
const protectEmail = (email, replacer) => email.replace(/w\/[^.com$]/gi, replacer);
console.log(protectEmail("robin_singh@example.com", "#"));
console.log(protectEmail("test@gmail.com", '#'));
//2
function swapCase(str, shuffle = false) {
    let changedStr = '';
    let changedShuffleStr;
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
//3
const textTruncate = (str, length = 100, ending = '...') => {
    if (str.length < length) {
        return str.substring(0, length);
    }
    return str.substring(0, length) + ending;
};
console.log(textTruncate("Lorem ipsum dolor sit amet, consectetur adipiscing elit."));
console.log(textTruncate('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 19));
console.log(textTruncate('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 15, '!!'));
//4
const chunkStr = (str, size = 1, trim = true) => trim ? str.trim()
    .match(new RegExp('.{1,' + size + '}', 'g')) :
    str.match(new RegExp('.{1,' + size + '}', 'g'));
console.log(chunkStr('consectetur    ', 3));
//5
function romanToInt(str) {
    if (typeof str !== 'string') {
        return null;
    }
    const values = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    const digits = Object.keys(values);
    let res = 0;
    [...str.toUpperCase()].forEach((char) => {
        if (digits.indexOf(char) < digits.indexOf(char + 1)) {
            res -= values[char];
        }
        res += values[char];
    });
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
// console.log(intToRoman(26)); // 'XXVI'
