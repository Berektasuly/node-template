console.log('Started a first task')
// setTimeout() - это асинхронная функция, которая ставит задачу в очередь на выполнение
setTimeout(() => {
    console.log('Started a second task')
}, 0)
console.log('Started a third task')
// Итог выполнения:
// Started a first task
// Started a third task
// Started a second task