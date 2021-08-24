class Menu {
    menuItem: Array<MenuItem>;
    id: number;

    constructor(menuItem: MenuItem) {
        this.menuItem = [menuItem];
        this.id = uniqueId++
    }
}


