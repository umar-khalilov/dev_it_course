"use strict";

function sum(x, y) {
    return x + y;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

let op;
op = sum;
console.log(op(1, 2));
op = subtract;
console.log(op(3, 1));

function mathOp(x, y, op) {
    return op(x, y);
}

console.log(mathOp(10, 20, sum));
console.log(mathOp(30, 22, subtract));
console.log(mathOp(2, 2, multiply));
//# sourceMappingURL=FastFoodNetwork.ts.map