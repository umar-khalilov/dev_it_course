import FastFoodRestaurant from "./FastFoodRestaurant";

export default class FastFoodNetwork {
    public restaurant: Array<FastFoodRestaurant>;
    nameOfNetwork: string;
    bigBoss: string;

    constructor(nameOfNetwork: string, bigBoss: string, restaurant: FastFoodRestaurant) {
        this.nameOfNetwork = nameOfNetwork;
        this.bigBoss = bigBoss;
        this.restaurant.push(restaurant);
    }

    addRestaurant(restaurant: FastFoodRestaurant): number {
        return this.restaurant.push(restaurant);
    }

    removeRestaurant(id: number) {
        return this.restaurant = this.restaurant.filter(item => item.id !== id);
    }
}

