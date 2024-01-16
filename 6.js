//вывести числа фибаначи до 200
let a = 0
let b = 1
let c=0
for (let i = 3; i < 200; i++) {
    if(b<100){
        c=a+b
        console.log(c)
        a=b
        b=c
    }
    else{
        break
    }
}
