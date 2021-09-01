const { createReadStream, createWriteStream } = require("fs");
const { Writable, Transform, Duplex, pipeline } = require("stream");

const readStream = createReadStream(process.argv[2], {
  encoding: "utf8",
});

class MyTransform extends Transform {
  constructor({ throttle }) {
    super();
    this.throttle = throttle;
    this.timeshtamp = Date.now();
    this.count = 0;
  }

  _transform(chunk, encoding, callback) {
    const timeout = this.check();

    setTimeout(() => {
      this.push(chunk);

      callback();
      this.update(chunk.length);
    }, timeout);
  }

  check() {
    const diff = Date.now() - this.timeshtamp;

    if (diff > 1000) {
      return 0;
    }

    if (this.count < this.throttle * 1024) {
      return 0;
    }

    return 1000 - diff;
  }

  update(size) {
    this.count += size;
    if (Date.now() - this.timeshtamp > 1000) {
      this.count = 0;
      this.timeshtamp = Date.now();
    }
  }
}

class MyDuplex extends Duplex {}

class MyWritable extends Writable {
  constructor() {
    super();

  }

  _write (chunk, encoding, callback) {
    process.stdout.write(chunk + '\n');
    callback();
  }

}

const myTransform = new MyTransform({ throttle: 1024 });
// const myWrite = new MyWritable(process.argv[3]);

const wstream = createWriteStream(process.argv[3],{encoding:'utf8',flags:'w', start:0,end:90});


console.log(readStream.pipe(myTransform).pipe(wstream));
