const fs = require('fs');
const os = require('os');
const path = require('path');

// this is the directory that will be searched 
const desktopDir = path.join(os.homedir(), "Desktop");

console.log(`current pwd ${desktopDir}`);


// this will watch for changes to your desktop and then r
function watchDesktop() {
    fs.watch(desktopDir, (eventType, filename) => {
        if (filename.includes('Screen') && eventType === 'rename' && !filename.includes('.Screen')) {
            // console.log(`event type : ${eventType}`);
            // console.log(`filename provided: ${filename}`);
            // console.log(`_________${filename.includes('Screen')}_________`);

            readFiles(desktopDir, filename);
        }
        // else {
        //     console.log('filename not provided');
        // }
    });
}

function readFiles(dirname, filename) {
    fs.readdir(dirname, function (err, filenames) {
        if (err) onError(err);

        console.log(filename)

        // here we find the newly added screenshot 
        let picture = filenames.filter(files => files === filename)[0];  ///[files.length - 1]

        {// if we can't find the picture in the desktop then it has already been stored in ScreenShot folder
            // if (picture === undefined) {
            //     console.log(`picture has been stored in the ScreenShot!!!`)
            // } else {
            //     // 'here is the path we are gonna move into 
            //     fs.renameSync(`${dirname}/${picture}`, `${dirname}/ScreenShots/${picture}`)
            // }
        }

        // if we can't find the picture in the desktop then it has already been stored in ScreenShot folder
        (picture === undefined) ?
            console.log(`has been stored in the ScreenShot!!!`) :
            // 'here is the path we are gonna move into 
            fs.renameSync(`${dirname}/${picture}`, `${dirname}/ScreenShots/${picture}`);

    });
}

watchDesktop();
















































 // console.log(`${dirname}/${picture}`); 

        // this is reading and looking for files that have the png default 
        // fs.readFile(`${dirname}/${picture}`, 'utf-8', function (err, content) {
        //     if (err) {
        //         console.log(err);
        //         return;
        //     }

        //     // console.log(filenames.filter(files => files[files.length - 1] === 'g'));
        //     // onFileContent(filename, content);
        // });

        //// fs.readFile(`${dirname}/Screen Shot 2021-02-22 at 1.09.17 AM`, 'utf-8', function (err, content) {
        //     console.log(content, 'hello'); 
        // }); 













































// fs.renameSync()



// fs.watchFile('message.text', (curr, prev) => {
//     console.log(`the current mtime is: ${curr.mtime}`);
//     console.log(`the previous mtime was: ${prev.mtime}`);
// });








// fs.readFile(desktopDir,(err, files) => {

//     console.log(files)
// })


// fs.readFile(desktopDir, (err, data) => {

//     console.log(data);
// });








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