const http = require('http');
const server = http.createServer((req, res) => {
    // При каждом запросе мы будем выводить в консоль сообщение
    // Запросом может являеться reset страницы
    console.log('Request event');
    // Отображение 'Hello, World!' в браузере
    res.end('Hello, World!');
})
server.listen(8080, () => {
    console.log('Server is listening on http://localhost:8080');
});