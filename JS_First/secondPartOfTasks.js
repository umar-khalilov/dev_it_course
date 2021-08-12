"use strict"

/*1.Написать функцию которая распаковывает массив любой вложености.
    Делает выборку чисел.
    И сумирует все найденные числа.*/

const getFoldedArray = (nestedArr) => nestedArr.flat(Infinity)
    .filter((item) => typeof item === 'number').reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// 2.Написать функцию которая принимает массив чисел и возвращает новый массив четных чесел в порядке возрастания.

const getArrFromEvenNumber = (arrayOfNumbers) => arrayOfNumbers.flat(Infinity)
    .filter((number) => number % 2 === 0).sort((a, b) => a - b);

/*3.Развернуть массив по x и по y. Не мутируя изначальный массив
const arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16],
]
[16, 15, 14, 13]
[12, 11, 10, 9]
[8, 7, 6, 5]
[4, 3, 2, 1]
*/

const reverseArrToXAndY = (array) => {
    const reversedArr = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArr.push(array[i].slice().reverse())
    }
    return reversedArr;
}

const arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
]

const testData = [
    1,
    2,
    1990,
    85,
    24,
    "Vasya",
    "colya@example.com",
    "Rafshan",
    "ashan@example.com",
    true,
    false,
    [
        [
            [
                [
                    1,
                    2,
                    1990,
                    85,
                    24,
                    "Vasya",
                    "colya@example.com",
                    "Rafshan",
                    "ashan@example.com",
                    true,
                    false,
                ],
            ],
        ],
    ]
];
// console.log(getFoldedArray(testData));
// console.log(getFoldedArray(arr));
// console.log(getArrFromEvenNumber(arr))
console.log(reverseArrToXAndY(arr))
