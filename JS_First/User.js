class User {
    constructor(name, surname, age, isMale = false) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.isMale = isMale;
    }

    walk() {
        console.log(`I walk`);
    }
}



const user = new User("Umar", "Khalilov", 27, true);
console.log(user);
user.walk();