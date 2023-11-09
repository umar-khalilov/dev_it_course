import { Figure } from './Figure';

export class Circle extends Figure {
	constructor(color, circleRadius) {
		super(color);
		this.circleRadius = circleRadius;
	}

	getArea() {
		return Math.PI * this.circleRadius ** 2;
	}

	getPerimeter() {
		return Math.PI * this.circleRadius * 2;
	}
}