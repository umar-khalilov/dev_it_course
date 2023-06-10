import MenuItem from './MenuItem.js'
import {generateId} from "./Employee.js";

export default class Menu {
    menuItem: Array<MenuItem> = [];
    id: number;

    constructor(menuItem: MenuItem) {
        this.menuItem.push(menuItem);
        this.id = generateId().genId();
    }
}


