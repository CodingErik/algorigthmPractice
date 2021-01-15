const fs = require('fs');
const os = require('os');
const path = require('path');
const desktopDir = path.join(os.homedir(), "Desktop");
console.log(desktopDir);



// fs.watchFile('message.text', (curr, prev) => {
//     console.log(`the current mtime is: ${curr.mtime}`);
//     console.log(`the previous mtime was: ${prev.mtime}`);
// });

// this will watch for changes to your desktop and then r
fs.watch(desktopDir, (eventType, filename) => {
    console.log(`event type is: ${eventType}`);
    if (filename) {
        console.log(`filename provided: ${filename}`);
    }
    else {
        console.log('filename not provided');
    }
});


// fs.readFile(desktopDir,(err, files) => {

//     console.log(files)
// })


// fs.readFile(desktopDir, (err, data) => {

//     console.log(data);
// });


function readFiles(dirname) {
    fs.readdir(dirname, function (err, filenames) {
        if (err) {
            onError(err);
            return;
        }
        // filenames.forEach(function (filename) {
        //     fs.readFile(`${dirname}/${filename}`, 'utf-8', function (err, content) {
        //         if (err) {
        //             // onError(err);
        //             console.log(err);
        //             return;
        //         }
        //         console.log(filename, content);
        //         // onFileContent(filename, content);
        //     });
        // });

        // this is reading and looking for files that have the png default 
        fs.readFile(`${dirname}/${filenames[0]}`, 'utf-8', function (err, content) {
            if (err) {
                // onError(err);
                console.log(err);
                return;
            }
            console.log(filenames.filter(files => files[files.length-1] === 'g')); 
            // onFileContent(filename, content);
        });

    });
}

readFiles(desktopDir); 