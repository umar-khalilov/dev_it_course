function A(x = null) {
    this.x = x;
    const lol = x;
    Object.defineProperty(this, 'key', {
        value: 'static',
        writable: false,
        enumerable: true
    })
}

let a = new A();

a.x = 2;
console.log(a.x); // 2

a.x = '3';
console.log(a.x); // 2
a.x = 10;

console.log(a.x); // 10


console.log(Object.keys(a))