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

let files = 0, folders = 0;

function buildDirTree(dirPath) {
    fs.readdir(dirPath, {withFileTypes: true}, (err, list) => {
        if (err) {
            throw new Error(err);
        }
        console.log("\x1b[33m", dirPath);
        console.group();
        for (let item of list) {
            if (item.isDirectory()) {
                buildDirTree(path.join(dirPath, item.name))
                ++folders;
            } else {
                console.log("\x1b[32m", item.name)
                ++files;
            }
        }
        console.log(`Total files: ${files}!, folders ${folders}`);
    })
    console.groupEnd()
}

buildDirTree('..')
