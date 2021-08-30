import Menu from "./Menu.js";
import MenuItem from "./MenuItem.js";
import Employee from "./Employee.js";
import { generateId } from "./Employee.js";
export default class FastFoodRestaurant {
    menu = [];
    employees = [];
    address;
    name;
    id;
    constructor(menu, employees, address, name) {
        this.menu.push(menu);
        this.employees.push(Object.seal(employees));
        this.address = address;
        this.name = name;
        this.id = generateId().genId();
    }
    addEmployee(name, surname, age, phone, salary, rate, post, experience) {
        this.employees.push(Object.seal(new Employee(name, surname, age, phone, salary, rate, post, experience)));
    }
    addMenu(name, weight, costs, calories, permissibleAdditives, description) {
        this.menu.push(new Menu(new MenuItem(name, weight, costs, calories, permissibleAdditives, description)));
    }
    removeEmployee(id) {
        this.employees = this.employees.filter(item => item.id !== id);
    }
    removeMenu(id) {
        this.menu = this.menu.filter(item => item.id !== id);
    }
    getEmployees() {
        this.employees.forEach(item => item.toString());
    }
    findEmployees(search) {
        const pattern = new RegExp(search, "i");
        return this.employees.filter(foundItem => pattern.test(foundItem.name) || pattern.test(foundItem.surname) ||
            pattern.test(String(foundItem.phone)) || pattern.test(String(foundItem.salary)) ||
            pattern.test(String(foundItem.age)) || pattern.test(foundItem.experience) || pattern.test(String(foundItem.id)));
    }
    getAvgAgeEmployees() {
        return (this.employees.reduce((acc, currItem) => acc + currItem.age, 0) / this.employees.length).toFixed(2);
    }
    getAvgSalaryEmployees() {
        return (this.employees.reduce((acc, currItem) => acc + currItem.salary, 0) / this.employees.length).toFixed(2);
    }
    getEmployeesBySalary(min = 1, max = 1000) {
        return this.employees.filter(item => item.salary >= min && item.salary <= max);
    }
    getEmployeeById(id) {
        return this.employees.find(item => item.id === id);
    }
    updateEmployeeById(id, newData) {
        return Object.assign(this.getEmployeeById(id), newData);
    }
    toJSON() {
        return JSON.stringify({
            ...this
        });
    }
    toObject() {
        return {
            ...this
        };
    }
}
//# sourceMappingURL=FastFoodRestaurant.js.map