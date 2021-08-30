import MenuItem from "./MenuItem.js";
import Supplement from "./Supplement.js";
import Menu from "./Menu.js";
import Employee from "./Employee.js";
import FastFoodRestaurant from "./FastFoodRestaurant.js";
import FastFoodNetwork from "./FastFoodNetwork.js";
const menuItem = new MenuItem('test', 20, 30, 22, new Supplement('salad', 30, 30), 'lala');
const menu = new Menu(menuItem);
const employee = new Employee('test', 'test', 40, 42023, 42042, '$', 'cook', '2 years');
const king = new FastFoodRestaurant(menu, employee, 'test', 'King');
const menuItem2 = new MenuItem('test2', 24, 35, 22, new Supplement('cheese', 39, 44), 'lala');
const menu2 = new Menu(menuItem2);
const employee2 = new Employee('test2', 'test2', 44, 422023, 142, '$', 'assistant', '1 years');
const king2 = new FastFoodRestaurant(menu2, employee2, 'test3', 'Burger');
const network = new FastFoodNetwork('My burger network', 'MCDon', king);
network.addRestaurant(king2);
console.log(network);
//# sourceMappingURL=main.js.map