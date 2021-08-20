"use strict";
class Test1 {
    constructor(element1) {
        this.element1 = element1;
    }
}
class Test2 extends Test1 {
    constructor(element2 = 20) {
        super(element2);
        this.element2 = element2;
    }
}
const test1 = new Test1(10);
console.log(test1);
const test2 = new Test2();
console.log(test2);
class Car {
    accelerationTo(speed) {
    }
}
class BMW extends Car {
    constructor(model, price) {
        super();
        this.model = model;
        this.price = price;
    }
    accelerationTo(speed) {
        super.accelerationTo(speed);
        return `This model ${this.model} of a ${BMW.name} class car accelerated to ${speed} km/h`;
    }
}
class Mercedes extends Car {
    constructor(model, price) {
        super();
        this.model = model;
        this.price = price;
    }
    accelerationTo(speed) {
        super.accelerationTo(speed);
        return `This model ${this.model} of a ${Mercedes.name} class car accelerated to ${speed} km/h`;
    }
}
const bmw = new BMW('X5', 100);
console.log(bmw.accelerationTo(100));
const merin = new Mercedes('X10', 200);
console.log(merin.accelerationTo(100));
class StaticMethod {
    static getThings(value) {
        return true;
    }
    static climbingTo(where, height) {
        return `You climbed to ${where} on height ${height} metres above sea level`;
    }
}
console.log(StaticMethod.getThings('Get post programmer'));
console.log(StaticMethod.climbingTo('Fujiyama', 3000));
