// Импортируем асинхронные функции readFile и writeFile из модуля fs
const { readFile, writeFile } = require('fs');
// Читаем файл first.txt err для обработки ошибок, return для прерывания выполнения функции в случае ошибки
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {              // Если произойдет ошибка, то:
        console.log(err);   // Выводим ошибку в консоль
        return;             // Прерываем выполнение функции
    }
    const first = result;   // Присваиваем переменной first содержимое файла first.txt
    // Читаем файл second.txt err для обработки ошибок.
    readFile('./content/second.txt', 'utf-8', (err, result1) => {
        if (err) {          // Сверху все расписано)
            console.log(err);
            return;
        }
        const second = result1;
        // Запись в файл result-async.txt содержимого переменных first и second
        writeFile('./content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err, result1) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result1);
            }
        );
    });
});
