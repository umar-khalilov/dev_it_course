//String
console.log(JSTest.getChangeCaseString("teSTsTRing"));

console.log(JSTest.isString("lala"));

console.log(JSTest.createAbbreviation("John", "Dou"));

//Number
console.log(JSTest.generateIntNumber(250, 255, 16));

console.log(JSTest.getNegativeNumber(3));

console.log(JSTest.calcDistanceAndGetFactorial(1, 6));

//Array
const arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16],
];
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
console.log(JSTest.getFoldedArray(arr));

console.log(JSTest.getFoldedArray(testData));

console.log(JSTest.reverseArrToXAndY(arr));

//Date
console.log(JSTest.getDayOfWeek());

console.log(JSTest.amountSecondTillTomorrow());

console.log(JSTest.getTheLastDayOfTheMonth(2021,7));

//Closure
const counter = JSTest.makeCounter(10);
console.log(counter().increment());
console.log(counter().increment());
console.log(counter().reset());

console.log(JSTest.getSeqFibonacci());
console.log(JSTest.getSeqFibonacci());
console.log(JSTest.getSeqFibonacci());

const random = JSTest.makeRandom();
console.log(random());
console.log(random());
console.log(random());
