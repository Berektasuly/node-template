// Вызов встроенного модуля os, который предоставляет информацию о системе
const os = require('os');
// os.userInfo() возвращает информацию о текущем пользователе
const user = os.userInfo();
console.log(user);



console.log(`The system uptime is ${os.uptime()} seconds`);
const currentOS = {             // Создаем объект currentOS
    name: os.type(),            // Получаем тип операционной системы
    release: os.release(),      // Получаем версию операционной системы  
    totalMem: os.totalmem(),    // Получаем общий объем памяти
    freeMem: os.freemem(),      // Получаем объем свободной памяти
}
console.log(currentOS)          // Выводим объект currentOS в консольsss