//Данна строка 'DDADSADASDAAADS' вывести все уникальные символы в строке (в ответе должно получиться "DAS")

let message = 'DDADSADASDAAADS'
let index = message.indexOf('DAS')
let count = 0

while(index !== -1) {
    count++
    index = message.indexOf('DAS', index + 1)//продолжение со следующей позиции
}

console.log(count)