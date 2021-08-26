const EventEmitter = require('events').EventEmitter; // Берем соответствующее св-во

const server = new EventEmitter(); // создаем объект с его свойствами-методами

server.on('request', request => request.approved = true); // Подписка

server.on('request', request => console.log(request));

server.emit('request', {from: 'Client'});

server.emit('request', {from: 'Another client'});

//==========================================================================================

/*console.log(server.listeners('request')) // все обработчики

console.log(EventEmitter.listenerCount(server, 'request')) // deprecated

console.log(server.listenerCount('request')) // кол-во обработчиков*/

//===========================================================================================

// server.emit('error'); // throw TypeError
// server.emit('error',new Error()); // throw err

// server.on('error', () => {});
// server.emit('error');

// server.on('error', (error) => console.log(error));
// server.emit('error',new Error('500 error'));

//===============================================================================================
//Утечка памяти
/*function Request() {
    const self = this;
    this.bigData = new Array(1e6).join('*');
    this.send = data => console.log(data);
    this.onError = () => self.send('Sorry we have a problem');
}

setInterval(() => {
    const request = new Request(); // Создается новый объект. В реале может быть запрос от клиента
    console.log(process.memoryUsage().heapUsed); // выводится текущее поедание памяти
}, 200);*/

//=================================================================================================

// const db = new EventEmitter(); // объект источника данных
// Который может посылать какую-то информацию, которую Request в свою очередь может пересылать клиенту

/*function Request() {
    const self = this;
    this.bigData = new Array(1e6).join('*');
    this.send = data => console.log(data);
    db.on('data', info => self.send(info)); // db.emit
}

setInterval(() => {
    const request = new Request(); // Создается новый объект. В реале может быть запрос от клиента
    console.log(process.memoryUsage().heapUsed); // выводится текущее поедание памяти
    // console.log(db)
}, 200);*/

//=====================================================================================================

const db = new EventEmitter(); // объект источника данных
// Который может посылать какую-то информацию, которую Request в свою очередь может пересылать клиенту

function Request() {
    const self = this;
    this.bigData = new Array(1e6).join('*');
    this.send = data => console.log(data);
    const onData = info => self.send(info);
    this.end = () => db.removeListener('data', onData);
    db.on('data', onData);
}

setInterval(() => {
    const request = new Request(); // Создается новый объект. В реале может быть запрос от клиента
    request.end();
    console.log(process.memoryUsage().heapUsed); // выводится текущее поедание памяти
    console.log(db);
}, 200);