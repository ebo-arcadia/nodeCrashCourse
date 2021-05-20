// console.log('Greeting from node js');

const Book = require('./class');
const learn = require('./learn');
console.log(learn);
console.log(learn.language);

const book = new Book('Jordan Peterson', 'Beyond Order: more 12 rules for life');

book.reading();