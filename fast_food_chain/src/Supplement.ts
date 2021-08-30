export default class Supplement {
    name: string;
    price: number;
    calories: number;

    constructor(name: string, price: number, calories: number) {
        this.name = name;
        this.price = price;
        this.calories = calories;
    }
}