export default class FastFoodNetwork {
    restaurant;
    nameOfNetwork;
    bigBoss;
    constructor(nameOfNetwork, bigBoss, restaurant) {
        this.nameOfNetwork = nameOfNetwork;
        this.bigBoss = bigBoss;
        this.restaurant.push(restaurant);
    }
    addRestaurant(restaurant) {
        return this.restaurant.push(restaurant);
    }
    removeRestaurant(id) {
        return this.restaurant = this.restaurant.filter(item => item.id !== id);
    }
}
//# sourceMappingURL=FastFoodNetwork.js.map