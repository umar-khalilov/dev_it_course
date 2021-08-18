//1
const protectEmail = (email: string, replacer: string): string => email.replace(/w\/[^.com$]/gi, replacer);

console.log(protectEmail("robin_singh@example.com", "#"));
console.log(protectEmail("test@gmail.com", '#'));

//2
function swapCase(str: string, shuffle: boolean = false): string {
    let changedStr: string = '';
    let changedShuffleStr: string[];
    let result: string;
    for (let char of str) {
        changedStr += char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
    }
    result = changedStr;
    if (shuffle) {
        changedShuffleStr = changedStr.split('');
        for (let i: number = changedShuffleStr.length - 1; i > 0; i--) {
            let j: number = Math.floor(Math.random() * (i + 1));
            [changedShuffleStr[i], changedShuffleStr[j]] = [changedShuffleStr[j], changedShuffleStr[i]];
        }
        result = changedShuffleStr.join('');
    }
    return result;
}

console.log(swapCase('AaBbc', true));

//3
const textTruncate = (str: string, length: number = 100, ending: string = '...'): string => {
    if (str.length < length) {
        return str.substring(0, length);
    }
    return str.substring(0, length) + ending;
}

console.log(textTruncate("Lorem ipsum dolor sit amet, consectetur adipiscing elit."));
console.log(textTruncate('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 19));
console.log(textTruncate('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 15, '!!'));

//4
const chunkStr = (str: string, size: number = 1, trim: boolean = true): string[] => trim ? str.trim()
        .match(new RegExp('.{1,' + size + '}', 'g')) :
    str.match(new RegExp('.{1,' + size + '}', 'g'));

console.log(chunkStr('consectetur    ', 3));

//5

function romanToInt(str: string): number {
    if (typeof str !== 'string') {
        return null;
    }

    type roman = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M';
    const values: { [key in roman]: number } = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    const digits: string[] = Object.keys(values);
    let res:number = 0;
    [...str.toUpperCase()].forEach((char:roman) => {

        if (digits.indexOf(char) < digits.indexOf(char +1) ) {
            res -= values[char];
        }
        res += values[char];
    })
    return res;
}

function intToRoman(int: number): string {
    if (isNaN(int) || int === 0) {
        return null;
    }
    const romanDigits: string[][] = [["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]];

    let numeral: string = '';
    const digits: string[] = int.toString().split('').reverse();
    for (let i = 0; i < digits.length; i++) {
        numeral = romanDigits[i][parseInt(digits[i])] + numeral;
    }
    return numeral;
}

console.log(romanToInt('XXVI')); // 26
// console.log(intToRoman(26)); // 'XXVI'