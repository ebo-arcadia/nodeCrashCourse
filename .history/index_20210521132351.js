// common JS
const Book = require('./class');
const learn = require('./learn');

// ES6

// import feature has not introduced to node js yet
// import Book from './class';
// import learn from './learn';

console.log(learn);
console.log(learn.language);

const book = new Book('Beyond Order: more 12 rules for life', 'Jordan Peterson');
book.reading();

const Logger = require('./logger');
const logger = new Logger();

logger.on('message', data => console.log('Called listener', data));

logger.log('whats up?');
logger.log('i can do it');
