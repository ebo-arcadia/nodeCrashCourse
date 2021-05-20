const fs = require('fs');
const path = require('path');

// Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, error => {
    if(error) throw error;
    console.log('test folder created...');
});

// Create and write to file 
fs.writeFile(path.join(__dirname, '/test', 'yoo.txt'), 'dance bboy dragon', error => {
    if(error) throw error;
    console.log('file written to...');
});