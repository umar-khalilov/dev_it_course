/*6. Написать приложение "организационная структура компании".
    В компанию можно добавлять работника, удалять, изменять.
    У каждого работника может быть его начальник, у начальника его начальник и тд.
    У каждого начальника может быть несколько подчиненных.(Дерево из начальников и подчиненных)
У каждого сотрудника должны быть обезательны следующие поля: Имя, Фамилия, Возраст, Телефон, Емейл, Ставка, Должность.
    При инициализации можно передать в ввиде обьекта изначальные данные о "организационная структура компании".
    При любом изменении дерева "организационная структура компании" должна генерировать событие onChange
     в коллбек приходит обновленое дерево и старое.
    Должны также быть реализованы методы:
    - добавления/удаления/изменения(можно переназначить начальника) данных работника
- получить список всех начальников
- получить список всех подчиненых
- получить средний возраст
- получить среднюю зарплату
- поиск по фамилии, имени, имейлу, телефону, ставке (например получить все кто получает меньше 5000грн)
- метод toJSON выводит структуру в виде json
- метод toObject возвращает JS обьект компании*/
class Company {
    manager1 = new Manager('lolo', 'pepe', 30, '3242342', 'test@mail.com', 100,
        'PM', 'Project manager');
    manager2 = new Manager('lolo', 'pepe', 30, '3242342', 'test@mail.com', 100,
        'PM', 'Project manager')
    boss;
    programmer;
    security;

    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    toJSON() {
        return JSON.stringify({
            ...this,
        })
    }

    toObject() {
        return {
            ...this
        }
    }
}

let uniqueId = 1;

class CoWorker {
    constructor(name, surname, age, phone, email, rate, post) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.phone = phone;
        this.email = email;
        this.rate = rate;
        this.post = post;
        this.id = uniqueId++;
    }


    toJSON() {
        return JSON.stringify({
            ...this
        })
    }

}

class Manager extends CoWorker {
    constructor(name, surname, age, phone, email, rate, post, department) {
        super(name, surname, age, phone, email, rate, post)
        this.department = department;
    }
}

class Boss extends CoWorker {
    constructor(name, surname, age, phone, email, rate, post) {
        super(name, surname, age, phone, email, rate, post);
        this.isBoss = true;
    }
}

class Security extends CoWorker {
    constructor(name, surname, age, phone, email, rate, post) {
        super(name, surname, age, phone, email, rate, post);
    }
}

class Programmer extends CoWorker {
    constructor(name, surname, age, phone, email, rate, post) {
        super(name, surname, age, phone, email, rate, post);
    }
}

const com = new Company('fewf', 'fwef');

console.log(com.toObject())

console.log(com.manager2)
