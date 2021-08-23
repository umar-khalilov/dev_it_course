function A(matrix) {
    this.matrix = matrix;

    this.find = value => {
        for (let i = 0; i < this.matrix.length; i++) {
            let j = this.matrix[i].indexOf(value);
            if (j !== -1) {
                return [i, j];
            }
        }
        return null;
    }

    this.get = location => {
        for (let i = location[0]; ;) {
            if (this.matrix[i][location[1]]) {
                return this.matrix[i][location[1]];
            }
            return null;
        }
    }

    this.zip = function () {
    }

    this.unzip = function () {
    }
}

const arr = [[0, 5, 2],
    [3, 4, 5]];

const instance = new A(arr);

console.log(instance.find(5));

console.log(instance.get([1, 2]))