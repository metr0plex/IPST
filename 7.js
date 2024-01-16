//В переменной month лежит какое-то число из интервала от 1 до 12(можно рандомайзер сделать).
//Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
//В переменной year лежит какой то год например 2022. Определите високосный это год или нет.

let month =Math.floor(Math.random() * (13 - 1) + 1);
console.log(month)
if(month===3||month===4||month===5){
    console.log("Весна")
}
else if(month===6||month===7||month===8){
    console.log("Лето")
}
else if(month===9||month===10||month===11){
    console.log("Осень")
}
else if(month===12||month===1||month===2){
    console.log("Зима")
}

let year =2024
if((year%4===0 && year%100!==0)||year%400===0){
    console.log("Високосный")
}
else{
    console.log("Не високосный")
}