"use strict"

// const operations = [];
// const test = () => {
//     for (let i = 0; i < 5; i++) {
//         operations.push(() => console.log(i));
//     }
//     operations.forEach((fn)=> fn());
// }
// console.log(Number.MAX_VALUE);
// const eq = (a, b) => (Math.abs(a) - Math.abs(b)) < Number.EPSILON;
// console.log(eq(0.1 + 0.2, 0.3));

//1. Написать метод защиты email (например для не залогиненых пользователей)
// Синтаксис: protect_email(email: string, replacer: string = '*' ): string
// Пример: console.log(protect_email("robin_singh@example.com")); // r***@***e.com

const getSeqFib = (upNum) => {
    let num1 = 0;
    let num2 = 1;
    let num3 = 1;
    let num4;
    console.log(num1 + "\t");
    while (num2 <= upNum) {
        num4 = num1 + num2 + num3;
        console.log(num2 + "\t");
        num2 = num3;
        num3 = num4;
    }
}

const calcSumSequence = (num) => num === 1 ? num : num + calcSumSequence(num - 1);

// console.log(calcSumSequence(4))

// const createMultiplicationTable = (upperLimit) => {
//     for (let i = 1; i <= 10; i++) {
//         for (let j = 1; j <= upperLimit; j++) {
//             console.log(`${j} x ${i} = ${i * j}`);
//         }
//         console.log('\n')
//     }
// }

// createMultiplicationTable(9)
const pow = (base, exp) => {
    if (exp === 1) {
        return base;
    }
    if (exp === 0) {
        return 1;
    }
    return base * pow(base, exp - 1);
}

//console.log(pow(2,3))



