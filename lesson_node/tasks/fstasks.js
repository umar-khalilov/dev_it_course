const path = require('path');
const fs = require('fs');

// 1. findFile(fileName, dirPath = '__dirname', cb: (err, path|null)=>{})
function findFile(fileName, dirPath = '__dirname', cb) {
    let files = fs.readdirSync(dirPath);
    for (let i = 0; i < files.length; i++) {
        fileName = path.join(dirPath, files[i]);
        let stat = fs.lstatSync(fileName);
        if (stat.isDirectory()) {
            findFile(fileName, dirPath); //recurse
        } else if (fileName.indexOf(dirPath) >= 0) {
            console.log('-- found: ', fileName);
        }
    }
    return files.filter((item) => item === fileName)
}

console.log(findFile('arr.js', './', (err, pathName) => {
    if (err) {
        throw new Error(err)
    }
    return pathName
}))


// 2. dirCopy(dirSource, dirTarget, cb:(err)=>{})

// 3. convertCsvToJson(sourcePathCsv, outputPathNewJson, options: {delimiter: ';', encoding: 'utf8'}, cb:(err)=>{})

// 4. megaCalcPath(sourcePath, targetPath, length1, length2, action: '+' | '-', cb:(err, newFilePath)=>{})