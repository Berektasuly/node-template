const {readFile, writeFile} = require('fs');
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

// (path) - это путь к файлу, который мы хотим прочитать. Его можно указать любым образом. Например: const getText = (nahhexample)
// const getText = (path) => {
// return new Promise - это создание нового промиса, который будет выполнять асинхронную операцию чтения файла
// В синхронном коде вместо промисов используются колбеки, которые передаются в функции и вызываются по завершении операции
// Аргументы можно назвать: успех, ошибка. Не обязательно использовать resolve и reject
//     return new Promise((_resolve, reject) =>{
//         readFile(path, 'utf8', (err, data) => {
//             if (err){
//                 reject(err)                                                    // Если произошла ошибка, вызываем reject с ошибкой
//             }
//             else {
//                 _resolve(data)                                                 // Если чтение файла прошло успешно, вызываем resolve с данными
//             }
//         })
//     })
// }

// getText('./content/first.txt')                                              // Вызов функции getText с указанием пути к файлу
//     .then(result => console.log(result))                                    // Если промис выполнен успешно, выводим результат в консоль
//     .catch(err => console.log(err))                                         // Если произошла ошибка, выводим ее в консоль





const start = async() => {
    try {                                                                      // try - это блок, который позволяет обрабатывать ошибки
        const first = await readFilePromise('./content/first.txt', 'utf8')     // Используем await для ожидания выполнения промиса
        const second = await readFilePromise('./content/second.txt', 'utf-8')
        await writeFilePromise('./content/async-patterns-result.txt',
        `This is awesome: ${first} ${second}`
        )
        console.log(first, second) 
    } catch(error) {
        console.log(error)
    }
}
start()