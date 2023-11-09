import { Figure } from './Figure';

export class Ellipse extends Figure {
	constructor(color, semiMajorAxisLength, semiMinorAxisLength) {
		super(color);
		this.semiMajorAxisLength = semiMajorAxisLength;
		this.semiMinorAxisLength = semiMinorAxisLength;
	}

	getArea() {
		return Math.PI * this.semiMajorAxisLength * this.semiMinorAxisLength;
	}

	getPerimeter() {
		return (
			(4 *
				(Math.PI * this.semiMajorAxisLength * this.semiMinorAxisLength +
					(this.semiMajorAxisLength - this.semiMinorAxisLength) ** 2)) /
			(this.semiMajorAxisLength + this.semiMinorAxisLength)
		);
	}
}