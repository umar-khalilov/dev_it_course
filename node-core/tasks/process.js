// 1. Получите список переменных окружения, добавьте в список свою переменную myVariable со значением 'test',
//     выведите в консоль обновленный список env'ов, удалите свою MyVariable и убедитесь что она удалилась
console.log(process.env);
process.env.APP_PORT="MY_ENV";
console.log(process.env);
delete process.env.APP_PORT;
console.log(process.env)

// 2. Написать цепочку выхода из процесса 'exit' и 'beforeExit'. Вызвать и убедиться что они отработают в правильном порядке
