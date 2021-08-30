function A(matrix) {
    this.matrix = matrix;
}

A.prototype.find = function (value) {
    for (let i = 0; i < this.matrix.length; i++) {
        let j = this.matrix[i].indexOf(value);
        if (j !== -1) {
            return [i, j];
        }
    }
    return null;
}
A.prototype.get = function (location) {
    return this.matrix[location[0]][location[1]] ? this.matrix[location[0]][location[1]] : false;
}

A.prototype.zip = function () {
    const arr = [];
    for (let i = 0; i < this.matrix.length; i++) {
        for (let j = 0; j < this.matrix[i].length; j++) {
            arr.push([i, j, this.matrix[i][j]]);
        }
    }
    return arr;
}

A.prototype.unzip = function (zipArr) {
    const unzipArr = [];
    const matrix = this.matrix.slice();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix.pop(matrix[i][j])
        }
    }
    for (let prop of zipArr) {

    }
    return matrix
}

const arr = [[0, 1, 2],
    [3, 4, 5]];

const arr2 = arr.slice()
console.log(arr2)

const instance = new A(arr);
// console.log(instance.find(1));
// console.log(instance.get([1, 2]));
const zipArr = instance.zip();

// console.log(zipArr);
console.log(instance.unzip(zipArr))
