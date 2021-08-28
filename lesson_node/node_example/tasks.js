const fs = require('fs')
const Buffer = require("buffer");
const EventEmitter = require('events').EventEmitter;

// 1) Создать класс-наследник от EventEmitter. Прописать логику внутри класса и снаружи(создать метод, который принимает
// в параметры функцию, которая печатает предложение - Выполняется задание). Затем создать объект этого класса и навешать
// другие обработчики чтобы при запуске вашего файла выводились такие предложения
// Перед выполнением
// О выполнении
// Выполняется задание
// Готово с исполнением
// После исполнения
// class WithLog extends EventEmitter {
//     execute(taskFunc) {
//         console.log('Перед выполнением')readFile
//         this.emit('begin');
//         taskFunc();
//         this.emit('end');
//         console.log('После выполнения');
//     }
// }
//
// const withLog = new WithLog();
//
// withLog.on('begin', () => console.log('О задании'));
// withLog.on('end', () => console.log('Готово с исполнением'));
//
// withLog.execute(async () => console.log('*** Выполняется задание ***'))

// 2) Создать любой ивент, прочитать любой файл и вывести данные файла на консольку

const readEvent = new EventEmitter();

function readFile(){
    return fs.readFile('arr.js',{encoding:"utf8",flag:'r'},(err ,data)=> {
        if(err){
            throw new Error(err);
        }
        console.log(data);
    })
}

readEvent.on('readFile', readFile)
//
readEvent.emit('readFile')


// 3) Создать 3 ивента, при запуске ваших ивентов должны создаться в двух ивентах по одному буферу чисел. Третий ивент
// собирает данные из ваших предыдущих ивентов и оставляет уникальные значения
let firstBuffer = 0;
let secondBuffer = 0;
const buffer = new EventEmitter();
buffer.on('createBuffer',(data)=>{
firstBuffer = Buffer.from([data])
})

buffer.on('createBuff',(data)=>{
    secondBuffer = Buffer.from([data])
})

buffer.on('createBuff',(data)=>{
    const newBuff = [...secondBuffer,...firstBuffer];
    const uniqueBuffer = Buffer.from([...new Set(newBuff)])
})

// 4) Создать 2 ивента. Один ивент записывает в файл архитектуру, версию, память, юзера, цпу, а другой считывает эти данные
// и показывает в консольке.