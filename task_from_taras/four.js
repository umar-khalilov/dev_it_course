function curry(func) {
    return function curried(...other) {
        if (other.length >= func.length) {
            return func.apply(this, other);
        } else {
            return function (...other2) {
                return curried.apply(this, other.concat(other2))
            }
        }
    }
}

function a(sep, a, b, c) {
    return sep + a + b + c
}