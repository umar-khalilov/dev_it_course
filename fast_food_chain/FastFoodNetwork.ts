class FastFoodNetwork {
    public restaurant: Array<FastFoodRestaurant>;
    nameOfNetwork: string;

    constructor(nameOfNetwork: string, restaurant: FastFoodRestaurant) {
        this.nameOfNetwork = nameOfNetwork;
        this.restaurant.push(restaurant);

    }

    addRestaurant(restaurant: FastFoodRestaurant): number {
        return this.restaurant.push(restaurant);
    }

    removeRestaurant(id) {
        return this.restaurant = this.restaurant.find(item => item.id !== id);
    }
}

