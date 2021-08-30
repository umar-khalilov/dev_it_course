// 1.Создать кастомный Read Stream запайпить его в кастомный Transform
// Данные с ReadStream сделать выборку уникальных цифр.
const {Readable, Transform, pipeline} = require('stream');
const {stdin, stdout} = require('process');
const {createReadStream, createWriteStream} = require('fs');

const arr = new Array(20).fill(0).map((_, i) => `${i}`);

class MyRead extends Readable {
    constructor(dataToRead) {
        super({objectMode: true}); //encoding: 'UTF-8' => Converts buffer to string
        this.dataToRead = dataToRead;
        this.index = 0;
    }

    _read() {
        if (this.index <= this.dataToRead.length) {
            const chunk = {
                data: this.dataToRead[this.index],
                index: this.index,
            };
            this.push(chunk);
            this.index += 1;
        } else {
            this.push(null);
        }
    }
}

const read = new MyRead(arr);

read.on('data', data => console.log('Stream event "DATA =>', data));

read
    .on('error', err => {
        console.error(err)
    })
    .on('pause', () => {
        console.log('stream flow is paused')
    })
    .on('resume', () => {
        console.log('stream flow is resumed')
    })

read.pause() //flowin = false
setTimeout(() => {
    read.on('data', data => {
        console.log(data)
    })
    read.resume();
    // если бы не .pause() то flowing = true
    // console.log(read.readableFlowing)
    //flowin = true
}, 2000);

class CounterTransform extends Transform {
    _transform(chunk, encoding, callback) {
        try {
            const resultString = `*${chunk.toString('utf8')}*`;
            callback(null, resultString);
        } catch (err) {
            callback(err);
        }
    }
}
