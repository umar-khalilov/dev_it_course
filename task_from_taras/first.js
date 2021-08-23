function A() {
    let type = null;
    let x = null;
    Object.defineProperty(this, 'x', {
        get: () => x,
        set: (value) => {
            if (type === null) {
                type = typeof value;
            }
            if (typeof value === type) {
                x = value;
            }
        },
        enumerable: true
    })
}

let a = new A()
a.x = 2;
console.log(a.x)
a.x = '3';
console.log(a.x)
