const {createReadStream} = require('fs')
// { highWaterMark: 90000 } - дробим чтение файла по 90кб, используют для того чтобы не загружать сервер
// { encoding: 'utf8' } - выводим в utf8, чтобы не было буферов
const stream = createReadStream('./content/streamb.txt', {highWaterMark: 90000})
stream.on('data', (result) => {
    console.log(result)
})
stream.on('error', (err) => console.log(err))