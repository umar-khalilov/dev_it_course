// 1. Переопределение функции через декоратор
interface PropertyDescriptor {
    configurable?: boolean;
    enumerable?: boolean;
    value?: any;
    writable?: boolean;

    get?(): any;

    set?(v: any): void;
}

function enumarable(value: boolean) {
    return function log(target: Object, propName: string | Symbol, descriptor: PropertyDescriptor): void {
        descriptor.writable = true;
        descriptor.enumerable = value;
        // return 'get some logs';
    }
}

// 2. Перезаписать констуктор класса
function classDecorator<T extends { new(...args: any[]): {} }>(targetConstructor: T) {
    return class extends targetConstructor {
        age: number = 50;

    }
}

@classDecorator
class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    @enumarable(true)
    print(): string {
        return this.name;
    }
}

const john = new User('John');
const bob = new User('Bob')

console.log(john)
console.log(bob)
console.log(bob.print())
// john.print = function (): string {
//     return `Теперь Джону ${2 * 2} годика`;
// }
console.log(john.print());
// 3. Добавить поле в конструктор класса