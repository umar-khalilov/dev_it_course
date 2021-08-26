const EventEmitter = require('events');

module.exports = class Logger extends EventEmitter {
    log = message => {
        console.log(message);
        this.emit('someEvent', {id: 1, text: 'some text'});
    }
}

