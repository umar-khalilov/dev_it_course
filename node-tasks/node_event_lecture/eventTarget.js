const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
}

//Событие: 'newListener'
// eventName <строка> | <symbol> Имя события, которое прослушивается
// listener <Функция> Функция обработчика событий

// EventEmitter Экземпляр будет выполнять свое собственное 'newListener' событие, прежде чем слушатель будет
// добавлен в свой внутренний массив слушателей.
// Слушателям, зарегистрированным для 'newListener' события, передается имя события и ссылка на добавляемого слушателя.
// Тот факт, что событие вызвано прежде, чем добавлен слушатель имеет тонкий, но важный побочный эффект:
// любые дополнительные слушатели зарегистрированные с тем же названием в пределах 'newListener' коллбек
// вставляет перед тем слушателем, который находится в процессе добавления.
const myEmitter = new MyEmitter();
// Only do this once so we don't loop forever
myEmitter.once('newListener', (event, listener) => {
    if (event === 'event') {
        // Insert a new listener in front
        myEmitter.on('event', () => {
            console.log('B');
        });
    }
});
myEmitter.on('event', () => {
    console.log('A');
});
myEmitter.emit('event');
// Prints:
//   B
//   A
// EventTarget И Event объекты являются реализацией Node.js существующих в EventTargetWeb API
// const {EventTarget} = require('events')
// Между Node.js EventTarget и EventTarget веб-API есть два ключевых различия :
// 1)EventTarget экземпляры DOM могут быть иерархическими, в Node.js. нет концепции иерархии и распространения событий.
// То есть событие, отправленное EventTarget объекту, не распространяется через иерархию вложенных целевых объектов,
// каждый из которых может иметь свой собственный набор обработчиков для события.
// 2) В Node.js EventTarget, если прослушиватель событий является асинхронной функцией или возвращает Promise,
//  а возвращенные Promise отклонения, автоматически фиксируется и обрабатывается так же, как и
// прослушиватель, который генерируется синхронно.
// const target = new EventTarget();

function handler1(event) {
    console.log(event.type);  // Prints 'foo'
    event.a = 1;
}

async function handler2(event) {
    console.log(event.type);  // Prints 'foo'
    console.log(event.a);  // Prints 1
}

const handler3 = {
    handleEvent(event) {
        console.log(event.type);  // Prints 'foo'
    }
};

const handler4 = {
    async handleEvent(event) {
        console.log(event.type);  // Prints 'foo'
    }
};

// target.addEventListener('foo', handler1);
// target.addEventListener('foo', handler2);
// target.addEventListener('foo', handler3);
// target.addEventListener('foo', handler4, {once: true});

//Класс: Event
// Event Объект является адаптацией EventWeb API. Экземпляры создаются внутри Node.js.
// event.bubbles
// Тип: <boolean> Всегда возвращается false
// Не используется в Node.js и предоставляется исключительно для полноты картины.

// event.cancelBubble()
// Псевдоним для event.stopPropagation(). Это не используется в Node.js и предоставляется исключительно для полноты картины.

// event.cancelable
// <boolean> True, если событие было создано с этой cancelable опцией.

// event.composed
// Тип: <boolean> Всегда возвращается false.
// Это не используется в Node.js и предоставляется исключительно для полноты картины

// event.composedPath()
// Возвращает массив, содержащий текущую EventTarget как единственную запись или пустой, если событие не отправляется.
// Это не используется в Node.js и предоставляется исключительно для полноты картины.

// event.currentTarget
// Тип: <EventTarget>EventTarget отправляющий событие.
// Псевдоним для event.target.

// event.defaultPrevented
// Тип: <boolean>
// Будет true если cancelable true и псевдоним event.preventDefault().

// event.eventPhase
// Тип: <число> Возвращает, 0 пока событие не отправляется, 2 а отправляется.
// Это не используется в Node.js и предоставляется исключительно для полноты картины

// event.isTrusted
// Тип: <boolean>
{/*"abort" генерируется событие с isTrusted набором для true. Значение есть false во всех остальных случаях.*/
}

// event.preventDefault()
// Устанавливает для defaultPrevented свойства значение, true если cancelable есть true.

// event.returnValue
// Тип: <boolean> Истина, если событие не было отменено.
// Это не используется в Node.js и предоставляется исключительно для полноты картины.

// event.srcElement
// Тип: <EventTarget>EventTarget отправляющий событие.
//     Псевдоним для event.target.

// event.stopImmediatePropagation()
// Останавливает вызов слушателей событий после завершения текущего

// event.stopPropagation()
// Это не используется в Node.js и предоставляется исключительно для полноты картины.

// event.target
// Тип: <EventTarget>EventTarget отправляющий событие.

// event.timeStamp
// Тип: <число>
//     Метка времени в миллисекундах, когда Event объект был создан.

// event.type
// Тип: <строка>
// Идентификатор типа события.

// Класс: EventTarget
// eventTarget.addEventListener(type, listener[, options])
// type <строка>
// listener <Функция> | <EventListener>
//   options <Объект>
//   once <boolean> Когда true, слушатель автоматически удаляется при первом вызове. По умолчанию: false .
//   passive <boolean> Когда true, служит намеком на то, что слушатель не будет вызывать метод Event объекта preventDefault().
//  По умолчанию: false.
//  capture <boolean> Не используется напрямую в Node.js. Добавлено для полноты API. По умолчанию: false.

function handler(event) {
}

const target = new EventTarget();
target.addEventListener('foo', handler, {capture: true});  // first
target.addEventListener('foo', handler, {capture: false}); // second

// Removes the second instance of handler
target.removeEventListener('foo', handler);

// Removes the first instance of handler
target.removeEventListener('foo', handler, {capture: true});

// eventTarget.dispatchEvent(event)
// Возвращает: <boolean>, true если cancelable значение атрибута события равно false или его preventDefault()
//     метод не был вызван, в противном случае false.
// Отправляет в event список обработчиков для event.type.
// Зарегистрированные прослушиватели событий вызываются синхронно в том порядке, в котором они были зарегистрированы.

// eventTarget.removeEventListener(type, listener)
// type <строка>
// listener <Функция> | <EventListener>
//     options <Объект>
//     capture <boolean>
// Удаляет listener из списка обработчиков события type.

// Класс: NodeEventTarget
// Расширяется от: <EventTarget>
// Это NodeEventTarget расширение для Node.js, EventTarget которое имитирует подмножество EventEmitterAPI.

// nodeEventTarget.addListener(type, listener[, options])
// type <строка>
// listener <Функция> | <EventListener>
//     options <Объект>
//     once <boolean>
//     Возвращает: <EventTarget> this
// Специфичное для Node.js расширение для EventTarget класса, эмулирующего эквивалентный EventEmitterAPI. Единственная
// разница между addListener() и addEventListener() заключается в том, что addListener() будет возвращена ссылка на EventTarget.

// nodeEventTarget.eventNames()
// Возвращает: <строка []>
// Специфичное для Node.js расширение EventTarget класса, которое возвращает массив type имен событий,
//     для которых зарегистрированы прослушиватели событий.

// nodeEventTarget.listenerCount(type)
// type <строка>
// Возвращает: <число>
// Специфичное для Node.js расширение EventTarget класса, которое возвращает количество прослушивателей событий,
//     зарегистрированных для type.

// nodeEventTarget.off(type, listener)
// type <строка>
// listener <Функция> | <EventListener>
//     Возвращает: <EventTarget> this
// Специфический для Node.js псевдоним для eventTarget.removeListener().

// nodeEventTarget.on(type, listener[, options])
// type <строка>
// listener <Функция> | <EventListener>
//     options <Объект>
//     once <boolean>
//     Возвращает: <EventTarget> this
// Специфический для Node.js псевдоним для eventTarget.addListener().

// nodeEventTarget.once(type, listener[, options])
// type <строка>
// listener <Функция> | <EventListener>
//     options <Объект>
//     Возвращает: <EventTarget> this
// Специфичное для Node.js расширение EventTarget класса, которое добавляет once слушателя для данного события type.
//     Это эквивалентно вызову on с once параметром, установленным на true.

// nodeEventTarget.removeAllListeners([type])
// type <строка>
// Возвращает: <EventTarget> this
// Специфичное для Node.js расширение EventTarget класса. Если type указано, удаляются все зарегистрированные
// слушатели для type, в противном случае удаляются все зарегистрированные слушатели.

// nodeEventTarget.removeListener(type, listener)
// type <строка>
// listener <Функция> | <EventListener>
//     Возвращает: <EventTarget> this
// Специфичное для Node.js расширение EventTarget класса, которое удаляет listener данный type. Единственная разница между
// removeListener() и removeEventListener()заключается в том, что removeListener()будет возвращена ссылка на EventTarget.