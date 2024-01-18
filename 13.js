//Модифицируйте класс Worker из предыдущей задачи следующим образом:
//сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.

class Worker{
    #name;
    #surname;
    #rate;
    #days;
    constructor(name,surname,rate,days) {
        this.#name = name;
        this.#surname = surname;
        this.#days = days;
        this.#rate = rate;
    }
    get getName(){
        return this.#name
    }
    get getSurname(){
        return this.#surname
    }
    get getRate(){
        return this.#rate
    }
    get getDays(){
        return this.#days
    }
    get getSalary(){
        return this.#rate*this.#days
    }}
let a= new Worker('denis',"rakitin",150,30)
console.log(`${a.getName}`)
console.log(`${a.getSurname}`)
console.log(`${a.getRate}`)
console.log(`${a.getDays}`)
console.log(`${a.getSalary}`)