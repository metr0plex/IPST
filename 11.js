//Напишите функцию, которая возвращает вложенный массив вида [[key, value], [key, value]]
//Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
let array = ({ a: 1, b: 2})
function arrayNew(a) {
    return Object.entries(a)
}
console.log(arrayNew(array))