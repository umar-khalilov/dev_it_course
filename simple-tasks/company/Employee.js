export const createUniqueId = () => {
	const head = Date.now().toString(36);
	const tail = Math.random().toString(36).substring(2);
	return head + tail;
};

export class Employee {
	constructor(name, surname, age, phone, email, rate, post) {
		this.id = createUniqueId();
		this.name = name;
		this.surname = surname;
		this.age = age;
		this.phone = phone;
		this.email = email;
		this.rate = rate;
		this.post = post;
	}
}
