//Реализуйте класс MyString, который будет иметь следующие методы:
//метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде
//метод ucFirst(), который параметром принимает строку, а возвращает эту же строку,сделав ее первую букву заглавной
//метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.
class MyString{
    string;
    constructor(string) {
        this.string = string
    }

    get reverse(){
        return this.string.split("").reverse().join("")
    }
    get ucFirst(){
        return this.string[0].toUpperCase() + this.string.slice(1)
    }
    get ucWords(){
        return this.string.split(' ').map(item => item[0].toUpperCase()+ item.slice(1)).join(' ');//преобразуем строку в массив,
        //далее с функцикй map проходим по каждому элементу и выполняем те же действия что и в прошлой функции
        //затем приводим массив к строке
    }
    set NewString(value){
        this.string = value
    }
}
const mystring = new MyString('')
mystring.NewString = "rakitin denis"
console.log(mystring.reverse)
console.log(mystring.ucFirst)
console.log(mystring.ucWords)


