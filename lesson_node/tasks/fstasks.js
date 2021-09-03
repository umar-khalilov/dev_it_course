const path = require('path');
const fs = require('fs');

// 1. findFile(fileName, dirPath = '__dirname', cb: (err, path|null)=>{})
const findFile = (fileName, dirPath = __dirname, cb) => {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            throw new Error(err);
        }
        for (let file of files) {
            fs.stat(path.join(dirPath, file), (err, status) => {
                if (err) {
                    throw new Error(err);
                }
                const pathDir = path.join(dirPath, file);
                if (status.isDirectory()) {
                    console.log(file);
                    findFile(fileName, pathDir, cb);
                }
                if (status.isFile()) {
                    console.log(file);
                }
                if (file === fileName) {
                    return cb(err, pathDir);
                }
            });
        }
    });
}

// findFile('arr.js', './', (err, data) => {
//     if (err) {
//         throw new Error(err);
//     }
//     console.log(data);
// });


// 2. dirCopy(dirSource, dirTarget, cb:(err)=>{})
function dirCopy(dirSource, dirTarget, cb) {
    fs.cp(dirSource, dirTarget, {recursive: true}, cb);
}

// dirCopy("files/", "files_copy/", (err) => err && throw new Error(err));

// 3. convertCsvToJson(sourcePathCsv, outputPathNewJson, options: {delimiter: ';', encoding: 'utf8'}, cb:(err)=>{})

// 4. megaCalcPath(sourcePath, targetPath, length1, length2, action: '+' | '-', cb:(err, newFilePath)=>{})
function megaCalcPath(sourcePath, targetPath, length1, length2, action = '+', cb) {
    fs.readFile(sourcePath, {encoding: 'utf8', flag: 'r'}, (err, data) => {
        if (err) {
            throw new Error(err);
        }
        const digits = data.match(/\d/g).join('');

        fs.writeFile(targetPath, digits, {encoding: 'utf8', flag: 'w'}, (err, data) => {
            if (err) {
                throw new Error(err);
            }
            fs.readFile(targetPath, {encoding: 'utf8', flag: 'r+'}, (err, data) => {
                if (err) {
                    throw new Error(err);
                }

            })

        })
    })

}

megaCalcPath('./wrote.txt', './digits.txt')