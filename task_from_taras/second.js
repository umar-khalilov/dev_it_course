function A(x = null) {
    this.x = x;
    Object.defineProperty(this,'x',{
        get: function get(x){

        },
        set: function (){
            return this.get()
        }

    })
}

let a = new A();
let b = new A();

a.x = 10;
console.log(a.x)

console.log(b.x)