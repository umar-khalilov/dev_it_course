import MenuItem from './MenuItem'
import {generateId} from "./Employee";

export default class Menu {
    menuItem: Array<MenuItem>;
    id: number;

    constructor(menuItem: MenuItem) {
        this.menuItem.push(menuItem);
        this.id = generateId().genId();
    }
}


