// common JS
// const Book = require('./class');
// const learn = require('./learn');

// ES6

// import feature has not introduced to node js yet
// import Book from './class';
// import learn from './learn';

// console.log(learn);
// console.log(learn.language);

// const book = new Book('Beyond Order: more 12 rules for life', 'Jordan Peterson');
// book.reading();

// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('message', data => console.log('Called listener', data));

// logger.log('whats up?');
// logger.log('i can do it');

const http = require('http');
const path = require('path');
const fs = require('fs');
const server = http.createServer((request, response) => {
    // too static!
    // if(request.url === '/') {
    //     fs.readFile(
    //     path.join(__dirname, 'public', 'index.html'), 
    //     (error, content) => {
    //         if(error) throw error;
    //         response.writeHead(200, { 'Content-Type': 'text/html' });
    //         response.end(content);
    //     })
    // }

    // if(request.url === '/api/users') {
    //     fs.readFile(
    //     path.join(__dirname, 'public', 'about.html'), 
    //     (error, content) => {
    //         if(error) throw error;
    //         response.writeHead(200, { 'Content-Type': 'text/html' });
    //         response.end(content);
    //     })

        // build RESTful API / micro-services
        // const users = [
        //     { name: 'John Smith', title: 'economist'},
        //     { name: 'Williams James', title: 'thelogian'}
        // ];
        // response.writeHead(200, { 'Content-Type': 'application/json' });
        // response.end(JSON.stringify(users));
    // }

    // build dynamic url
    let filePath = path.join(__dirname, 'public', request.url === '/' ? 'index.html' : request.url);
    console.log(filePath);
    response.end();
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));