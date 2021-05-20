// console.log('Greeting from node js');

const Book = require('./class');
const learn = require('./learn');
console.log(learn);
console.log(learn.language);

const book = new Book('Beyond Order: more 12 rules for life', 'Jordan Peterson');

book.reading();