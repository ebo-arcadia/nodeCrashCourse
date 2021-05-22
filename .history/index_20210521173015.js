// common JS
// const Book = require('./class');
// const learn = require('./learn');

// ES6

// import feature has not introduced to node js yet
import Book from './class';
import learn from './learn';

console.log(learn);
console.log(learn.language);

const book = new Book('Beyond Order: more 12 rules for life', 'Jordan Peterson');
book.reading();

const Logger = require('./logger');
const logger = new Logger();

logger.on('message', data => console.log('Called listener', data));

logger.log('whats up?');
logger.log('i can do it');

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
    // extension of file
    let extname = path.extname(filePath);
    // initial content type
    let contentType = 'text/html';
    // check extention and set content type
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // read file
    fs.readFile(filePath, (error, content) => {
        if(error) {
            if(error.code = 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (error, content) => {
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.end(content, 'utf8')
                })
            } else {
                // some server error
                response.writeHead(500);
                response.end(`Server Error: ${error.code}`);
            }
        } else {
            // success
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(content, 'utf8');
        }
    })
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));