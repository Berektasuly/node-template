// lodash - библиотека для работы с массивами и объектами
const _ = require('lodash') // _ - имя, которое мы используем для обращения к библиотеке lodash
// [] - это массив, который может содержать другие массивы
const items = [1, [2, [3, [4]]]]
// _.flattenDeep - метод библиотеки lodash, который позволяет "разгладить" вложенные массивы
const newItems = _.flattenDeep(items)
console.log(_.flattenDeep(items))
// console.log(newItems)