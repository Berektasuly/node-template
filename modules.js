//Задаем переменную names и присваиваем ей значение, которое импортируем из файла names.js
const names = require('./names')
//Задаем переменную sayHI и присваиваем ей значение, которое импортируем из файла utils.js
const sayHI = require('./utils');
const iper = require('./altsyntax');
 console.log(names);
console.log(sayHI);
console.log(iper);
require('./mind-grenade');
//sayHI('susan');
//sayHI(names.jonh);
//sayHI(names.peter);