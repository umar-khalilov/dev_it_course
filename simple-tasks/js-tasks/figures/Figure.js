export class Figure {
	constructor(color) {
		this.color = color;
	}

	getArea() {}

	getPerimeter() {}

	toJSON() {
		return JSON.stringify({
			...this,
			getArea: this.getArea(),
			getPerimeter: this.getPerimeter(),
		});
	}
}
