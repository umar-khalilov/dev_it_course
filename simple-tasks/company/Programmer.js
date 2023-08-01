import { Employee } from './Employee.js';

export class Programmer extends Employee {
    constructor(name, surname, age, phone, email, rate, post) {
        super(name, surname, age, phone, email, rate, post);
    }
}
