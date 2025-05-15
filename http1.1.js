// Вызываем встроенный модуль http
const http = require('http')
// Создаем сервер, в качестве аргумента передаем функцию, которая принимает три параметра: req, res и err
const server = http.createServer((req, res, err) => {   // req - запрос, res - ответ, err - ошибка
    res.write('Welcome to our home page')               // Отправляем ответ клиенту
    res.end()                                           // Завершаем ответ клиенту  
})
// listen - слушаем входящие запросы, в качестве аргумента передаем порт, на котором будет работать сервер
server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080')
})