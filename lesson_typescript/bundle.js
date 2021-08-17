"use strict";
//Boolean
let bool = true;
console.log(bool);
//String
let str = 'lalala';
console.log(str);
//Number
let num = 10;
console.log(num);
//Array
let arrN = [1, 2, 3, 4, 5];
let arrS = ['rgw', 'wfw', 'fwf'];
console.log(arrS, arrN);
let x = [1, 'str'];
//Enum
var Week;
(function (Week) {
    Week["SUNDAY"] = "\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435";
    Week["MONDAY"] = "\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A";
    Week["TUESDAY"] = "\u0412\u0442\u043E\u0440\u043D\u0438\u043A";
    Week["WEDNESDAY"] = "\u0421\u0440\u0435\u0434\u0430";
    Week["THURSDAY"] = "\u0427\u0435\u0442\u0432\u0435\u0440\u0433";
    Week["FRIDAY"] = "\u041F\u044F\u0442\u043D\u0438\u0446\u0430";
    Week["SATURDAY"] = "\u0421\u0443\u0431\u0431\u043E\u0442\u0430";
})(Week || (Week = {}));
const s = Week.TUESDAY;
console.log(s);
let a = 32;
let b = 4;
