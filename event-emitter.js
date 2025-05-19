// EventEmitter - с помощью него можно создавать свои события, слушать и обрабатывать
const EventEmitter = require('events');
// new - создаем новый экземпляр класса EventEmitter
const custumEmitter = new EventEmitter()
custumEmitter.on('response', (data, id) => {            // .on - слушаем событие
    console.log(`data received ${data} with id: ${id}`)
})
custumEmitter.on('response', () => {
    console.log(`some other logic here`)
})
custumEmitter.emit('response', 'john', 34)              // .emit - вызываем событие
// Благодаря тому что emit стоит в конце, мы отправляем событие наверх
// custumEmitter - это как бы объект, его можно назвать хоть nottriggerEmitter
// Важно: emit - это как бы триггер, который вызывает событие, а on - это слушатель, который слушает событие