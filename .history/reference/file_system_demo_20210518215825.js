const fs = require('fs');
const path = require('path');

// Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, error => {
    if(error) throw error;
    console.log('test folder created...');
});

// Create and write to file 
fs.writeFile(path.join(__dirname, '/test', 'yoo.txt'), 'dance bboy dragon! ', error => {
    if(error) throw error;
    console.log('file written to...');

    // file append
    fs.appendFile(path.join(__dirname, '/test', 'yoo.txt'), 'node js is cool!', error => {
        if(error) throw error;
        console.log(' file written to...second time');
    });
});

// Read file
fs.readFile(path.join(__dirname, '/test', 'yoo.txt'), 'utf8', (error, data)=> {
    if(error) throw error;
    console.log(data);
});

// Rename file
fs.rename(path.join(__dirname, '/test', 'yoo.txt'), rename(path.join(__dirname, '/test', 'rekindleYoo.txt'), error => {
    if(error) throw error;
    console.log("File yoo.text gets renamed to...");
}));
