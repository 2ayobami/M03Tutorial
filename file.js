const fs = require('fs');// Importing File System module

// Reading files

fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});


// Writing Files

fs.writeFile('./docs/blog1.txt', 'Hello World!', () => {
    console.log("File was written");
});


// Working with directories

if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Folder created');
    });
}
else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Folder deleted');
    })
}


// Deleting files

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('File deleted');
    })
}