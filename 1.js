//Данна строка 'DDADSADASDAAADS' вывести все уникальные символы в строке (в ответе должно получиться "DAS")

let message = 'DDADSADASDAAADS'
let str = new Set(message)

console.log(str)