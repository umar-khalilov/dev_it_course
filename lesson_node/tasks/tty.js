const {WriteStream} = require('tty');
// 1. C помощью метода writeStream.cursorTo отрисовать плавающую рыбку фотмата =|(---)>

let x = 0;
let y = 0;
let corpus = '=';
let fish = `(==${corpus})>`;
let fish2 = `<(${corpus}==)`;

let column = process.stdout.columns;
setInterval(() => {
    process.stdout.cursorTo(x, y);
    process.stdout.write(fish)
    // corpus += '=';
    x++;
    if (column - 6 === x) {
        process.stdout.clearLine(0, () => {
        })

        fish = fish2;
        y++;
        x = 0;
        x--
        if (column - 6 === x) {
            x--
        }
    }


    // process.stdout.clearLine()
}, 10)