import { Figure } from './Figure';

export class Trapezoid extends Figure {
	constructor(color, baseA, baseB, sideC, sideD, height) {
		super(color);
		this.baseA = baseA;
		this.baseB = baseB;
		this.sideC = sideC;
		this.sideD = sideD;
		this.height = height;
	}

	getArea() {
		return this.height * ((this.baseA + this.baseB) / 2);
	}

	getPerimeter() {
		return this.baseA + this.baseB + this.sideC + this.sideD;
	}
}
