const {
  createGzip,
  createBrotliCompress,
  createUnzip,
  createBrotliDecompress,
} = require("zlib");
const { pipeline } = require("stream");
const { createReadStream, createWriteStream, statSync } = require("fs");

// 1. Создать 3 html файла размерами 1, 2, 3 MB (примерно), сжать и декомпрессировать каждый из них через gzip и brotli,
// Написать функцию вида function compressedInfo(originalFilePath, compressedFilePath), которая показывает размеры исходного и сжатого файла

function compressedInfo(originalFilePath, compressedFilePath) {
  const stat1 = statSync(originalFilePath);
  const size1 = stat1.size;
  console.log(size1);

  const stat2 = statSync(compressedFilePath);
  const size2 = stat2.size;
  console.log(size2);
}

compressedInfo("./html/1.html", "./html/1.html.gz");

// 2. Сделать то же самое что и в первой задаче, но передав в качестве параметров уровень сжатия - сначала самый низкий 1, а затем максимальный
// (9 для gzip, 11 для brotli) и сравнить результаты минимальной компрессии, дефолтной компрессии и максимальной компрессии

function selectCompress(
  type = "",
  sourceFile,
  targetFile,
  levelCompression = 0
) {
  if (type === "gzip") {
    createZipFile(sourceFile, targetFile, levelCompression);
  }
  if (type === "brotli") {
    createBrotliFile(sourceFile, targetFile, levelCompression);
  }
  if (type === "unzip") {
    createUnzipFile(sourceFile, targetFile);
  }
  if (type === "unBrotli") {
    unzipBrotliFile(sourceFile, targetFile);
  }
}

function createZipFile(sourceFile, targetFile, levelCompression = 0) {
  const gzip = createGzip({ level: levelCompression });
  const source = createReadStream(sourceFile);
  const destination = createWriteStream(targetFile);
  pipeline(source, gzip, destination, (err) => {
    if (err) {
      throw new Error(err);
    }
  });
}

function createUnzipFile(sourceFile, targetFile) {
  const unzip = createUnzip();
  const source = createReadStream(sourceFile);
  const destination = createWriteStream(targetFile);
  pipeline(source, unzip, destination, (err) => {
    throw new Error(err);
  });
}

function createBrotliFile(sourceFile, targetFile, levelCompression = 0) {
  const brotli = createBrotliCompress({
    params: {
      [zlib.constants.BROTLI_PARAM_QUALITY]: levelCompression,
    },
  });

  const source = createReadStream(sourceFile);
  const destination = createWriteStream(targetFile);
  pipeline(source, brotli, destination, (err) => {
    throw new Error(err);
  });
}

function unzipBrotliFile(sourceFile, targetFile) {
  const unBrotli = createBrotliDecompress();
  const source = createReadStream(sourceFile);
  const destination = createWriteStream(targetFile);
  pipeline(source, unBrotli, destination, (err) => {
    throw new Error(err);
  });
}
