const fs = require('fs')
const os = require("os");
const EventEmitter = require('events').EventEmitter;

// 1) Создать класс-наследник от EventEmitter. Прописать логику внутри класса и снаружи(создать метод, который принимает
// в параметры функцию, которая печатает предложение - Выполняется задание). Затем создать объект этого класса и навешать
// другие обработчики чтобы при запуске вашего файла выводились такие предложения
// Перед выполнением
// О выполнении
// Выполняется задание
// Готово с исполнением
// После исполнения
class WithLog extends EventEmitter {
    execute(taskFunc) {
        console.log('Перед выполнением');
        this.emit('begin');
        taskFunc();
        this.emit('end');
        console.log('После выполнения');
    }
}

const withLog = new WithLog();

withLog.on('begin', () => console.log('О задании'));
withLog.on('end', () => console.log('Готово с исполнением'));

withLog.execute(async () => console.log('*** Выполняется задание ***'))

// 2) Создать любой ивент, прочитать любой файл и вывести данные файла на консольку

const readEvent = new EventEmitter();

function readFile() {
    return fs.readFile('arr.js', {encoding: "utf8", flag: 'r'}, (err, data) => {
        if (err) {
            throw new Error(err);
        }
        console.log(data);
    })
}

readEvent.on('readFile', readFile)

readEvent.emit('readFile')


// 3) Создать 3 ивента, при запуске ваших ивентов должны создаться в двух ивентах по одному буферу чисел. Третий ивент
// собирает данные из ваших предыдущих ивентов и оставляет уникальные значения
let firstBuffer;
let secondBuffer;
let thirdBuffer;
const buffer = new EventEmitter();
buffer.on('createBuffer', (data) => {
    firstBuffer = Buffer.from([...data]);
});

buffer.on('createBuffer', (data) => {
    secondBuffer = Buffer.from([...data]);
});

buffer.on('createUniqueBuffer', () => {
    const newBuff = [...secondBuffer, ...firstBuffer];
    thirdBuffer = Buffer.from([...new Set(newBuff)]);
});

buffer.emit('createBuffer', [1, 2, 3, 4, 5, 4, 5, 6, 5]);
buffer.emit('createBuffer', [2, 3, 4, 1, 4, 5]);
buffer.emit('createUniqueBuffer');
console.log(firstBuffer)
console.log(secondBuffer)
console.log(thirdBuffer)

// 4) Создать 2 ивента. Один ивент записывает в файл архитектуру, версию, память, юзера, цпу, а другой считывает эти данные
// и показывает в консольке.
const fileOperation = new EventEmitter();

fileOperation.on('write', (path) => {
    const info = `Архитектура: ${os.arch()}! 
    Версия: ${os.version()}! 
    Общий ОЗУ системы: ${os.totalmem()} 
    CPU: ${JSON.stringify(os.cpus())}!
    Инфа о юзере: ${JSON.stringify(os.userInfo())}`;
    fs.appendFile(path, info, {encoding: 'utf8'}, err => {
        if (err) {
            throw new Error(err);
        }
    })
})

fileOperation.on('read', (path) => {
    fs.readFile(path, {encoding: 'utf8', flag: 'r+'}, (err, data) => {
        if (err) {
            throw new Error(err);
        }
        console.log(data)
    })
})

fileOperation.emit('write', './wrote.txt');
fileOperation.emit('read', './wrote.txt');