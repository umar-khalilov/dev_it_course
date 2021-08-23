function a(sep, ...other) {
    const c = (...arg) => {
        other.push(...arg);
        if (!arg.length) {
            return other.join(sep);
        }
        return c;
    }
    return c;
}

console.log(a("+")("a", "b", "c")())
console.log(a("+", "0")("1")("2")("3")("4", "5")())