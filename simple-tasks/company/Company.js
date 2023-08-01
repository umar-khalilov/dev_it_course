import { Boss } from './Boss.js';
import { Manager } from './Manager.js';
import { Security } from './Security.js';
import { Programmer } from './Programmer.js';
import { createUniqueId } from './Employee.js';

export class Company {
    constructor(name, address) {
        this.id = createUniqueId();
        this.name = name;
        this.address = address;
        this.employees = [];
    }

    addBoss(name, surname, age, phone, email, rate, post) {
        return this.employees.push(new Boss(name, surname, age, phone, email, rate, post));
    }

    addManager(name, surname, age, phone, email, rate, post, department) {
        return this.employees.push(new Manager(name, surname, age, phone, email, rate, post, department));
    }

    addSecurity(name, surname, age, phone, email, rate, post) {
        return this.employees.push(new Security(name, surname, age, phone, email, rate, post));
    }

    addProgrammer(name, surname, age, phone, email, rate, post) {
        return this.employees.push(new Programmer(name, surname, age, phone, email, rate, post));
    }

    getBosses() {
        return this.employees.filter(boss => boss instanceof Boss && boss);
    }

    getEmployees(search) {
        const pattern = new RegExp(search, 'i');
        return this.employees.filter(
            foundItem =>
                pattern.test(foundItem.name) ||
                pattern.test(foundItem.surname) ||
                pattern.test(foundItem.email) ||
                pattern.test(foundItem.phone) ||
                pattern.test(foundItem.rate),
        );
    }

    getEmployeeById(id) {
        return this.employees.find(item => item.id === id);
    }

    removeEmployee(id) {
        return (this.employees = this.employees.find(item => item.id !== id));
    }

    getAvgAgeEmployees() {
        return (this.employees.reduce((acc, currItem) => acc + currItem.age, 0) / this.employees.length).toFixed(2);
    }

    getAvgRateEmployees() {
        return (this.employees.reduce((acc, currItem) => acc + currItem.rate, 0) / this.employees.length).toFixed(2);
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
        });
    }

    toObject(id) {
        const structureCompany = {};
        return {
            ...this,
        };
    }
}
