const os = require('os');
// 1) Получить объем общей ОЗУ системы и вывести процентное соотношение свободной ОЗУ в данный момент
console.dir(`Общий ОЗУ системы: ${os.totalmem()} Процентное соотношение: ${((os.freemem() * 100) / os.totalmem()).toFixed(2)}`);

// 2) Вывести полную информацию о системе - Архитектура, Версия, Тип, Информация о логических ядрах и о текущем пользователе
console.dir(`Архитектура: ${os.arch()}! Версия: ${os.version()}! Тип: ${os.type()}! Инфа о юзере: ${JSON.stringify(os.userInfo())}`);

// 1. Написать функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
// Использовать setInterval.
// function printNumbers(from = 0, to = 10) {
//     let counter = from;
//     const intervalId = setInterval(() => {
//         console.log(counter++);
//         if (counter > to) {
//             clearInterval(intervalId);
//         }
//     }, 1000)
// }
//
// printNumbers()

// 2. Переписать первую задачу, используя setTimeout
function printNumbers2(from = 0, to = 10) {
    let counter = from;
    setTimeout(function tick() {
        console.log(counter++);
        counter <= to && setTimeout(tick, 1000);
    }, 1000)
}

printNumbers2()