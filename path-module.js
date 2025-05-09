// Подключаем встроенный модуль path. Этот модуль позволяет работать с путями файловой системы.
const path = require('path');
// path.sep - разделитель путей в файловой системе. Например, в Windows это \, а в Linux и MacOS - /
console.log(path.sep);
// path.join(...) - соединяет части пути в один путь.  
const filePath = path.join('/content', 'subfolder', 'test.txt');
// Выводим полученный путь в консоль.
console.log(filePath);
// path.basename(...) - возвращает имя файла из полного пути.
const base = path.basename(filePath);
// Выводим имя файла в консоль.
console.log(base);
// path.resolve(...) - строит абсолютный путь. __dirname - это глобальная переменная, которая содержит абсолютный путь к текущему файлу.
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
// Выводим абсолютный путь в консоль.
console.log(absolute)