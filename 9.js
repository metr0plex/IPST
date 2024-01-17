//Cортируем этот массив методом пузырька [1,2,3,6,8,1,6,3,2,1,0,4]
//и склеиваем с массивом строк ['one', 'two','three']
//решенным заданием будет сичтаться массив [0, 1, 1, 1, 2, 2, 3, 3, 4, 6, 6, 8, 'one', 'two','three']
let firstArray = [1,2,3,6,8,1,6,3,2,1,0,4]
let secondArray = ['one', 'two','three']
let a=0
for (i=0; i<firstArray.length; i++){
    for (j=0; j<(firstArray.length-1); j++){
        if(firstArray[j]>firstArray[j+1]){
            a=firstArray[j]
            firstArray[j]=firstArray[j+1]
            firstArray[j+1]=a
        }
    }
}
console.log(firstArray)
let array=firstArray.concat(secondArray)
console.log(array)