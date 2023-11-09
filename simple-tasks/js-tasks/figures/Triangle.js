import { Figure } from './Figure';

export class Triangle extends Figure {
	constructor(color, baseB, sideA, sideC, height) {
		super(color);
		this.baseB = baseB;
		this.sideA = sideA;
		this.sideC = sideC;
		this.height = height;
	}

	getPerimeter() {
		return this.sideA + this.sideC + this.baseB;
	}

	getArea() {
		return (this.baseB * this.height) / 2;
	}
}
