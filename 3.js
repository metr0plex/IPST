//сделать палиндромы из строк "дим" "манек" "рота" чтоб получилось "димид" "манекенам" "ротатор"
let a="дим"
let b="манек"
let c="рота"
let aa=a+a.split("",2).reverse().join("")
let bb=b+b.split("",4).reverse().join("")
let cc=c+c.split("",3).reverse().join("")
console.log(aa)
console.log(bb)
console.log(cc)