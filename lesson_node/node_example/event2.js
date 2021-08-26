const Logger = require('./Logger');

const logger = new Logger();

logger.on('someEvent', ({id, text}) => console.log(id, text));

logger.log('User logged!');