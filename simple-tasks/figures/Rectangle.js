import { Figure } from './Figure';

export class Rectangle extends Figure {
	constructor(color, width, height) {
		super(color);
		this.width = width;
		this.height = height;
	}

	getArea() {
		return this.width * this.height;
	}

	getPerimeter() {
		return 2 * (this.width + this.height);
	}
}
