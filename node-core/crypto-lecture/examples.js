const crypto = require('crypto');
const algorithm = 'aes-256-ctr';
const password = 'keepitsecret';

function encryptText(text) {
    const cipher = crypto.createCipher(algorithm, password);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

// console.log(encryptText("javascript"));

function decryptText(text) {
    const decipher = crypto.createDecipher(algorithm, password);
    let decrypted = decipher.update(text, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

let encrypted = encryptText("javascript");
// console.log(decryptText(encrypted));


// const secret = 'thisissecret';
// const algorithm = 'sha256';
//
// function getHash(text) {
//     const hash = crypto.createHmac(algorithm, secret)
//         .update(text)
//         .digest('hex');
//     return hash;
// }
//
// console.log(getHash('javascript'));
const mac =  require("crypto").createHmac("sha256", "password").update("If you love node so much why don't you marry it?")
    .digest("hex");
console.log(mac,1)
const hash = require("crypto")
    .createHash("sha256")
    .update("Man oh man do I love node!")
    .digest("hex");
console.log(hash)