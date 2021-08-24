function sum(x: number, y: number): number {
    return x + y;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

let op: (x: number, y: number) => number;

op = sum;
console.log(op(1, 2))

op = subtract;
console.log(op(3, 1))

function mathOp(x: number, y: number, op: (a: number, b: number) => number): number {
    return op(x, y);
}

console.log(mathOp(10, 20, sum))

console.log(mathOp(30, 22, subtract))

console.log(mathOp(2, 2, multiply))
