class Employee {
    name: string;
    surname: string;
    age: number;
    phone: number;
    salary: number;
    rate: string;
    post: string;
    experience: string;
    id: number;

    constructor(name: string, surname: string, age: number, phone: number, salary: number, rate: string, post: string, experience: string) {
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
