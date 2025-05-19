var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
    const fileStream = fs.createReadStream('./content/streams.txt', 'utf8')
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
})
.listen(8080)
console.log('Server is running on http://localhost:8080')