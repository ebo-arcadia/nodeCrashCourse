const http = require('http');

// create server object
http.createServer((request, response) => {
    // write response
    response.write('yoo, whats up?');
    response.end;
}).listen(5000, () => console.log('Server running...'));