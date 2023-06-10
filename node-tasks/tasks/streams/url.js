function getUrlProperty(url, mask) {
    const rep = new URL(url);
    const arr = [];
    for(let key in rep) {
        arr.push(key)
    }
    const keys = arr.map((v) => `({${v}})`).join('|');
    const reg = new RegExp(keys, 'g')
    return mask.replace(reg, (match) => rep[match.slice(1,-1)]);
}

console.log(getUrlProperty('https://example:8080/A?123=321', '{protocol}//{host}?port={port}{search}')); // https://example?port=8080