export default class MenuItem {
    nameMenu;
    weight;
    costs;
    calories;
    permissibleAdditives;
    description;
    constructor(nameMenu, weight, costs, calories, permissibleAdditives, description) {
        this.nameMenu = nameMenu;
        this.weight = weight;
        this.costs = costs;
        this.calories = calories;
        this.permissibleAdditives.push(permissibleAdditives);
        this.description = description;
    }
}
//# sourceMappingURL=MenuItem.js.map