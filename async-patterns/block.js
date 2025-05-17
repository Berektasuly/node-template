const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>Wellcome to the home page!</h1>')
    }
    if (req.url === '/about') {
        
        for(let i = 0; i < 1000; i++)  {
            for(let j = 0; j < 1000; j++) {
                console.log(i, j)
            }
        }
        res.end('<h1>This page have information about my life!</h1>')
    }
res.end('<h1>404 Not Found</h1>')
})
server.listen(8080, () => {
    console.log('Server is ready on http://localhost:8080')
})