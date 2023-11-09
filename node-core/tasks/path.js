const path = require('path');

// Написать функцию getPath() которая возвращает абсолютный путь к текущему файлу вместе с его названием
function getPath(){
    return path.resolve(__dirname, __filename);
}
console.log(getPath());

// Написать функцию которая принимает пути, в случае одного параметра просто возвращает развлезолвленный путь,
// двух элементов разлвлезолвленный путь между ними.

function pathResolve(path1,path2 = null){
    if(path2 === null){
        return path.resolve(path1);
    }
    return path.resolve(path1,path2);
}