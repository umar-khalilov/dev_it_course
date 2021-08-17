/*2. Подсчет площади и периметра геометрических фигур(круг, овал, квадрат, прямоугольник, трапеция и ее разновидности,
    треугольник и его разновидности...  чем больше тем лучше). Базовый класс это Figure.
    У каждой фигуры могут быть общее и ее уникальные свойства но у всех
должны быть реализованы методы area и perimeter и метод toJSON который вернет всю информацию об объекте.
    П.С сделать два вариата реализации с помощью function и class*/
class Figure {
    constructor(color) {
        this.color = color;
    }

    getArea() {
    }

    getPerimeter() {
    }

    toJSON() {
        return JSON.stringify({
            ...this,
            getArea: this.getArea(),
            getPerimeter: this.getPerimeter()
        })
    }
}

class Circle extends Figure {
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

class Ellipse extends Figure {

    constructor(color, semiMajorAxisLength, semiMinorAxisLength) {
        super(color);
        this.semiMajorAxisLength = semiMajorAxisLength;
        this.semiMinorAxisLength = semiMinorAxisLength;
    }

    getArea() {
        return Math.PI * this.semiMajorAxisLength * this.semiMinorAxisLength;
    }

    getPerimeter() {
        return 4 * (Math.PI * this.semiMajorAxisLength * this.semiMinorAxisLength + (this.semiMajorAxisLength - this.semiMinorAxisLength) ** 2)
            / (this.semiMajorAxisLength + this.semiMinorAxisLength);
    }

}

class Square extends Figure {

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

class Rectangle extends Figure {

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

class Trapezoid extends Figure {
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

class Triangle extends Figure {

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

const square = new Square('red', 10);
console.log(square.toJSON())