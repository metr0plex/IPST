//Данна строка 'hello alexandr!' сделать из нее 'hhhhh aaaaaaaaa'

//Разделить строку через пробел(как вариант методом split по пробелом) на массив элементов.
//В каждом элементе продублировать первый символ столько раз сколько в элементе length  (чтоб получилось hhhhh aaaaaaaaa)

let string='hello alexandr!'
let newStrig = string.split('');
let newWord=newStrig[0].repeat(5)+" "+newStrig[6].repeat(9)
console.log(newWord);
