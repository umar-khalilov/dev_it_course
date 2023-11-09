// 1. Создайте 2 класса в них private элементы которые равняються какомуто числу
//    поменяйте значения private элемента 1 класса на значения 2 класса
//    выведите в консоль изменённый элемент
class Test1 {
    private element1: number;

    constructor(element1: number) {
        this.element1 = element1;
    }
}

class Test2 extends Test1 {
    private element2: number;

    constructor(element2: number = 20) {
        super(element2)
        this.element2 = element2
    }
}

const test1 = new Test1(10);
console.log(test1);
const test2 = new Test2();

console.log(test2)


// 2. Создать понятие абстрактного родительского класса Car
//    От него создать 2 наследника (марки автомобилей) BMW и Mercedes
//    в которых добавить цену модель и разгон до 100 км/ч
abstract class Car {
    protected accelerationTo(speed: number) {
    }
}

class BMW extends Car {
    private model: string;
    private price: number;

    constructor(model: string, price: number) {
        super();
        this.model = model;
        this.price = price
    }

    accelerationTo(speed: number): string {
        super.accelerationTo(speed);
        return `This model ${this.model} of a ${BMW.name} class car accelerated to ${speed} km/h`;
    }
}

class Mercedes extends Car {
    private model: string;
    private price: number;

    constructor(model: string, price: number) {
        super();
        this.model = model;
        this.price = price;
    }

    accelerationTo(speed: number): string {
        super.accelerationTo(speed);
        return `This model ${this.model} of a ${Mercedes.name} class car accelerated to ${speed} km/h`;
    }
}

const bmw = new BMW('X5', 100);
console.log(bmw.accelerationTo(100));

const merin = new Mercedes('X10', 200);
console.log(merin.accelerationTo(100));

// 3. Создайте класс со статическими методами
class StaticMethod {
    static getThings(value: string | number): boolean {
        return true;
    }

    static climbingTo(where: string, height: number): string {
        return `You climbed to ${where} on height ${height} metres above sea level`
    }
}

console.log(StaticMethod.getThings('Get post programmer'));
console.log(StaticMethod.climbingTo('Fujiyama', 3000));