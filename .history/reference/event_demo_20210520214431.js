const EventEmitter = require('events');

// create class
class MyEmitter extends EventEmitter { }

// init object
const newEmitter = new MyEmitter();

// event listener
newEmitter.on('event', () => console.log('event fired'));

// init event 
newEmitter.emit('event');