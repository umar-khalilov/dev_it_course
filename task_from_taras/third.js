function a() {
    const cnt = {
        ctxB: {name: 'b'},
        ctxC: {name: 'c'}
    }
    console.log(cnt)
    return function () {
        console.log({name: 'b', ctx: this})
        return function () {
            console.log({name: 'c', ctx: this})
        }.bind(this)
    }.bind(cnt)
}

a()()();