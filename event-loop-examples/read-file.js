const { readFile} = require('fs')
console.log('Started a first task')
readFile('./content/first.txt', 'utf-8', (err, result) =>{
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('Completed first task')
})
console.log('Starting new task')
// Результат выполнения:
// Started a first task
// Starting new task
// Hello this is first text file
// Completed first task
// Выполнение кода продолжилось, не дожидаясь завершения операции чтения файла
// Это главная особенность асинхронного кода