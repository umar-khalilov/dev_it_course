//Boolean
let bool: boolean = true;
console.log(bool);

//String
let str: string = 'lalala';
console.log(str);

//Number
let num: number = 10;
console.log(num);

//Array
let arrN: number[] = [1, 2, 3, 4, 5];

let arrS: string[] = ['rgw', 'wfw', 'fwf'];

console.log(arrS, arrN);

let x: [number, string, ...any] = [1, 'str'];

//Enum
enum Week {
    SUNDAY = 'Воскресенье',
    MONDAY = "Понедельник",
    TUESDAY = "Вторник",
    WEDNESDAY = "Среда",
    THURSDAY = "Четверг",
    FRIDAY = "Пятница",
    SATURDAY = "Суббота"
}

const s = Week.TUESDAY;
console.log(s);

let a: number = 32;
let b: any = 4;

interface IUser {
    name: string;
    age: number;
    getAge:()=> number;
}
