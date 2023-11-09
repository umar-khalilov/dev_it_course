const {spawn, fork} = require('child_process');
// 1. В отдельном процессе (на ваш выбор), вывести эту страницу(html код):
// https:  в консоль, в конце показать количество чанков.
function getHtmlChunk(url = '') {
    let countChunk = 0;
    spawn('curl', [url]).stdout.on('data', data => {
            console.log(data.toString());
            countChunk++;
        }
    ).on('close', () => {
        console.log(`Quantity chunks: ${countChunk}`)
    })


}

// getHtmlChunk('https://ru.wikipedia.org/wiki/' +
//     '%D0%9C%D0%BD%D0%BE%D0%B3%D0%BE%D0%BB%D0%B5%D1%82%D0%BD%D0%B8%D0%B5_%D1%81%D0%B5%D1%80%D0%B8%D0%B8_' +
//     '%D0%BA%D0%BE%D0%BC%D0%BC%D0%B5%D0%BC%D0%BE%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D1%85_%D0%BC%D0%B0%D' +
//     '1%80%D0%BE%D0%BA_%D0%A1%D0%A1%D0%A1%D0%A0')
// 2. Запустить процесс через fork(), отправить в него строку: "42jk&43j?djASP-00034u*%K:lj2@#)(*" ,
//отфильтровать и вернуть только спец символы в родительский процесс, который выведет в консоль.

function expireMessageFromParent(target = '', message = '') {
    fork(target).on('message', data => {
        console.log(`Parent got message: ${data}`);
        process.exit(0);
    }).send(message)
}

// expireMessageFromParent('./childTest.js', '42jk&43j?djASP-00034u*%K:lj2@#)(*');
