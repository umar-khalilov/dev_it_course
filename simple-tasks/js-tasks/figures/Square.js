import { Figure } from './Figure';

export class Square extends Figure {
	constructor(color, side) {
		super(color);
		this.side = side;
	}

	getArea() {
		return this.side ** 2;
	}

	getPerimeter() {
		return this.side * 4;
	}
}