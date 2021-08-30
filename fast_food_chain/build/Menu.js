import { generateId } from "./Employee";
export default class Menu {
    menuItem;
    id;
    constructor(menuItem) {
        this.menuItem.push(menuItem);
        this.id = generateId().genId();
    }
}
//# sourceMappingURL=Menu.js.map