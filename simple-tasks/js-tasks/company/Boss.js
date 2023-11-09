import { Employee } from './Employee.js';

export class Boss extends Employee {
    #slaves;

    constructor(name, surname, age, phone, email, rate, post) {
        super(name, surname, age, phone, email, rate, post);
        this.#slaves = [];
    }

    addSlave(person) {
        if(!person instanceof Employee) {
            throw new Error('Person must be an instance of the employee');
        }
        this.#slaves.push(person);
    }

    removeSlave(personId) {
        const indexToDelete = this.#slaves.findIndex(slave => slave.id === personId);
        if(!indexToDelete) {
            throw new Error(`There is no such a person with id ${personId}`);
        }
        return this.#slaves.splice(indexToDelete, 1)[0];
    }
}
