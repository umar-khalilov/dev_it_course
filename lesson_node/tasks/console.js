const path = require('path'), fs = require('fs');
// 1. В виде ступенек отступов выводить в консоль разноцветный __dirname
// Использовать console.group(для отступов) и log цвета на своё усмотрение
// посчитать тотал файлов и папок
//
// console.log("This is the outer level");
// console.group();
// console.log("Level 2");
// console.group();
// console.log("Level 3");
// console.groupEnd();
// console.log("Back to level 2");
// console.groupEnd();
// console.log("Back to the outer level");

// console.log("\x1b[31m",__dirname)
let files = 0, folders = 0;

function createDirTree(dirPath) {
    fs.readdir(dirPath, (err, list) => {
        if (err) {
            throw new Error(err);
        }
        list.forEach(item => {
            let filePath = path.join(dirPath, item)
            let stat = fs.statSync(filePath);
            if (stat.isFile()) {
                ++files;
                console.group("\x1b[32m", filePath);

            }
            if (stat.isDirectory()) {
                ++folders;
                console.group("\x1b[33m", filePath)
                createDirTree(filePath)

            }

        })
        console.log(`${files} ${folders}`)
    })

}

createDirTree('../')
