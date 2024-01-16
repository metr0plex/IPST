//вывести все числа делящиеся только на себя до 100
let a = 0
for (let i = 2; i < 100; i++) {
  for (let j = 2; j <= i; j++){
    if(i%j===0 && i>j){
      break
    }
    else if (j===i){
      a=i
      console.log(a)

    }
  }
}

