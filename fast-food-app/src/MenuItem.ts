import Supplement from "./Supplement.js";

export default class MenuItem {
    nameMenu: string;
    weight: number;
    costs: number;
    calories: number;
    permissibleAdditives: Array<Supplement> = [];
    description: string;

    constructor(nameMenu: string, weight: number, costs: number, calories: number, permissibleAdditives: Supplement, description: string) {
        this.nameMenu = nameMenu;
        this.weight = weight;
        this.costs = costs;
        this.calories = calories;
        this.permissibleAdditives.push(permissibleAdditives);
        this.description = description;
    }

}

