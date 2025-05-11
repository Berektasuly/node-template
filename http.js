
const http = require('http')

const server = http.createServer((req, res, err) => {

    res.write('Welcome to our home page')
    res.end()
})

server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080')
})