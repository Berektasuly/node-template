const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
        return
    }
    if (req.url === '/about') {
        res.end('Welcome to our about page')
        return
    }
    res.end(`<h1>Oops!</h1>
    <p> <h2> Something went wrong </h2></p>
    <a href="/">Back home</a>`)
})
server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080')
})