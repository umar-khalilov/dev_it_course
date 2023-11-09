import { Employee } from './Employee.js';

export class Manager extends Employee {
	constructor(name, surname, age, phone, email, rate, post, department) {
		super(name, surname, age, phone, email, rate, post);
		this.department = department;
	}
}
