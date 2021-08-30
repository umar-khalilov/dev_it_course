export default class Employee {
    name;
    surname;
    age;
    phone;
    salary;
    rate;
    post;
    experience;
    id;
    constructor(name, surname, age, phone, salary, rate, post, experience) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.phone = phone;
        this.salary = salary;
        this.rate = rate;
        this.post = post;
        this.experience = experience;
        this.id = generateId().genId();
    }
}
export const generateId = () => {
    let id = 0;
    return {
        genId: () => ++id
    };
};
//# sourceMappingURL=Employee.js.map