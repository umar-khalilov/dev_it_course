const {
  createCipheriv,
  createDecipheriv,
  scrypt,
  scryptSync,
  randomFill,
} = require("crypto");
const { createReadStream, createWriteStream, readdir, cp } = require("fs");
const { pipeline } = require("stream");
const path = require("path");

//1. Создать функцию которая шифрует указанный папку, и функцию которая расшифровует эту папку

const algorithm = "aes-192-cbc";
const password = "keepitsecret";

function encryptFolder(sourceDir, dirTarget) {
  cp(sourceDir, dirTarget, { recursive: true }, (err) => {
    if (err) {
      throw new Error(err);
    }

    readdir(sourceDir, (err, files) => {
      if (err) {
        throw new Error(err);
      }
      scrypt(password, "mysalt", 24, (err, key) => {
        if (err) {
          throw new Error(err);
        }

        randomFill(new Uint8Array(16), (err, iv) => {
          if (err) {
            throw new Error(err);
          }

          const cipher = createCipheriv(algorithm, key, iv);
          let input, output;
          for (let file of files) {
            input = createReadStream(file);
            output = createWriteStream(path.join(dirTarget, file));
          }
          pipeline(input, cipher, output, (err) => {
            if (err) {
              throw new Error(err);
            }
          });
        });
      });
    });
  });
}

// encryptFolder("./test", "./test2");

function decryptFolder(pathToCipher, pathToDecipher) {
  cp(pathToCipher, pathToDecipher, { recursive: true }, (err) => {
    if (err) {
      throw new Error(err);
    }

    readdir(pathToDecipher, (err, files) => {
      if (err) {
        throw new Error(err);
      }
      scrypt(password, "mysalt", 24, (err, key) => {
        if (err) {
          throw new Error(err);
        }
        
        const iv = Buffer.alloc(16, 0);

        const decipher = createDecipheriv(algorithm, key, iv);

        let input, output;
        for (let file of files) {
          input = createReadStream(file);
          output = createWriteStream(path.join(pathToDecipher, file));
        }
        pipeline(input, decipher, output, (err) => {
          if (err) {
            throw new Error(err);
          }
        });
      });
    });
  });
}

decryptFolder("./test2", "test3");
