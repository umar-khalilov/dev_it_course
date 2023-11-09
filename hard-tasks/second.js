function Single() {
	let ins = null;
	return (() => {
		if (!ins) {
			ins = this;
		}
		return ins;
	})();
}

const a = new Single();
const b = new Single();

a.x = 10;
console.log(a.x);

console.log(b.x);
