function a(fn) {
    if(typeof fn !== "function") {
        throw new Error('Not a function');
    }
    const requiredArgLength = fn.length;
    const tmpArg = [];
    const c = (...arg) => {
        if(!arg.length && requiredArgLength > arg.length) {
            throw new Error('Invalid....');
        }
        tmpArg.push(...arg);
        if(tmpArg.length === requiredArgLength) {
            return fn(...tmpArg);
        }
        return c;
    };
    return c;
}

let carr = a(1233);

console.log(carr(Math.min));