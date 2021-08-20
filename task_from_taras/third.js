function a() {
    console.log(b.ctxC);
    return function b() {
        console.log(c.ctxB)
        return function c() {
            return {
                ctxC: {name: 'c'},
                ctxB: {name: 'b'}
            }
        }
    }
}

a()()()