//вывести все элементы из двумерного массива [[1,4,5],[1,3,4],[2,6]]
//добавить все элементы в одномерный массив [1,4,5,1,3,4,2,6] и отсоритровать его
let array = [[1,4,5],[1,3,4],[2,6]]
let a = array[0]
let b = array[1]
let c = array[2]
let finaly = a.concat(b,c).sort()
console.log(finaly)