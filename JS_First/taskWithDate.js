"use strict"
/*
Date
1. Написать функцию, которая возвращает текущий день недели, словом по-русски.
2. Написать функцию, которая возвращает количество секунд до завтрашней даты.
3. Написать функцию, которая принимает год и месяц, и возвращает последнее число месяца.*/

const getDayOfWeek = () => {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return days[new Date().getDay()];
}

const amountSecondTillTomorrow = () => {
    const now = new Date();
    const tomorrowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    return Math.round((tomorrowDate - now) / 1000);
}

const getTheLastDayOfTheMonth = (year, month) => new Date(year, month + 1, 0).getDate();

console.log(getDayOfWeek());
console.log(amountSecondTillTomorrow())
console.log(getTheLastDayOfTheMonth(2021, 7));

/*
Задачи на замыкания
1. Написать счётчик замыкания с возможностью инкремента, декремента и ресета,
    который считает каждое действие(инкремента, дек, рес) и выводит общее количество вызовов отдельным методом
2. Написать функцию которая при каждом вызове будет выводить следующее число Фибоначчи
3. Написать функцию, каждый вызов который будет генерировать случайные числа от 1 до 100,
    но так чтобы они не повторялись, иначе null*/
const makeCounter = (count) => () => ({
    increment: () => ++count,
    decrement: () => --count,
    reset: () => count = 0,
})

// const counter = makeCounter(10);

const getSeqFibonacci = () => {
    let number = 1;
    return () => {
        let numberFib = number + number;
        number = number + 1;
        return numberFib
    }
}

let instanceFib = getSeqFibonacci();
console.log(instanceFib())
console.log(instanceFib())

