const {writeFileSync} = require('fs')
for (let i = 0; i < 10000; i++ ) {
    writeFileSync('./content/big-file.txt', `My password: ${i}\n`, {flag: 'a'})
}
// Если файл не существует, то он создается