const menuItem = new MenuItem('test', 20, 30, 22, 'orange',
    'lala');
const menu = new Menu(menuItem);
const employee = new Employee('test', 'test', 40, 42023, 42042, '$',
    'cook', '2 years');
const king = new FastFoodRestaurant(menu, employee, 'test', 'King');
//-----------------------------------------------------------------------------
const menuItem2 = new MenuItem('test2', 24, 35, 22, 'orange',
    'lala');
const menu2 = new Menu(menuItem);
const employee2 = new Employee('test2', 'test2', 44, 422023, 142, '$',
    'assistant', '1 years');
const king2 = new FastFoodRestaurant(menu2, employee2, 'test3', 'Burger');
// console.log(king.getEmployeesBySalary(20000, 50000))

const network = new FastFoodNetwork('My burger network', king);
network.addRestaurant(king2)
// network.removeRestaurant(2)
console.log(network)