class FastFoodRestaurant {
    public menu: Array<Menu>;
    public employees: Array<Employee>;
    address: string;
    name: string;
    id: number;

    constructor(menu: Menu, employees: Employee, address: string, name: string) {
        this.menu.push(menu);
        this.employees.push(Object.seal(employees))
        this.address = address;
        this.name = name;
        this.id = uniqueId++;
    }

    addEmployee(name: string, surname: string, age: number, phone: number, salary: number, rate: string, post: string,
                experience: string) {
        this.employees.push(Object.seal(new Employee(name, surname, age, phone, salary, rate, post, experience)));
    }

    addMenu(name: string, weight: number, costs: number, calories: number, permissibleAdditives: string,
            description: string) {
        this.menu.push(new Menu(new MenuItem(name, weight, costs, calories, permissibleAdditives, description)));
    }

    removeEmployee(id: number) {
        this.employees = this.employees.filter(item => item.id !== id)
    }

    removeMenu(id: number) {
        this.menu = this.menu.filter(item => item.id !== id)
    }

    getEmployees() {
        this.employees.forEach(item => item.toString())
    }

    findEmployees(search: string) {
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

    getEmployeesBySalary(min: number = 1, max: number = 1000) {
        return this.employees.filter(item => item.salary >= min && item.salary <= max)
    }

    getEmployeeById(id) {
        return this.employees.find(item => item.id === id);
    }

    updateEmployeeById(id, newData) {
        return Object.assign(this.getEmployeeById(id), newData)
    }

    toJSON() {
        return JSON.stringify({
            ...this
        });
    }

    toObject() {
        return {
            ...this
        }
    }

}



