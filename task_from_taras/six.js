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

    this.get = location => this.matrix[location[0]][location[1]] ? this.matrix[location[0]][location[1]] : false;


    this.zip = () => {
    }

    this.unzip = (twoDimArr) => {

    }
}

const arr = [[0, 1, 2],
    [3, 4, 5]];

const instance = new A(arr);

console.log(instance.find(1));

console.log(instance.get([1, 2]))