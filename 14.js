//Модифицируйте класс Worker из предыдущей задачи следующим образом:
//для свойства rate и для свойства days сделайте еще и методы-сеттеры.

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
    }
    set rate(value){
        this.#rate = value
    }
    set days(value){
        this.#days = value
    }

}

const worker = new Worker('Denis', 'Rakitin', 150, 30)
console.log(worker.getSalary)
worker.rate = 200
worker.days = 10
console.log(worker.getSalary)

