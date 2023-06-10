const { createReadStream, createWriteStream } = require('fs');
const { Transform, Duplex, pipeline } = require('stream');
const { stdin, stdout, argv } = require('process');

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

class MyDuplex extends Duplex {
	_read(size) {}

	_write(chunk, encoding, callback) {
		this.push(chunk);
		let progress = '>-()==)>';
		let x = 0;
		let y = 0;

		setInterval(() => {
			stdout.cursorTo(x, y);
			stdout.write(progress);
			x++;
			if (stdout.column - 6 === x) {
				stdout.clearLine(0, () => {});
				x--;
			}
		}, 100);

		callback();
	}
}

const readStream = createReadStream(argv[3], {
	encoding: 'utf8',
});
const writeStream = createWriteStream(argv[4], {
	encoding: 'utf8',
	flags: 'w',
	start: 0,
	end: 90,
});
const transform = new MyTransform({ throttle: argv[2] });
const duplex = new MyDuplex();

pipeline(readStream, transform, duplex, writeStream, err => {
	if (err) {
		throw new Error(err);
	}
});
