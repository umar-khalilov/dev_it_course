/*2. Подсчет площади и периметра геометрических фигур(круг, овал, квадрат, прямоугольник, трапеция и ее разновидности,
    треугольник и его разновидности...  чем больше тем лучше). Базовый класс это Figure.
    У каждой фигуры могут быть общее и ее уникальные свойства но у всех
должны быть реализованы методы area и perimeter и метод toJSON который вернет всю информацию об объекте.
    П.С сделать два вариата реализации с помощью function и class*/
class Figure {
    color = '';

    constructor(color) {
        this.color = color;
    }

    getArea() {
    }

    getPerimeter() {
    }
    toJSON(){
       return  JSON.stringify({
           ...this,
           getArea: this.getArea(),
           getPerimeter: this.getPerimeter()
       })
    }
}

class Circle extends Figure {
    circleRadius;

    constructor(color, circleRadius) {
        super(color);
        this.circleRadius = circleRadius;
    }

    getArea() {
        super.getArea();
        return Math.PI * this.circleRadius ** 2;
    }

    getPerimeter() {
        super.getPerimeter();
        return Math.PI * this.circleRadius * 2;
    }

}

class Ellipse extends Figure {
    semiMajorAxisLength;
    semiMinorAxisLength;

    constructor(color, semiMajorAxisLength, semiMinorAxisLength) {
        super(color);
        this.semiMajorAxisLength = semiMajorAxisLength;
        this.semiMinorAxisLength = semiMinorAxisLength;
    }

    getArea() {
        super.getArea();
        return Math.PI * this.semiMajorAxisLength * this.semiMinorAxisLength;
    }

    getPerimeter() {
        super.getPerimeter();
        return 4 * (Math.PI * this.semiMajorAxisLength * this.semiMinorAxisLength + (this.semiMajorAxisLength - this.semiMinorAxisLength) ** 2)
            / (this.semiMajorAxisLength + this.semiMinorAxisLength);
    }

}

class Square extends Figure {
    side;

    constructor(color, side) {
        super(color);
        this.side = side;
    }

    getArea() {
        super.getArea();
        return this.side ** 2;
    }

    getPerimeter() {
        super.getPerimeter();
        return this.side * 4;
    }

}

class Rectangle extends Figure {
    width;
    height;

    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    getArea() {
        super.getArea();
        return this.width * this.height;
    }

    getPerimeter() {
        super.getPerimeter();
        return 2 * (this.width + this.height);
    }

}

class Trapezoid extends Figure {
    baseA;
    baseB;
    sideC;
    sideD;
    height;

    constructor(color, baseA, baseB, sideC, sideD, height) {
        super(color);
        this.baseA = baseA;
        this.baseB = baseB;
        this.sideC = sideC;
        this.sideD = sideD;
        this.height = height;
    }

    getArea() {
        super.getArea();
        return this.height * ((this.baseA + this.baseB) / 2);
    }

    getPerimeter() {
        super.getPerimeter();
        return this.baseA + this.baseB + this.sideC + this.sideD;
    }

}

class Triangle extends Figure {
    baseB;
    sideA;
    sideC;
    height;

    constructor(color, baseB, sideA, sideC, height) {
        super(color);
        this.baseB = baseB;
        this.sideA = sideA;
        this.sideC = sideC;
        this.height = height;
    }

    getPerimeter() {
        super.getPerimeter();
        return this.sideA + this.sideC + this.baseB;
    }

    getArea() {
        super.getArea();
        return (this.baseB * this.height) / 2;
    }

}

const square = new Square('red', 10);
console.log(square.toJSON())