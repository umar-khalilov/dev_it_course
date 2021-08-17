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
    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.employees = [];
    }

    addBoss(name, surname, age, phone, email, rate, salary, post) {
        return this.employees.push(new Boss(name, surname, age, phone, email, rate, salary, post));
    }

    addManager(name, surname, age, phone, email, rate, salary, post, department) {
        return this.employees.push(new Manager(name, surname, age, phone, email, rate, salary, post, department));
    }

    addSecurity(name, surname, age, phone, email, rate, salary, post) {
        return this.employees.push(new Security(name, surname, age, phone, email, rate, salary, post));
    }

    addProgrammer(name, surname, age, phone, email, rate, salary, post) {
        return this.employees.push(new Programmer(name, surname, age, phone, email, rate, salary, post));
    }

    getBosses() {
        return this.employees.filter(boss => boss.isBoss);
    }

    getEmployees(search) {
        const pattern = new RegExp(search, "i");
        return this.employees.filter(foundItem => pattern.test(foundItem.name) || pattern.test(foundItem.surname) ||
            pattern.test(foundItem.email) || pattern.test(foundItem.phone) || pattern.test(foundItem.salary));
    }

    getEmployee(name) {
        return this.employees.filter(item => item.name === name)
    }

    getEmployeeById(id) {
        return this.employees.find(item => item.id === id);
    }

    removeEmployee(id) {
        return this.employees = this.employees.find(item => item.id !== id);
    }

    getAvgAgeEmployees() {
        return (this.employees.reduce((acc, currItem) => acc + currItem.age, 0) / this.employees.length).toFixed(2);
    }

    getAvgSalaryEmployees() {
        return (this.employees.reduce((acc, currItem) => acc + currItem.salary, 0) / this.employees.length).toFixed(2);
    }

    updateEmployeeById(id, newData) {
        return Object.assign(this.getEmployeeById(id), newData);
    }

    getSubordinates(id) {
        return this.employees.filter(item => item.isBoss && item.id === id);
    }

    toJSON() {
        return JSON.stringify({
            ...this,
        })
    }

    toObject(id) {
        const structureCompany = {};
        return {
            ...this
        }
    }

}

let uniqueId = 1;

class Employee {
    constructor(name, surname, age, phone, email, rate, salary, post) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.phone = phone;
        this.email = email;
        this.rate = rate;
        this.salary = salary;
        this.post = post;
        this.id = uniqueId++;
    }

    toJSON() {
        return JSON.stringify({
            ...this
        })
    }

}

class Manager extends Employee {
    constructor(name, surname, age, phone, email, rate, salary, post, department) {
        super(name, surname, age, phone, email, rate, salary, post)
        this.department = department;
    }
}

class Boss extends Employee {
    constructor(name, surname, age, phone, email, rate, salary, post) {
        super(name, surname, age, phone, email, rate, salary, post);
        this.isBoss = true;
    }
}

class Security extends Employee {
    constructor(name, surname, age, phone, email, rate, salary, post) {
        super(name, surname, age, phone, email, rate, salary, post);
    }
}

class Programmer extends Employee {
    constructor(name, surname, age, phone, email, rate, salary, post) {
        super(name, surname, age, phone, email, rate, salary, post);
    }
}

const devIt = new Company('DevIT', 'ул.Северное шоссе № 4');
devIt.addBoss('Taras', 'Prokofiev', 30, '23r232', 'test3@mail.com', '$',
    1e4, 'Senior');
devIt.addBoss('Vyacheslav', 'Badayev', 30, '2424224', 'test@gmail.com', '$',
    104, 'Team Lead');
devIt.addManager('Anna', 'Valman', 27, '32424', 'test2@gmail.com', '$',
    1e4, 'PM', 'Sales');
devIt.addProgrammer('Umar', 'Khalilov', 27, '23423242', 'ERMASTER100@gmail.com',
    '$', 500, 'JS developer');
devIt.addSecurity('Vlad', 'Antipenko', 25, '4242424', 'test3@gmail.com', '$',
    500, 'Security');

console.log(devIt.getEmployee('Taras'));
console.log(devIt.getEmployees(500));
// console.log(devIt.updateEmployeeById(1, {name: 'lego'}))

console.log(devIt.getSubordinates(1))
console.log(devIt.toObject());

