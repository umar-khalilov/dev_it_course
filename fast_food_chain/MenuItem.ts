class MenuItem {
    nameMenu: string;
    weight: number;
    costs: number;
    calories: number;
    permissibleAdditives: string;
    description: string;

    constructor(nameMenu: string, weight: number, costs: number, calories: number, permissibleAdditives: string, description: string) {
        this.nameMenu = nameMenu;
        this.weight = weight;
        this.costs = costs;
        this.calories = calories;
        this.permissibleAdditives = permissibleAdditives;
        this.description = description;
    }

}

