//Реализуйте класс Worker (Работник), который будет иметь следующие свойства:
//name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).
//Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
//Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days

class Worker{
    name;
    surname;
    rate;
    days;
    getSalary(rate,days){
        console.log("Зарплата работника:"+ (rate*days));
    }
}
const a = new Worker();
a.getSalary(30,150)
console.log(a)
