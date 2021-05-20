// const Book = require('./class');
// const learn = require('./learn');

import Book from './class';
import learn from './learn';

console.log(learn);
console.log(learn.language);

const book = new Book('Beyond Order: more 12 rules for life', 'Jordan Peterson');
book.reading();

console.log(__dirname, __filename);