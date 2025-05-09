// writeFileSync и readFileSync, записывают и читают файлы синхронно.
// require - встроенный модуль Node.js, который позволяет использовать другие модули.
// fs - встроенный модуль Node.js, который позволяет работать с файловой системой.
// require(fs) - подключаем модуль fs.
const { writeFileSync, readFileSync } = require('fs');
// Читаем файл first.txt и присваиваем его содержимое переменной first.
const first = readFileSync('./content/first.txt', 'utf-8');
// Читаем файл second.txt и присваиваем его содержимое переменной second.
const second = readFileSync('./content/second.txt', 'utf-8');
// Выводим содержимое переменных first и second в консоль.
console.log(first, second);
// Записываем в файл result-sync.txt строку "Here is the result: first, second".
// { flag: 'a' } - флаг, который позволяет добавлять данные в конец файла, а не перезаписывать его.
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, { flag: 'a' });

// utf-8 - кодировка файла, которая позволяет правильно прочитать текстовый файл.
// writeFileSync - синхронная функция, которая записывает данные в файл. Если файл не существует, он будет создан.