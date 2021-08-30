export default class Order {
    numberOfOrder: number;
    customerName: string;
    customerPhone: number;
    status: string = 'Open';
    listOrder: object = {};
    taxRate: number = 0;
    totalCost: number;
    totalCalories: number;
    dateOpeningTime: number;
    dateExecutionTime: number;
    randomPrediction: string;
    totalCostWithTaxRate: number;

    constructor(numberOfOrder: number, customerName: string, customerPhone: number, status: string, listOrder: object,
                taxRate: number, totalCost: number, totalCalories: number, dateOpeningTime: number,
                dateExecutionTime: number, randomPrediction: string, totalCostWithTaxRate: number) {
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