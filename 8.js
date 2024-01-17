//отфильтровать выборкой массив и бинарным поиском найти элемент массив:[6,1,7,3,5,8,0,-1,3,2,4,5] искомое число 0
let array=[6,1,7,3,5,8,0,-1,3,2,4,5]
let a = array.sort()
console.log(a)
let item = 0 // искомое число
let start = 0//первый элемент
let end = array.length// последний элемент равен длинне массива
let middle//переменная для хранения среднего элемента
let found = false//указатель
let position = -1// позиция элемента потому что массив начинается с 0
while (found === false && start <= end) {

    middle = Math.floor((start + end) / 2)
    if (array[middle] === item) {
        found = true
        position = middle
    }
    if (item < array[middle]) { // если искомый элемент меньше чем элемент под индексом middle(наша середина)
        end = middle - 1 // то мы в переменную где находится конец массива присваиваем нашу середину и отнимаем 1.
    }
    else { // иначе мы присваиваем середину в переменную где находится начало и прибавляем 1
        start = middle + 1
    }
}
console.log(position)
