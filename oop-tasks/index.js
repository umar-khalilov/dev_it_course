'use strict';

function User(name, surname, age) {
	if (!new.target) {
		throw new Error('Not target');
	}
	this.name = name;
	this.surname = surname;
	this.age = age;
}

function Admin(name, surname, age) {
	User.call(this, name, surname, age);
	this.isAdmin = true;
}

User.prototype.walk = function () {
	console.log('A am ' + this.name + ' walk');
};
Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;
