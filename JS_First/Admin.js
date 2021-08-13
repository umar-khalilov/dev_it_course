class Admin extends User {
    constructor(name, surname, age) {
        super(name, surname, age);
        this.isAdmin = true;
    }
}

const admin = new Admin("Lolo","Pepe",100);
console.log(admin);
admin.walk();