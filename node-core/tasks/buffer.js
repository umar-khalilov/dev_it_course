require('buffer')

// 1)Создать буфер заполнить его любимыми значениями.
const favoritesBuf = Buffer.from('lala,lala,lala')
console.log(favoritesBuf.toString())

// 2)Сделать срез данных и скопировать эти данные в другой буфер.

function sliceBuffer(buff, from, to) {
    const buf1 = buff.slice(from, to);
    const buf2 = Buffer.from('HELLO');
    return buf2.copy(buf1);
}

console.log(sliceBuffer(favoritesBuf), 0, 10)

/*
Создать 3 буфера с любыми значениями. Объединить три буфера в один
Достать из него уникальные значения. И создать на основе числовых значений новый буфер*/
const someBuf1 = Buffer.from([1, 3, 1])
const someBuf2 = Buffer.from([3, 2, 1])
const someBuf3 = Buffer.from([4, 4, 5, 6])

const newBuff = [...someBuf3,...someBuf1,...someBuf2];

// const newBuff2 = Buffer.concat([
//     someBuf3,someBuf1,someBuf2
// ]);

console.log(newBuff)

const setNewBuf = new Set(newBuff)

const uniqBuf = Buffer.from([...setNewBuf]);

console.log(uniqBuf)