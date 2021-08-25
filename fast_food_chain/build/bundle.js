"use strict";

class Employee {
    constructor(name, surname, age, phone, salary, rate, post, experience) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.phone = phone;
        this.salary = salary;
        this.rate = rate;
        this.post = post;
        this.experience = experience;
        this.id = uniqueId++;
    }
}

let uniqueId = 0;

class FastFoodNetwork {
    constructor(nameOfNetwork, restaurant) {
        this.nameOfNetwork = nameOfNetwork;
        this.restaurant.push(restaurant);
    }

    addRestaurant(restaurant) {
        return this.restaurant.push(restaurant);
    }

    removeRestaurant(id) {
        return this.restaurant = this.restaurant.find(item => item.id !== id);
    }
}

class FastFoodRestaurant {
    constructor(menu, employees, address, name) {
        this.menu.push(menu);
        this.employees.push(Object.seal(employees));
        this.address = address;
        this.name = name;
        this.id = uniqueId++;
    }

    addEmployee(name, surname, age, phone, salary, rate, post, experience) {
        this.employees.push(Object.seal(new Employee(name, surname, age, phone, salary, rate, post, experience)));
    }

    addMenu(name, weight, costs, calories, permissibleAdditives, description) {
        this.menu.push(new Menu(new MenuItem(name, weight, costs, calories, permissibleAdditives, description)));
    }

    removeEmployee(id) {
        this.employees = this.employees.find(item => item.id !== id);
    }

    removeMenu(id) {
        this.menu = this.menu.find(item => item.id !== id);
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

class Menu {
    constructor(menuItem) {
        this.menuItem = [menuItem];
        this.id = uniqueId++;
    }
}

class MenuItem {
    constructor(nameMenu, weight, costs, calories, permissibleAdditives, description) {
        this.nameMenu = nameMenu;
        this.weight = weight;
        this.costs = costs;
        this.calories = calories;
        this.permissibleAdditives = permissibleAdditives;
        this.description = description;
    }
}

const menuItem = new MenuItem('test', 20, 30, 22, 'orange', 'lala');
const menu = new Menu(menuItem);
const employee = new Employee('test', 'test', 40, 42023, 42042, '$', 'cook', '2 years');
const king = new FastFoodRestaurant(menu, employee, 'test', 'King');
const menuItem2 = new MenuItem('test2', 24, 35, 22, 'orange', 'lala');
const menu2 = new Menu(menuItem);
const employee2 = new Employee('test2', 'test2', 44, 422023, 142, '$', 'assistant', '1 years');
const king2 = new FastFoodRestaurant(menu2, employee2, 'test3', 'Burger');
const network = new FastFoodNetwork('My burger network', king);
network.addRestaurant(king2);
console.log(network);
