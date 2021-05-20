const fs = require('fs');
const path = require('path');

// Create folder
fs.mkdir(path.join(__dirname, '/test', {}, error => {
    if(error) throw error;
    console.log('test folder created...');
}))