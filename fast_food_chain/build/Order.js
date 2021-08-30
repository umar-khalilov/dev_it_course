export default class Order {
    numberOfOrder;
    customerName;
    customerPhone;
    status = 'Open';
    listOrder = {};
    taxRate = 0;
    totalCost;
    totalCalories;
    dateOpeningTime;
    dateExecutionTime;
    randomPrediction;
    totalCostWithTaxRate;
    constructor(numberOfOrder, customerName, customerPhone, status, listOrder, taxRate, totalCost, totalCalories, dateOpeningTime, dateExecutionTime, randomPrediction, totalCostWithTaxRate) {
        this.numberOfOrder = numberOfOrder;
        this.customerName = customerName;
        this.customerPhone = customerPhone;
        this.status = status;
        this.listOrder = listOrder;
        this.taxRate = taxRate;
        this.totalCost = totalCost;
        this.totalCalories = totalCalories;
        this.dateOpeningTime = dateOpeningTime;
        this.dateExecutionTime = dateExecutionTime;
        this.randomPrediction = randomPrediction;
        this.totalCostWithTaxRate = totalCostWithTaxRate;
    }
}
//# sourceMappingURL=Order.js.map